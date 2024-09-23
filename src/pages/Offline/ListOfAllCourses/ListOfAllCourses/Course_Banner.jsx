
const Course_Banner = () => {
  return (
    <div>
      <div
        className="hero mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/8dhXQ88/office-desk-table-with-pencils-supplies.jpg)",
          width: "w-full",
          height: "320px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
              List Of Courses
            </h2>
            <hr className="mx-4 md:mx-8 lg:mx-16 mt-4 border-t-8 font-bold border-[#FFA100]"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course_Banner;
