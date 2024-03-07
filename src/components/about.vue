<template>
  <div style="max-width: 100ch;">
       <h1 class="text-red-800" style="display: flex; width: 100%; justify-content: center; text-align: center; mt-20">
        <strong>{{ title }}</strong>&nbsp;
     </h1>
     </div>
<!--Header Image!!-->

    <div class="z-6 p-10 bg-white/25 backdrop-blur rounded-lg border-2 space-y-8 ">
            <div class="flex justify-between text-2xl mb-5">
                <div>{{ PurposeStatement }}</div>





            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'About Solid Rock Baptist church',
            PurposeStatement: 'The Solid Rock Baptist Church was planted in Benton Ky in 2015. Our purpose Statement is as follows: The Solid Rock Baptist Church exists to passionately glorify, love and enjoy God to the degree that for the sake of His name we first go to our family, friends, and neighbors, and then to the ends of the world with the blessed Gospel of His dear Son and our Savior Jesus Christ. Our desire is to magnify Him in such a way that the lost are delivered out of the kingdom of darkness and are translated into the kingdom of our Lord and Savior Jesus Christ and that believers are led to full Christian maturity as fully devoted followers of Jesus Christ. Solid Rock Baptist church holds to the 1689 London Baptist confession of faith'
        }
    }


}
</script>

<style>

</style>
