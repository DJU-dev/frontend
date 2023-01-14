// zustand store here

import create from "zustand";
import { devtools } from "zustand/middleware";


export const useStore = create(
    devtools((set) => ({
        isModal: true,
        toggleIsModal: () => set((state) => ({ isModal: !state.isModal })),

        
    }))
);

export const useLoginRequired = create(set => ({
    login: false,
    user: {},
    setLogin: (state) => set({login: state}),
    setUser: (state) => set({user: state}),
}))

