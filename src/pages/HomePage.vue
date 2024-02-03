<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
            projects: [],
        }
    },
    created() {
        axios.get(`${this.baseUrl}/api/projects`).then((resp) => {
            this.projects = resp.data.result;
        });
    },
    components: { ProjectCard }
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            <div v-for="project in projects" class="col" :key="project.id">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
