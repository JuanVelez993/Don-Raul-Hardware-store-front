
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { Table } from "@mantine/core";
import { receiptType, requestStatus } from "../../state/slices/receiptSlice";
import { useAppDispatch } from "../../state/store";
import { getAllBills } from "../../state/services/billActions/getAllBills";
import { billType, selectBillsFetchError, selectBillsState, selectBillsStatus } from "../../state/slices/billSlice";



const BillList: React.FC = () => {
    const error = useSelector(selectBillsFetchError())
    const status = useSelector(selectBillsStatus())
    const getBills = useSelector(selectBillsState())
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === requestStatus.IDLE) {
            dispatch(getAllBills())
        }
    }, [])

    return (<div>
        <Table striped highlightOnHover>
            <thead>
                <tr>
                    <td>Date:</td>
                    <td>Clerk:</td>
                    <td>Client:</td>
                    <td>Total:</td>
                    <td>Products:</td>
                </tr>
            </thead>

            {!error && getBills.map((bill: billType) => {
                return <tbody key={bill.id}>
                    <tr>
                        <td>{bill.date}</td>
                        <td>{bill.clerk}</td>
                        <td>{bill.client}</td>
                        <td>{bill.total}</td>
                        <td><Table>{bill.products.map(product => {
                            return <tr><td><b>{product.description}</b> price:{product.price}</td></tr>
                        })}</Table>
                        </td>
                    </tr>
                </tbody>
            })}
        </Table>

    </div>)
}

export default BillList