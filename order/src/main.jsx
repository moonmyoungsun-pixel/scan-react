import { createRoot } from 'react-dom/client';
import App from './App';

const el = document.getElementById('order-app');
const mcode = el?.dataset?.mcode;

if (el) {
  createRoot(el).render(<App mcode={mcode} />);
}