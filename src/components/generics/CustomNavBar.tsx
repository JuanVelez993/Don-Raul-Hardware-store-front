import { Button, Group, Navbar } from "@mantine/core";
import { Link } from "react-router-dom";

function CustomNavbar() {
    return (
        <Group
            direction='column'
            spacing='lg'
            grow
            sx={{ margin: 'auto 0 auto 0' }}
        >
            <Navbar.Section>
                <Button variant='subtle' fullWidth>
                    <Link style={{ textDecoration: 'none' }} to="/providers"> Providers</Link>
                </Button>
            </Navbar.Section>

            <Navbar.Section>
                <Button variant='subtle' fullWidth>
                    <Link style={{ textDecoration: 'none' }} to="/products"> Products</Link>
                </Button>
            </Navbar.Section>

            <Navbar.Section>
                <Button variant='subtle' fullWidth>
                    Bills
                </Button>
            </Navbar.Section>
            <Navbar.Section>
                <Button variant='subtle' fullWidth>
                    <Link style={{ textDecoration: 'none' }} to="/receipts"> Receipts</Link> 
                </Button>
            </Navbar.Section>
        </Group>
    )
}

export default CustomNavbar