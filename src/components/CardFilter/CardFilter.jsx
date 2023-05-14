import { Box } from "@mui/material";
import "../../css/cardFilter.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardFilter = ({ movie }) => {
  return (
    // <Box className='containerCard' style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
    //     <h1 className="h1CardFilter">{movie.titulo}</h1>
    //     <img className="imgCardFilter" src={movie.imagen} alt='foto-portada'/>
    //     <button className='btnCardFilter'>Ver Mas</button>
    // </Box>
    <Card
      style={{
        marginBottom: "60px",
        height: "400px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={movie.imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descripcion de la pelicula
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver mas</Button>
      </CardActions>
    </Card>
  );
};

export default CardFilter;
