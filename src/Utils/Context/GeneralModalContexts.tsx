import { createContext, useContext, useState } from "react";

const NewProjectModal = createContext({});

export function useNewProjectModal(): any {
  return useContext(NewProjectModal);
}

/**
 * A `<ContextProvider>` for themes. Used for changing and handling themes
 */

function NewProjectModalProvider({ children }: any) {
    const [NewProjectModalData, setNewProjectModalData] = useState(false);

  return (
    <NewProjectModal.Provider value={{ NewProjectModalData, setNewProjectModalData }}>
      {children}
    </NewProjectModal.Provider>
  );
}

export default NewProjectModalProvider;
