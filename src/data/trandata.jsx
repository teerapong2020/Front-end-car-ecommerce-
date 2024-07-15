import { getTransaction } from "../components/API/API_Transaction";

export const Trandata = async()=>{
    const res = await getTransaction()
    return res
}