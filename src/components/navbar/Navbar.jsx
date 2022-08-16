import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SortIcon from "@mui/icons-material/Sort";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Procurar..." />
          <SearchOutlinedIcon className="navbarIcon" />
        </div>

        <div className="mobileIcon">
          <MenuOutlinedIcon />
        </div>
        <div className="navbarMenu">
          <div className="navbarItem">
            <LanguageOutlinedIcon className="navbarIcon" />
          </div>
          <div className="navbarItem">
            <DarkModeOutlinedIcon className="navbarIcon" />
          </div>
          <div className="navbarItem">
            <FullscreenExitOutlinedIcon className="navbarIcon" />
          </div>
          <div className="navbarItem">
            <NotificationsOutlinedIcon className="navbarIcon" />
            <div className="counter">1</div>
          </div>
          <div className="navbarItem">
            <ChatBubbleOutlineOutlinedIcon className="navbarIcon" />
            <div className="counter">1</div>
          </div>
          <div className="navbarItem">
            <SortIcon className="navbarIcon" />
          </div>
          <div className="navbarItem">
            <img
              src="https://images.pexels.com/photos/11460854/pexels-photo-11460854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
