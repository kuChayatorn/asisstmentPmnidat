import { create } from 'zustand';
import { userInformationType } from './types';

type UserStore = {
    personalInformation: userInformationType;
    setUserInformation: (key: keyof userInformationType, value: any) => void;
};

export const useUserStore = create<UserStore>((set) => ({
    personalInformation: {} as userInformationType,
    setUserInformation: (key, value) =>
        set((state) => ({
            personalInformation: { ...state.personalInformation, [key]: value },
        })),
}));
