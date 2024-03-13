<template>

<div style="max-width: 100ch;">
       <h1 class="text-red-800" style="display: flex; width: 100%; justify-content: center; text-align: center; margin-top: 100px;">
        <strong>{{ title }}</strong>&nbsp;
     </h1>
     </div>
<!--Header Image!!-->

    <div class="z-6 p-10 bg-gray-500 backdrop-blur rounded-lg border-2 space-y-8 ">
            <div class="flex justify-between text-2xl mb-5">
                <div><strong>How much do you want to give?</strong></div>
                <form action="/submit" method="post">
                    <label for="user Input"></label>
                    <input type="submit" value="" id="user Input" name="user Input">
                    <input type="subit" value="$" class="rounded-lg bg-gray-300 p-0 md:p1 w-1/2 sm:w-3/4 md:w-full">
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
