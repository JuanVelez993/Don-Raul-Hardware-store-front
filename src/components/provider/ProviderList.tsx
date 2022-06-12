import React, { useEffect } from 'react'
import ProviderForm from './ProviderForm';
import { useAppDispatch } from '../../state/store'
import { requestStatus, providerType, selectProvidersFetchError, selectProvidersState, selectProvidersStatus } from '../../state/slices/providerSlice';
import { getAllProviders } from '../../state/services/providerActions/getAllProviders';
import { useSelector } from 'react-redux';
import { Table } from '@mantine/core';



const ProviderList: React.FunctionComponent = () => {

const dispatch = useAppDispatch();


    useEffect(() => {
        if (status === requestStatus.IDLE) {
            dispatch(getAllProviders())
        }
    }, [dispatch])

    const error = useSelector(selectProvidersFetchError())
    const status = useSelector(selectProvidersStatus())
    const getProviders = useSelector(selectProvidersState()) 

    return (<div>
        <Table striped highlightOnHover>
            <thead>
                <tr>
                    <td>Name:</td>
                    <td>Identification:</td>
                    <td>Phone:</td>
                </tr>
            </thead>

           {!error && getProviders.map((provider:providerType) => {
                return <tbody key={provider.id}>
                    <tr>
                        <td>{provider.name}</td>
                        <td>{provider.identification}</td>
                        <td>{provider.phone}</td>
                    </tr>
                </tbody>
            })}
        </Table>
        <ProviderForm />
    </div>)

}


export default ProviderList