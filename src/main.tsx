import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {AppProvider} from "./context.tsx";
import { ShelfProvider } from './components/contexts/ShelfContext.tsx';
import { RatingProvider } from './components/contexts/RatingContext.tsx';
createRoot(document.getElementById("root")!).render(
<AppProvider>
    <RatingProvider>
        <ShelfProvider>
            <App />
        </ShelfProvider>
    </RatingProvider>
</AppProvider>);


