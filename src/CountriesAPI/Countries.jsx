import React from "react"
import { useState, useEffect } from "react";
import axios from 'axios'

export const Countries=()=> {

    const [items, setItems] = useState([]);
    const [searchParam] = useState(["capital", "name", "numericCode"]);


    const getData=async()=>{    
        const result=await axios.get("https://restcountries.com/v3.1/all/");
        setItems(result.data);
        console.log(result.data)
}

    useEffect( () => {
        getData()
    }, []);
    return (
        <dir>
               {/* {const conti = new Set(item.continents)} */}
            <label htmlFor="">Continent</label>
            <select>
                {items.map(item=><option>{[item.continents]}</option>)}
            </select>
           </dir>
        );
    }


