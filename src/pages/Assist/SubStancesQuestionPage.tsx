import React, { useState } from 'react'
import EachSubStanceQuestionsPage from './EachSubStanceQuestionsPage';

// interface substanceQuestionsPageProps {
//     usedSubstances: string[]// type could be change use the the data structure
//     //handelinguserInformation
// }

const SubStancesQuestionPage = () => {
    const usedSubstances: any[] = [];
    const [questionPageIndex, setQuestionPageIndex] = useState(1);
    const [curSubstance, setCurSubstance] = useState();
    const nextSubstanceHandelr = () => {

    }
    const prepSubstanceHandelr = () => {

    }
    return (
        <div>
            {usedSubstances.map((substance, index) => (
                questionPageIndex === index && <EachSubStanceQuestionsPage curSubstance={substance} />
            ))}
        </div>
    )
}

export default SubStancesQuestionPage