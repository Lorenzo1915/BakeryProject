import React from 'react';
import "./Loader.scss";
import loader from "../../assets/icons/loader.svg";

const Loader = () => {
  return (
    <div className='loader my-5'>
      <div className='container flex align-center justify-center'>
        <img src = {loader} alt = "" />
      </div>
    </div>
  )
}

export default Loader