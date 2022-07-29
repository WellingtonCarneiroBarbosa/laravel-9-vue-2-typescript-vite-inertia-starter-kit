<script>
import Layout from "@app/Layouts/AppLayout.vue";
import { Link } from '@inertiajs/inertia-vue'

export default {
    components: {
        Layout,
        Link,
    }
}
</script>

<template>
    <layout>
        Welcome to home page!

        <Link :href="route('home')">Home</Link>
        <Link :href="route('about')">About</Link>
    </layout>
</template>


