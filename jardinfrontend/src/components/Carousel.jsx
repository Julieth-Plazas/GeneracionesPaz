import Garden1 from '../assets/jardin1.jpg'
import Garden2 from '../assets/jardin2.jpg'
import Garden3 from '../assets/jardin3.jpg'
import Garden4 from '../assets/jardin4.jpg'

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-lg rounded-box w-full">
      <div className="carousel-item h-96">
        <img
          src={Garden1}
          alt='carrousel'
          className="rounded-box"
        />
      </div>
      <div className="carousel-item h-96">
        <img
          src={Garden2}
          alt='carrousel'
          className="rounded-box"
        />
      </div>
      <div className="carousel-item h-96">
        <img
          src={Garden3}
          alt='carrousel'
          className="rounded-box"
        />
      </div>
      <div className="carousel-item h-96">
        <img
          src={Garden4}
          alt='carrousel'
          className="rounded-box"
        />
      </div>
      <div className="carousel-item h-96">
        <img
          src={Garden1}
          alt='carrousel'
          className="rounded-box"
        />
      </div>
      <div className="carousel-item h-96">
        <img
          src={Garden2}
          alt='carrousel'
          className="rounded-box"
        />
      </div>
      <div className="carousel-item h-96">
        <img
          src={Garden3}
          alt='carrousel'
          className="rounded-box"
        />
      </div>
      <div className="carousel-item h-96">
        <img
          src={Garden4}
          alt='carrousel'
          className="rounded-box"
        />
      </div>
    </div>
  );
};

export default Carousel;
