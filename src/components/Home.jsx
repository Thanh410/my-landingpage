import Banner from "./Banner";
import Contact from "./Contact";
import Introduce from "./Introduce";
import Navbar from "./Navbar";
import Stats from "./Stat";
import Service from "./Services";
import Footer from "./Footer";
import Button from "./Button";
import Popup from "./Popup";
import Recruitment from "./Recruitment";
import Partner from "./Partner";

function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Stats />
      <Introduce />
      <Service />
      <Partner />
      <Recruitment />
      <Contact />
      <Footer />
      <Button />
      <Popup />
    </div>
  );
}

export default Home;
