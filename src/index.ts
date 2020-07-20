import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonFacebook from './ShareButtonFacebook';

const facebook = new ShareButtonFacebook('.btn-facebook', 'manganime.digital');
const linkedin = new ShareButtonLinkedin('.btn-linkedin', 'manganime.digital');
const twitter = new ShareButtonTwitter('.btn-twitter', 'manganime.digital');

facebook.bind();
twitter.bind();
twitter.bind();

