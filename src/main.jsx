import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppLayout from "./App";
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
)
