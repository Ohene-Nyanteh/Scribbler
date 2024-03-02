import { createContext, useContext } from "react";
import usePersistedState from "../Hooks/usePersistedstate";

const GloabalSettings = createContext({});

export function useGlobalSettings(): any {
  return useContext(GloabalSettings);
}

/**
 * A `<ContextProvider>` for themes. Used for changing and handling themes
 */

function GloabalSettingsProvider({ children }: any) {
    const [settingsPath, setSettingsPath] = usePersistedState("settingsPath", "");

  return (
    <GloabalSettings.Provider value={{ settingsPath, setSettingsPath }}>
      {children}
    </GloabalSettings.Provider>
  );
}

export default GloabalSettingsProvider;
