import React, {useState} from "react";
import "./App.css";
import Search from "./components/searchField";
import Result from "./components/resultList";

function App() {
    const [search, setSearch] = useState("");
    const searchHandler = (e) => {
        setSearch(e.target.value);
    };
    return (
        <div className="container mt-4">
            <div className="card border-primary mb-3" >
                <div className="card-header">Crypto Market</div>
                <div className="card-body text-primary">
                    <Search search={search} searchHandler={searchHandler}/>
                    <Result search={search}/>
                </div>
            </div>
        </div>
    );
}

export default App;
