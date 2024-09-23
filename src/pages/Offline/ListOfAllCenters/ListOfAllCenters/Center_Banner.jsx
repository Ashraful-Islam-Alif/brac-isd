

const Center_Banner = () => {
  return (
    <div>
      <div
        className="hero "
        style={{
          backgroundImage: "url(https://i.ibb.co/VvrvQ9P/list-of-center.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              List Of Centres
            </h2>
            <hr className="mx-12 md:mx-20 lg:mx-50 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center_Banner;
