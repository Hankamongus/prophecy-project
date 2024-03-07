<template>
     <div style="max-width: 100ch;">
       <h1 class="text-red-800" style="display: flex; width: 100%; justify-content: center; text-align: center;">
        <strong>{{ title }}</strong>&nbsp;
     </h1>
     </div>
<!--Header Image!!-->

    <div class="z-6 p-10 bg-white/25 backdrop-blur rounded-lg border-2 space-y-8 ">
            <div class="flex justify-between text-2xl mb-5">
                <div><strong>Solid Rock Baptist Church exixts to proclaim the Glory of Christ</strong></div>

            </div>
    </div>
  </template>

  <script>
  export default {
    data() {
        return {
            title: 'Welcome to Solid Rock Baptist Church'
        }
    }
  }
  </script>

  <style>

  </style>
