import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    // giving empty object, because if fetch call failed then it returns atleast an empty object
    const [data, setData] = useState({})

    useEffect(() => {
        const url = `https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`;


        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))

        console.log(data)


    }, [currency])
    
    console.log(data)
    return data
}

export default useCurrencyInfo;