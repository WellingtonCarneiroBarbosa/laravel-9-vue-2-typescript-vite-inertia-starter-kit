<script>
import Layout from "@app/Layouts/AppLayout.vue";
import { Link } from '@inertiajs/inertia-vue'

export default {
    components: {
        Layout,
        Link,
    },

    methods: {
        submit() {
            return this.$inertia.post(this.route('submit'))
        },
    },
}
</script>

<template>
    <layout>
        Welcome to about page!

        <Link :href="route('home')">Home</Link>
        <Link :href="route('about')">About</Link>

        <button @click="submit">Test Submit</button>
    </layout>
</template>


