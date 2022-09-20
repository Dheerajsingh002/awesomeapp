import React from 'react';


function Head(){
let  curDate=new Date();
curDate=curDate.getHours();
let greeting='';
let cssStyle={

};
if(curDate>=1 && curDate<=12)
{
    greeting="Good Morning"
    cssStyle.color='red';
}
else if(curDate>=12 && curDate<=8){
    greeting='Good Evening';
    cssStyle.color='blue';
}
else{
    greeting='Good Night';
    cssStyle.color='green';
}
    return(
        <>
        <div>
        <h1>Hello sir, <span style={cssStyle} className="g">{greeting}</span></h1>
        </div>
            
        </>
    );
}
export default Head;
// const youtuber ="thapa  Technical";
// const favprog ="React js";
//export default youtuber;
//export {favprog};