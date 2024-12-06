import React from 'react'
import SmileIcon from '/Smiley.svg';
import InputText from '../components/InputText';
import InputOptions from '../components/InputOptions';

interface PersonalInformationPageProps {
    handleNextPage: () => void;
    handlePrevPage: () => void;
}

const PersonalInformation = ({ handleNextPage, handlePrevPage }: PersonalInformationPageProps) => {
    return (
        <div className='h-lvh w-full flex justify-start items-center flex-col p-0 m-0 bg-gradient-to-t from-[#E6F7FF] to-[#FFFFFF] '>
            <div className='flex w-[342px] flex-col gap-[16px] pt-14'>
                <div className=' flex w-[100%] h-[60px] gap-[16px] items-center justify-center z-[1]'>
                    <img src={SmileIcon} alt="Ambulance Call Icon" className="flex w-[60x] h-[60px]" />
                    <div className='bg-[#FFF5CC] rounded-full flex h-[60px] justify-center items-center text-center flex-col p-4'>
                        <p className=' text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice'>สวัสดีครับ! ยินดีต้อนรับเข้าสู่บริการ</p>
                        <p className=' text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice'>
                            เพื่อการดูแลสุขภาพของคุณครับ</p>
                    </div>
                </div>
                <form className='flex flex-col w-full items-center justify-start bg-transparent z-[1] gap-4'>
                    <h1>กรุณากรอกข้อมูลส่วนตัว</h1>
                    <InputText text="กรุณากรอกข้อมูลส่วนตัว" name="name" value={""} onChange={() => { }} required={false} />
                    <InputOptions text='เพศโดยกำเนิน' name='gender' options={[{ text: 'เพศชาย', value: 'ชาย' }, { text: 'เพศหญิง', value: 'หญิง' }]} onChange={() => { }} />
                    <InputOptions text='เพศสภาพ' name='sex' options={[{ text: 'เพศชาย', value: 'ชาย' }, { text: 'เพศหญิง', value: 'หญิง' }]} onChange={() => { }} />
                    <InputText text="อายุของผู้ป่วย" name="age" value={""} onChange={() => { }} required={false} />
                    <InputText text="อีเมล หรือ เบอร์โทรศัพท์" name="email" value={""} onChange={() => { }} required={false} />
                    <InputText text="อาชีพ (ไม่บังคับ)" name="job" value={""} onChange={() => { }} required={false} />
                </form>
                <div className='flex flex-row w-full justify-between'>
                    <button className='btn w-[30%] h-[44px] rounded-full bg-[#E0E0E0] text-white' onClick={handlePrevPage}>ย้อนกลับ</button>
                    <button className='btn w-[30%] h-[44px] rounded-full bg-[#356CA8] text-white' onClick={handleNextPage}>ถัดไป</button>
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation