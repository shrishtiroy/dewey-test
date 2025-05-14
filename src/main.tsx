import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {AppProvider} from "./context.tsx";
import { ShelfProvider } from './components/contexts/ShelfContext.tsx';
createRoot(document.getElementById("root")!).render(
<AppProvider>
    <ShelfProvider>
    <App />
    </ShelfProvider>
</AppProvider>);


