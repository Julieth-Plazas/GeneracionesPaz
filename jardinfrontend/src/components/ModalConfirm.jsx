import React, { useState } from "react";

const Modal = ({ data, type }) => {
  const [isToast, setIsToast] = useState(false);
  const [responseError, setResponseError] = useState("");

  async function deleteElement() {
    if (type === "teachers") {
      const response = await fetch(`http://localhost:4000/api/user/${data}`, {
        method: "DELETE",
      });
      const dataResponse = await response.json();
      if (dataResponse.message === "User deleted") {
        window.location.reload(true);
      }
    }

    if (type === "gallery") {
      const response = await fetch(
        `http://localhost:4000/api/gallery/${data}`,
        {
          method: "DELETE",
        }
      );
      const dataResponse = await response.json();
      if (dataResponse.message === "Gallery deleted") {
        window.location.reload(true);
      } else {
        setIsToast(true);
        setResponseError(dataResponse.message);
        setTimeout(() => {
          setIsToast(false);
        }, 3000);
      }
    }

    if (type === "post") {
      const response = await fetch(
        `http://localhost:4000/api/post/${data}`,
        {
          method: "DELETE",
        }
      );
      const dataResponse = await response.json();
      if (dataResponse.message === "Post deleted") {
        window.location.reload(true);
      } else {
        setIsToast(true);
        setResponseError(dataResponse.message);
        setTimeout(() => {
          setIsToast(false);
        }, 3000);
      }
    }
  }

  return (
    <>
      <dialog
        id="deleteModal"
        className="modal modal-bottom sm:modal-middle"
        data-theme="cupcake"
      >
        <form method="dialog" className="modal-box">
          {type === "teachers" && (
            <>
              <h3 className="font-bold text-lg">Borrar docente</h3>
              <p className="py-4 text-center">
                ¿Esta seguro que desea eliminar al docente?
              </p>
            </>
          )}
          {type === "gallery" && (
            <>
              <h3 className="font-bold text-lg">Borrar galeria</h3>
              <p className="py-4 text-center">
                ¿Esta seguro que desea eliminar la galeria?
              </p>
            </>
          )}
          {type === "post" && (
            <>
              <h3 className="font-bold text-lg">Borrar publicación</h3>
              <p className="py-4 text-center">
                ¿Esta seguro que desea eliminar la publicación?
              </p>
            </>
          )}
          <div className="modal-action">
            <button className="btn btn-primary" onClick={() => deleteElement()}>
              Confirmar
            </button>
            <button className="btn">Cancelar</button>
          </div>
        </form>
      </dialog>
      {isToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-info">
            <span>{responseError}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
