import Menus from "./Menus";
import ProfileImage from "./ProfileImage";


const Sidebar = () => {
  return (
    <div className="w-3/12 bg-white rounded p-3 shadow-lg fixed min-h-screen">
      <ProfileImage />
      <Menus />
    </div>
  )
}

export default Sidebar;