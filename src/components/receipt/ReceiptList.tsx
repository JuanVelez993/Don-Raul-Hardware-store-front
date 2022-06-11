
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { Table } from "@mantine/core";
import { getAllReceipts } from "../../state/services/receiptServices/getAllReceipts";
import { receiptType, requestStatus, selectReceiptsFetchError, selectReceiptsState, selectReceiptsStatus } from "../../state/slices/receiptSlice";
import { useAppDispatch } from "../../state/store";



const ReceiptList: React.FC = () => {
    const error = useSelector(selectReceiptsFetchError())
    const status = useSelector(selectReceiptsStatus())
    const getReceipts = useSelector(selectReceiptsState()) 
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === requestStatus.IDLE) {
            dispatch(getAllReceipts())
        }
    }, [])

    return (<div>
        <Table striped highlightOnHover>
            <thead>
                <tr>
                    <td>Date:</td>
                    <td>Product:</td>
                    <td>Amount:</td>
                    <td>Provider:</td>
                </tr>
            </thead>

            {!error && getReceipts.map((receipt:receiptType) => {
                return <tbody key={receipt.id}>
                    <tr>
                        <td>{receipt.date}</td>
                        <td>{receipt.description}</td>
                        <td>{receipt.units}</td>
                        <td>{receipt.provider.name}</td>
                    </tr>
                </tbody>
            })}
        </Table>
        
    </div>)
}

export default ReceiptList