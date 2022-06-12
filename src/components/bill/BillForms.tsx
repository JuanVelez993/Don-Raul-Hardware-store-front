import  React, { useEffect,useState }from 'react';
import { RootState, useAppDispatch } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mantine/core';
import { productType } from '../../state/slices/productSlice';
import { updateProduct } from '../../state/services/productServices/updateProduct';

interface IAppProps {
}

const BillForms: React.FunctionComponent<IAppProps> = (props) => {

    const dispatch = useAppDispatch();
    const [client, setclient] = useState("");
    const [clerk, setClerk] = useState("");
    const [products1, setProducts] = useState()
    const { products } = useSelector((state: RootState)=> state.shopping);
    console.log("estos son los productos del cart",products)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        products.forEach(shoppingProduct => {
            const product = shoppingProduct.product;
            let productUpdated: productType = {
                ...product,
                currentInventory: product.currentInventory - shoppingProduct.quantity
            }
            dispatch(updateProduct(productUpdated))
        })
        
    }

   

    

  return(
      <form onSubmit={(e) => handleSubmit(e)} >
          <div >
              <label >Client:</label>
              <div >
                  <input type="text" name="name" id="name" placeholder="Name"  />
              </div>
          </div>
          <br />
          <div >
              <label >Clerk:</label>
              <div >
                  <input type="text" name="name" id="name" placeholder="Name" />
              </div>
          </div>
          <br />
          <div >
              <label >Min Inventory:</label>
              <div >
                  
              </div>
          </div>
          <br />
          <div >
              <label >Max Inventory:</label>
              <div >
                
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

export default BillForms;
