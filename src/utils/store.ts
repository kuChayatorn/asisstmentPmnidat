
import { create } from 'zustand';
import { UserInformation } from './type';

type UserStore = {
    personalInformation: UserInformation;
    setUserInformation: (key: keyof UserInformation, value: any) => void;
};

export const useUserStore = create<UserStore>((set) => ({
    personalInformation: {} as UserInformation,
    setUserInformation: (key, value) =>
        set((state) => ({
            personalInformation: { ...state.personalInformation, [key]: value },
        })),
}));
