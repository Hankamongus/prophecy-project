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
        <img style="width: 100%; max-width: 300px; border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;" src="https://3.bp.blogspot.com/-ZgG1vQtMum4/VnzPHaGh8xI/AAAAAAAAFzI/MaLuQ5gnr_Y/s1600/1933828_10153356334768105_6931868804865898509_n.jpg">

        <img style="width: 100%; max-width: 300px; position: relative; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); border-radius: 0.375rem; transform: scale(1.35);" src="https://mlqbbna2acyz.i.optimole.com/cb:rBSz.118f4/w:828/h:621/q:mauto/f:best/https://media.sharefaith.com/wp-content/uploads/2022/11/1478198557036_552.jpg">

        <img style="width: 100%; max-width: 300px; border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;" src="https://www.scripturecatholic.com/wp-content/uploads/2018/08/the-three-wise-men.jpg">
      </div>
    </div>
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
