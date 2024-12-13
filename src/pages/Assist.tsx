import { useState } from 'react'
import PersonalInformation from './Assist/PersonalInformation';
import ConsentPage from './Assist/ConsentPage';
import AssistIntroPage from './Assist/AssistIntroPage';
import AssistSubstanct from './Assist/AssistSubstanct';
import SubStancesQuestionPage from './Assist/SubStancesQuestionPage';
import { assisTestResultType } from '../utils/types';


const Assist = () => {
    const [page, setPage] = useState<number>(4);
    const [assisResult, setAssistResult] = useState<assisTestResultType>({
        consent: null,
        parentConsent: null,
        userInformation: null,
        mainUsedSubstance: {
            first: null,
            second: null,
            third: null
        },
        UsedSubstance: Array(12).fill(false),
        etcSubstance: '',
        answerSubstance1: null,
        answerSubstance2: null,
        answerSubstance3: null,
        answerSubstance4: null,
        answerSubstance5: null,
        answerSubstance6: null,
        answerSubstance7: null,
        answerSubstance8: null,
        answerSubstance9: null,
        answerSubstance10: null,
        answerSubstance11: null,
        answerSubstance12: null,
        answerSubstanceETC: null,
    });

    // const handleInputChange = (e: any) => {
    //     const { name, value } = e.target;
    //     setUserInformation(prev => {
    //       return {
    //         ...prev,
    //         [name]: value
    //       }
    //     })
    //   }

    const handleNextPage = () => {
        setPage(page + 1);
    }
    const handlePrevPage = () => {
        setPage(page - 1);
    }
    return (
        <div className='h-lvh w-full flex justify-start items-center flex-col p-0 m-0'>
            {page === 1 && <ConsentPage handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} setAssistResult={setAssistResult} assisResult={assisResult} />}
            {page === 2 && <PersonalInformation handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} setAssistResult={setAssistResult} assisResult={assisResult} />}
            {page === 3 && <AssistIntroPage handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} setAssistResult={setAssistResult} assisResult={assisResult} />}
            {page === 4 && <AssistSubstanct handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} setAssistResult={setAssistResult} assisResult={assisResult} />}
            {page === 5 && <SubStancesQuestionPage />}
        </div>
    )
}

export default Assist