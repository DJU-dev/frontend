// zustand store here

import create from "zustand";
import { devtools } from "zustand/middleware";


const useStore = create(
    devtools((set) => ({
        isModal: true,
        toggleIsModal: () => set((state) => ({ isModal: !state.isModal })),

        
    }))
);



export default useStore;