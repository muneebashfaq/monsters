import React from 'react'
import './Card_style.css'
import Card_list_component from './Card_list_component'
const Card=(props)=>{
    return(<>
    <div className='card_list'>
        
<Card_list_component monsters={props.name} id={props.id}/></div></>)
}

export default Card;