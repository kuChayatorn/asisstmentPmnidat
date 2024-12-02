import React, { useState } from 'react'
import PersonalInformation from './PersonalInformation';
import ConsentPage from './ConsentPage';
import AssistIntroPage from './AssistIntroPage';
import AssistSubstanct from './AssistSubstanct';


const Assist = () => {
    const [page, setPage] = useState<number>(3);
    const handleNextPage = () => {
        setPage(page + 1);
    }
    const handlePrevPage = () => {
        setPage(page - 1);
    }
    return (
        <div className='h-lvh w-full flex justify-start items-center flex-col p-0 m-0'>
            {page === 1 && <ConsentPage handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />}
            {page === 2 && <PersonalInformation handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />}
            {page === 3 && <AssistIntroPage handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />}
            {page === 4 && <AssistSubstanct handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />}
        </div>
    )
}

export default Assist