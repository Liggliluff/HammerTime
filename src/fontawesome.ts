import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faEthereum, faGithub, faOsi } from '@fortawesome/free-brands-svg-icons';
import { faCalendar as farCalendar } from '@fortawesome/free-regular-svg-icons';
import {
  faCalendar as fasCalendar,
  faCaretDown,
  faCaretUp,
  faClipboard,
  faClock,
  faCode,
  faEye,
  faFire,
  faGlobe,
  faLifeRing,
  faLock,
  faServer,
  faTimes,
  faTimesCircle,
  faUserClock,
} from '@fortawesome/free-solid-svg-icons';

// Tell Font Awesome to skip adding the CSS automatically since it's being imported
config.autoAddCss = false;

const brandIcons = [faGithub, faDiscord, faOsi, faEthereum];

// List of used icons - amend if new icons are needed
library.add(
  ...brandIcons,
  faClipboard,
  faClock,
  fasCalendar,
  farCalendar,
  faGlobe,
  faTimes,
  faEye,
  faUserClock,
  faCode,
  faTimesCircle,
  faLock,
  faCaretUp,
  faCaretDown,
  faFire,
  faServer,
  faLifeRing,
);
