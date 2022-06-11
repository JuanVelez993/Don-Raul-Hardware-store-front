import { useState } from 'react'
import './App.css'
import { AppShell, Navbar } from '@mantine/core'
import CustomNavbar from './components/generics/CustomNavBar';
import ProviderList from './components/provider/ProviderList';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './components/products/ProductList';
import UpdateProduct from './components/products/UpdateProduct';
import ReceiptList from './components/receipt/ReceiptList';

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
          <Route path="/updateProduct" element={<UpdateProduct/>} />
          <Route path="/receipts" element={<ReceiptList />} />

      </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App
