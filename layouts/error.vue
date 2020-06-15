<template lang="pug">
VApp(dark)
    h1(v-if="error.statusCode === 404") {{ pageNotFound }}
    h1(v-else) {{ otherError }}
    NuxtLink(to="/") Home Page
</template>

<style scoped>
h1 {
    font-size: 20px;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({
    layout: 'empty',
})
export default class Error extends Vue {
    @Prop({ type: Object, default: null }) readonly error!: Record<string, any> | null;

    pageNotFound = '404 Not Found';
    otherError = 'An error occurred';

    head(): { title: string } {
        const title = this.error?.statusCode === 404 ? this.pageNotFound : this.otherError;

        return {
            title,
        };
    }
}
// export default {
//     layout: 'empty',
//     props: {
//         error: {
//             type: Object,
//             default: null,
//         },
//     },
//     data() {
//         return {
//             pageNotFound: '404 Not Found',
//             otherError: 'An error occurred',
//         };
//     },
//     head() {
//         const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
//         return {
//             title,
//         };
//     },
// };
</script>
