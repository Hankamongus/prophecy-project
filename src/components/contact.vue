<template>

     <div>
        <div>
             <h1 class="text-red-800 flex w-full justify-center items-center text-center mt-20 text-2xl md:text-3xl">
                <strong>{{ title }}</strong>&nbsp;
            </h1>
        </div>
        <div class="h-5xl w-lg bg-gray-800 top-64 fixed left-0 z-10 rounded-lg border-2 border-sky-700">
           <ul class="">
           <li class="text-white font-bold text-2xl mb-4">Contact:</li>
           <li class="text-white rounded-lg mb-4 group">
            <span class="flex items-center text-white"><strong>Leadership</strong>
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 hover:ml-4 h-2 w-2 sm:w-4 sm:h-4 bg-sky-900 rounded-full transition-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="contactOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </span>
               <ul class="hidden group-hover:block">
                <li><router-link to="kyle" class="text-white hover:text-sky-800 hover:underline hover:bg-white rounded-lg">Pastor~ Kyle Reeder</router-link></li>
                <li><router-link to="brent" class="text-white hover:text-sky-800 hover:underline hover:bg-white rounded-lg">Elder~ Brent Madding</router-link></li>
                <li><router-link to="charlie" class="text-white hover:text-sky-800 hover:underline hover:bg-white rounded-lg">Elder~ Charlie Lynch</router-link></li>
                <li><router-link to="brian" class="text-white hover:text-sky-800 hover:underline hover:bg-white rounded-lg">Elder~ Brian Sims</router-link></li>
               </ul>
           </li>
           <li class="hover:bg-white rounded-lg mb-4"><router-link to="leadership" class="text-white hover:text-sky-800 hover:underline">Front Desk~</router-link></li>
           <li class="hover:bg-white rounded-lg mb-4"><router-link to="leadership" class="text-white hover:text-sky-800 hover:underline">Help~</router-link></li>
           <li class="hover:bg-white rounded-lg mb-4"><router-link to="leadership" class="text-white hover:text-sky-800 hover:underline">Outreach~</router-link></li>
       </ul>
   </div>

    <!-- Main Content -->
    <div class="container mx-auto py-12">
    <div class="max-w-3xl mx-auto bg-black dark:bg-white rounded-lg overflow-hidden">
      <div class="px-6 py-4">
        <h2 class="text-2xl text-white dark:text-black font-semibold mb-2">Contact SRBC</h2>
        <form @submit.prevent="sendEmail">
          <div class="mb-4">
            <label for="email" class="block text-sm font-bold mb-2 text-white dark:text-black">Email</label>
            <input type="email" v-model="email" id="email" name="email" class="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-sky-700">
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-bold mb-2 text-white dark:text-black">Message</label>
            <textarea v-model="message" id="message" name="message" rows="4" class="appearance-none border rounded w-full py- px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-sky-700"></textarea>
          </div>
          <div class="flex justify-end">
            <button @click="sendEmail" type="submit" class="bg-blue-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:w-8 sm:h-8 bg-sky-900 rounded-full transition-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path v-if="sendOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z"/>
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                    </svg>
            </button>
          </div>
        </form>
      </div>
    </div>

    </div>
  </div>
      </template>

      <script>
      export default {
        data() {
            return {
                title: 'Contact Solid Rock Baptist',
                email: 'joyoconnell@outlook.com',
                message: 'Hey Solid Rock',
                sendOpen: false,
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

      <style>

      </style>
