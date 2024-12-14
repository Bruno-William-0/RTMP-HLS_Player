import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from '@chakra-ui/react/preset'

const rota = createBrowserRouter([{path:'/', element: <Home></Home>}])

createRoot(document.getElementById('root')!).render(
  <ChakraProvider value={system}>
  <StrictMode>
    <RouterProvider router={rota}></RouterProvider>
  </StrictMode>
  </ChakraProvider>
)
