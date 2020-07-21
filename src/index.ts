import DOMEventHandler from "./DOMEventHandler";
import AbstractShareButton from "./AbstractShareButton";
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonPrint from "./ShareButtonPrint";

const eventHandler = new DOMEventHandler();

const facebook: AbstractShareButton = new ShareButtonFacebook(
  eventHandler,
  ".btn-facebook",
  "manganime.digital"
);
const linkedin: AbstractShareButton = new ShareButtonLinkedin(
  eventHandler,
  ".btn-linkedin",
  "manganime.digital"
);
const twitter: AbstractShareButton = new ShareButtonTwitter(
  eventHandler,
  ".btn-twitter",
  "manganime.digital"
);
const print: AbstractShareButton = new ShareButtonPrint(
  eventHandler,
  ".btn-print"
);

facebook.bind();
twitter.bind();
linkedin.bind();
print.bind();
