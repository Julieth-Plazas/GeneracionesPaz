import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Gallery from "../../assets/gallery.png";
import { useNavigate } from "react-router-dom";

const CreateGalleries = () => {
  const [responseError, setResponseError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function createGallery(dataForm) {
    const images = [];
    setResponseError("");
    setLoading(true);
    if (dataForm.images[0]) {
      for (let index = 0; index < dataForm.images.length; index++) {
        const image = new FormData();
        image.append("file", dataForm.images[index]);
        image.append("upload_preset", "kindergarden");
        const responseCloud = await fetch(
          "https://api.cloudinary.com/v1_1/dbhl95fyu/image/upload",
          {
            method: "POST",
            body: image,
          }
        );
        const imageUrl = await responseCloud.json();
        if (imageUrl.error) {
          setLoading(false);
          setResponseError(imageUrl.error.message);
          return;
        }
        images.push(imageUrl.secure_url);
      }
      dataForm.images = images;
      const response = await fetch("http://localhost:4000/api/gallery", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      const data = await response.json();

      if (data.message === "Gallery created") {
        navigate("/admin/ver-galerias");
      } else {
        setLoading(false);
        setResponseError(data.message);
      }
    }
  }

  return (
    <div
      className="hero min-h-screen min-w-fit bg-base-100 shadow-inner border-t p-20"
      data-theme="cupcake"
    >
      <div className="hero-content flex-col lg:flex-row md:flex-col-reverse">
        <div className="card flex-shrink-0 max-w-lg shadow-2xl bg-base-200">
          <form
            className="card-body grid grid-cols-4"
            onSubmit={handleSubmit(createGallery)}
          >
            <h1 className="text-3xl lg:text-4xl font-bold col-span-4 text-center">
              Crear galeria
            </h1>
            <div className="form-control col-span-4">
              <label className="label">
                <span className="label-text">Título</span>
              </label>
              <input
                type="text"
                placeholder="título"
                name="title"
                className="input input-bordered"
                {...register("title", {
                  required: true,
                })}
              />
              {errors.title?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>Este campo es requerido.</small>
                </div>
              )}
            </div>
            <div className="form-control col-span-4">
              <label className="label">
                <span className="label-text">Imagenes</span>
              </label>
              <input
                type="file"
                accept="image/*"
                name="images"
                className="file-input file-input-bordered file-input-md w-full max-w-xs"
                multiple
                {...register("images", {
                  required: true,
                })}
              />
              {errors.images?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>Este campo es requerido.</small>
                </div>
              )}
            </div>
            <div className="form-control col-span-4">
              <label className="label">
                <span className="label-text">Descripción</span>
              </label>
              <textarea
                type="text"
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
                name="description"
                className="input input-bordered h-28 p-2"
                style={{ resize: "none" }}
                {...register("description", {
                  required: true,
                })}
              />
              {errors.description?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>Este campo es requerido.</small>
                </div>
              )}
            </div>
            {loading === false ? (
              <div className="form-control mt-6 col-span-4">
                <button className="btn btn-primary">Crear</button>
              </div>
            ) : (
              <div className="mt-6 col-span-4 content-center text-center justify-center">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            )}
            {responseError && (
              <div className="text-red-600 col-span-2 text-center">
                <small>{responseError}</small>
              </div>
            )}
          </form>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <img
          src={Gallery}
          className="max-w-xs md:max-w-sm rounded-lg p-5 shadow-2xl w-full bg-transparent"
          alt="galeria"
        />
      </div>
    </div>
  );
};

export default CreateGalleries;
