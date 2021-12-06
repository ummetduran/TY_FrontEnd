import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import UserService from '../services/userService';
import { toast } from "react-toastify";
export default function SignIn() {

  
  const handleAddUser = (user) => {
    let userService = UserService()
    userService.addUser(user)
    toast.success(`${user.userName} kayıt edildi!`)
  }
    return (
      
        <Form>
          <Form.Field fluid>
            <label position="left">User Name</label>
            <input name ="userName" placeholder="User Name" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input  name ="email" placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input  name ="password" placeholder="Password" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button onclick = {() => handleAddUser({username,email})} type="submit">Submit</Button>
        </Form>
      
    );
}
