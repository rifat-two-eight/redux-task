import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router";
import { router } from './components/routes/route';
import { ThemeProvider } from './Providers/ThemeProvider';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider><div className='max-w-7xl mx-auto'>
          <RouterProvider router={router} />
      </div></ThemeProvider>
      
  </StrictMode>,
)
