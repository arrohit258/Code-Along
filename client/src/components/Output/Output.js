import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"



const Output = ({output,setOutput}) => {
    
    console.log(output,"hi")
    return (
        <Form>
        <TextArea 
        placeholder='Output Here'   
        value={output}
        style={{ minHeight: '40rem'}} 
        
        />
      </Form>
    )
}

export default Output
