vue
<template>
  <div>
    <div
      :class="['h-full w-2 fixed left-0 z-20 rounded-lg border-black border-2 top-8', { 'w-full sm:w-64 border-sky-700': isNavOpen }]"
      @mouseenter="isNavOpen = true"
      @mouseleave="isNavOpen = false"
      @click="isNavOpen = true"
    >
      <span v-if="!isNavOpen" class="text-red-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-arrow-bar-right mt-64"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"
          />
        </svg>
      </span>
      <ul v-if="isNavOpen" class="mt-32">
        <li class="text-red-800 sm:text-white font-serif font-bold text-4xl mb-4">
          Contact:
        </li>
        <li class="hover:bg-gray-500 mb-12 text-2xl">
          <router-link
            to="kyle"
            class="text-red-800 sm:text-white font-serif hover:text-sky-800 hover:underline"
          >
            <strong>Pastor~</strong> Kyle Reeder
          </router-link>
        </li>
        <li class="hover:bg-gray-500 mb-12 text-2xl">
          <router-link
            to="brent"
            class="text-red-800 sm:text-white font-serif hover:text-sky-800 hover:underline"
          >
            <strong>Elder~</strong> Brent Madding
          </router-link>
        </li>
        <li class="hover:bg-gray-500 mb-12 text-2xl">
          <router-link
            to="charlie"
            class="text-red-800 sm:text-white font-serif hover:text-sky-800 hover:underline"
          >
            <strong>Elder~</strong> Charlie Lynch
          </router-link>
        </li>
        <li class="hover:bg-gray-500 mb-12 text-2xl">
          <router-link
            to="brian"
            class="text-red-800 sm:text-white font-serif hover:text-sky-800 hover:underline"
          >
            <strong>Elder~</strong> Brian Sims
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
```

### Updated Script
```javascript
<script>
export default {
  name: 'nav.vue',
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    sendEmail() {
      this.email = '';
      this.message = 'sent';
    }
  }
}
</script>
