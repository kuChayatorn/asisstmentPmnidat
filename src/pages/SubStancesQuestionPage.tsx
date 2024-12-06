import React, { useState } from 'react'
import EachSubStanceQuestionsPage from './EachSubStanceQuestionsPage';

interface substanceQuestionsPageProps {
    usedSubstances: string[]// type could be change use the the data structure
    //handelinguserInformation
}

const SubStancesQuestionPage = ({ usedSubstances }: substanceQuestionsPageProps) => {
    const [pageIndex, setPageIndex] = useState(1);
    const [curSubstance, setCurSubstance] = useState();

    return (
        <div>
            {usedSubstances.map((substance, index) => (
                pageIndex === index && <EachSubStanceQuestionsPage curSubstance={substance} />
            ))}
        </div>
    )
}

export default SubStancesQuestionPage