
import './bootstrap';
import '../sass/app.scss'
import Router from '@/router'
import store from '@/store'
 
import { createApp } from 'vue';

const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

app.use(Router)
app.use(store)
app.mount('#app');
