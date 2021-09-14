import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import SocialShareBar from "../SocialShare/SocialShareBar.js";

import "./Article.css";
import "./OnePost.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Article() {
  const [postData, setPostData] = useState();
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          featuredImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "categories": categories[]->title,
        "name": author->name,
        "authorImage": author->authorImage       
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  console.log(postData);

  if (!postData) return <div>Loading...</div>;

  return (
    <article className="article-container">
      <div className="title-container">
        <h2 className="article-title">{postData.title}</h2>
        <p className="author">Written by {postData.name}</p>
        <SocialShareBar />
      </div>

      <img
        className="featured-image"
        src={urlFor(postData.featuredImage).width().url()}
        alt=""
      />
      <div className="main-content">
        <BlockContent
          className="article-content"
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
        <div className="author-cat-box">
          <div class="author-box">
            <img
              className="author-image"
              src={urlFor(postData.authorImage).width(100).url()}
              alt=""
            />
            <Link to={`/authors/${postData.name}`}>
              <h4 className="author-name">{postData.name}</h4>
            </Link>
          </div>
          <div className="category-container">
            {postData.categories &&
              postData.categories.map((category, index) => {
                return (
                  <a className="category-link" href="/">
                    {category}
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </article>
  );
}
