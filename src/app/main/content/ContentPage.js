import About from "./about/About";
import Awards from "./awards/Awards";
import Experiences from "./experiences/Experiences";
import Home from "./home/Home";
import Interests from "./interests/Interests";
import Skills from "./skills/Skills";

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