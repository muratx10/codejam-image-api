/* eslint-disable no-console */
import '../styles/styles.scss';
import { CHANGE_LANG, CHANGE_UNIT, EVENTS } from './controller/events';
import { APP } from './model/components';
import speechRecognition from './model/voiceRecognition';

APP.init();
APP.GET_CURRENT_LOCATION_WEATHER();
CHANGE_LANG();
CHANGE_UNIT();
EVENTS();
speechRecognition();
console.log('👋👋👋\nЕСЛИ БУДУТ КАКИЕ-ТО ВОПРОСЫ, ЗАМЕЧАНИЯ, ПОЖАЛУЙСТА НАПИШИ МНЕ https://t.me/muratx10\nК КРИТИКЕ ОТНОШУСЬ АДЕКВАТНО 😁');
