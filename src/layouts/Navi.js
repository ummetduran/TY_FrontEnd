import React, {useState} from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut(params) {
    setIsAuthenticated(false)
  }
    return (
        <div>
           <Menu inverted fixed="top">
               <Container>
               <Menu.Item
          name='home'
         
        />
        <Menu.Item
          name='messages'
      
        />

        <Menu.Menu position='right'>
        <CartSummary/>
          {
            isAuthenticated?  <SignedIn signOut = {handleSignOut}/> : <SignedOut/>
          }
          
          
        </Menu.Menu>
               </Container>
      
      </Menu>
        </div>
    )
}
