import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import AboutMeComponent from './components/AboutMeComponent.vue'
import FormComponent from './components/FormComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import JSONExport from './components/JSONExport'
import LandingComponent from './components/LandingComponent.vue'
import NavigationComponent from './components/NavigationComponent.vue'
import SongFilterComponent from './components/SongFilterComponent.vue'
import SongListComponent from './components/SongListComponent.vue'
import router from './router'

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');

app.component('AboutMeComponent', AboutMeComponent);
app.component('FormComponent', FormComponent);
app.component('HeaderComponent', HeaderComponent);
app.component('HomeComponent', HomeComponent);
app.component('JSONExport', JSONExport);
app.component('LandingComponent', LandingComponent);
app.component('NavigationComponent', NavigationComponent);
app.component('SongFilterComponent', SongFilterComponent);
app.component('SongListComponent', SongListComponent);