import React from "react";

const Slider = () => {
  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative"
      data-bs-ride="carousel"
    >
      {/* <!-- Indicators --> */}
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 ">
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="1"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="2"
          aria-label="Slide 1"
        ></button>
      </div>

      {/* <!-- Inner --> */}
      <div className="carousel-inner relative w-full overflow-hidden tracking-wider">
        {/* <!-- Single item --> */}
        <div className="carousel-item active relative float-left w-full ">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
            className="block w-full h-[540px] object-cover"
            alt="Motorbike Smoke"
          />
          <div className="carousel-caption top-[30%] left-40 absolute text-center flex flex-col gap-4 items-start">
            <h5 className="text-lg text-gray-200 font-semibold">
              MARVEL UNLIMITED
            </h5>
            <p className="mb-6 text-gray-200 text-4xl font-semibold">
              THE X-MEN'S PIVOTAL ALTERNATE TIMELINES
            </p>
            <a
              className="border-2 border-gray-200 text-white p-2 font-semibold"
              href="/"
            >
              READ NOW!
            </a>
          </div>
        </div>

        {/* <!-- Single item --> */}
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
            className="block w-full h-[540px] object-cover"
            alt="Mountaintop"
          />
          <div className="carousel-caption top-[30%] left-40 absolute text-center flex flex-col gap-4 items-start">
            <h5 className="text-lg text-gray-200 font-semibold">
              WEEKLY RELEASES
            </h5>
            <p className="mb-6 text-gray-200 text-4xl font-semibold">
              NEW COMICS THIS WEEK
            </p>
            <a
              className="border-2 border-gray-200 text-white p-2 font-semibold"
              href="/"
            >
              FULL LIST!
            </a>
          </div>
        </div>

        {/* <!-- Single item --> */}
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
            className="block w-full h-[540px] object-cover"
            alt="Woman Reading a Book"
          />
          <div className="carousel-caption top-[30%] left-40 absolute text-center flex flex-col gap-4 items-start">
            <h5 className="text-lg text-gray-200 font-semibold">THIS MARCH</h5>
            <p className="mb-6 text-gray-200 text-4xl font-semibold">
              THE FINAL BATTLE IN JASON AARON'S AVENGERS RUN
            </p>
            <a
              className="border-2 border-gray-200 text-white p-2 font-semibold"
              href="/"
            >
              READ NOW!
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Inner --> */}

      {/* <!-- Controls --> */}
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
