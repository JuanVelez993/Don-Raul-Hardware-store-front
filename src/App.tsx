import { useState } from 'react'
import './App.css'
import { AppShell, Navbar } from '@mantine/core'
import CustomNavbar from './components/generics/CustomNavBar';
import ProviderList from './components/provider/ProviderList';

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
      <ProviderList/>
    </AppShell>
  );
}

export default App
