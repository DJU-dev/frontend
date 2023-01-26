// zustand store here

import create from "zustand";
import { devtools } from "zustand/middleware";


const useStore = create(
    devtools((set) => ({
        isModal: true,
        toggleIsModal: () => set((state) => ({ isModal: !state.isModal })),

        isSide: true,
        toggleIsSide: () => set((state) => ({ isSide: !state.isSide })),
    }))
);



export default useStore;