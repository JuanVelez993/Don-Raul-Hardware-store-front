import  React, { useEffect,useState }from 'react';
import { RootState, useAppDispatch } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table } from '@mantine/core';
import { productType } from '../../state/slices/productSlice';
import { updateProduct } from '../../state/services/productActions/updateProduct';
import moment from 'moment';
import { billType } from '../../state/slices/billSlice';
import { nanoid } from '@reduxjs/toolkit';
import { saveBill } from '../../state/services/billActions/saveBill';
import { clearShoppingCart } from '../../state/slices/shoppingCartSlice';
import { useNavigate } from 'react-router-dom';

interface IAppProps {
}

const BillForms: React.FunctionComponent<IAppProps> = (props) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const [client, setClient] = useState("");
    const [clerk, setClerk] = useState("");
    const { products } = useSelector((state: RootState)=> state.shopping);
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (client && clerk) {

            let saveDate = moment(new Date()).format("DD/MM/YYYY HH:mm:ss")
            const newBill: billType = {
                id: nanoid(),
                client: client,
                clerk: clerk,
                date: saveDate,
                products: products.map(product => product.product),
                total: products.reduce((aum, product) => product.product.price + aum, 0),
            }
            dispatch(saveBill(newBill))
        
        }
        products.forEach(shoppingProduct => {
            
            const product = shoppingProduct.product;
            let productUpdated: productType = {
                ...product,
                currentInventory: product.currentInventory - shoppingProduct.quantity
            }
            dispatch(updateProduct(productUpdated))
        })
        dispatch(clearShoppingCart())
        navigate("/bills")
        
    }

   

    

  return(
      <form onSubmit={(e) => handleSubmit(e)} >
          <div >
              <label >Client:</label>
              <div >
                  <input type="text" name="client" id="client" placeholder="Name" value={client} onChange={(e) => setClient(e.target.value)}  />
              </div>
          </div>
          <br />
          <div >
              <label >Clerk:</label>
              <div >
                  <input type="text" name="clerk" id="clerk" placeholder="Name" value={clerk} onChange={(e) => setClerk(e.target.value)} />
              </div>
          </div>
          <br />
          <div >
              <Table striped highlightOnHover horizontalSpacing="md" verticalSpacing="sm" fontSize="md">
                  <thead>
                      <tr>
                          <td>Product:</td>
                          <td>Price:</td>
                          <td>Quantity:</td>
                          
                      </tr>
                  </thead>{products.map(shoppingProduct=> {
                  return <tr>
                        <td>{shoppingProduct.product.description}</td>
                        <td> {shoppingProduct.product.price}</td>
                        <td>{shoppingProduct.quantity}</td>
                        </tr>
              })}</Table>
          </div>
          <br />
          <div >
              <label >Total Price:</label>
              <div >
                  <input disabled type='number' value={products.reduce((aum, product) => product.product.price + aum, 0)} />
              </div>
          </div>
          <br />
          <div>
              <Button type='submit'>
                  Create Bill
              </Button>
          </div>
      </form>
  ) 

};

export default BillForms
