import axios from "axios"
import { useEffect, useState } from "react"

const useFetchDetail = (endpoint) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    
    const fetchData = async() => {
        try {
            setLoading(true)
            const response = await axios.get(endpoint)
            setLoading(false)
          setData(response.data)
          // console.log(response.data.results)
        } catch (exception) {
          console.log(exception)
        }
    }
    useEffect(() => {
       fetchData() 
    }, [])
  
    return { data,loading }
}
export default useFetchDetail