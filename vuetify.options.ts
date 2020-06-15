// import Vue from 'vue';
import {} from 'vuetify';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import {library as faLib} from '@fortawesome/fontawesome-svg-core';
// import Vuetify from 'vuetify/lib';
import Colors from 'vuetify/src/util/colors';
import { VuetifyIcons } from 'vuetify/types/services/icons';
import { VuetifyThemeVariant } from 'vuetify/types/services/theme';
import { UserVuetifyPreset } from 'vuetify/types/services/presets';

//*******************
//*  Vue Component  *
//*******************

// import Vue from 'vue';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import * as FATypes from '@fortawesome/fontawesome-common-types';

// Vue.component('font-awesome-icon', FontAwesomeIcon);

// type KnownKeys<T> = {
//     [K in keyof T]: string extends K ? never : number extends K ? never : K;
// } extends { [_ in keyof T]: infer U }
//     ? U
//     : never;

// type FAIconValues = Record<KnownKeys<VuetifyIcons>, [FATypes.IconPrefix, FATypes.IconName]> & {
//     [key: string]: [FATypes.IconPrefix, FATypes.IconName];
// };

// const icons: FAIconValues = {
//     complete: ['fal', 'check'], // 'far fa-check' // VChip(filter)
//     cancel: ['fas', 'times-circle'], // 'far fa-times-circle'
//     checkCircle: ['fas', 'check-circle'], // 'fas fa-check-circle'
//     close: ['far', 'times'],
//     delete: ['fal', 'times'], // VChip
//     trash: ['fas', 'trash'],
//     clear: ['fal', 'times-circle'],
//     success: ['far', 'check-circle'],
//     info: ['far', 'info-circle'],
//     warning: ['far', 'exclamation'],
//     error: ['far', 'exclamation-triangle'],
//     prev: ['far', 'chevron-left'],
//     next: ['far', 'chevron-right'],
//     checkboxOn: ['far', 'check-square'],
//     checkboxOff: ['far', 'square'],
//     checkboxIndeterminate: ['far', 'minus-square'],
//     delimiter: ['far', 'circle'],
//     sort: ['far', 'sort-up'],
//     expand: ['far', 'chevron-down'],
//     menu: ['fal', 'bars'],
//     subgroup: ['fas', 'caret-down'],
//     dropdown: ['fas', 'caret-down'],
//     radioOn: ['far', 'dot-circle'],
//     radioOff: ['far', 'circle'],
//     edit: ['far', 'edit'],
//     palette: ['fas', 'palette'],
//     pencil: ['fas', 'pencil'],
//     ratingEmpty: ['far', 'star'],
//     ratingFull: ['far', 'star'],
//     ratingHalf: ['far', 'star-half'],
//     loading: ['far', 'sync'],
//     first: ['far', 'step-backward'],
//     last: ['far', 'step-forward'],
//     // unfold: ['far', 'arrows-alt-v'],
//     unfold: ['fas', 'sort'],
//     file: ['far', 'paperclip'],
//     plus: ['far', 'plus'],
//     minus: ['far', 'minus'],
//     logout: ['fal', 'sign-out'],
//     link: ['far', 'link'],
//     manufacturer: ['fas', 'store'],
//     vendor: ['fas', 'industry-alt'],
// };

const icons: VuetifyIcons = {
    complete: 'fal fa-check', // 'far fa-check' // VChip(filter)
    cancel: 'fas fa-times-circle', // 'far fa-times-circle'
    checkCircle: 'fas fa-check-circle', // 'fas fa-check-circle'
    close: 'far fa-times',
    delete: 'fal fa-times', // VChip
    trash: 'fas fa-trash',
    clear: 'fal fa-times-circle',
    success: 'far fa-check-circle',
    info: 'far fa-info-circle',
    warning: 'far fa-exclamation',
    error: 'far fa-exclamation-triangle',
    prev: 'far fa-chevron-left',
    next: 'far fa-chevron-right',
    checkboxOn: 'far fa-check-square',
    checkboxOff: 'far fa-square',
    checkboxIndeterminate: 'far fa-minus-square',
    delimiter: 'far fa-circle',
    sort: 'far fa-sort-up',
    expand: 'far fa-chevron-down',
    menu: 'fal fa-bars',
    subgroup: 'fas fa-caret-down',
    dropdown: 'fas fa-caret-down',
    radioOn: 'far fa-dot-circle',
    radioOff: 'far fa-circle',
    edit: 'far fa-edit',
    palette: 'fas fa-palette',
    pencil: 'fas fa-pencil',
    ratingEmpty: 'far fa-star',
    ratingFull: 'far fa-star',
    ratingHalf: 'far fa-star-half',
    loading: 'far fa-sync',
    first: 'far fa-step-backward',
    last: 'far fa-step-forward',
    // unfold: 'far fa-arrows-alt-v',
    unfold: 'fas fa-sort',
    file: 'far fa-paperclip',
    plus: 'fal fa-plus',
    minus: 'fal fa-minus',
    logout: 'fal fa-sign-out',
    link: 'far fa-link',
    manufacturer: 'fas fa-store',
    vendor: 'fas fa-industry-alt',
};

// const proccessIcons = (): Partial<VuetifyIcons> => {
//     const mappedIcons: Partial<VuetifyIcons> = {};

//     for (const iconName in icons) {
//         if (Object.hasOwnProperty.call(icons, iconName)) {
//             mappedIcons[iconName] = {
//                 component: FontAwesomeIcon,
//                 props: {
//                     icon: icons[iconName],
//                 },
//             };
//         }
//     }

//     return mappedIcons;
// };

const themes: Record<'light' | 'dark', Partial<VuetifyThemeVariant>> = {
    /*
        > cyan 600
        primary: Colors.cyan.darken1
        > pink 400
        secondary: Colors.pink.lighten1
        > Pink A 400
        accent: Colors.cyan.accent3
        > Cyan A 400
        'accent-secondary': Colors.pink.accent3
        > blue 500
        info: Colors.blue.base
        > green 500
        success: Colors.green.base
        > orange 600
        warning: Colors.orange.darken1
        > red 400
        error: Colors.red.lighten1
    */
    light: {
        primary: Colors.blue.darken2,
        secondary: Colors.grey.darken3,
        accent: Colors.blue.accent1,
        error: Colors.red.accent2,
        info: Colors.blue.base,
        success: Colors.green.base,
        warning: Colors.orange.darken1,
    },
    dark: {
        primary: Colors.blue.base,
        secondary: Colors.grey.darken3,
        accent: Colors.pink.accent2,
        error: Colors.red.accent2,
        info: Colors.blue.base,
        success: Colors.green.base,
        warning: Colors.orange.darken1,
    },
};

const options: UserVuetifyPreset = {
    icons: {
        iconfont: 'fa', // Set Vuetify to use font-awesome 5 svg icon fonts
        // values: proccessIcons(),
        values: icons,
    },
    theme: {
        dark: true,
        themes,
        options: {
            customProperties: true,
        },
    },
};

export default options;
