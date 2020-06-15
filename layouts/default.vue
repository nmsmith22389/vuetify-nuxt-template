<template lang="pug">
VApp(dark)
    VNavigationDrawer(v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app)
        VList
            VListItem(v-for="(item, i) in items" :key="i" :to="item.to" router exact)
                VListItemAction
                    VIcon {{ item.icon }}
                VListItemContent
                    VListItemTitle(v-text="item.title")
    VAppBar(:clipped-left="clipped" fixed app)
        VAppBarNavIcon(@click.stop="drawer = !drawer")
        VBtn(icon @click.stop="miniVariant = !miniVariant")
            //- VIcon mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
            VIcon(v-if="miniVariant") fal fa-chevron-right
            VIcon(v-else) fal fa-chevron-left
        VBtn(icon @click.stop="clipped = !clipped")
            VIcon far fa-ellipsis-v
        VBtn(icon @click.stop="fixed = !fixed")
            VIcon $vuetify.icons.minus
        VToolbarTitle(v-text="title")
            VSpacer
                VBtn(icon @click.stop="rightDrawer = !rightDrawer")
                    VIcon $vuetify.icons.menu
    VContent
        VContainer
            nuxt
    VNavigationDrawer(v-model="rightDrawer" :right="right" temporary fixed)
        VList
            VListItem(@click.native="right = !right")
                VListItemAction
                    VIcon(light) far fa-repeat
                VListItemTitle Switch drawer (click me)
    VFooter(:fixed="fixed" app)
        span #[i.fal.fa-copyright] {{ new Date().getFullYear() }}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Default extends Vue {
    clipped = false;

    drawer = false;

    fixed = false;

    items = [
        {
            icon: 'fal fa-home',
            title: 'Welcome',
            to: '/',
        },
        {
            icon: 'fal fa-comment',
            title: 'Inspire',
            to: '/inspire',
        },
    ];

    miniVariant = false;

    right = true;

    rightDrawer = false;

    title = 'Vuetify.js';
}
</script>
