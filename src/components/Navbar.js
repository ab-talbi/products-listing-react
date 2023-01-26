import React from 'react'
import data from './data';
import { useState, useEffect } from 'react'

const Navbar = (props) => {
    const [clicked, setClicked] = useState([true,false,false,false,false]);
    const temporaryData = [];

    const handleChoose = (index,item) => {
        if(index !== 0){
          for (let i=0; i < data.length; i++) {
            if (data[i].name.includes(item)){
              temporaryData.push(data[i]);
            }
          }
          props.setDataToShow(temporaryData);
          props.setNumberOfItems(temporaryData.length);
        }else{
          props.setDataToShow(data);
          props.setNumberOfItems(data.length);
        }
    
        //so that the button that is clicked will be colourd
        let tempBool = [false, false, false, false, false] ;
        for(let i = 0 ; i < clicked.length ; i++){
          if( i === index)
            tempBool[i] = true;
          else
            tempBool[i] = false;
        }
        setClicked(tempBool);
    }

    //when the clicked state is updated, thz button clicked will be coulourd
    useEffect( () => {
        for(let i = 0; i < clicked.length; i++){
        if(clicked[i])
            document.getElementById(i).classList.add('clicked_item');
        else
            document.getElementById(i).classList.remove('clicked_item');
        }
    }, [clicked]);

    return (
        <div className='navbar'>
            <ul>
            <li><button id='0' onClick={()=>{handleChoose(0,"All")}} >All</button></li>
            <li><button id='1' onClick={()=>{handleChoose(1,"Android")}}>Android</button></li>
            <li><button id='2' onClick={()=>{handleChoose(2,"Google")}}>Google</button></li>
            <li><button id='3' onClick={()=>{handleChoose(3,"Waze")}}>Waze</button></li>
            <li><button id='4' onClick={()=>{handleChoose(4,"YouTube")}}>YouTube</button></li>
            <li><button id='5' onClick={()=>{handleChoose(5,"Acer")}}>Acer</button></li>
            </ul>
        </div>
    )
}

export default Navbar