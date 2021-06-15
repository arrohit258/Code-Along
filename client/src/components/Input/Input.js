import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"



const InputFile = ({input,setInput}) => {
    
    
    return (
        <Form>
        <TextArea 
        placeholder='Input Here'   
        defaultValue={input}
        style={{ minHeight: '40rem'}} 
        onChange={(e)=>setInput(e.target.value)}
        />
      </Form>
    )
}

export default InputFile
