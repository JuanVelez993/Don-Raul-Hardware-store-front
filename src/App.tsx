import { useState } from 'react'
import './App.css'
import { AppShell, Navbar } from '@mantine/core'
import CustomNavbar from './components/generics/CustomNavBar';
import ProviderList from './components/provider/ProviderList';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './components/products/ProductList';

function App() {
  return (
    <BrowserRouter>
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
      ><Routes>
          <Route path="/providers" element={<ProviderList />}/>
          <Route path="/products" element={<ProductList />} />

      </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App
