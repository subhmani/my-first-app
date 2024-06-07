const useSentRequest=(requestConfig,handleData)=>{
    const[isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState('');
    const sendRequest=()=>{
        try{
            setIsLoading(true)
          const response = await fetch(requestConfig.url,
            {method:requestConfig.method,
                body:JSON.stringify(requestConfig.body),
                headers:requestConfig.headers})
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