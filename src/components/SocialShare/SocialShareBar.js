import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  TelegramShareButton,
  EmailShareButton,
  EmailIcon,
  TwitterIcon,
  TelegramIcon,
  FacebookIcon,
  RedditIcon,
} from "react-share";

import "./SocialShareBar.css";

function SocialShareBar(props) {
  return (
    <section className="social-share-box">
      <FacebookShareButton url={window.location.href} quote={props.excerpt}>
        <FacebookIcon size={36} round={false} borderRadius={12} />
      </FacebookShareButton>
      <TwitterShareButton url={window.location.href} title={props.title}>
        <TwitterIcon size={36} round={false} borderRadius={12} />
      </TwitterShareButton>
      <TelegramShareButton>
        <TelegramIcon size={36} round={false} borderRadius={12} />
      </TelegramShareButton>
      <RedditShareButton url={window.location.href} title={props.title}>
        <RedditIcon size={36} round={false} borderRadius={12} />
      </RedditShareButton>
      <EmailShareButton url={window.location.href} subject={props.title}>
        <EmailIcon size={36} round={false} borderRadius={12} />
      </EmailShareButton>
    </section>
  );
}

export default SocialShareBar;
