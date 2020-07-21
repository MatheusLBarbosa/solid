import AbstractShareButton from "./AbstractShareButton";
import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonPrint from './ShareButtonPrint'

const facebook: AbstractShareButton = new ShareButtonFacebook('.btn-facebook', 'manganime.digital');
const linkedin: AbstractShareButton = new ShareButtonLinkedin('.btn-linkedin', 'manganime.digital');
const twitter: AbstractShareButton = new ShareButtonTwitter('.btn-twitter', 'manganime.digital');
const print: AbstractShareButton = new ShareButtonPrint('.btn-print');

facebook.bind();
twitter.bind();
linkedin.bind();
print.bind();

