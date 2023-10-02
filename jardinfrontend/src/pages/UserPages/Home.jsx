import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import { Link } from "react-router-dom";
import Post from "../../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [postNumber, setpostNumber] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:4000/api/post");
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <div
        className="hero min-h-screen bg-base-100 shadow-inner border-t"
        data-theme="cupcake"
      >
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <div className="flex justify-center align-middle p-2">
              <Carousel />
            </div>
            <div className="p-10">
              <h1 className="text-5xl font-bold">Generaciones de Paz</h1>
              <p className="py-6 text-justify">
                El jardín infantil “GENERACIONES DE PAZ” fundamenta su formación
                en principios y valores que privilegian el afecto, el respeto,
                la tolerancia, la espiritualidad y un proceso cognitivo
                constructivista en el entendido que el ser humano se forma y
                construye su futuro desde su nacimiento, en la medida que los
                ambientes donde crece sean favorables y le permitan potenciar se
                en todas sus etapas sin forzar procesos.
                <br /> La formación en valores desde los primeros años de vida,
                permite en el niño y la niña el desarrollo autónomo de su
                identidad, de esta manera a partir de la experiencia cotidiana
                comprende que cada una de sus acciones produce circunstancias
                asertivas o negativas que necesariamente deben ser asumidas
              </p>
              <Link to="/nosotros" className="btn btn-primary">
                Conocenos
              </Link>
            </div>
          </div>
        </div>
      </div>
      {posts.slice(postNumber * 1 - 1, postNumber * 1).length > 0 && (
        <>
          {posts.slice(postNumber * 1 - 1, postNumber * 1).map((post) => (
            <Post
              key={post._is}
              image={post.image}
              title={post.title}
              description={post.description}
              date={post.date}
            />
          ))}

          <div className="flex md:col-span-2 lg:col-span-3 justify-center content-center p-5 bg-base-100" data-theme="cupcake">
            <div className="join" data-theme="corporate">
              <button
                className="join-item btn"
                onClick={() => {
                  postNumber > 1 && setpostNumber(postNumber - 1);
                }}
              >
                «
              </button>
              <button
                className="join-item btn"
                onClick={() => {
                  posts.length > postNumber &&
                    setpostNumber(postNumber + 1);
                }}
              >
                »
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
