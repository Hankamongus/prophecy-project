
<template>
<div class="fixed md:-translate-y-[125%] md:-translate-x-2/3 scale-[200%] w-full h-full rotate-45 bg-gray-300 dark:bg-gray-900 z-10"/>
<div class="relative z-20">

    <!--Navbar---->
    <nav id="navbar" class="w-full left-0 right-0 mt-0 bg-gradient-to-r from-gray-400 via-sky-800 to-gray-400 dark:from-gray-800 dark:via-sky-800 dark:to-gray-800 fixed left-0 w-full z-30 top-0 mb-5 p-1 text-lg transition-transform duration-300 transform">


        <div class="w-full flex items-center justify-between">
            <div class="ml-4 mt-4 opacity-0 sm:opacity-100"><img src="https://i.ibb.co/WsXVtCc/screenshot-2024-04-11-at-2-17-19-pm-720.png" class="h-10 sm:w-14 w-10 sm:h-14 rounded-full"></div>
            <div class="flex items-center space-x-4">
                <div class="text-center font-bold text-white dark:text-black text-lg sm:text-xl md:text-3xl">Solid Rock Baptist</div>

                <div>
                    <button @click="contactOpen = !contactOpen" class="flex items-center justify-center items-center text-white font-bold py-1 px-1 rounded-full hover:border-sky-900 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:w-6 sm:h-6 bg-sky-900 rounded-full transition-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path v-if="contactOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div>&nbsp;</div>

            <!----<div :class="{ 'dark': darkMode, 'light': !darkMode }">
                    <button @click="toggleDarkMode" class="hover:border-transparent border-8 bg-transparent font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="border-0 h-8 w-8 bi bi-sun-fill" viewBox="0 0 16 16">
                            <path v-if="darkMode" class="text-white hover:text-yellow-500" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                            <path v-else class="text-black  hover:text-white" d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                         </svg>
                    </button>
                </div>-->


            <div id="contact" v-if="contactOpen" class="flex justify-center  h-full w-full">
                <div class="flex text-lg border-black border-4 rounded-lg bg-gray-500 p-8 h-4 w-42">
                    <a href="tel:2705272957">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="h-8 w-8 mr-4 bi bi-telephone-outbound text-black hover:text-sky-800" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </a>
                        <a href="mailto:joyoconnell@outlook.com?subject=Contact Solid Rock" class="text-black hover:text-sky-700 hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8 mr-4 bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                            </svg>
                        </a>
                        <a href="https://www.google.com/maps/place/The+Solid+Rock+Baptist+Church/@36.9297529,-88.3411535,17z/data=!3m1!4b1!4m6!3m5!1s0x887a42bc802dd477:0x3046b7e3359d6952!8m2!3d36.9297486!4d-88.3385786!16s%2Fg%2F11c380rcrx?entry=ttu" class="text-black hover:text-sky-700">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="h-8 w-8 mr-4 bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                        </a>
                    </div>
            </div>

            </div>
                <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-812">

                    <!-- Mobile menu button-->
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button @click="navOpen = !navOpen" type="button" class="md:hidden relative flex items-center justify-center focus:!outline-none !border-none" aria-controls="mobile-menu" aria-expanded="false">
                                <svg class="block h-8 w-9 fixed left-3 bg-white dark:bg-black rounded-lg hover:bg-gray-700 hover:text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path v-if="navOpen" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    <path v-else stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <div v-if="navOpen" class="px-8 sm:hidden p-4 h-screen w-screen fixed inset-0 mt-24 bg-black/50 backdrop-blur z-50">
                            <div class="w-full h-screen fixed z-10 top-0 left-0" @click="navOpen = false"></div>
                            <ul class="z-20 relative font-serif text-3xl" @click.stop="navOpen = false">
                                <li class="hover:bg-white roounded-lg">
                                    <router-link to="/#/" class="text-3xl flex items-center space-x-1 text-red-800 hover:text-sky-700 mb-16">
                                    <p class="text-3xl border-b rounded-lg">Home</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house h-8 w-8" viewBox="0 0 16 16">
                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                                    </svg>
                                </router-link>
                            </li>
                            <li class="hover:bg-white roounded-lg">
                                <router-link to="contact" class="flex items-center space-x-1 text-red-800 hover:text-sky-700 mb-16">
                                    <p class="text-3xl border-b rounded-lg">Contact</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8 bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg>
                                </router-link>
                            </li>
                            <li class="hover:bg-white roounded-lg">
                                <router-link to="about" class="flex items-center space-x-1 text-red-800 hover:text-sky-700 mb-16">
                                    <p class="text-3xl border-b rounded-lg">About</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-question-octagon w-8 h-8" viewBox="0 0 16 16">
                                        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
                                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                                    </svg>
                                </router-link>
                            </li>

                            <li class="hover:bg-white roounded-lg">
                                <router-link to="sermons" class="flex items-center space-x-1 text-red-800 hover:text-sky-700 mb-16">
                                    <p class="text-3xl border-b rounded-lg">Sermons</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8 bi bi-ear" viewBox="0 0 16 16">
                                        <path d="M8.5 1A4.5 4.5 0 0 0 4 5.5v7.047a2.453 2.453 0 0 0 4.75.861l.512-1.363a5.6 5.6 0 0 1 .816-1.46l2.008-2.581A4.34 4.34 0 0 0 8.66 1zM3 5.5A5.5 5.5 0 0 1 8.5 0h.16a5.34 5.34 0 0 1 4.215 8.618l-2.008 2.581a4.6 4.6 0 0 0-.67 1.197l-.51 1.363A3.453 3.453 0 0 1 3 12.547zM8.5 4A1.5 1.5 0 0 0 7 5.5v2.695q.168-.09.332-.192c.327-.208.577-.44.72-.727a.5.5 0 1 1 .895.448c-.256.513-.673.865-1.079 1.123A9 9 0 0 1 7 9.313V11.5a.5.5 0 0 1-1 0v-6a2.5 2.5 0 0 1 5 0V6a.5.5 0 0 1-1 0v-.5A1.5 1.5 0 0 0 8.5 4"/>
                                    </svg>
                                </router-link>
                            </li>

                             <li class="hover:bg-white roounded-lg">
                                <router-link to="donate" class="flex items-center space-x-1 text-red-800 hover:text-sky-700 mb-16">
                                    <p class="text-3xl border-b rounded-lg">Donate</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8 bi bi-currency-dollar" viewBox="0 0 16 16">
                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                                    </svg>
                                </router-link>
                            </li>
                            <li class="hover:bg-white roounded-lg">
                                <div class="flex"><router-link to="prophecies" class="flex items-center space-x-1 text-red-800 hover:text-sky-700 mb-16"><p class="text-3xl border-b rounded-lg">Prophecies</p></router-link>▾</div>
                            </li>
                            <li class="hover:bg-white roounded-lg">
                                <div class="flex rounded-lg"><router-link to="directory" class="border-b rounded-lg text-red-800 hover:text-sky-700"><p class="text-3xl border-b rounded-lg">Directory</p></router-link>▾</div>
                             </li>
                           </ul>
                        </div>
                        <div class="hidden sm:justify-center sm:items-center sm:ml-6 sm:flex w-full items-center">
                            <span>||</span>
                            <div v-for="button in navButtons" :key="button">
                                <router-link
                                class="sm:mr-4 px-1 py-1 md:px-2 hover:border rounded hover:bg-sky-700 text-black hover:text-white hover:border-black"
                                :to="button == 'Home' ? '/' : button.toLowerCase()"
                                v-html="button"
                                />
                                <span class="justify-between">|</span>
                            </div>
                            <span>|</span>
                        </div>
                    </div>
                </div>

        </nav>


    <!--Image Header-->

    <router-view/>

</div>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
      navButtons: ['Home', 'Contact',  'About', 'Donate', 'Sermons', 'Prophecies', 'Directory'],
      contactOpen: false,
      darkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      // You can also save the user's preference in local storage to persist the mode
      localStorage.setItem('darkMode', this.darkMode);
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      // You can also save the user's preference in local storage to persist the mode
      localStorage.setItem('darkMode', this.darkMode);
    }
  },
  mounted() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      this.darkMode = JSON.parse(savedMode);
    }

    let prevScrollpos = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    window.onscroll = () => {
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

    // Event listener to close navbar when clicked outside
    document.addEventListener('click', this.closeNavbarOnClickOutside);
  },
  beforeDestroy() {
    // Remove event listener to avoid memory leaks
    document.removeEventListener('click', this.closeNavbarOnClickOutside);
  },
};
</script>

<style>

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
