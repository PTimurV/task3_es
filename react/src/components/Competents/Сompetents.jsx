import React, { useState } from 'react';
import './Competents.css';
import {List} from "../List/List"

export const Competents = ({ texts, topic }) => {
  return (
      <div  className='container'>
        <div className='topic'>{topic}</div>
        <List/>
      </div>
    
  );
};




export default Competents;