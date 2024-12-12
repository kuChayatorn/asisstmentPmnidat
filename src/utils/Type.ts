export type UserInformation = {
    id?: string;
    lineId?: string;
    hospitalId?: string;
    isConsent?: boolean;
    isParentConsent?: boolean;
    name?: string;
    sex?: EnumSex;
    gender?: EnumGender;
    birthDay?: Date;
    phoneNumber?: string;
    email?: string;
    job?: string;
    isCured: boolean|undefined;
    numberTimeOfCured: number|undefined;
    substancesUsed: Substance[];
    mainSubstances: Substance[];
    userSubstanceAnswers: UserSubstanceAnswer[];
};

export type UserSubstanceAnswer = {
    id: number;
    q1: 1 | 2 | 3 | 4 | 5 | undefined;
    q2: 1 | 2 | 3 | 4 | 5 | undefined;
    q3: 1 | 2 | 3 | 4 | 5 | undefined;
    q4: 1 | 2 | 3 | 4 | 5 | undefined;
    q5: 1 | 2 | 3 | undefined;
    q6: 1 | 2 | 3 | undefined;
    q7: 1 | 2 | 3 | undefined;
};

export type EnumSex = "MALE" | "FEMALE"| undefined;

export type EnumGender = "MALE" | "FEMALE"| undefined;

export type Substance = {
    id: number|undefined;
    name: string|undefined;
    description: string|undefined;
};
