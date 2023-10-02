import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Posts from "../../assets/create-content.png";
import { useNavigate } from "react-router-dom";

const CreatePosts = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [responseError, setResponseError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function createPost(dataForm) {
    setResponseError("");
    setLoading(true);
    if (dataForm.image[0]) {
      const image = new FormData();
      image.append("file", dataForm.image[0]);
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
      } else {
        dataForm.image = imageUrl.secure_url;
      }

      dataForm.date = new Date()
      dataForm.date = dataForm.date.toLocaleDateString();

      const response = await fetch("http://localhost:4000/api/post", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      const data = await response.json();

      if (data.message === "Post created") {
        navigate("/admin/ver-posts");
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
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={Posts}
          className="max-w-xs md:max-w-sm rounded-lg p-5 shadow-2xl w-full bg-transparent"
          alt="galeria"
        />
        <div className="divider lg:divider-horizontal"></div>
        <div className="card flex-shrink-0 max-w-lg shadow-2xl bg-base-200">
          <form
            className="card-body grid grid-cols-4"
            onSubmit={handleSubmit(createPost)}
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
                <span className="label-text">Imagen</span>
              </label>
              <input
                type="file"
                accept="image/*"
                name="image"
                className="file-input file-input-bordered file-input-md w-full max-w-xs"
                {...register("image", {
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
      </div>
    </div>
  );
};

export default CreatePosts;
