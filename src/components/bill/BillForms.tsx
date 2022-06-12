import  React, { useEffect,useState }from 'react';
import { RootState, useAppDispatch } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mantine/core';
import { productType } from '../../state/slices/productSlice';
import { updateProduct } from '../../state/services/productServices/updateProduct';
import moment from 'moment';
import { billType } from '../../state/slices/billSlice';
import { nanoid } from '@reduxjs/toolkit';
import { saveBill } from '../../state/services/billServices/saveBill';
import { clearShoppingCart } from '../../state/slices/shoppingCartSlice';

interface IAppProps {
}

const BillForms: React.FunctionComponent<IAppProps> = (props) => {

    const dispatch = useAppDispatch();
    const [client, setClient] = useState("");
    const [clerk, setClerk] = useState("");
    const { products } = useSelector((state: RootState)=> state.shopping);
    console.log("estos son los productos del cart",products)

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
              <label >Provider:</label>
              <div >
                 
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
