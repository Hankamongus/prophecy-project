
<template>
    <div>
        <h1 class="text-red-800 flex w-full justify-center items-center text-center mt-20 text-2xl md:text-3xl">
       <strong>{{ title }}</strong>&nbsp;
    </h1>
    </div>
<!--Header Image!!-->
<body>
   <div id="app" class="justify-center z-10 p-16  rounded-lg border-2 space-y-8 w-full h-full bg-gray-500 dark:bg-gray-800 border-sky-800 border-3">
       <div class="flex justify-center text-2xl mb-5 text-red-900">
               <div><strong>Solid Rock Baptist Church exixts to proclaim the Glory of Christ!</strong></div>
       </div>
        <a href="https://www.google.com/maps/place/The+Solid+Rock+Baptist+Church/@36.9297529,-88.3411535,17z/data=!3m1!4b1!4m6!3m5!1s0x887a42bc802dd477:0x3046b7e3359d6952!8m2!3d36.9297486!4d-88.3385786!16s%2Fg%2F11c380rcrx?entry=ttu" class="text-4xl font-bold mb-4 hover:underline text-white hover:text-sky-700">Location:</a>
       <ul>
         <li class="mb-2"><a href="https://www.google.com/maps/place/The+Solid+Rock+Baptist+Church/@36.9297529,-88.3411535,17z/data=!3m1!4b1!4m6!3m5!1s0x887a42bc802dd477:0x3046b7e3359d6952!8m2!3d36.9297486!4d-88.3385786!16s%2Fg%2F11c380rcrx?entry=ttu" class="text-black hover:text-sky-700">3223 US-641, Benton, KY 42025</a></li>
         <li class="mb-2 flex items-center">
            <a href="mailto:joyoconnell@outlook.com?subject=Contact Solid Rock" class="text-black hover:text-sky-700 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8 mt-4 bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
            </a>
        </li>
         <li class="mb-2">Phone: <a href="tel:2705272957" class="text-black hover:text-sky-700 hover:underline">(270) 527-2957</a></li>
       </ul>
       <div class="text-4xl font-bold mb-4 text-white">Services:</div>
       <ul>
         <li class="mb-2 text-bold text-2xl">Sunday Morning</li>
         <li class="mb-2"><a class="text-black hover:text-black">Small groups: 9am</a></li>
         <li class="mb-2"><a class="text-black hover:text-black">Service: 10:30am</a></li>
         <li class="mb-2 text-bold text-2xl mt-5">Wednesday night</li>
         <li class="mb-2"><a class="text-black hover:text-black">Prayer: 6pm</a></li>
         <li><a class="text-black hover:text-black">Servce: 7pm</a></li>
       </ul>
       <div>
       <ul>
           <li class="mb-2 font-bold text-4xl text-white">Core Values:</li>
           <li class="mb-2 text-bold text-2xl">Denomination</li>
           <li class="mb-2"><a href="https://www.youtube.com/watch?v=iPBwYQrclN4" class="text-black hover:text-sky-800 hover:underline">Baptist</a></li>
           <li class="mb-2 text-bold text-2xl mt-5">Confession</li>
           <li class="mb-2"><a href="https://1689.com/" class="text-black hover:text-sky-800 hover:underline">1689 London Baptist</a></li>
           <li class="mb-2 text-bold text-2xl">Government</li>
           <li><a class="text-black hover:text-black">Elders and Deacons</a></li>
           <li class="mb-2 text-bold text-2xl">Worship Music</li>
           <li><a class="text-black hover:text-black">Pslams Hymns and Spiritual Songs</a></li>
       </ul>
   </div>
</div>
</body>
 </template>

 <script>
 export default {
   data() {
       return {
           title: 'About Solid Rock Baptist Church'
       }
   }
 }
 </script>

 <style>

 </style>
