import { useState } from "react";
const useSentRequest=(requestConfig,handleData)=>{
    const[isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState('');
    const sendRequest=async()=>{
        try{
            setIsLoading(true)
          const response = await fetch(requestConfig.url?requestConfig.url:'',
            {method:requestConfig.method?requestConfig.method:'GET',
                body:requestConfig.body?JSON.stringify(requestConfig.body):null,
                headers:requestConfig.headers?requestConfig.headers:''})
                const data = await response.json()
                handleData(data);
                setIsLoading(false);

          }
          catch(error){
            setError(error.message);
            setIsLoading(false)
          }
    }
    return {isLoading,error,sendRequest}
}
export default useSentRequest;