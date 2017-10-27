<template>
   <div>
  <div class="card">
    <div class="header">
      <h4 class="title">{{title.lesson}}</h4>
    </div>
    <div class="content">
      <div class="showbox" v-if="loader">
         <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
         </div>
      </div>
      <ul class="list-unstyled team-members">
         <router-link  v-for="(item,x) in lessonList" :to="'/'+lesson+'/lesson/'+(x)">
            <li>
            <i class="fa fa-book"></i>
               {{item.title}}
            </li>
         </router-link>
      </ul>
    </div>
  </div>
  <div class="card">
    <div class="header">
     <h4 class="title">{{title.exercise}}</h4>
    </div>
    <div class="content">
      <div class="showbox" v-if="loader">
         <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
         </div>
      </div>
      <ul class="list-unstyled team-members">
         <router-link  v-for="(item,x) in exerciseList"
         :to="'/'+lesson+'/exercise/'+(x)">
            <li>
            <i class="fa fa-book"></i>
               {{item.title}}
            </li>
         </router-link>
      </ul>
    </div>
  </div>
  </div>
</template>
<script>
   export default {
      props: ['lesson'],
      data () {
         return {
            title: {
               lesson: 'មេរៀន',
               exercise: 'លំហាត់'
            },
            lessonList: '',
            exerciseList: '',
            virtualLesson: '',
            loader: true
         }
      },
      methods: {

      },
      created() {
         this.virtualLesson = this.lesson
         this.getData
      },
      computed: {
         getData() {
            this.loader = true
            this.lessonList = ""
            this.exerciseList = ""
            this.$http.get(`https://learning-dba2d.firebaseio.com/${this.virtualLesson}.json`).then((data) => {
               this.lessonList = data.body.lesson
               this.exerciseList = data.body.exercise
               this.loader = false
            })
         }
      },
      watch: {
         '$route.params.lesson' (to, from) {
            if (to != this.virtualLesson) {
               this.virtualLesson = to
               this.getData
            }
         }
      }
   }

</script>
<style>
.active {
   color: red;
}
:active {
   color: red;
}

.showbox {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5%;
}
.loader {
  position: relative;
  margin: 0 auto;
  width: 50px;
}
.loader:before {
  content: '';
  display: block;
  padding-top: 100%;
}
.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes color {
  100%, 0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%, 90% {
    stroke: #ffa700;
  }
}

</style>
