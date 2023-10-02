import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import { Link } from "react-router-dom";
import Delete from "../../assets/gallery-delete.png";

const AdminGalleries = () => {
  const [galleries, setGalleries] = useState([]);
  const [responseError, setResponseError] = useState("");
  const [isToast, setIsToast] = useState(false);
  const [page, setPage] = useState(1);

  async function deleteGallery(galleryId) {
    const response = await fetch(
      `http://localhost:4000/api/gallery/${galleryId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    if (data.message === "Gallery deleted") {
      window.location.reload(true);
    } else {
      setIsToast(true);
      setResponseError(data.message);
      setTimeout(() => {
        setIsToast(false);
      }, 3000);
    }
  }

  useEffect(() => {
    async function galleries() {
      const response = await fetch("http://localhost:4000/api/gallery");
      const data = await response.json();
      setGalleries(data);
      console.log(data);
    }
    galleries();
  }, []);

  return (
    <div
      className="hero min-h-screen bg-base-100 border-t shadow-inner"
      data-theme="cupcake"
    >
      <div className="hero-content text-center">
        {galleries.slice(page * 6 - 6, page * 6).length > 0 ? (
          <>
            <div className="grid grid-cols-1 content-center gap-10 md:grid-cols-2 lg:grid-cols-3 p-5">
              {galleries.slice(page * 6 - 6, page * 6).map((gallery) => (
                <div
                  className="bg-white p-5 shadow-lg rounded-lg overflow-hidden"
                  key={gallery._id}
                >
                  <Carousel id={gallery._id} type="gallery" images={gallery.images} />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {gallery.title}
                    </h2>
                    <p className="text-gray-600">{gallery.description}</p>
                    <Link
                      className="btn btn-sm btn-ghost tooltip normal-case mt-5"
                      data-tip="Borrar galeria"
                      onClick={() => deleteGallery(gallery._id)}
                    >
                      <img src={Delete} alt="icon" width={32} />
                    </Link>
                  </div>
                </div>
              ))}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 justify-center content-center p-5">
                <div className="join" data-theme="corporate">
                  <button
                    className="join-item btn"
                    onClick={() => {
                      page > 1 && setPage(page - 1);
                    }}
                  >
                    «
                  </button>
                  <button className="join-item btn">Página {page}</button>
                  <button
                    className="join-item btn"
                    onClick={() => {
                      galleries.slice(page * 6 - 6, page * 6).length > 0 &&
                        setPage(page + 1);
                    }}
                  >
                    »
                  </button>
                </div>
              </div>
            </div>
            {isToast && (
              <div className="toast toast-top toast-end">
                <div className="alert alert-info">
                  <span>{responseError}</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="hero min-h-screen">
            <div className="hero-content text-center flex-col">
              <div className="max-w-md">
                <h1 className="text-3xl font-bold py-10">
                  No hay galerias para ver
                </h1>
              </div>
              <div className="flex justify-center content-center p-5">
                <div className="join" data-theme="corporate">
                  <button
                    className="join-item btn"
                    onClick={() => {
                      page > 1 && setPage(page - 1);
                    }}
                  >
                    «
                  </button>
                  <button className="join-item btn">Página {page}</button>
                  <button
                    className="join-item btn"
                    onClick={() => {
                      galleries.slice(page * 6 - 6, page * 6).length > 0 &&
                        setPage(page + 1);
                    }}
                  >
                    »
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminGalleries;
