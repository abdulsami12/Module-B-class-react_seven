import React from 'react'
import {Get} from '././apibasement.js'

const Message = () => {

// const [data ,setData  ]= React.useState([])


let getData = ()=> {
    Get("posts").then(res =>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
  return (
    <div>Message</div>
  )
}

export default Message