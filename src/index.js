import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
//import youtuber from './Head.js';
//import {favprog} from './Head.js';
import {add,sub,mult,div} from  './Cal'
import Card from "./cards"
// function ncard(val,indexnumber,array)
function ncard(val){

}

ReactDOM.render(
    <>
    <h1 className='heading_style'>List of top five Netflix  series in 2020</h1>
   <Card 
   imgsrc="https://mir-s3-cdn-cf.behance.net/project_modules/1400/30ffaa58808319.5bf4f5ed3e17a.jpg"
   title="A Netflix Oriiginal Series"
   sname="Strangers things"
   link="https://www.netflix.com/in/title/80057281"
   />
   <Card 
   imgsrc="https://i.pinimg.com/originals/8f/cf/32/8fcf32143abe3ca3dc23b71a4f5413c7.jpg"
   title="A Netflix Oriiginal Series"
   sname="Dark"
   link=""
   />
   <Card 
   imgsrc="https://asianwiki.com/images/6/64/Because_It%27s_My_First_Love_2-P1.jpg"
   title="A Netflix Oriiginal Series"
   sname="Extra Curricular"
   link=""
   />
   <Card 
   imgsrc="https://m.media-amazon.com/images/M/MV5BMzM2NTAzMzYtNWVlNi00NzFmLWE3MjgtMWI5NWI2MjAzZjdmXkEyXkFqcGdeQXVyODE2MzY0ODM@._V1_.jpg"
   title="A Netflix Oriiginal Series"
   sname="Extra Curricular"
   link="https://www.imdb.com/title/tt6012446/"
   />
   <Card 
   imgsrc="https://m.media-amazon.com/images/M/MV5BMzM2NTAzMzYtNWVlNi00NzFmLWE3MjgtMWI5NWI2MjAzZjdmXkEyXkFqcGdeQXVyODE2MzY0ODM@._V1_.jpg"
   title="A Netflix Oriiginal Series"
   sname="Extra Curricular"
   link="https://www.imdb.com/title/tt6012446/"
   />
   <Card 
   imgsrc="https://m.media-amazon.com/images/M/MV5BMzM2NTAzMzYtNWVlNi00NzFmLWE3MjgtMWI5NWI2MjAzZjdmXkEyXkFqcGdeQXVyODE2MzY0ODM@._V1_.jpg"
   title="A Netflix Oriiginal Series"
   sname="Extra Curricular"
   link="https://www.imdb.com/title/tt6012446/"
   />
   {/* Sdata.map(ncard); */}
   {/* fat arrow function */}
    </>
  , document.getElementById('root'));
