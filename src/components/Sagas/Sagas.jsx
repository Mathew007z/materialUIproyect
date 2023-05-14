import "../../css/sagas.css";
import { Link } from "react-router-dom";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useMovieContext } from "../../context/MovieContext";

const Sagas = () => {
  const { data } = useMovieContext();
  console.log(data[0].imagen);
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Link to={'/sagas/el-señor-de-los-anillos'}>
        <Card
          sx={{
            display: "flex",
            width: "400px",
            height: "200px",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                El Señor de los Anillos
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={data[10].imagen}
            alt="Live from space album cover"
          />
        </Card>
      </Link>
      <Link to={'/sagas/starwars'}>
        <Card
          sx={{
            display: "flex",
            width: "400px",
            height: "200px",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Star Wars
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={data[1].imagen}
            alt="Live from space album cover"
          />
        </Card>
      </Link>

      <Link to={'/sagas/harrypotter'}>
        <Card
          sx={{
            display: "flex",
            width: "400px",
            height: "200px",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Harry Potter
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={data[4].imagen}
            alt="Live from space album cover"
          />
        </Card>
      </Link>
    </div>
  );
  // <div className='containerSagas'>
  //     <ul className='ulSagas'>
  //         <div className='divSagas'>
  //         <Link to={'/sagas/el-señor-de-los-anillos'}><li>El Señor de los Anillos</li></Link>
  //         </div>
  //         <div className='divSagas'>
  //         <Link to={'/sagas/starwars'}><li>Star Wars</li></Link>
  //         </div>
  //         <div className='divSagas'>
  //         <Link to={'/sagas/harrypotter'}><li>Harry Potter</li></Link>
  //         </div>
  //     </ul>
  // </div>
};

export default Sagas;
