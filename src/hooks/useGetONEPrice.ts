import { useEffect, useState } from 'react'
import axios from 'axios';

type ApiResponse = {
  prices: {
    [key: string]: string
  }
  update_at: string
}

let grailApi = "https://api.binance.com/api/v3/ticker/price?symbol=ONEUSDT"

const useGetONEPrice = () => {
  const [data, setData] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {

        setInterval(async function(){

            let result = await axios(grailApi);

            setData(result.data.price)

        }, 5000); 
        
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [])

  return data
}

export default useGetONEPrice
