import React, { useState } from "react";

const SearchPage = (props) => {
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState("pg");
  const [limit, setLimit] = useState(25);
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState("");

  // Function (here or elsewhere) to actually trigger the fetch call
  async function getGifs(query, rating, limit) {
    const key = "Df076uYbqTDQKP8sCjrD5At6AoI0MHkMQ";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=${limit}&rating=${rating}`;
    try {
      setError("");
      let response = await fetch(url);
      let json = await response.json();
      let resGifs = json.data.map((val) => {
        return { id: val.id, title: val.title, url: val.images.original.url };
      });
      setGifs(resGifs);
    } catch (e) {
      setError("Something went wrong. Please try again later!");
      setGifs([]);
    }
  }

  return (
    <>
      <div className="form-container">
        <label htmlFor="query">Search</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          id="query"
        />
      </div>
      <div className="form-container">
        <label htmlFor="rating">Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          id="rating"
        >
          <option value="g">G</option>
          <option value="pg">PG</option>
          <option value="pg-13">PG-13</option>
          <option value="r">R</option>
        </select>
      </div>
      <div className="form-container">
        <label htmlFor="limit">Limit</label>
        <select
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          id="limit"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>
      <button onClick={() => getGifs(query, rating, limit)}>Search</button>
      {error.length > 0 && <h1>{error}</h1>}
      {error.length === 0 && gifs.map((v) => <img key={v.id} src={v.url} />)}
    </>
  );
};

export default SearchPage;