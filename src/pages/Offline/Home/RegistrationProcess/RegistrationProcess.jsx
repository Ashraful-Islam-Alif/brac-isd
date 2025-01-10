import { Link } from "react-router-dom";
import registerImage from './register.jpg';
const RegistrationProcess = () => {
    return (
      <div className="container mx-auto my-8 grid justify-items-center grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl px-4">
      <div className="flex justify-center">
        <img
          src={registerImage}
          alt="Registration Process"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">Registration Process</h2>
        <p className="my-4">
          <span className="font-semibold">Step 1: </span>
          <span>Find your interested course and centre</span>
        </p>
        <p className="my-4">
          <span className="font-semibold">Step 2: </span>
          <span>Select your interested course and centre</span>
        </p>
        <p className="my-4">
          <span className="font-semibold">Step 3: </span>
          <span>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLScoauq-f2VJ6nHBH_X7qNMb7pwg-p2XA-tUzNI45HmaTbRbBw/viewform"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Register yourself
            </Link>
          </span>
        </p>
        <p className="my-4">
          <span className="font-semibold">Step 4: </span>
          <span>BRAC ISD team will communicate with you</span>
        </p>
      </div>
    </div>
    
      );
};

export default RegistrationProcess;