import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
      {
         name: 'ចំនួនកុំផ្លិច',
         icon: 'ti-book',
         path: '/complex'
      },
      {
         name: 'លីមីត',
         icon: 'ti-book',
         path: '/limit'
      },
      {
         name: 'ដេរីវេ',
         icon: 'ti-book',
         path: '/derivative'
      },
      {
         name: 'អាំងតេក្រាល',
         icon: 'ti-book',
         path: '/integral'
      },
      {
         name: 'ក្រាហ្វនៃអនុគមន៍',
         icon: 'ti-book',
         path: '/graph'
      },
      {
         name: 'សមីការ ឌីផេរ៉ង់ស្យែល',
         icon: 'ti-book',
         path: '/differential'
      },
      {
         name: 'ផ្ទៃក្រាល និង​ មាឌ',
         icon: 'ti-book',
         path: '/areaandvolume'
      },
      {
         name: 'ធរណីមាត្រ',
         icon: 'ti-book',
         path: '/geometry'
      },
      {
         name: 'កោណិច',
         icon: 'ti-book',
         path: '/conics'
      },
      {
         name: 'ចម្លាស់',
         icon: 'ti-book',
         path: '/permutations'
      },
      {
         name: 'ប្រូបាប',
         icon: 'ti-book',
         path: '/probability'
      }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
