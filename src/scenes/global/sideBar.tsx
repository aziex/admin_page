import { useState } from "react";
import { Sidebar as ProSidebar } from 'react-pro-sidebar';
import {Menu, MenuItem} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import Link from "react-router-dom";
import { tokens } from "../theme";
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
// import ContactOutlinedIcon from '@mui/icons-material/ContactOutlined';
// import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import CalendarOutlinedIcon from '@mui/icons-material/CalendarOutlined';
// import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
// import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
// import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
// import TiemlineOutlinedIcon from '@mui/icons-material/TiemlineOutlined';
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import MapOutlinedIcon from '@mui/icons-material/MapOutlined';



const Sidebar = () => {
    const theme = useTheme ();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSellected] = useState("Dashboard");


    return (
        <Box 
        sx={{
            "& .pro-sidebar-inner": {
                background:`${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper": {
                background:"transparent !important",
            },
            "& .pro-inner-item": {
                padding:"5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover": {
                color:"#868dfb !important",
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important",
            }
        }}
        >
            <ProSidebar collapsed={isCollapsed}>
                {/* <Menu iconShape="square"></Menu> */}
            </ProSidebar>

        </Box>
    )

}

export default Sidebar;
