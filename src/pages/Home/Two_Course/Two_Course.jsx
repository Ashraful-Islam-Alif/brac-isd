import image1 from "./Offline.webp";
import image2 from "./Online2.jpg";

const Two_Course = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 justify-items-center  px-8  ">
      <a
        href="offline"
        className="card grid lg:grid-cols-2 shadow-xl p-4 gap-x-8 gap-y-4"
      >
        <div className="grid gap-x-8 gap-y-4">
          <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold">
            Centre-based Training
          </h2>
          <p>
            At BRAC’s Skills Development Programme, we provide high-quality,
            affordable NTVQF physical training sessions across our various
            centres in Bangladesh. These in-person courses provide hands-on
            learning experiences, allowing young people to engage directly with
            experienced instructors and peers. Our state-of-the-art facilities,
            combined with a practical approach, ensure that participants develop
            the skills and confidence required to succeed in their chosen
            professions
          </p>
          <button className="btn btn-xs sm:btn-sm md:btn-md bg-[#FFA100] text-black hover:text-[#FFA100]  hover:outline hover:outline-2 hover:outline-[#FFA100] hover:bg-white">
            Enroll Now
          </button>
        </div>
        <div className="h-110">
          <img
            src={image1}
            className="w-full h-full object-cover"
          />
        </div>
      </a>
      <a
        href="https://bisdonline.brac.net/"
        className="card grid lg:grid-cols-2 shadow-xl p-4 gap-x-8 gap-y-4"
      >
        <div className="grid gap-x-8 gap-y-4">
          <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold">
            Online Training
          </h2>
          <p>
            BRAC ISD Online is a platform designed to deliver high-quality
            education accessible to learners across the nation. It offers soft
            skills and industry-relevant IT training in partnership with
            reputable organisations, helping professionals, students, and
            enthusiasts remain competitive and enhance their skill sets. With
            expert instructors and interactive learning tools, participants can
            acquire valuable skills to engage in income-generating activities
            and advance their careers.
          </p>
          <button className="btn btn-xs sm:btn-sm md:btn-md bg-[#FFA100] text-black hover:text-[#FFA100]  hover:outline hover:outline-2 hover:outline-[#FFA100] hover:bg-white">
            Enroll Now
          </button>
        </div>
        <div className="h-110">
          <img
            // src="https://i.ibb.co/cQhgrMT/Online-wide-screen.png"
            src={image2}
            className="w-full h-full object-cover"
          />
        </div>
      </a>
    </div>
  );
};

export default Two_Course;
