import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, RouterOptions } from 'vue-router'

import Index from './index.vue';

createApp(App)
  .use(
    createRouter(<RouterOptions> {
      history: createWebHistory(),
      routes: [
        {
          path: '/index/:id',
          component: Index
        }
      ]
    })
  )
  .mount('#app')
