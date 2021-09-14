import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";

import "./PostsFilter.css";

function PostsFilter(props) {
  const [categories, getCategories] = useState(null);

  function handleChange(e) {
    props.getCategory(e.target.value);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "category"]{
        title
    }`
      )
      .then((data) => getCategories(data))
      .catch(console.error);
  }, []);

  let allCats = [];
  if (categories) {
    allCats = categories.map((elem) => elem.title);
  }

  return (
    <div className="filter-container">
      <label for="postsFilter">Filter By Category</label>
      <select id="postFilter" onChange={handleChange}>
        <option value="">All</option>
        {allCats.map((category, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PostsFilter;
