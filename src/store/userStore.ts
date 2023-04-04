import { create } from 'zustand';
import { UserData } from '../domains/SignIn/model/UserData';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserState {
    userData: UserData | null;
    setUser: (userData: UserData) => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            userData: null,
            setUser: (userData) => set(() => ({ userData: userData })),
        }),
        {
            name: 'loggedUser',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);
