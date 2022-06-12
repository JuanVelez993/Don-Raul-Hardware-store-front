import React, { useEffect } from 'react'
import { Anchor, Button, Table } from '@mantine/core';
import { useAppDispatch } from '../../state/store'
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../state/services/productActions/getAllProducts';
import { requestStatus, productType, selectProductsFetchError, selectProductsState, selectProductsStatus } from '../../state/slices/productSlice';
import ProductForm from '../products/ProductForm';
import { deleteProduct } from '../../state/services/productActions/deleteProduct';
import { Link } from 'react-router-dom';
import { addProduct} from '../../state/slices/shoppingCartSlice';



const ProductList: React.FunctionComponent = () => {

    const dispatch = useAppDispatch();
    const onDelete = (product: productType) => {
        dispatch(deleteProduct(product))
    }
    const onAdd = (product: productType)=>{
        dispatch(addProduct(product))

    }


    useEffect(() => {
        if (status === requestStatus.IDLE) {
            dispatch(getAllProducts())
        }
    }, [dispatch])

    const error = useSelector(selectProductsFetchError())
    const status = useSelector(selectProductsStatus())
    const getProducts = useSelector(selectProductsState())

    return (<div>
        <Table striped highlightOnHover>
            <thead>
                <tr>
                    <td>Description:</td>
                    <td>Stock:</td>
                    <td>Price:</td>
                    <td>Provider:</td>
                    <td>Provider Phone:</td>
                    <td>Purchase</td>
                    <td>Edit</td>
                    <td>Delete</td>
                    <td>Add:</td>
                    

                </tr>
            </thead>

            {!error && getProducts.map((product: productType) => {
                return <tbody key={product.id}>
                    <tr>
                        <td>{product.description}</td>
                        <td>{product.currentInventory}</td>
                        <td>{product.price}</td>
                        <td>{product.provider.name}</td>
                        <td>{product.provider.phone}</td>
                        <td><Anchor component={Link} to="/saveReceipt" state={{ myState: product.id }}>
                              Purchase
                        </Anchor></td>
                        <td><Button variant='subtle' color="cyan" fullWidth>
                            <Link style={{ textDecoration: 'none' }} to="/updateProduct" state={{ myState: product.id}}> Edit</Link>
                        </Button></td>
                        <td><Button color="red" onClick={()=>onDelete(product)}>
                            X
                        </Button></td>
                        <td><Button color="teal" onClick={()=>onAdd(product)}>
                            Add to cart
                        </Button></td>
                        
                    </tr>
                </tbody>
            })}
        </Table>
        <ProductForm/>
        
    </div>)

}


export default ProductList


