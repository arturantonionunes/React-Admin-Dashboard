import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ArticleIcon from "@mui/icons-material/Article";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <span className="sidebarTopLogo">Ubadmin</span>
      </div>

      <div className="sidebarMid">
        <ul>
          <p className="sidebarTitle">MAIN</p>
          <li>
            <DashboardIcon className="sidebarIcon" />
            <span>Dashboard</span>
          </li>
          <p className="sidebarTitle">LIST</p>
          <li>
            <PersonIcon className="sidebarIcon" />
            <span>Usuários</span>
          </li>
          <li>
            <LocalGroceryStoreIcon className="sidebarIcon" />
            <span>Produtos</span>
          </li>
          <li>
            <PaymentIcon className="sidebarIcon" />
            <span>Pedidos</span>
          </li>
          <li>
            <LocalShippingIcon className="sidebarIcon" />
            <span>Delivery</span>
          </li>
          <p className="sidebarTitle">USEFUL</p>
          <li>
            <LeaderboardIcon className="sidebarIcon" />
            <span>Status</span>
          </li>
          <li>
            <NotificationsIcon className="sidebarIcon" />
            <span>Notificações</span>
          </li>
          <p className="sidebarTitle">SERVICE</p>
          <li>
            <HealthAndSafetyIcon className="sidebarIcon" />
            <span>System Health</span>
          </li>
          <li>
            <ArticleIcon className="sidebarIcon" />
            <span>Logs</span>
          </li>
          <p className="sidebarTitle">USER</p>
          <li>
            <ContactPageIcon className="sidebarIcon" />
            <span>Perfil</span>
          </li>
          <li>
            <LogoutIcon className="sidebarIcon" />
            <span>Sair</span>
          </li>
        </ul>
      </div>
      <div className="sidebarBot">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
