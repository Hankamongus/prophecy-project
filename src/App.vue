
<template>

    <div class=" content-justify-center top-0 mb-10 mt-5 bg-black p-10 rd-5 w-full rounded-md text-lg mt-0">
        <div class=" text-red-800 text-3xl mb-5"><strong> Solid Rock Baptist Church</strong></div>
        <router-link
            v-for="button in navButtons"
            :key="button"
            class="mr-7 mb-10 mt-5 bg-white text-black p-4 rd-5 rounded-md text-lg hover:bg-sky-700 hover:text-red-800"
            :to="button == 'Home' ? '/' : button.toLowerCase()"
            v-html="button"
        />
    </div>
    <RouterView></RouterView>
</template>

<script>
export default {
    data() {

        return {
            navButtons: ['Home', 'About', 'Donate', 'Contact', 'Prophecies', 'Sermons']
        }
    }
}
</script>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
