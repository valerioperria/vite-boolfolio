<script>

import { store } from '../store';

export default {
    props: {
        project: Object,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div class="card h-100">
        <img :src="`${store.baseUrl}/storage/${project.cover_image}`" alt="" />
        <div class="card-body">
            <h5>{{ project.title }}</h5>
            <h6>{{ project.content }}</h6>
            <p>Category:
                {{ project.category ? project.category.name : "No category" }}</p>
            <p>Type:
                {{ project.type ? project.type.name : "No type" }}</p>
            <p>Tecnology:
                {{ project.tecnology ? project.tecnology.name : "No Tecnology" }}</p>
            <p>Comment:
                {{ project.comment ? project.comment : "No Comment" }}</p>

                <router-link :to="{name: 'single-project', params: {slug: project.slug}}">Details</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>