<<<<<<< HEAD
import { Link } from "react-router-dom";

const RegistrationProcess = () => {
    return (
        <div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl">
          <div className="grid justify-items-center">
            <img
              src="https://i.ibb.co/th01tLp/IMG-8618-min.jpg"
              alt=""
              style={{ width: "350px", height: "300px", borderRadius: "50%" }}
            ></img>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-8">Registration Process</h2>
            <p className="my-4">
              <span className="font-semibold">Step 1: </span>
              <span>Find your interested course and centre</span>{" "}
            </p>
            <p className="my-4">
              <span className="font-semibold">Step 2: </span>
              <span>Select your interested course and centre</span>{" "}
            </p>
            <p className="my-4">
              <span className="font-semibold">Step 3: </span>
              <span>
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLSfUhIt6DCWApWz-7aIyKSt0ji5xGap0mBsP6rDcXji9RIfiyQ/viewform"
                  target="_blank"
                  className="underline"
                >
                  Register yourself
                </Link>
              </span>
            </p>
            <p className="my-4">
              <span className="font-semibold">Step 4: </span>
              <span>BRAC team will communicate with you</span>{" "}
            </p>
          </div>
        </div>
      );
};

=======
import { Link } from "react-router-dom";
import registerImage from './register.webp';
const RegistrationProcess = () => {
    return (
        <div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl">
          <div className="grid justify-items-center">
            <img
              src={registerImage}
              alt=""
              style={{ width: "400px", height: "400px" }}
            ></img>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-8">Registration Process</h2>
            <p className="my-4">
              <span className="font-semibold">Step 1: </span>
              <span>Find your interested course and centre</span>{" "}
            </p>
            <p className="my-4">
              <span className="font-semibold">Step 2: </span>
              <span>Select your interested course and centre</span>{" "}
            </p>
            <p className="my-4">
              <span className="font-semibold">Step 3: </span>
              <span>
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLScoauq-f2VJ6nHBH_X7qNMb7pwg-p2XA-tUzNI45HmaTbRbBw/viewform"
                  target="_blank"
                  className="underline"
                >
                  Register yourself
                </Link>
              </span>
            </p>
            <p className="my-4">
              <span className="font-semibold">Step 4: </span>
              <span>BRAC team will communicate with you</span>{" "}
            </p>
          </div>
        </div>
      );
};

>>>>>>> 8a932e4 (Added Retail and Sales course)
export default RegistrationProcess;