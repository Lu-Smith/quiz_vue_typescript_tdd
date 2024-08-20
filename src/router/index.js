import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Angular from '../views/subjects/AngularSubject.vue'
import Vue from '../views/subjects/VueSubject.vue'
import JavaScript from '../views/subjects/JavaScriptSubject.vue'
import TDD from '../views/subjects/TDDSubject.vue'
import CPlusPlus from '../views/subjects/CPlusPlusSubject.vue'
import React from '../views/subjects/ReactSubject.vue'
import TypeScript from '../views/subjects/TypeScriptSubject.vue'
import Random_Questions from '../views/subjects/RandomQuestions.vue'
import Python from '../views/subjects/PythonSubject.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/Vue',
    name: 'Vue',
    component: Vue,
  },
  {
    path: '/Angular',
    name: 'Angular',
    component: Angular,
  },
  {
    path: '/Typescript',
    name: 'TypeScript',
    component: TypeScript,
  },
  {
    path: '/TDD',
    name: 'TDD',
    component: TDD,
  },
  {
    path: '/C++',
    name: 'CPlusPlus',
    component: CPlusPlus,
  },
  {
    path: '/React',
    name: 'React',
    component: React,
  },
  {
    path: '/Javascript',
    name: 'JavaScript',
    component: JavaScript,
  },
  {
    path: '/Random_Questions',
    name: 'Random_Questions',
    component: Random_Questions,
  },
  {
    path: '/Python',
    name: 'Python',
    component: Python,
  },
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router