import { useState } from 'react'
import './App.css'
import { AppShell, Button, Group, Navbar } from '@mantine/core'
import CustomNavbar from './components/generics/CustomNavBar';

function App() {
  return (
    <AppShell
      navbar={
        <Navbar
          width={{ base: 300 }}
          height='100vh'
        >
          <h1>Don Raul Store</h1>
          <CustomNavbar />
        </Navbar>
      }
    >
      {/* Your application here */}
    </AppShell>
  );
}

export default App
