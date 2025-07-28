import ReactDOM from "react-dom/client";

import "./index.css";
import { HomePage } from "./pages/home/ui/HomePage";
import { AppProvider } from "./app/providers/AppProvider";

const App = () => (
  <AppProvider>
    <HomePage />
  </AppProvider>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
