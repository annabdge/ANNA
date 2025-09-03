import React, { useState } from "react";
import './App.css'
import { Button } from "@mui/material";
import { useEffect } from "react";

type Cottura = {
  tipo: string;
  time: number;
};

function Cottura() {

    const [cotture, setCotture] = useState<Cottura[]>([]);
    
    useEffect(() => {
        fetch("/api/cotture") 
        .then((res) => res.json())
        .then((data) => setCotture(data))
        .catch((err) => console.error(err));
    }, []);
    

  return (
    <div>
      <h1>Pagina Cotture</h1>
      
    </div>
  );
}

export default Cottura;
