export type Substance = {
  id: number | undefined;
  name: string | undefined;
  description: string | undefined;
};

type userLineInformationType = {
  line_id: string | null;
  created_at: string | null;
  updated_at: string | null;
};

export type userInformationType = {
  user_id: string | null;
  line_id: string | null;
  hospital_id: string | null;
  name: string | null;
  birthday: string | null;
  sex: sexType | null;
  gender: genderType | null;
  birthDay: Date | null;
  job: jobType | null;
  email: string | null;
  created_at: string | null;
  updated_at: string | null;
  service: serviceType | null;
};

type jobType = "doctor" | "nurse" | "patient" | "other";

type serviceType = "assis" | "service-2 | service-3";

export type sexType = "MALE" | "FEMALE" | undefined;

export type genderType = "MALE" | "FEMALE" | undefined;

type userAssisInformationType = {
  user_id: string | null;
  line_id: string | null;
  created_at: string | null;
  updated_at: string | null;
  // user information that get after updated the data
};

export type assisTestResultType = {
  consent: boolean | null | undefined;
  parentConsent: boolean | null | undefined;
  userInformation: userAssisInformationType | null | undefined;
  mainUsedSubstance: UsedSubstanceType | null | undefined;
  etcSubstance: string | null | undefined;
  UsedSubstance: boolean[];
  answerSubstance1: substanceAnswerType | null;
  answerSubstance2: substanceAnswerType | null;
  answerSubstance3: substanceAnswerType | null;
  answerSubstance4: substanceAnswerType | null;
  answerSubstance5: substanceAnswerType | null;
  answerSubstance6: substanceAnswerType | null;
  answerSubstance7: substanceAnswerType | null;
  answerSubstance8: substanceAnswerType | null;
  answerSubstance9: substanceAnswerType | null;
  answerSubstance10: substanceAnswerType | null;
  answerSubstance11: substanceAnswerType | null;
  answerSubstance12: substanceAnswerType | null;
  answerSubstanceETC: substanceAnswerType | null;
};
type UsedSubstanceType = {
  first: number | null;
  second: number | null;
  third: number | null;
};

export type substanceAnswerType = {
  id: number;
  q1: 1 | 2 | 3 | 4 | 5 | undefined;
  q2: 1 | 2 | 3 | 4 | 5 | undefined;
  q3: 1 | 2 | 3 | 4 | 5 | undefined;
  q4: 1 | 2 | 3 | 4 | 5 | undefined;
  q5: 1 | 2 | 3 | undefined;
  q6: 1 | 2 | 3 | undefined;
  q7: 1 | 2 | 3 | undefined;
};
