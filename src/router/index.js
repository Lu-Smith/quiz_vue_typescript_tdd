import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Angular from '../views/subjects/AngularSubject.vue'
import Vue from '../views/subjects/VueSubject.vue'
import JavaScript from '../views/subjects/JavaScriptSubject.vue'
import TDD from '../views/subjects/TDDSubject.vue'
import CPlusPlus from '../views/subjects/CPlusPlusSubject.vue'
import React from '../views/subjects/ReactSubject.vue'
import TypeScript from '../views/subjects/TypeScriptSubject.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      enterClass: "animate_animated animate_fadeInLeft",
      leaveClass: "animate_animated animate_fadeOutRight"
    }
  },
  {
    path: '/Vue',
    name: 'Vue',
    component: Vue,
    meta: {
      enterClass: "animate_animated animate_fadeInRight",
      leaveClass: "animate_animated animate_fadeOutLeft"
    }
  },
  {
    path: '/Angular',
    name: 'Angular',
    component: Angular,
    meta: {
      enterClass: "animate_animated animate_fadeInLeft",
      leaveClass: "animate_animated animate_fadeOutRight"
    }
  },
  {
    path: '/Typescript',
    name: 'TypeScript',
    component: TypeScript,
    meta: {
      enterClass: "animate_animated animate_fadeInRight",
      leaveClass: "animate_animated animate_fadeOutLeft"
    }
  },
  {
    path: '/TDD',
    name: 'TDD',
    component: TDD,
    meta: {
      enterClass: "animate_animated animate_fadeInLeft",
      leaveClass: "animate_animated animate_fadeOutRight"
    }
  },
  {
    path: '/C++',
    name: 'CPlusPlus',
    component: CPlusPlus,
    meta: {
      enterClass: "animate_animated animate_fadeInRight",
      leaveClass: "animate_animated animate_fadeOutLeft"
    }
  },
  {
    path: '/React',
    name: 'React',
    component: React,
    meta: {
      enterClass: "animate_animated animate_fadeInLeft",
      leaveClass: "animate_animated animate_fadeOutRight"
    }
  },
  {
    path: '/Javascript',
    name: 'JavaScript',
    component: JavaScript,
    meta: {
      enterClass: "animate_animated animate_fadeInRight",
      leaveClass: "animate_animated animate_fadeOutLeft"
    }
  },
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router