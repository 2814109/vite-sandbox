import {useState,useEffect} from "react"

const fetcher = (url: string) =>async():Promise<string> =>  {
    const response = await fetch(url)
    const body = await response.json()
    return body.name as string
}

export const useDataFetch= (url :string) =>{
const [data,setData] =useState<string>()
useEffect(() => {
    (async()=>{
        const result = await withReader({ exec: fetcher(url) })
        setData(() => result)
    })()
},[url])

return {result: data}
}
type Props = {
    exec : () => Promise<string>
}
const withReader = async({exec}:Props) => {
try{
    return await exec()
}catch(err){
    throw new Error(err as string)
}
}