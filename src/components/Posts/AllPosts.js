import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import PostsFilter from "./PostsFilter.js";

import "./AllPosts.css";

export default function AllPosts() {
  const [allPosts, setAllPosts] = useState(null);
  const [category, setCategory] = useState("");

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(date desc) {
        title,
        featured,
        slug,
        date,
        excerpt,
        "categories": categories[]->title,
        "name": author->name,
        featuredImage{
          asset->{
          _id,
          url,
        },
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  function getCategory(filteredCategory) {
    setCategory(filteredCategory);
  }

  function RenderAllPosts(props) {
    return (
      <div className="posts-grid">
        {allPosts &&
          allPosts.map((post, index) => (
            <div className="grid-post-card" key={post.slug.current}>
              <Link to={"/posts/" + post.slug.current}>
                <img
                  className="grid-image"
                  src={urlFor(post.featuredImage).width().url()}
                  alt=""
                />
                <div className="grid-post-info-box">
                  <h2 className="grid-post-title">{post.title}</h2>
                  <p className="grid-post-excerpt">{post.excerpt}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    );
  }

  function RenderFilteredList(props) {
    let filteredPosts = props.allPosts.filter((post, index) =>
      post.categories.includes(props.category)
    );

    return (
      <div className="posts-grid">
        {filteredPosts &&
          filteredPosts.map((post, index) => (
            <div className="grid-post-card" key={post.slug.current}>
              <Link to={"/posts/" + post.slug.current}>
                <img
                  className="grid-image"
                  src={urlFor(post.featuredImage).width().url()}
                  alt=""
                />
                <div className="grid-post-info-box">
                  <h2 className="grid-post-title">{post.title}</h2>
                  <p className="grid-post-excerpt">{post.excerpt}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    );
  }

  if (category === "") {
    return (
      <>
        <PostsFilter getCategory={getCategory} />
        <RenderAllPosts category={category} allPosts={allPosts} />
      </>
    );
  } else {
    return (
      <>
        <PostsFilter getCategory={getCategory} />
        <RenderFilteredList allPosts={allPosts} category={category} />
      </>
    );
  }
}
