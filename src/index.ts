import ShareButton from './ShareButton';

const shareButton = new ShareButton('https://www.linkedin.com/in/matheuslbarbosa/')
shareButton.bind('.btn-facebook', 'facebook');
shareButton.bind('.btn-twitter', 'twitter');
shareButton.bind('.btn-linkedin', 'linkedin');