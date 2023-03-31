import { create } from 'zustand';
import { UserData } from '../domains/SignIn/model/UserData';

interface UserState {
    userData: UserData | null;
    setUser: (userData: UserData) => void;
}

export const useUserStore = create<UserState>((set) => ({
    userData: null,
    setUser: (userData) => set(() => ({ userData: userData })),
}));
