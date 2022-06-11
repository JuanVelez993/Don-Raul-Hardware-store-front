import { useState } from 'react'
import './App.css'
import { AppShell, Button, Navbar } from '@mantine/core'
import CustomNavbar from './components/generics/CustomNavBar';
import ProviderList from './components/provider/ProviderList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ProductList from './components/products/ProductList';
import UpdateProduct from './components/products/UpdateProduct';
import ReceiptList from './components/receipt/ReceiptList';
import ReceiptForm from './components/receipt/ReceiptForm';
import StarterPage from './components/login/StarterPage';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';

function App() {
  const { user } = useSelector((state: RootState) => state.auth)
  return (
    <BrowserRouter>
      {user == null ?
        <StarterPage />
      :
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
      <Routes>
          <Route path="/" element={<StarterPage />} />
          <Route path="/providers" element={<ProviderList />}/>
          <Route path="/products" element={<ProductList />} />
          <Route path="/updateProduct" element={<UpdateProduct/>} />
          <Route path="/receipts" element={<ReceiptList />} />
          <Route path="/saveReceipt" element={<ReceiptForm />} />

      </Routes>
      </AppShell>}
    </BrowserRouter>
  );
}

export default App
