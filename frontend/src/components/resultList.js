
import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./result.css";

const ResultList = (props) => {
    const [symbol, setSymbol] = useState("");
    const [price, setPrice] = useState("");
    useEffect(()=>{
        axios.get(`http://localhost:3000/search/${props.search}`)
            .then((res)=> res.data)
            .then((data) => {
                let {symbol: symbol1, price: price1} = data;
                setSymbol(symbol1);
                setPrice(parseFloat(price1).toFixed(2));
                return;
            })
            .catch(()=>{
                setSymbol("");
                setPrice("");
            });
    });
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