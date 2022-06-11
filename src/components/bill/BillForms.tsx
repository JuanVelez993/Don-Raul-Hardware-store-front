import  React, { useEffect,useState }from 'react';
import { getShoppingCart, shopping } from '../../state/slices/shoppingslice';
import { RootState, useAppDispatch } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux'

interface IAppProps {
}

const BillForms: React.FunctionComponent<IAppProps> = (props) => {

    const dispatch = useAppDispatch();
    const [products1, setProducts] = useState()
    const { products } = useSelector((state: RootState)=> state.shopping);
    console.log("estos son los productos del cart",products)

   

    

  return(
    <div>
       
    </div>
  ) 

};

export default BillForms;
