import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";

import imageUrlBuilder from "@sanity/image-url";

import "./SingleAuthor.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function SingleAuthor(props) {
  const [authorData, setAuthorData] = useState(null);
  let { authorName } = useParams();
  console.log(authorName);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author" && name == "${authorName}"]{
          _id,
        name,
        bio,
        role,
        twitter,
        email,
        authorImage{
          asset->{
            _id,
            url
          }
        },
        "articles": *[_type == "post" && references(^._id)]{
          title,
          featuredImage{
            asset->{
              _id,
              url
            }
          },
          date,
          slug
        },
      }`
      )
      .then((data) => setAuthorData(data[0]));
  }, [authorName]);

  console.log(authorData);

  if (!authorData) return <div>Loading...</div>;

  return (
    <section className="outer-container">
      <div className="top">
        <div className="author-info-box">
          <div className="author-img-box">
            <h1>{authorData.name}</h1>
            <img
              src={urlFor(authorData.authorImage).width().url()}
              alt="Author is Doug"
            />
          </div>
          <div className="author-bio-box">
            <BlockContent
              blocks={authorData.bio}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>
        </div>
        <div className="contact-info-box">
          <h2>Contact Info:</h2>
          <div className="links">
            <i className="im im-mail">
              <a href={`mailto:${authorData.email}`}>{authorData.email}</a>
            </i>
            <i className="im im-twitter">
              <a href={`${authorData.twitter}`}>
                {`@${authorData.twitter.slice(20)}`}
              </a>
            </i>
          </div>
        </div>
      </div>
      <div className="bottom">
        {authorData.articles &&
          authorData.articles.map((post, index) => (
            <div key={index}>
              <Link to={"/posts/" + post.slug.current}>
                <img src={urlFor(post.featuredImage).width().url()} alt="" />
                <div className="post-info-box">
                  <p>{post.title}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}

export default SingleAuthor;
