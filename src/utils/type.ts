type userLineInformationType = {
    line_id: string | null,
    created_at: string | null,
    updated_at: string | null
}

type userInformationType = {
    user_id: string | null,
    line_id: string | null,
    hospital_id: string | null,
    birthday: string | null,
    job: jobType | null,
    created_at: string | null,
    updated_at: string | null,
    service: serviceType | null
}

type jobType = "doctor" | "nurse" | "patient" | "other"

type serviceType = "assis" | "service-2 | service-3"

type userAssisInformationType = {
    user_id: string | null,
    line_id: string | null,
    created_at: string | null,
    updated_at: string | null
    // user information that get after updated the data 
}

export type assisTestResultType = {
    consent: boolean | null | undefined
    parentConsent: boolean | null | undefined
    userInformation : userAssisInformationType | null | undefined
    mainUsedSubstance: string[] | null | undefined,
    UsedSubstance: string[] | null | undefined,
    answerSubstance1: substanceAnswerType | undefined,
    answerSubstance2: substanceAnswerType | undefined,
    answerSubstance3: substanceAnswerType | undefined,
    answerSubstance4: substanceAnswerType | undefined,
    answerSubstance5: substanceAnswerType | undefined,
    answerSubstance6: substanceAnswerType | undefined,
    answerSubstance7: substanceAnswerType | undefined,
    answerSubstance8: substanceAnswerType | undefined,
    answerSubstance9: substanceAnswerType | undefined,
    answerSubstance10: substanceAnswerType | undefined,
    answerSubstance11: substanceAnswerType | undefined,
    answerSubstance12: substanceAnswerType | undefined,
    answerSubstanceETC: substanceAnswerType | undefined,
}

type substanceAnswerType = {
    q1: number | null,
    q2: number | null,
    q3: number | null,
    q4: number | null,
    q5: number | null,
    q6: number | null,
    q7: number | null,
}
