import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import UserService from '../services/userService';
import { toast } from "react-toastify";
import { Route, Router } from 'react-router'
import ProductList from '../pages/ProductList'

export default function SignIn() {
  const user= {}

  const routeChange = () => {

      <Route exact path = "/" element={<ProductList/>}/>  

   
      
  
  }
  const handleAddUser = () => {
    
    console.log("user => ", user)

    let userService = new UserService()
    userService.addUser(user)
    toast.success(`${user.fullName} kayıt edildi!`)
    routeChange()
  }
  const handleChange = (event) => {
    
    if(event.target.name =='fullName'){
        user.fullName = event.target.value
    }else{
      user.email = event.target.value
    }
    

  
    console.log(user)
    console.log(event.target.name, event.target.value)
  }
    return (
        
        <Form onSubmit={handleAddUser}>
          <Form.Field>
            <label position="left">User Name</label>
            <input name ="fullName" value = {user.fullName} onChange={handleChange} placeholder="User Name" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input  name ="email" value = {user.email} onChange={handleChange} placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input  name ="password" placeholder="Password" type = "password"/>
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      
    );
}
