<template>

<div style="max-width: 100ch;">
       <h1 class="text-red-800" style="display: flex; width: 100%; justify-content: center; text-align: center;">
        <strong>{{ title }}</strong>&nbsp;
     </h1>
     </div>
<!--Header Image!!-->
<link href="https://fonts.googleapis.com/css?family=Lato: 100,300,400,700|Luckiest+Guy|Oxygen:300,400" rel="stylesheet">
  <link href="style.css" type="text/css" rel="stylesheet">
    <div style="display: flex; width: 100%; justify-content: center; margin-top: 50px; margin-bottom: 20px;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr);">
        <img style="width: 100%; width: 300px; height: 220px; border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;" src="https://i.swncdn.com/media/800w/cms/CCOM/46076-old-church.800w.tn.webp">

        <img style="width: 100%; max-width: 300px; position: relative; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); border-radius: 0.375rem; transform: scale(1.35);" src="https://images.unsplash.com/photo-1536704382439-da99b6ccc0cf?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

        <img style="width: 100%; width: 300px; height: 220px; border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;" src="https://research.lifeway.com/wp-content/uploads/2021/05/church_plant_closures.jpg">
      </div>
    </div>
    <div class="z-6 p-10 bg-white/25 backdrop-blur rounded-lg border-2 space-y-8 ">
            <div class="flex justify-between text-2xl mb-5">
                <div><strong>How much do you want to give?</strong></div>
                <form action="/submit" method="post">
                    <label for="user Input"></label>
                    <input type="submit" value="" id="user Input" name="user Input">
                    <input type="subit" value="$" class="rounded-lg bg-gray-300 p-4">
                </form>
            </div>
        </div>
  </template>

  <script>
  export default {
    data() {
        return {
            title: 'Help Support Solid Rock Baptist Church'

        }
    }

  }
  </script>

  <style>

  </style>
