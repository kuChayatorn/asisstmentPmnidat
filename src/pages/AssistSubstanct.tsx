import React, { useMemo } from 'react'
import SelectableSubstant from '../components/SelectableSubstant'
import SmileIcon from '/Smiley.svg';
import InputText from '../components/InputText';
import AvatarChat from '../components/AvatarChat';

interface PersonalInformationPageProps {
    handleNextPage: () => void;
    handlePrevPage: () => void;
}

const AssistSubstanct = ({ handleNextPage, handlePrevPage }: PersonalInformationPageProps) => {
    const progressPercentage = 13;
    const substants = [
        {
            name: "ยาสูบ",
            description: "บุหรี่ เส้นแบบเคี้ยว ซิการ์ บุหรี่ไฟฟ้า ไปป์ ฯลฯ",
        }, {
            name: "เครื่องดื่ม แอลกอฮอล์",
            description: "เบียร์ ไวน์ เหล้า ยาดอง โซจู ฯลฯ",
        }, {
            name: "กัญชา",
            description: "กัญชาแห้ง ยางกัญชา น้ำกัญชา ฯลฯ",
        }, {
            name: "โคเคน",
            description: "โค้ก แคร็ก ฯลฯ",
        }, {
            name: "ยากระตุ้นประสาทกลุ่มแอมเฟตามีน",
            description: "ยาบ้า ยาอี ยาไอซ์ สปีด ยาลดความอ้วน ฯลฯ",
        }, {
            name: "สารระเหย",
            description: "ไนตรัส กาว น้ำมันรถ ทินเนอร์ ฯลฯ",
        }, {
            name: "ยากล่อมประสาท ยานอนหลับ",
            description: "วาเลี่ยม โรฮิปนอล ดอมิกุม มาโน โซแลม B5 ฯลฯ",
        }, {
            name: "ยาหลอนประสาท",
            description: "ยาเค เห็ดเมา แอลเอสดี แอซิด พีซีพี ฯลฯ",
        }, {
            name: "สารกลุ่มฝิ่น",
            description: "เฮโรอิน มอร์ฟีน ทรามาดอล เมทาโดน บูพรีนอฟิน โคเดอิน ",
        }, {
            name: "ใบกระท่อม",
            description: "",
        }, {
            name: "แก๊สหัวเราะ (ฮีเลียม)",
            description: "",
        },
    ]
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
                        substants.map(substant =>
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