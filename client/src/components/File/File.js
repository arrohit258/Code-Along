import React,{useState,useEffect} from 'react'
import{ useLocation} from 'react-router-dom'
import queryString from 'query-string'

import { Form, TextArea } from 'semantic-ui-react'
import io from 'socket.io-client'
import "semantic-ui-css/semantic.min.css"
const SAVE_INTERVAL_MS=2000




const File = ({code,setCode}) => {

  let location=useLocation()
  console.log(location)
  const[name,setName]=useState('')
  const[room,setRoom]=useState('')
  const [socket,setSocket]=useState()
    useEffect(()=>{
      const{name,room}=queryString.parse(location.search)
      console.log(name,room)
      setName(name)
      setRoom(room)
      const s=io('http://localhost:5000/')
      setSocket(s)
      console.log('reached here')
      if(!socket) return null

      socket.emit('join',{name,room},()=>{
           
      })

      return ()=>{
        s.disconnect()
      }
  },[location])

  

useEffect(()=>{
  if(!socket)return null
  socket.emit('send-code',code)
  

},[code])
useEffect(()=>{
  if(!socket)return null
  socket.on('recieve-code',(code)=>{
    console.log(code)
    setCode(code)
  })
})

    
    
    return (
        <Form>
        <TextArea 
        placeholder='Code Here'   
        defaultValue={code}
        style={{ minHeight: '40rem'}} 
        onChange={(e)=>setCode(e.target.value)}
        />
      </Form>
    )
}

export default File
