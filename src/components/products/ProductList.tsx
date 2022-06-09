import React, { useEffect } from 'react'
import { Table } from '@mantine/core';
import { useAppDispatch } from '../../state/store'
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../state/services/productServices/getAllProducts';
import { requestStatus, productType, selectProductsFetchError, selectProductsState, selectProductsStatus } from '../../state/productSlices';



const ProductList: React.FunctionComponent = () => {

    const dispatch = useAppDispatch();


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
                        <td><button type='submit' className="btn btn-success mb-4">
                            Edit
                        </button></td>
                        <td><button type='submit' className="btn btn-success mb-4">
                            Delete
                        </button></td>
                    </tr>
                </tbody>
            })}
        </Table>
        
    </div>)

}


export default ProductList