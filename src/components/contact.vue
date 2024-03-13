<template>
     <div style="max-width: 100ch;">
       <h1 class="text-red-800" style="display: flex; width: 100%; justify-content: center; text-align: center; margin-top: 100px;">
        <strong>{{ title }}</strong>&nbsp;
    </h1>
</div>
 <body>
    <div id="app" class="justify-center z-10 p-16  rounded-lg border-2 space-y-8 w-full h-full bg-gray-500">
        <div class="profile-section">
        <a href="https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Kyle%20Reeder/">
            <img class="profile-picture hover:brightness-50" src="https://media.sermonaudio.com/images/speakers/thumbnail/23550-0001.png" alt="Profile Picture">
        </a>
        <a href="https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Kyle%20Reeder/" class="text-4xl font-bold text-sky-700 mb-4 hover:underline hover:text-sky-700 hover:underline">Kyle Reeder</a>
        <ul class="text-lg text-white list-disc list-inside">
          <li class="mb-2">Pastor</li>
          <li class="mb-2">Email: </li>
          <li>Phone: (270) 978-2792</li>
        </ul>
      </div>
        <div class="profile-section">
        <a href="https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Charley%20Lynch/">
            <img class="profile-picture hover:brightness-50" src="https://media.sermonaudio.com/images/speakers/thumbnail/27721-0001.PNG" alt="Profile Picture">
       </a>
       <a href="https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Charley%20Lynch/" class="text-4xl font-bold mb-4 text-sky-700 hover:text-sky-700 hover:underline">Charlie Lynch</a>
        <ul class="text-lg text-white list-disc list-inside">
          <li class="mb-2">Elder</li>
          <li class="mb-2">Email: </li>
          <li>Phone: (270) 564-0033</li>
        </ul>
      </div>

      <div class="profile-section">
        <a href="https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Brent%20Madding/">
            <img class="profile-picture flex justify-center hover:brightness-50" src="https://media.sermonaudio.com/images/speakers/thumbnail/29666-0001.png" alt="Profile Picture">
        </a>
        <a href="https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Brent%20Madding/" class="text-4xl font-bold mb-4 text-sky-700 hover:text-sky-700 hover:underline">Brent Madding</a>
        <ul class="text-lg text-white list-disc list-inside">
          <li class="mb-2">Elder</li>
          <li class="mb-2">Email: </li>
          <li>Phone: (270) 970-1668</li>
        </ul>
      </div>
      <div class="profile-section">
        <a href="https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Brian%20Sims/">
            <img class="profile-picture hover:brightness-50" src="https://media.sermonaudio.com/images/speakers/thumbnail/24152-0001.png" alt="Profile Picture">
        </a>
        <a href="https://www.sermonaudio.com/solo/srbcaudio/sermons/speakers/Brian%20Sims/" class="text-4xl font-bold mb-4 text-sky-700 hover:text-sky-700 hover:underline">Brian Sims</a>
        <ul class="text-lg text-white list-disc list-inside">
          <li class="mb-2">Elder</li>
          <li class="mb-2">Email: </li>
          <li>Phone: (270) 205-6625</li>
        </ul>
      </div>
    </div>
  </body>
  </template>

  <script>
  export default {
    data() {
        return {
            title: 'Contact Solid Rock Baptist church'
        }
    }
}
  </script>

  <style>

  </style>
