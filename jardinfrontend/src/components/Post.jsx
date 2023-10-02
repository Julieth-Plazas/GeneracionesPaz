import React from "react";

const Post = ({ image, title, description, date }) => {
  return (
    <div className="hero min-h-screen bg-base-100" data-theme="cupcake">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="max-w-xs rounded-lg shadow-2xl"
          alt="post"
        />
        <div>
          <h1 className="text-5xl font-bold">
            {title} <div className="badge badge-secondary bg-green-300 border-green-300">{date}</div>
          </h1>
          <p className="py-6">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
