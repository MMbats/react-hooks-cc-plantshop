import React from "react";

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={giveTerm}
        onChange={takeChange}
      />
    </div>
  );
}

export default Search;