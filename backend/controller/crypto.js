const axios = require('axios');

const getData = async (req, res) => {
    try {
        let {search} = req.params;
        console.log(search);
        if ( search !== undefined && search !== null){
            console.log(search);
            let query = search.length > 3 ? 'baseId' : 'baseSymbol';
            let request = await axios.get(`http://api.coincap.io/v2/markets?${query}=${search}&quoteSymbol=USD&limit=1`);
            const { data } = request.data;
            console.log(data[0]);
            if (data.length) {
                    const { priceUsd: price,  baseSymbol: symbol} = data[0];
                    res.status(200).json({ price , symbol });
            }
            else
                res.status(400).json();
        }else {
             res.status(400).json({ message: 'Search parameter was not entered.' });
        }
    }catch (e) {
        throw res.status(400).json({ message: e.message });
    }
};

module.exports = {
    getData
};