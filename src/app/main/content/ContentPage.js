import About from "./About";
import Awards from "./Awards";
import Experiences from "./Experiences";
import Home from "./Home";
import Interests from "./Interests";
import Skills from "./Skills";

const ContentPage = () => {
  return (
    <div class="w-9/12 absolute right-0">
      <Home />
      <About />
      <Experiences />
      <Skills />
      <Interests />
      <Awards />
    </div>
  )
}

export default ContentPage;