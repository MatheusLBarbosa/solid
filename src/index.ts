import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonPrint from './ShareButtonPrint'

const facebook = new ShareButtonFacebook('.btn-facebook', 'manganime.digital');
const linkedin = new ShareButtonLinkedin('.btn-linkedin', 'manganime.digital');
const twitter = new ShareButtonTwitter('.btn-twitter', 'manganime.digital');
const print = new ShareButtonTwitter('.btn-print', 'manganime.digital');

facebook.bind();
twitter.bind();
linkedin.bind();
print.bind();

