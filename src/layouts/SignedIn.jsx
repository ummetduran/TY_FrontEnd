import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1445873302224846850/xHmnk1n0_400x400.jpg"/>
                <Dropdown pointing="top left" text="Ümmet">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon = "info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon = "sign-out"/>

                        
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
