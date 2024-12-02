import React from 'react'
import SmileIcon from '/Smiley.svg';

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
                        <p className='font-sans text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice'>สวัสดีครับ! ยินดีต้อนรับเข้าสู่บริการ</p>
                        <p className='font-sans text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice'>
                            เพื่อการดูแลสุขภาพของคุณครับ</p>
                    </div>
                </div>
                <div className='flex flex-col w-full items-center justify-start bg-white z-[1] gap-4'>
                    <h1>กรุณากรอกข้อมูลส่วนตัว</h1>
                    <div className='flex flex-col w-full items-start justify-start '>
                        <label htmlFor="name">ชื่อ-นามสกุล ของผู้ป่วย
                            <input type="text" id="name" className='w-full border border-gray-300 rounded-md p-2 mt-2' />
                        </label>
                    </div>
                    <div className='flex flex-col w-full items-start justify-start'>
                        <p >ชื่อ-นามสกุล ของผู้ป่วย</p>
                        <div className='flex flex-row w-full items-center justify-start gap-4 mt-2'>
                            <div className="form-control">
                                <label className="label cursor-pointer gap-4">
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
                                    <span className="label-text">เพศชาย</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer gap-4">
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
                                    <span className="label-text">เพศหญิง</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full items-start justify-start'>
                        <label htmlFor="age" className='w-full'>อายุของผู้ป่วย
                            <input type="text" id="age" className='w-full border border-gray-300 rounded-md p-2 mt-2' />
                        </label>
                    </div>
                    <div className='flex flex-col w-full items-start justify-start'>
                        <label htmlFor="email" className='w-full'>อีเมล หรือ เบอร์โทรศัพท์
                            <input type="text" id="email" className='w-full border border-gray-300 rounded-md p-2 mt-2' />
                        </label>
                    </div>
                    <div className='flex flex-col w-full items-start justify-start'>
                        <label htmlFor="job" className='w-full'>อาชีพ (ไม่บังคับ)
                            <input type="text" id="job" className='w-full border border-gray-300 rounded-md p-2 mt-2' />
                        </label>
                    </div>
                </div>
                <div className='flex flex-row w-full justify-between'>
                    <button className='btn w-[30%] h-[44px] rounded-full bg-[#E0E0E0] text-white' onClick={handlePrevPage}>ย้อนกลับ</button>
                    <button className='btn w-[30%] h-[44px] rounded-full bg-[#356CA8] text-white' onClick={handleNextPage}>ถัดไป</button>
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation