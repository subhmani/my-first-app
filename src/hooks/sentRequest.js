const useSentRequest=(requestConfig,handleData)=>{
    const[isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState('');
    const sendRequest=()=>{
        try{
            setIsLoading(true)
          const response = await fetch(requestConfig.url,
            {method:requestConfig.method,
                body:JSON.stringify(requestConfig.body),
                headers:requestConfig.headers
            }
          )
          
          const data = await response.json
          handleData();
              setIsLoading(false);
         
          }
          catch(error){
            setError(error.message);
            setIsLoading(false)
          }
    }
}
export default useSentRequest;