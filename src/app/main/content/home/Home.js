import ImagePortofolio from "./ImagePortofolio";
import Mottos from "./Mottos";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4 flex items-center justify-center flex-col" id="home">
        <ImagePortofolio />
        <Mottos />
      </div>
    </>
  )
}

export default Home;