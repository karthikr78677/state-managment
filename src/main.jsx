import { createRoot } from 'react-dom/client'
import App from "./App.jsx"
import store from "./store/store.jsx"
import { Provider } from 'react-redux';
import { SpeedInsights } from "@vercel/speed-insights/react"
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
 </Provider>
)
