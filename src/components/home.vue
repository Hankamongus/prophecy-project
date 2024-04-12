<template>
    <link href="https://fonts.googleapis.com/css?family=Lato: 100,300,400,700|Luckiest+Guy|Oxygen:300,400" rel="stylesheet">
  <link href="style.css" type="text/css" rel="stylesheet">
  <div>
        <h1 class="text-red-800 flex justify-center w-full mt-24 text-2xl md:text-3xl">
          <strong class="font-serif">{{ title }}</strong>&nbsp;
       </h1>
    </div>
  <div class="flex justify-center w-full mt-24 mb-50">
  <div class="flex -space-x-8 w-full">
        <div class="aspect-video w-full bg-center bg-cover filter grayscale hover:filter transition duration-500 transition duration-300 transform hover:scale-150 w-full h-full md:w-full md:h-md lg:w-full lg:h-full xl:w-full xl:h-full rounded-lg -mr-6 md:mr-0" style="background-image: url(https://i.swncdn.com/media/800w/cms/CCOM/46076-old-church.800w.tn.webp)" />
        <div class="aspect-video w-full bg-center bg-cover scale-150 filater hover:grayscale z-20 w-full h-lg md:w-full md:h-md lg:w-full lg:h-auto xl:w-full xl:h-auto relative shadow-md rounded-lg transform scale-150 -ml-6 -mr-6" style="background-image: url(https://images.unsplash.com/photo-1536704382439-da99b6ccc0cf?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" />
        <div class="aspect-video w-full bg-center bg-cover filter grayscale hover:filter-none transition duration-500 z-10 transition duration-300 transform hover:scale-150 w-full h-full md:w-full md:h-md lg:w-full lg:h-full xl:w-full xl:h-full rounded-lg -ml-6 md:ml-0" style="background-image: url(https://research.lifeway.com/wp-content/uploads/2021/05/church_plant_closures.jpg)" />
    </div>

</div>

  <!--Header Image!!-->
<div class="flex justify-center mt-24">
    <div class="flex justify-center z-6 p-10 bg-gray-500 dark:bg-gray-800 backdrop-blur rounded-lg border-4 space-y-8 border-sky-800 h-auto w-3/4">
        <div class="flex justify-between text-2xl mb-5">
            <div>{{ PurposeStatement }}</div>
        </div>
    </div>
</div>

  </template>

  <script>
  export default {
      data() {
          return {
              title: 'Welcome to Solid Rock Baptist Church',
              PurposeStatement: 'The Solid Rock Baptist Church exists to passionately glorify, love and enjoy God to the degree that for the sake of His name we first go to our family, friends, and neighbors, and then to the ends of the world with the blessed Gospel of His dear Son and our Savior Jesus Christ.  Our desire is to magnify Him in such a way that the lost are delivered out of the kingdom of darkness and are translated into the kingdom of our Lord and Savior Jesus Christ and that believers are led to full Christian maturity as fully devoted followers of Jesus Christ.'
          }
      }


  }
  </script>

  <style>

  </style>
