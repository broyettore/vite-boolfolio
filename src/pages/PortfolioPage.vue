<script>
import axios from 'axios';
import AppMain from '../components/AppMain.vue';
export default {
    name: "portfolio",
    components: {
        AppMain
    },
    data() {
        return {
            projects: [],
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
        }
    },
    methods: {
        getProjects() {

            axios.get(this.apiBaseUrl + this.apiUrls.projects)
                .then((response) => {
                    console.log(response);
                    this.projects = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getProjects();
    }
}
</script>


<template>
      <section>
        <div class="container">
        <h1 class="mt-5 mb-3 fs-3 text-center">My portfolio</h1>
      </div>
        <main>
            <div class="container">
                <div class="d-flex flex-wrap justify-content-center gap-2">
                    <div v-for="project in projects">
                        <AppMain :project="project" />
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>


<style scoped></style>