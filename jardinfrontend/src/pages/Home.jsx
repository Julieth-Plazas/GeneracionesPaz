import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-100" data-theme="cupcake">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <div className="flex justify-center align-middle p-2">
              <Carousel />
            </div>
            <div className="p-10">
              <h1 className="text-5xl font-bold">Generaciones de Paz</h1>
              <p className="py-6">
                En este acogedor y encantador lugar, nos dedicamos con pasión y
                compromiso a brindarles a los niños y niñas un ambiente
                estimulante y seguro para que puedan crecer, aprender y
                desarrollarse plenamente. Nuestra misión es proporcionarles una
                base sólida para su futuro, fomentando su creatividad,
                curiosidad y habilidades sociales.
              </p>
              <Link to="/conocenos" className="btn btn-primary">
                Conocenoss
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
