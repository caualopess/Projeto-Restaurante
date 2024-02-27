import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Tour360 } from './pages/tour360/tour360.tsx'
import { Contato } from './pages/contato/contato.tsx'
import { Local } from './pages/local/local.tsx'
import { Cardapio } from './pages/cardapio/cardapio.tsx'
import './main.module.scss'
import { ModalProvider } from './hooks/useModal.tsx'
import { CardapioProvider } from './hooks/useCardapio.tsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />
},
{
  path: "/tour360",
  element: <Tour360 />
},
{
  path: "/contato",
  element: <Contato />
},
{
  path: "/local",
  element: <Local />
},
{
  path: "/cardapio",
  element: <Cardapio />
}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <CardapioProvider>
        <RouterProvider router={router} />
      </CardapioProvider>
    </ModalProvider>
  </React.StrictMode>,
)
