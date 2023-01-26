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

export const useAuthStore = create(set => ({
    isLoggedIn: false,
    setLoggedIn: () => set(() => ({ isLoggedIn: true})),
    setLoggedOut: () => set(() => ({ isLoggedIn: false})),
}))



export default useStore;