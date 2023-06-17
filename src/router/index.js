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
    component: HomePage
  },
  {
    path: '/vue',
    name: 'Vue',
    component: Vue
  },
  {
    path: '/angular',
    name: 'Angular',
    component: Angular
  },
  {
    path: '/typescript',
    name: 'TypeScript',
    component: TypeScript
  },
  {
    path: '/tdd',
    name: 'TDD',
    component: TDD
  },
  {
    path: '/cplusplus',
    name: 'CPlusPlus',
    component: CPlusPlus
  },
  {
    path: '/react',
    name: 'React',
    component: React
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    component: JavaScript
  },
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router