import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

function Nav() {
    return (
      <>
        <Menu fixed='top' inverted color='grey' size='huge'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' name='Home' />
                <Menu.Menu position='right'>
                    <Menu.Item  as={NavLink} exact to='/about' name='About' />
                    <Menu.Item as={NavLink} exact to='/pokemon' name='Pokemon' />
                </Menu.Menu>
            </Container>
        </Menu>
      </>
    );
  }

  export default Nav;