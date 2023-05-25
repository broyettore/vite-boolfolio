<script>
export default {
    name: "header"
}
</script>

<template>
    <header>
        <div class="container d-flex justify-content-between py-3">
            <div class="logo fs-3">
                Portfolio
            </div>
            <nav>
                <ul class="d-flex">
                    <li class="p-2 m-2">About Me</li>
                    <li class="p-2 m-2">Skills</li>
                    <li class="p-2 m-2">Services</li>
                    <li class="p-2 m-2 me-0 pe-0">Contact</li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;

</style>