
import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./result.css";

const ResultList = (props) => {
    const [symbol, setSymbol] = useState("");
    const [price, setPrice] = useState("");
    const getServerData = async (search) => {
        try {
            let { data :{symbol, price} } = await axios.get(`http://localhost:3000/search/${search}`);
            setSymbol(symbol);
            setPrice(parseFloat(price).toFixed(2));
        } catch (error) {
            setSymbol("");
            setPrice("");
        }
        
    };
    useEffect(()=>{
        
          getServerData(props.search);
         
            
    },[props.search]);
    return (
        <div>
            <ul className="ResultList">
                <li>
                    Symbole :&nbsp;   
                    {symbol}
                </li>
                <li>
                Price: &nbsp;
                    {price}
                </li>
            </ul>
        </div>
    );
};

ResultList.propTypes = {
    search: PropTypes.string.isRequired

};


export default ResultList;