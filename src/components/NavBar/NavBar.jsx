import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import '../../css/navBar.css'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#D1D1D1'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="ulNavBar" to={"/"}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="ulNavBar" to={"/peliculas"}>
              Peliculas
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="ulNavBar" to={"/sagas"}>
              Sagas
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="ulNavBar" to={"/nosotros"}>
              Nosotros
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

