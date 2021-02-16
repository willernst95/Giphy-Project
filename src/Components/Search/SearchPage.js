import React, {useState} from "react";

const SearchPage = (props) => {
    const [query, setQuery] = useState("");
    const [rating, setRating] = useState("pg");
    const [limit, setLimit] = useState("25");
    const [gifs, setGifs] = useState([]);

    function getGifs(query, rating, limit){
        const key = "f076uYbqTDQKP8sCjrD5At6AoI0MHkMQ&q";
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=${limit}&rating=${rating}`
    }
    // Inputs / Button / Function (here or elsewhere to trigger the fetch call)
    // query, raiting, limit, gifs
    return <>
        <div className="form-container">
        <label htmlFor = "query">Search</label>
        <input value={query} onChange={e => setQuery(e.target.value)} type="text" id="query" />
        </div>
        <div className="form-container">
        <label htmlFor = "rating">Rating</label>
        <select value={rating} onChange={e => setRating(e.target.value)}
            id="rating">
            <option value="g">G</option>
            <option value="pg">PG</option>
            <option value="pg-13">PG-13</option>
            <option value="r">R</option>
        </select>
        </div>
        <div className="form-container">
        <label htmlFor = "limit">Limit</label>
        <select value={limit} onChange={e => setLimit(e.target.value)}
            id="limit">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
        </div>
        <button onClick = {()=> getGifs(query, rating, limit)}>
        Search
        </button>

    </>
}

export default SearchPage