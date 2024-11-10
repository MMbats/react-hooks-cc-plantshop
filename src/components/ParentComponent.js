// ParentComponent.js
import React, { useState } from "react";
import Search from "./Search"; // Ensure Search.js is in the same directory

function ParentComponent() {
  const [submittedSearch, setSubmittedSearch] = useState("");

  return (
    <div>
      <h1>Plant Search</h1>
      <Search setSubmittedSearch={setSubmittedSearch} />
      <p>Search Term: {submittedSearch}</p>
    </div>
  );
}

export default ParentComponent;
