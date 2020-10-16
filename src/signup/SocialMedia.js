import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialMedia = () => {
  return (
    <div className="social-media-mobile-view">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/beresearcherbd/"
      >
        <FontAwesomeIcon size="lg" icon={faFacebook} />
      </a>
      <a href="https://www.youtube.com/c/MdSabirHossain?fbclid=IwAR3jD7mrlC1Y3ogaXoNKYizclz2gC8g4RW3hOezk_6Wib2-JHJ8xUH8Ow5o">
        <FontAwesomeIcon size="lg" icon={faYoutube} />
      </a>
      <a href="mailto:beresearcherbd@gmail.com">
        <FontAwesomeIcon size="lg" icon={faEnvelope} />
      </a>
      {/* <a href="https://www.google.com">
        <FontAwesomeIcon size="lg" icon={faGoogle} />
      </a> */}
    </div>
  );
};

export default SocialMedia;
