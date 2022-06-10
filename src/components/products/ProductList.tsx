import React, { useEffect } from 'react'
import { Table } from '@mantine/core';
import { useAppDispatch } from '../../state/store'
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../state/services/productServices/getAllProducts';
import { requestStatus, productType, selectProductsFetchError, selectProductsState, selectProductsStatus } from '../../state/productSlice';
import ProductForm from '../products/ProductForm';
import { deleteProduct } from '../../state/services/productServices/deleteProduct';



const ProductList: React.FunctionComponent = () => {

    const dispatch = useAppDispatch();
    const onDelete = (product: productType) => {
        dispatch(deleteProduct(product))
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
                    <td>Edit</td>
                    <td>Delete</td>
                    

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
                        <td><button  >
                            Edit
                        </button></td>
                        <td><button onClick={()=>onDelete(product)}>
                            Delete
                        </button></td>
                    </tr>
                </tbody>
            })}
        </Table>
        <ProductForm/>
        
    </div>)

}


export default ProductList