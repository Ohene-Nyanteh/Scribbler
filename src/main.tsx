import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import ThemeContextProvider from "./Utils/Context/ThemeContext";
import GloabalSettingsProvider from "./Utils/Context/GlobalSettings";
import NewProjectModalProvider from "./Utils/Context/GeneralModalContexts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GloabalSettingsProvider>
    <ThemeContextProvider>
      <NewProjectModalProvider>
        <App />
      </NewProjectModalProvider>
    </ThemeContextProvider>
  </GloabalSettingsProvider>
);
