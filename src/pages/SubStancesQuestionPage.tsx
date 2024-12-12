import React, { useState } from 'react'
import EachSubStanceQuestionsPage from './EachSubStanceQuestionsPage';

interface substanceQuestionsPageProps {
    usedSubstances: { id: number, name: string, description: string }[]// type could be change use the the data structure
    //handelinguserInformation
}

const SubStancesQuestionPage = ({ usedSubstances }: substanceQuestionsPageProps) => {
    const [SubstanceIndex, SubstancePageIndex] = useState(1);

    const nextSubstanceHandelr = () => {

    }
    const prepSubstanceHandelr = () => {

    }
    return (
        <div>
            {usedSubstances.map((substance, index) => (
                SubstanceIndex === substance.id && <EachSubStanceQuestionsPage curSubstance={substance.name} />
            ))}
        </div>
    )
}

export default SubStancesQuestionPage