import { useState } from 'react'
import PersonalInformation from './Assist/PersonalInformation';
import ConsentPage from './Assist/ConsentPage';
import AssistIntroPage from './Assist/AssistIntroPage';
import AssistSubstanct from './Assist/AssistSubstanct';
import SubStancesQuestionPage from './Assist/SubStancesQuestionPage';
import { assisTestResultType } from '../utils/type';


const Assist = () => {
    const [page, setPage] = useState<number>(4);
    const [assisResult, setAssistResult] = useState<assisTestResultType | null>(null);

    const handleAssisResult = (result: any) => {
        setAssistResult(prevResult => (
            { ...prevResult, ...result }
        ));
    }
    const handleNextPage = () => {
        setPage(page + 1);
    }
    const handlePrevPage = () => {
        setPage(page - 1);
    }
    return (
        <div className='h-lvh w-full flex justify-start items-center flex-col p-0 m-0'>
            {page === 1 && <ConsentPage handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} handleAssisResult={handleAssisResult} assisResult={assisResult} />}
            {page === 2 && <PersonalInformation handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} handleAssisResult={handleAssisResult} assisResult={assisResult} />}
            {page === 3 && <AssistIntroPage handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} handleAssisResult={handleAssisResult} assisResult={assisResult} />}
            {page === 4 && <AssistSubstanct handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} handleAssisResult={handleAssisResult} assisResult={assisResult} />}
            {page === 5 && <SubStancesQuestionPage />}
        </div>
    )
}

export default Assist