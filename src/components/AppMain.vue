<script>

export default {
    name: "main",

    props: {
        data: Object,
    },

}
</script>

<template>
    <main>
        <div class="container py-4">
            <div class="d-flex justify-content-center flex-wrap gap-3">
            <div class="card" style="width: 18rem;" v-for="project in data">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h4 class="card-title mb-2 text-bold">Project Name: {{ project.name }}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">Description: {{ project.description }}</h5>
                    <h6>Client: {{ project.client }}</h6>
                    <p class="card-text">
                        <span>Status: {{ project.progress_status }}</span>
                    </p>
                </div>
            </div>
        </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;
</style>