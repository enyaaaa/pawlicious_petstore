import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from "./redux/store";
import { Provider } from "react-redux";
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthProvider>
    </BrowserRouter>

  </React.StrictMode>
)
