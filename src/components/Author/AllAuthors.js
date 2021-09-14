import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";

import imageUrlBuilder from "@sanity/image-url";
import "./AllAuthors.css";

function AllAuthors(props) {
  const [authors, setAuthors] = useState([]);

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"] | order(name asc){
              _id,
               name,
               bio,
               role,
               authorImage{
                 asset->{
                   _id,
                   url
                 }
               }
             }`
      )
      .then((data) => setAuthors(data));
  }, []);

  return (
    <>
      <h1 className="author-heading">Meet The Team</h1>
      <div className="author-grid">
        {authors.map((author, index) => (
          <div className="auth-box" key={index}>
            <div className="author-card">
              <div className="auth-info">
                <img
                  className="auth-image"
                  src={urlFor(author.authorImage).width().url()}
                  alt=""
                ></img>
                <div className="auth-info-box">
                  <h2 className="auth-name">{author.name}</h2>
                  <h2>{author.role}</h2>
                  <Link to={`/authors/${author.name}`}>See Articles</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllAuthors;
