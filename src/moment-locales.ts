import 'moment/locale/ar';
import 'moment/locale/de';
import 'moment/locale/en-gb';
import 'moment/locale/fr';
import 'moment/locale/hu';
import 'moment/locale/ms';
import 'moment/locale/nl';
import 'moment/locale/pl';
import 'moment/locale/pt-br';
import 'moment/locale/ru';
import 'moment/locale/es';
import 'moment/locale/it';
import moment from 'moment-timezone';
import latestTimezoneData from 'moment-timezone/data/packed/latest.json';

moment.tz.load(latestTimezoneData);
