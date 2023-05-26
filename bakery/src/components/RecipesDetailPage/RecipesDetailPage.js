import React from 'react'
import { URL_RECIPES } from '../_Utils/Constant';
import { useGet } from "../_Hooks/Custom";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
//"rafce"\


function RecipesDetailPage() {
  let link = window.location.href;
  const id = link.split('/')
  const base64prefix = "data:image/jpeg;base64,"

  const [dati, setData] = useState();

  const { data } = useGet(URL_RECIPES, id[4]);

  useEffect(() => {
    setData(data);
    console.log(data)
  }, [data]);


  return (
    <div className='recipe border border-dark' style={{backgroundColor:"#D3D3D3"}}>
      <img className= "recipe-img"  src={data ? base64prefix + data.photo :""} /> 
      <div>
        <h2><b>{data? data.name : ""}</b></h2>
        <div className='recipe-text '>
        <p >{data ? data.description : ""}</p>
        </div>
      </div>
      <Button variant="danger" href= "http://localhost:3000/home" >Indietro</Button>
    </div>
  )
}

export default RecipesDetailPage