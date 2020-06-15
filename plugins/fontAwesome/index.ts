import Vue from 'vue';
import { library, config, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as regular from './icons/regular';
import * as solid from './icons/solid';
import * as light from './icons/light';

//@ Register FontAwesome component globally
Vue.component('FAIcon', FontAwesomeIcon);

//@ Add to library
library.add(regular, solid, light);

// eslint-disable-next-line eqeqeq
if (process.env.DEBUG == 'true') {
    // eslint-disable-next-line no-console
    console.log('Measuring FontAwesome performance.');
    config.measurePerformance = true;
}

// config.replacementClass = 'v-icon';
config.observeMutations = true;
config.autoReplaceSvg = 'nest';
config.showMissingIcons = true;
// config. = true;

dom.watch();
