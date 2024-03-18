
<template>
    <!--Navbar---->
    <nav id="navbar" class="w-full left-0 right-0 mt-0 bg-gradient-to-r from-gray-500 via-sky-800 to-gray-500 fixed left-0 w-full z-30 top-0 mb-5 p-1 text-lg transition-transform duration-300 transform">

        <div class="text-black text-sm sm:text-xl md:text-2xl"><strong>Solid Rock Baptist</strong></div>

        <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">

            <div class="relative flex h-16 items-center justify-between">

                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                    <!-- Mobile menu button-->
                    <button @click="navOpen = !navOpen" type="button" class="md:hidden relative flex items-center justify-center focus:!outline-none !border-none" aria-controls="mobile-menu" aria-expanded="false">

                    <svg class="block h-6 w-6 fixed left-0 bg-black rounded-lg hover:bg-gray-700 hover:text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path v-if="navOpen" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    </button>

                </div>

                <div v-if="navOpen" class="px-8 sm:hidden p-4 rounded border mt-56 bg-black bg-white dark:bg-black">
                    <ul>
                        <li><router-link to="/#/" class="text-red-800 hover:text-sky-700">Home:</router-link></li>
                        <li><router-link to="contact" class="text-red-800 hover:text-sky-700">Contact:</router-link></li>
                        <li><router-link to="about" class="text-red-800 hover:text-sky-700">About:</router-link></li>
                        <li><router-link to="prophecies" class="text-red-800 hover:text-sky-700">Prophecies:</router-link></li>
                        <li><router-link to="sermons" class="text-red-800 hover:text-sky-700">Sermons:</router-link></li>
                        <li><router-link to="directory" class="text-red-800 hover:text-sky-700">Directory:</router-link></li>
                        <li><router-link to="donate" class="text-red-800 hover:text-sky-700">Donate:</router-link></li>
                    </ul>
                </div>

                <div class="hidden sm:justify-center sm:items-center sm:ml-6 sm:block w-full">
                    <router-link
                        v-for="button in navButtons"
                        :key="button"
                        class="sm:mr-4 px-1 py-1 md:px-2 hover:border rounded hover:bg-sky-700 text-black hover:text-white hover:border-black"
                        :to="button == 'Home' ? '/' : button.toLowerCase()"
                        v-html="button"
                    />
                </div>
            </div>
        </div>
    </nav>


    <!--Image Header-->
<link href="https://fonts.googleapis.com/css?family=Lato: 100,300,400,700|Luckiest+Guy|Oxygen:300,400" rel="stylesheet">
  <link href="style.css" type="text/css" rel="stylesheet">
  <div class="flex justify-center w-full mt-64 mb-50">
  <div class="grid grid-cols-3">
    <!-- First image -->
    <img class="relative filter grayscale hover:filter-none transition duration-500 transition duration-300 transform hover:scale-150 w-full h-full md:w-full md:h-md lg:w-full lg:h-full xl:w-full xl:h-full rounded-lg -mr-6 md:mr-0" src="https://i.swncdn.com/media/800w/cms/CCOM/46076-old-church.800w.tn.webp">

    <!--second image-->
    <img class="h-auto filater hover:grayscale z-20 w-full h-lg md:w-full md:h-md lg:w-full lg:h-auto xl:w-full xl:h-auto relative shadow-md rounded-lg transform scale-150 -ml-6 -mr-6" src="https://images.unsplash.com/photo-1536704382439-da99b6ccc0cf?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

    <!-- Last image -->
    <img class="relative filter grayscale hover:filter-none transition duration-500 z-10 transition duration-300 transform hover:scale-150 w-full h-full md:w-full md:h-md lg:w-full lg:h-full xl:w-full xl:h-full rounded-lg -ml-6 md:ml-0" src="https://research.lifeway.com/wp-content/uploads/2021/05/church_plant_closures.jpg">
  </div>
</div>

    <router-view/>

</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
      navButtons: ['Home', 'About', 'Donate', 'Contact', 'Prophecies', 'Sermons', 'Directory'],
    };
  },
  mounted() {
    let prevScrollpos = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        // Scroll up: Show the navbar
        navbar.style.transform = 'translateY(0)';
      } else {
        // Scroll down: Hide the navbar
        navbar.style.transform = `translateY(-${navbar.offsetHeight / 2}px)`;
      }
      prevScrollpos = currentScrollPos;
    };
  }
};
</script>

<style>
body {
  background: hover-red;
  background: linear-gradient(-45deg, transparent 50%, #000 50%) -1px -1px;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  margin: 0;
}
nav{
    transition: width 0.3s ease;
}
@media (max-width: 640px) {
    nav{
        width: 80%;
    }
}
nav {
    transition: height 0.3s ease;
}
@media (max-height: 480px) {
    nav {
        padding: 1px;
    }
}



.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.background:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
