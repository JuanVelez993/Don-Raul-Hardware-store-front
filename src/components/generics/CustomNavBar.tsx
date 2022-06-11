import { Anchor, Button, Group, Navbar, Title } from "@mantine/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../state/store";


function CustomNavbar() {
    const { user } = useSelector((state: RootState) => state.auth)
    
    return (
        <div>
            <Title order={1}  style={{color:"white"}}>Don Raul's Hardware Store</Title>
        <br/>
        <Group
            position="center"
            direction='column'
            spacing='lg'
            grow
            sx={{ margin: 'auto 0 auto 0' }}
        > 
            <Navbar.Section>
                <Anchor component={Link} to="/providers">
                 Providers
                 </Anchor>
            </Navbar.Section>

            <Navbar.Section>
                <Anchor component={Link} to="/products">
                Products
                </Anchor>
            </Navbar.Section>

            <Navbar.Section>
                <Anchor component={Link} to="/bills">
                Bills
                </Anchor>
            </Navbar.Section>
            <Navbar.Section>
                <Anchor component={Link} to="/receipts">
                Receipts 
                </Anchor>
            </Navbar.Section>
        </Group>
        </div>
    )
}

export default CustomNavbar