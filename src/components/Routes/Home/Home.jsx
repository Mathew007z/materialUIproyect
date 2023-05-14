import { Maximize } from "@mui/icons-material";
import { Box } from "@mui/material";
import Sagas from "../../Sagas/Sagas";
const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: 1440,
          height: 1200,
          backgroundColor: "#EAEAEA",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
            fontFamily:'initial'
          }}
        >
          Peliculas clásicas
        </h1>
        <Sagas/>
      </Box>
    </>
  );
};

export default Home;
