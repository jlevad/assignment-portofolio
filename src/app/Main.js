import ContentPage from "./main/content/ContentPage";
import Sidebar from "./main/sidebar/Sidebar";

const MainPage = () => {
  return (
    <>
      <div className="flex flex-wrap w-full h-screen">
        <Sidebar />
        <ContentPage />
      </div>
    </>
  )
}

export default MainPage;