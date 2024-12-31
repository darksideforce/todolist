import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
import { setupRouter } from './router'



import './style.css'
import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'
async function boostApp() {
  const app = createApp(App)
  setupRouter(app)
  app.mount('#app')
}
boostApp()
// createApp(App)
//   .mount('#app')
//   .$nextTick(() => {
//     postMessage({ payload: 'removeLoading' }, '*')
//   })
