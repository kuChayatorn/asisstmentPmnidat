import SelectableSubstant from '../../components/SelectableSubstant'
import InputText from '../../components/InputText';
import AvatarChat from '../../components/AvatarChat';
import { substantsData } from '../../utils/data';
import { assisTestResultType } from '../../utils/type';

interface PersonalInformationPageProps {
    handleNextPage: () => void;
    handlePrevPage: () => void;
    handleAssisResult: (result: assisTestResultType) => void
    assisResult: assisTestResultType | undefined | null
}

const AssistSubstanct = ({ handleNextPage, handlePrevPage, handleAssisResult }: PersonalInformationPageProps) => {
    const progressPercentage = 13;
    const selected = new Set();

    const handleSubstanceSelected = (substance: string, state: boolean) => {
        if (state) {
            selected.add(substance);
        }
        else {
            selected.delete(substance);
        }
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
                        substantsData.map(substant =>
                            <SelectableSubstant name={substant.name} description={substant.description} key={substant.name} />
                        )
                    }
                </div>
                <InputText text="สารอื่น ๆ โปรดระบุ" onChange={() => { }} name="Additional" value={""} placeholder="พิมพ์ชื่อสารที่คุณเคยใช้" required={false} />
                <div className='flex flex-row w-full justify-between pb-11 pt-4'>
                    <button className='btn w-[30%] h-[44px] rounded-full bg-[#E0E0E0] text-white' onClick={handlePrevPage}>ย้อนกลับ</button>
                    <button className='btn w-[30%] h-[44px] rounded-full bg-[#356CA8] text-white' onClick={handleNextPage}>ถัดไป</button>
                </div>
            </div>
        </div>
    )
}

export default AssistSubstanct