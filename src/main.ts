import './app.css'
import App from './App.svelte'

const targetElement = document.getElementById('app')

if (targetElement) {
  new App({
    target: targetElement,
  })
}
