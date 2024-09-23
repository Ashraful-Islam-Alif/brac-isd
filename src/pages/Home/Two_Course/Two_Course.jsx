<<<<<<< HEAD
const Two_Course = () => {
    return (
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 justify-items-center mt-8 px-8 py-4 ">
        <a href="https://bisd.netlify.app/" target="_blank" className="card grid lg:grid-cols-2 shadow-xl p-4 gap-x-8 gap-y-4">
          <div className="grid gap-x-8 gap-y-4">
            <h2 className="card-title">Brac ISD Offline</h2>
            <h2 className="text-5xl font-semibold">Center Based Training</h2>
            <p>
              At BRAC Skills Development Programme, we provide high-quality,
              affordable NTVQF physical training sessions at our various centers
              across Bangladesh. These offline courses offer hands-on learning
              experiences, enabling youth to engage directly with experienced
              instructors and peers. Our state-of-the-art facilities and practical
              approach ensure that participants gain the skills and confidence
              needed to excel in their chosen fields.
            </p>
            <button className="btn btn-primary">Enroll Now</button>
          </div>
          <div className="h-128">
            <img
              src="https://i.ibb.co/M7Ns49Y/skill.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </a>
        <a href="https://bisdonline.brac.net/" target="_blank" className="card grid lg:grid-cols-2 shadow-xl p-4 gap-x-8 gap-y-4">
          <div className="grid gap-x-8 gap-y-4">
            <h2 className="card-title">BRAC ISD Online</h2>
            <h2 className="text-5xl font-semibold">Online Training</h2>
            <p>
              Our online and hybrid training programs bring the same high standard
              of education to the digital realm, offering flexibility and
              convenience. Whether entirely online or a mix of online and
              in-person sessions, these courses cater to the diverse needs of
              today is youth. With expert instructors and interactive platforms,
              participants can acquire valuable skills through a blend of virtual
              and physical learning experiences.
            </p>
            <button className="btn btn-primary">Enroll Now</button>
          </div>
          <div className="h-128">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </a>
      </div>
    );
  };
  
  export default Two_Course;
  
=======
const Two_Course = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 justify-items-center mt-8 px-8 py-4 ">
      <a
        href="offline"
        className="card grid lg:grid-cols-2 shadow-xl p-4 gap-x-8 gap-y-4"
      >
        <div className="grid gap-x-8 gap-y-4">
          <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold">
            Center Based Training
          </h2>
          <p>
            At BRAC Skills Development Programme, we provide high-quality,
            affordable NTVQF physical training sessions at our various centers
            across Bangladesh. These offline courses offer hands-on learning
            experiences, enabling youth to engage directly with experienced
            instructors and peers. Our state-of-the-art facilities and practical
            approach ensure that participants gain the skills and confidence
            needed to excel in their chosen fields.
          </p>
          <button className="btn btn-xs sm:btn-sm md:btn-md bg-[#FFA100] text-black hover:text-[#FFA100]  hover:outline hover:outline-2 hover:outline-[#FFA100] hover:bg-white">
            Enroll Now
          </button>
        </div>
        <div className="h-128">
          <img
            src="https://i.ibb.co/kmSzQ18/Offline.png"
            className="w-full h-full object-cover"
          />
        </div>
      </a>
      <a
        href="https://bracisd-staging.brac.net/"
        className="card grid lg:grid-cols-2 shadow-xl p-4 gap-x-8 gap-y-4"
      >
        <div className="grid gap-x-8 gap-y-4">
          <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold">Online Training</h2>
          <p>
            BRAC ISD Online is an online training platform designed to provide
            high-quality education accessible to learners across the nation.
            Offering Soft-skills, industry-relevant IT training in partnership
            with reputable training partners to enable professionals, students,
            and enthusiasts to stay competitive in their areas and enhance their
            skill sets. With expert instructors and interactive learning
            platforms, participants can acquire valuable skills required to
            occupy oneself with income-generating activities.
          </p>
          <button className="btn btn-xs sm:btn-sm md:btn-md bg-[#FFA100] text-black hover:text-[#FFA100]  hover:outline hover:outline-2 hover:outline-[#FFA100] hover:bg-white">
            Enroll Now
          </button>
        </div>
        <div className="h-128">
          <img
            // src="https://i.ibb.co/cQhgrMT/Online-wide-screen.png"
            src="https://i.ibb.co/nQntsk8/Online2.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </a>
    </div>
  );
};

export default Two_Course;
>>>>>>> 8a932e4 (Added Retail and Sales course)
