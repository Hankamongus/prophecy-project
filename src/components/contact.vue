<template>

<div id="app">
    <div>
            <h1 class="text-red-800 flex w-full justify-center items-center text-center mt-0 text-2xl md:text-3xl font-serif">
               <strong>{{ title }}</strong>&nbsp;
           </h1>
       </div>
       <Nav />

   <!-- Main Content -->
   <div class="container mx-auto py-12">
   <div class="max-w-xl sm:max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
     <div class="px-6 py-4">
        <div class="flex content justify-center">
            <span class="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Contact {{ name }}</span>
        </div>
       <form @submit.prevent="sendEmail">
         <div class="mb-4">
           <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
           <input type="email" v-model="email" id="email" name="email" class="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-sky-700">
         </div>
         <div class="mb-4">
           <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
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

     import Nav from '../components/nav.vue'

      export default {
        name: 'App',
        components: {
            Nav
        },
        data() {
            return {
                title: 'Contact Solid Rock Baptist',
                email: 'joyoconnell@outlook.com',
                message: 'Hey Solid Rock',
                sendOpen: false,
                name: 'SRBC'
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
