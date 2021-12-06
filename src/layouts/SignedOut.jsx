import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
            <Button onClick = {props.signIn} primary>Giriş Yap</Button>
            <Button as={NavLink} to="/signUp" primary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}
