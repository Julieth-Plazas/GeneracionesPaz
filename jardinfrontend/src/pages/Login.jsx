import Garden1 from "../assets/jardin1.jpg";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-100" data-theme="cupcake">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img
            src={Garden1}
            alt="login"
            className="rounded-full w-64 h-64 md:w-80 md:h-72 p-10"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <h1 className="text-5xl font-bold p-5 text-center">Bienvenidos</h1>
              <label className="label">
                <span className="label-text">Correo electrónico</span>
              </label>
              <input
                type="text"
                placeholder="correo electrónico"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                type="text"
                placeholder="contraseña"
                className="input input-bordered"
              />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  ¿Olvidó su contraseña?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Ingresar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
