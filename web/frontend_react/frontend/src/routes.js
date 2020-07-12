/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Clean from "views/Clean/Clean.js";
import Monitoring from "views/Monitoring/Monitoring.js";
import Setting from "views/Setting/Setting.js";
import Icons from "views/Icons/Icons.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "대시보드",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/clean",
    name: "R2D2 정화내역",
    icon: BubbleChart,
    component: Clean,
    layout: "/admin"
  },
  {
    path: "/monitor",
    name: "R2D2 모니터링",
    icon: 'monitor',
    component: Monitoring,
    layout: "/admin"
  },
  {
    path: "/setting",
    name: "R2D2 관리",
    icon: 'settings',
    component: Setting,
    layout: "/admin"
  },
  // {
  //   path: "/setting",
  //   name: "Icons",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  
];

export default dashboardRoutes;
