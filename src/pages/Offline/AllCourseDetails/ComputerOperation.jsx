<<<<<<< HEAD

import { useState } from "react";
import { Link } from "react-router-dom";

const ComputerOperation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      <div
        tabIndex={0}
        className={`collapse collapse-arrow  ${isCollapsed ? "collapsed" : ""}`}
      >
        <input
          tabIndex={0}
          type="radio"
          name="my-accordion-2"
          onClick={toggleCollapse}
        />
        <div className="collapse-title text-xl font-medium my-4">
          Computer Office Applications
          <hr className="mt-2 border-t-1 font-bold border-black"></hr>
        </div>
        {isCollapsed && (
          <div className="collapse-content">
            <div>
              <p className="mt-4">
                <span className="font-bold ">Duration of Training:</span> 1.5
                months
              </p>
              <p className="mt-4">
                <span className="font-bold mt-4">Class Duration:</span> 3 hours
              </p>
              <p className="mt-4 font-bold">Course Contents:</p>
              <p className="mt-4 ">
                <p className="">
                  Embark on a journey to enhance your computer skills and office
                  application proficiency with our comprehensive 1.5-month
                  training program. This course covers a range of essential
                  topics to equip you for success in the modern workplace:
                </p>
                <p className="mt-4">
                  Basic Computer: Get acquainted with computer fundamentals and
                  operations.
                </p>
                <p>
                  Bed Making: Master the art of making beds with precision and
                  attention to detail.
                </p>
                <p>
                  Use and Introduction of Email and Job Portal: Explore the
                  efficient use of emails and job portals in the professional
                  world.
                </p>
                <p>
                  Introduction and Use of Google Apps: Familiarise yourself with
                  various Google applications for productivity and
                  collaboration.
                </p>
                <p>
                  Mail Merging: Discover the technique of mail merging for
                  personalised communication.
                </p>
                <p>
                  Bangla and English Typing: Enhance your typing skills in both
                  Bangla and English.
                </p>
                <p>
                  Professional CV Designing: Learn the art of designing a
                  professional and appealing CV.
                </p>
                <p>
                  Microsoft Word: Master the features and functions of Microsoft
                  Word for efficient document creation.
                </p>
                <p>
                  Microsoft Excel: Acquire proficiency in Microsoft Excel for
                  data organisation and analysis.
                </p>
                <p>
                  Microsoft PowerPoint: Develop captivating presentations using
                  Microsoft PowerPoint.
                </p>
              </p>

              <p className="mt-4 font-bold">Course Description: </p>

              <p className="">
                Join our Computer Office Applications training programme and
                gain essential skills to excel in the modern workplace. Whether
                you are a beginner or seeking to upgrade your computer
                knowledge, this course offers comprehensive training to meet
                your professional needs.
              </p>

              <p className="mt-4 font-bold">Course Overview: </p>

              <p className="">
                This 1.5-month programme covers a diverse range of topics,
                including computer basics, hardware and software installation,
                email and job portal usage, and Google Apps. Learn the practical
                technique of mail merging and enhance your typing skills in both
                Bangla and English. Gain proficiency in Microsoft Word for
                efficient document creation, Microsoft Excel for data
                management, and Microsoft PowerPoint for impactful
                presentations. Additionally, learn the art of designing a
                professional CV to stand out in the job market.
              </p>

              <p className="font-bold mt-4">Who Should Enroll:</p>
              <p>
                This course is ideal for individuals seeking to enhance their
                computer skills and office application proficiency. Whether you
                are a student, job seeker, or working professional, this program
                will equip you with the necessary knowledge to navigate
                computer-based tasks with confidence.
              </p>
              <p className="font-bold mt-4">Certificate:</p>
              <p>
                Upon successful completion of the course, you will receive a
                certificate from BRAC ISD, validating your expertise in Computer
                Office Applications.
              </p>
              <div className="mt-4">
                <h2>
                  <span className="font-bold">Registration link: </span>
                  <br></br>
                  <span>
                    <Link
                      to="https://docs.google.com/forms/d/e/1FAIpQLSfUhIt6DCWApWz-7aIyKSt0ji5xGap0mBsP6rDcXji9RIfiyQ/viewform"
                      target="_blank"
                      className="underline"
                    >
                      Click here for the registration
                    </Link>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComputerOperation;
=======

import { useState } from "react";
import { Link } from "react-router-dom";

const ComputerOperation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      <div
        tabIndex={0}
        className={`collapse collapse-arrow  ${isCollapsed ? "collapsed" : ""}`}
      >
        <input
          tabIndex={0}
          type="radio"
          name="my-accordion-2"
          onClick={toggleCollapse}
        />
        <div className="collapse-title text-xl font-medium my-4">
          Computer Office Applications
          <hr className="mt-2 border-t-1 font-bold border-black"></hr>
        </div>
        {isCollapsed && (
          <div className="collapse-content">
            <div>
              <p className="mt-4">
                <span className="font-bold ">Duration of Training:</span> 1.5
                months
              </p>
              <p className="mt-4">
                <span className="font-bold mt-4">Class Duration:</span> 3 hours
              </p>
              <p className="mt-4 font-bold">Course Contents:</p>
              <p className="mt-4 ">
                <p className="">
                  Embark on a journey to enhance your computer skills and office
                  application proficiency with our comprehensive 1.5-month
                  training program. This course covers a range of essential
                  topics to equip you for success in the modern workplace:
                </p>
                <p className="mt-4">
                  Basic Computer: Get acquainted with computer fundamentals and
                  operations.
                </p>
                <p>
                  Bed Making: Master the art of making beds with precision and
                  attention to detail.
                </p>
                <p>
                  Use and Introduction of Email and Job Portal: Explore the
                  efficient use of emails and job portals in the professional
                  world.
                </p>
                <p>
                  Introduction and Use of Google Apps: Familiarise yourself with
                  various Google applications for productivity and
                  collaboration.
                </p>
                <p>
                  Mail Merging: Discover the technique of mail merging for
                  personalised communication.
                </p>
                <p>
                  Bangla and English Typing: Enhance your typing skills in both
                  Bangla and English.
                </p>
                <p>
                  Professional CV Designing: Learn the art of designing a
                  professional and appealing CV.
                </p>
                <p>
                  Microsoft Word: Master the features and functions of Microsoft
                  Word for efficient document creation.
                </p>
                <p>
                  Microsoft Excel: Acquire proficiency in Microsoft Excel for
                  data organisation and analysis.
                </p>
                <p>
                  Microsoft PowerPoint: Develop captivating presentations using
                  Microsoft PowerPoint.
                </p>
              </p>

              <p className="mt-4 font-bold">Course Description: </p>

              <p className="">
                Join our Computer Office Applications training programme and
                gain essential skills to excel in the modern workplace. Whether
                you are a beginner or seeking to upgrade your computer
                knowledge, this course offers comprehensive training to meet
                your professional needs.
              </p>

              <p className="mt-4 font-bold">Course Overview: </p>

              <p className="">
                This 1.5-month programme covers a diverse range of topics,
                including computer basics, hardware and software installation,
                email and job portal usage, and Google Apps. Learn the practical
                technique of mail merging and enhance your typing skills in both
                Bangla and English. Gain proficiency in Microsoft Word for
                efficient document creation, Microsoft Excel for data
                management, and Microsoft PowerPoint for impactful
                presentations. Additionally, learn the art of designing a
                professional CV to stand out in the job market.
              </p>

              <p className="font-bold mt-4">Who Should Enroll:</p>
              <p>
                This course is ideal for individuals seeking to enhance their
                computer skills and office application proficiency. Whether you
                are a student, job seeker, or working professional, this program
                will equip you with the necessary knowledge to navigate
                computer-based tasks with confidence.
              </p>
              <p className="font-bold mt-4">Certificate:</p>
              <p>
                Upon successful completion of the course, you will receive a
                certificate from BRAC ISD, validating your expertise in Computer
                Office Applications.
              </p>
              <div className="mt-4">
                <h2>
                  <span className="font-bold">Registration link: </span>
                  <br></br>
                  <span>
                    <Link
                      to="https://docs.google.com/forms/d/e/1FAIpQLScoauq-f2VJ6nHBH_X7qNMb7pwg-p2XA-tUzNI45HmaTbRbBw/viewform"
                      target="_blank"
                      className="underline"
                    >
                      Click here for the registration
                    </Link>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComputerOperation;
>>>>>>> 8a932e4 (Added Retail and Sales course)
