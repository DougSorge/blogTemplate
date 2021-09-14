import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import sanityClient from "../../client";
import FeaturedSection from "./FeaturedSection";
import imageUrlBuilder from "@sanity/image-url";
import { SwiperSlide } from "swiper/react";

import "./Home.css";

export default function Home() {
  const [featuredPosts, setFeaturedPosts] = useState(null);

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && featured == true]{
        title,
        slug,
        excerpt,
        "name": author->name,
        featuredImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setFeaturedPosts(data))
      .catch(console.error);
  }, []);

  console.log(featuredPosts);
  return (
    <>
      <FeaturedSection>
        {featuredPosts &&
          featuredPosts.map((post, index) => (
            <SwiperSlide key={post.slug.current} className="post-container">
              <Link to={"/posts/" + post.slug.current} key={post.slug.current}>
                <img
                  className="featured-img"
                  src={urlFor(post.featuredImage).width().url()}
                  alt=""
                />
                <div className="post-title-container">
                  <p className="post-title"> {post.title}</p>
                  <p className="post-excerpt"> {post.excerpt}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </FeaturedSection>
    </>
  );
}
