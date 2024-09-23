import { BsBack } from "react-icons/bs";
const Best_Feature = () => {
  
  return (
    <div>
      <div className="mt-8 px-8 py-4">
        <h2 className="text-xl md:text-2xl lg:text-5xl font-bold">
        Why Choose BRAC ISD?
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-4 px-8 py-4">
        <div className="p-4 border shadow-md rounded-md">
          <div className="flex items-center gap-4 ">
            <BsBack className="size-12 text-[#FFA100]" />
            <h2 className="text-lg font-semibold">
              Quality training in affordable prices
            </h2>
          </div>
          <p className="mt-4">
            BISD online provides quality training at an affordable price to make
            education accessible to a broader audience, ensuring that more
            individuals have the opportunity to gain valuable skills and advance
            their careers. Our specialized instructors & comprehensive
            curriculum certified by experts, covers essential topics thoroughly
            and stays updated with industry trends and advancements. We
            routinely offer course-related assistance to help learners track
            their progress and identify areas for improvement. Starting from
            basic to advanced training, we offers self-paced, hybrid, and live
            courses enables learners to fit education into their schedules and
            budgets.
          </p>
        </div>
        <div className="p-4 border shadow-md rounded-md">
          <div className="flex items-center gap-4 ">
            <BsBack className="size-12 text-[#FFA100]" />
            <h2 className="text-lg font-semibold">Interactive live classes</h2>
          </div>
          <p className="mt-4">
            BISD Online offers a dynamic and engaging learning experience by
            allowing real-time communication between instructors and learners.
            These classes typically use video conferencing tools to facilitate
            discussions, provide immediate feedback, and conduct interactive
            activities such as polls,quizzes, and collaborative projects. These
            live classes help to recreate the traditional classroom atmosphere,
            encouraging participation and enhancing the overall learning
            process. With the flexibility to join from anywhere, students can
            benefit from expert instruction and peer interaction without
            geographical constraints.
          </p>
        </div>
        <div className="p-4 border shadow-md rounded-md">
          <div className="flex items-center gap-4 ">
            <BsBack className="size-12 text-[#FFA100]" />
            <h2 className="text-lg font-semibold">
              Scholarship for disadvantaged students
            </h2>
          </div>
          <p className="mt-4">
            With the aim of serving a wider range of underprivileged students,
            BISD Online offers scholarships to those students who are unable to
            pay for the high-priced courses that the market offers. In order to
            be eligible for this financial aid, applicants have to undergo an
            assessment process. To encourage bright & ambitious students &
            support their career development is the main goal for offering this
            financial aid.
          </p>
        </div>
        <div className="p-4 border shadow-md rounded-md">
          <div className="flex items-center gap-4 ">
            <BsBack className="size-12 text-[#FFA100]" />
            <h2 className="text-lg font-semibold">
              Renowned Training Service Providers
            </h2>
          </div>
          <p className="mt-4">
            In collaboration with best training service providers, BISD online
            offers these on-demanding courses to the interested learners.
            Partnering with the best and most renowned training institutions
            significantly enhancing the quality and credibility of educational
            programs. These institutions often have a long-standing reputation
            for excellence, cutting-edge curriculum, and experienced
            instructors. Collaborating with such esteemed partners ensures that
            learners receive top-notch education and training, recognized and
            valued in their respective industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Best_Feature;
