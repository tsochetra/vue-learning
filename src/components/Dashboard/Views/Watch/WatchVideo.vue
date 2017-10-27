<template>
  <div class="card">
    <div class="header">
      <h4 class="title">{{ title }}
</h4>
    </div>
    <div class="content">
      <hr>
      <div class="videoWrapper">
      <slot></slot></div>
    </div>
  </div>
</template>
<script>
  export default {
   props: ['title'],
   
    data () {
      return {
        user: {
          company: 'Paper Dashboard'
        }
      }
    },
    methods: {
    }
  }

</script>
<style>
/*.player {
   height: auto !important;
}*/
.videoWrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 0px;
	height: 0;
}
.videoWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
