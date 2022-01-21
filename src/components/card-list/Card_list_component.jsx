import React from 'react'
import './Card_list.css'
const Card=(props)=>{
    return(<><div class="card_container">
      
             <img alt='monsters' src={`https://robohash.org/${props.id}?set=set2`}/>
      {props.monsters}
</div></>)
}

export default Card;