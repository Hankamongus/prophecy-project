
<template>
    <div class=" text-red-800 text-3xl"><strong> Solid Rock Baptist Church</strong></div>
    <div class="mb-10 mt-5 bg-black text-black p-4 rd-5 rounded-md text-lg">
        <router-link
            v-for="button in navButtons"
            :key="button"
            class="mr-3"
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
            navButtons: ['Home', 'About', 'Donate', 'Contact', 'Prophecies']
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
