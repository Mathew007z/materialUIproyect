import { Box } from "@mui/material";
import "../../css/footer.css";
import ListaRedes from "../ListaRedes/ListaRedes";

const Footer = () => {
  return (
    <>
      <Box className="containerFooter" style={{ backgroundColor: "#F3F3F3",height:'100%' }}>

        <Box style={{display:'flex'}}>
        <h1 style={{marginRight:'30px' ,fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Contactanos</h1>
          <ul style={{ display: "flex",flexDirection:'column'}}>
            <li className="listaContactos" style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Numero: +54 11 3432 5690</li>
            <li className="listaContactos" style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>
              Email: peliculasclasicas@gmail.com
            </li>
            <li className="listaContactos" style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Direccion: Av. 9 de Julio 2680</li>
          </ul>
        </Box>
        <Box style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
            <ListaRedes/>
          <h2 style={{ fontSize: "16px",marginRight:'30px',fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>
            Todos los derechos reservados por Copyright 2023
          </h2>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
