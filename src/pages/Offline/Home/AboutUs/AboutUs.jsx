const AboutUs = () => {
  return (
    <div className=" ">
      <div className="grid justify-items-center sm:grid-cols-1 lg:grid-cols-2 gap-4 py-8">
        <h2 className="flex items-center text-center text-black text-lg md:text-2xl lg:text-7xl font-bold">
          About Us
        </h2>
        <h2 className="text-left max-w-screen-xl ">
          Welcome to the BRAC Institute of Skills Development (BISD), a
          transformative initiative empowering individuals with essential
          skills. Our comprehensive training programmes offer specialised
          courses across 14 occupations, including ready-made garments, IT,
          graphic design, and electrical engineering. As a registered training
          organisation under the National Technical Vocational Qualification
          Framework, we are dedicated to providing high-quality education and
          creating a skilled workforce. With a commitment to excellence,
          innovation, and inclusivity, we strive to shape a brighter future
          through skills development. Join us on this journey, discover your
          potential, and become part of a community driving positive change
          across the nation. Let's build a better future together.
        </h2>
      </div>
      <div className="video-container flex justify-center items-center">
        <iframe
          className="w-full"
          width="1200"
          height="400"
          src="https://www.youtube.com/embed/NM8TqqJEXg8"
          title="Moni Begum: Stitching her way to the future | BRAC"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
