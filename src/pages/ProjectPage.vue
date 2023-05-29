<script>
import axios from 'axios';
export default {
    name: "ProjectPage",
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: null,
            isError: false,
            errorMessage: null
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.result;
                })
                .catch((error) => {
                    console.log(error);

                    if (error.response.status === 404) {
                        console.log('redirect')
                        this.$router.push({ name: 'page-not-found' });
                    }

                    this.isError = true;
                    this.errorMessage = error.message;
                })
        }
    },
    created() {
        this.getProject();
    }
}
</script>


<template>
    <section v-if="project">
        <div class="container">
            <h1 class="mt-5 mb-3">Name: {{ project.name }}</h1>
            <p>Description: {{ project.description }}</p>
            <p v-if="project.type">Type: {{ project.type.name }}</p>
            <div v-if="project.technologies.length > 0">
                <hr>
                <h2 class="fs-4 mb-3">Technologies</h2>
            <ul class="ps-0 d-flex">
                <li v-for="technology in project.technologies" class="mx-1">
                    <span class="badge bg-success">{{ technology.name }}</span>
                </li>
            </ul>
            </div>
        </div>
    </section>
    <section v-if="isError">
        <div class="container">
            <p>{{ errorMessage }}</p>
        </div>
    </section>
</template>


<style scoped></style>