<template>
     <div style="max-width: 100ch;">
       <h1 class="text-red-800 lex justify-center" style="display: flex; width: 100%; margin-top: 100px;">
        <strong>{{ title }}</strong>&nbsp;
     </h1>
     </div>
<!--Header Image!!-->
<body>
    <div id="app" class="justify-center z-10 p-16  rounded-lg border-2 space-y-8 w-full h-full bg-gray-500">
        <div class="flex justify-center text-2xl mb-5 text-red-800">
                <div><strong>Solid Rock Baptist Church exixts to proclaim the Glory of Christ!</strong></div>
        </div>
         <a href="https://www.google.com/maps/place/The+Solid+Rock+Baptist+Church/@36.9297529,-88.3411535,17z/data=!3m1!4b1!4m6!3m5!1s0x887a42bc802dd477:0x3046b7e3359d6952!8m2!3d36.9297486!4d-88.3385786!16s%2Fg%2F11c380rcrx?entry=ttu" class="text-4xl font-bold mb-4 hover:underline text-white hover:text-sky-700">Location:</a>
        <ul class="text-lg text-white list-disc list-inside">
          <li class="mb-2"><a href="https://www.google.com/maps/place/The+Solid+Rock+Baptist+Church/@36.9297529,-88.3411535,17z/data=!3m1!4b1!4m6!3m5!1s0x887a42bc802dd477:0x3046b7e3359d6952!8m2!3d36.9297486!4d-88.3385786!16s%2Fg%2F11c380rcrx?entry=ttu" class="text-black hover:text-sky-700">3223 US-641, Benton, KY 42025</a></li>
          <li class="mb-2"><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvrcXcnPNPmZbgRbpqhTGZLfmfsDrQsBDSVnnLSBmSJVPLZcDQbPKmlWcnNXDQBCsfgTvV" class="text-black hover:text-sky-700">Email: joyoconnell@outlook.com</a></li>
          <li class="mb-2"><a class="text-black hover:text-black">Phone: (270) 527-2957</a></li>
        </ul>
        <div class="text-4xl font-bold mb-4 text-white">Services</div>
        <ul class="text-lg text-white list-disc list-inside">
          <li class="mb-2 text-bold text-2xl">Sunday Morning</li>
          <li class="mb-2"><a class="text-black hover:text-black">Small groups: 9am</a></li>
          <li class="mb-2"><a class="text-black hover:text-black">Service: 10:30am</a></li>
          <li class="mb-2 text-bold text-2xl mt-5">Wednesday night</li>
          <li class="mb-2"><a class="text-black hover:text-black">Prayer: 6pm</a></li>
          <li><a class="text-black hover:text-black">Servce: 7pm</a></li>
        </ul>
    </div>
</body>
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
