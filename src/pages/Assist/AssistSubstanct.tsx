import SelectableSubstant from '../../components/SelectableSubstant'
import InputText from '../../components/InputText';
import AvatarChat from '../../components/AvatarChat';
import { substantsData } from '../../utils/data';
import { assisTestResultType } from '../../utils/types';

interface PersonalInformationPageProps {
    handleNextPage: () => void;
    handlePrevPage: () => void;
    setAssistResult: React.Dispatch<React.SetStateAction<assisTestResultType>>
    assisResult: assisTestResultType
}

const AssistSubstanct = ({ handleNextPage, handlePrevPage, setAssistResult, assisResult }: PersonalInformationPageProps) => {
    const progressPercentage = 13;

    const setUsedSubstanceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        console.log(name, checked)
        setAssistResult(prev => {
            return {
                ...prev,
                UsedSubstance: [...prev.UsedSubstance].map((substance, index) => {
                    if (index === Number(name)) {
                        return checked;
                    }
                    return substance;
                })
            };
        });
    }

    const etcSubstanceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAssistResult(prev => {
            return {
                ...prev,
                [name]: value
            };
        });
        setAssistResult(prev => {
            return {
                ...prev,
                UsedSubstance: [...prev.UsedSubstance].map((substance, index) => {
                    if (index === 11 && value !== '') {
                        return true;
                    }
                    else if (index === 11 && value == '') {
                        return false;
                    }
                    return substance;
                })
            };
        });
    }

    return (
        <div className='h-min-screen w-full flex justify-start items-center flex-col p-0 m-0 bg-gradient-to-t from-[#E6F7FF] to-[#FFFFFF] pb-'>
            <div className='flex w-[342px] flex-col gap-[16px] pt-14'>
                <AvatarChat textLine1={"สวัสดีครับ! ยินดีต้อนรับเข้าสู่บริการ"} textLine2={"เพื่อการดูแลสุขภาพของคุณครับ"} bgColor={"bg-[#FFF5CC]"} />
                <div>
                    <div className='flex w-full justify-between'>
                        <p>แบบประเมิน Assessment </p>
                        <p>{progressPercentage} %</p>
                    </div>
                    <progress className="progress progress-info w-full" value={progressPercentage} max="100"></progress>
                </div>
                <h1>คุณเคยใช้สารเหล่านี้หรือไม่ (นอกเหนือจากที่แพทย์สั่งให้ใช้) ?</h1>
                <div className='grid grid-cols-2 gap-4'>
                    {
                        substantsData.map((substant, index) =>
                            <SelectableSubstant
                                key={substant.id} // Add unique key prop here
                                name={index.toString()}
                                substantName={substant.name}
                                description={substant.description}
                                uniqueId={substant.id}
                                value={assisResult?.UsedSubstance ? assisResult.UsedSubstance[index] : false}
                                stateChangeHandler={setUsedSubstanceHandler}
                            />
                        )
                    }
                </div>
                <InputText text="สารอื่น ๆ โปรดระบุ" onChange={etcSubstanceHandler} name="etcSubstance" value={assisResult?.etcSubstance} placeholder="พิมพ์ชื่อสารที่คุณเคยใช้" required={false} />
                <div className='flex flex-row w-full justify-between pb-11 pt-4'>
                    <button className='btn w-[30%] h-[44px] rounded-full bg-[#E0E0E0] text-white' onClick={handlePrevPage}>ย้อนกลับ</button>
                    <button className='btn w-[30%] h-[44px] rounded-full bg-[#356CA8] text-white' onClick={handleNextPage}>ถัดไป</button>
                </div>
            </div>
        </div>
    )
}

export default AssistSubstanct