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
        axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`)
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
            <h6>{{ curProject.content }}</h6>
            <p>Category:
                {{ curProject.category ? curProject.category.name : "No category" }}</p>
            <p>Type:
                {{ curProject.type ? curProject.type.name : "No type" }}</p>
            <p>Tecnology:
                {{ curProject.tecnology ? curProject.tecnology.name : "No Tecnology" }}</p>
            <p>Comment:
                {{ curProject.comment ? curProject.comment : "No Comment" }}</p>
            <div v-if="`!${store.baseUrl}/storage/${curProject.cover_image}`">
                <h6>No image</h6>
                </div>
            <div v-else>
                <img :src="`${store.baseUrl}/storage/${curProject.cover_image}`" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>