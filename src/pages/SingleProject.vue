<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store,
            curProject: null,
            loading: false
        }
    },
    created() {
        console.log(this.$route.params.slug);
        this.loading = true;
        axios.get(`${store.baseUrl}/api/projects/${this.$route.params.slug}`)
            .then((resp) => {
                this.curProject = resp.data.results;
            })
            .finally(() => {
                this.loading = false;
            })
    },
}
</script>

<template>
    <div class="container mt-4">
        <div v-if="loading">
            <h3>Loading...</h3>
        </div>
        <div v-else>
            <h1>{{ curProject.title }}</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>