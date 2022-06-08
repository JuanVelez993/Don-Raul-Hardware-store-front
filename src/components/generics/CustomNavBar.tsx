import { Button, Group, Navbar } from "@mantine/core";

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
                Providers
                </Button>
            </Navbar.Section>

            <Navbar.Section>
                <Button variant='subtle' fullWidth>
                    Products
                </Button>
            </Navbar.Section>

            <Navbar.Section>
                <Button variant='subtle' fullWidth>
                    Bills
                </Button>
            </Navbar.Section>
            <Navbar.Section>
                <Button variant='subtle' fullWidth>
                    Receipts
                </Button>
            </Navbar.Section>
        </Group>
    )
}

export default CustomNavbar