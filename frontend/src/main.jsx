import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </AuthProvider>
    </BrowserRouter>

  </React.StrictMode>
)
