import Banner from "../Banner/Banner";
import Best_Feature from "../Best_Feature/Best_Feature";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Two_Course from "../Two_Course/Two_Course";
import We_Offer_Course from "../We_Offer_Course/We_Offer_Course";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <We_Offer_Course></We_Offer_Course>
      <Two_Course></Two_Course>
      <Best_Feature></Best_Feature>
      <Footer></Footer>
    </div>
  );
};

export default Home;
