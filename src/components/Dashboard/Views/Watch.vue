<template>
    <div class="row">
      <div class="col-lg-9 col-md-8">
         <watch-video :title="data.title">
            <div class="showbox" v-if="loader">
               <div class="loader">
                  <svg class="circular" viewBox="25 25 50 50">
                  <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                  </svg>
               </div>
            </div>
            <iframe v-if="!loader" class="player" width="100%" :src="'https://www.youtube.com/embed/'+data.yt_id+'?modestbranding=1&controls=2&autohide=1&wmode=transparent&html5=1&autoplay=1'" frameborder="0" allowfullscreen="1"></iframe>
         </watch-video>
      </div>
      <div class="col-lg-3 col-md-4">
         <lesson :lesson="lesson"></lesson>
        <user-card>

        </user-card>
      </div>

    </div>
</template>
<script>
  import WatchVideo from './Watch/WatchVideo.vue'
  import UserCard from './Watch/UserCard.vue'
  import Lesson from './Watch/Lesson.vue'
  export default {

    components: {
      WatchVideo,
      UserCard,
      Lesson

   },
   data() {
      return {
         id: '',
         lesson: '',
         type: '',
         data: '',
         loader: true
      }
   },
   created() {
      this.lesson = this.$route.params.lesson
      this.type = this.$route.params.type
      this.id = this.$route.params.id
      this.getData


   },
   computed: {

      getData: function() {
         this.loader = true
         this.$http.get(`https://learning-dba2d.firebaseio.com/${this.lesson}/${this.type}/${this.id}.json`).then((data) => {
            if (data.body != null) {
               this.data = data.body
               this.loader = false
            } else {
               this.$router.push('/')
            }
         })
      }
   },
   method: {
      getDat() {
         alert(123)
      }
   },
   watch: {
      '$route'(to, from) {
         this.lesson = to.params.lesson
         this.type = to.params.type
         this.id = to.params.id
         this.getData
      }
   }
  }

</script>
<style>

</style>
