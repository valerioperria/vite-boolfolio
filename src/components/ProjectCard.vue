<script>
export default {
    props: {
        project: Object,
    },
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
        };
    },
};
</script>

<template>
    <div class="card h-100">
        <img :src="`${baseUrl}/storage/${project.cover_image}`" alt="" />
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
        </div>
    </div>
</template>

<style lang="scss" scoped></style>