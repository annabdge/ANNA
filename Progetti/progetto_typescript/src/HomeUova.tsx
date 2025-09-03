import React, { useEffect, useState } from "react";
import './App.css'
import { Button, Card, CardContent , CardMedia, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

type Ricetta = {
  img: string;
  ricetta: string;
  desc: string;
  time: number;
}; 

function HomeUova() {
  const [ricette, setRicette] = useState<Ricetta[]>([]);
  const navigate = useNavigate();

  // chiamata API per recuperare le ricette
useEffect(() => {
  fetch("/api/ricette")
    .then((res) => res.json())
    .then((data) => setRicette(data))
    .catch((err) => console.error(err));
}, []);

 //funzione onclick per il cambio pagina
 const paginaCotture = () => {
    navigate("/cotture"); //naviga alla pagina "cotture"
  };
  return (
    <>
    <h1>Ricette con uova</h1>

      <Button variant="contained" color="primary" onClick={paginaCotture}>
        Cotture
      </Button>

    {/*uso le card di mui*/ }
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {ricette.map((r, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image={r.img}
            alt={r.ricetta}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {r.ricetta}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {r.desc}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
    </>

    

  );
 
}


export default HomeUova
