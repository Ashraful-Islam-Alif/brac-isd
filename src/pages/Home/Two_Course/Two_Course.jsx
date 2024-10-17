import image1 from "./Offline.webp";
import image2 from "./Online2.webp";

const Two_Course = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 p-4 bg-gray-100">
      <a href="offline" className="card flex flex-col lg:flex-row overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white">
        <div className="flex flex-col justify-between lg:w-1/2 p-6">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Centre-based Training
            </h2>
            <p className="mb-6  leading-relaxed">
              At BRAC's Skills Development Programme, we provide high-quality,
              affordable NTVQF physical training sessions across our various
              centres in Bangladesh. These in-person courses provide hands-on
              learning experiences, allowing young people to engage directly with
              experienced instructors and peers. Our state-of-the-art facilities,
              combined with a practical approach, ensure that participants develop
              the skills and confidence required to succeed in their chosen
              professions.
            </p>
          </div>
          <button className="btn px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Enroll Now
          </button>
        </div>
        <div className="lg:w-1/2 relative overflow-hidden">
          <img
            src={image1}
            alt="Centre-based Training"
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </a>
      <a href="https://bisdonline.brac.net/" className="card flex flex-col lg:flex-row overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white">
        <div className="flex flex-col justify-between lg:w-1/2 p-6">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ">
              Online Training
            </h2>
            <p className="mb-6  leading-relaxed">
              BRAC ISD Online is a platform designed to deliver high-quality
              education accessible to learners across the nation. It offers soft
              skills and industry-relevant IT training in partnership with
              reputable organisations, helping professionals, students, and
              enthusiasts remain competitive and enhance their skill sets. With
              expert instructors and interactive learning tools, participants can
              acquire valuable skills to engage in income-generating activities
              and advance their careers.
            </p>
          </div>
          <button className="btn px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Enroll Now
          </button>
        </div>
        <div className="lg:w-1/2 relative overflow-hidden">
          <img
            src={image2}
            alt="Online Training"
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </a>
    </div>
  );
};

export default Two_Course;