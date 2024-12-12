import { assisTestResultType } from '../../utils/type';
import SmileIcon from '/Smiley.svg';
import { Link } from 'react-router-dom';

interface ConsentPageProps {
    handleNextPage: () => void;
    handlePrevPage: () => void;
    handleAssisResult: (result: assisTestResultType) => void
}



const ConsentPage = ({ handleNextPage, handlePrevPage, handleAssisResult }: ConsentPageProps) => {
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
                <div className='w-[342px] card items-center shadow-2xl bg-white z-[1]'>
                    <div className="join join-vertical">
                        <div className='join-item bg-[#356CA8] justify-center items-center text-center flex-col p-4 text-white'> <span>เอกสารแสดงความยินยอม</span></div>
                        <div className='join-item bg-white  justify-center items-center text-center flex-col  text-white p-6'>
                            <p className=' text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice text-[#356CA8]'>
                                -การประเมินนี้จะช่วยให้กระบวนการรักษาของท่าน เริ่มต้นได้สะดวกขึ้น โดยจะนำส่งใบสรุปผลการประเมิน เพื่อใช้เป็นเอกสารส่งตัวเริ่มต้นในการติดต่อสถาน พยาบาลที่ท่านต้องการรักษา
                            </p>
                            <p className=' text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice text-[#356CA8]'>
                                -ท่านสามารถนำเอกสารนี้ประกอบการเข้ารับบริการ ในสถานพยาบาลใดก็ได้ แต่หากท่านต้องการเข้ารับ การรักษาในสถานพยาบาลตามสิทธิของท่าน เช่น สิทธิบัตรทอง, สิทธิประกันสังคม หรือ สิทธิข้าราชการ
                            </p>
                            <p className=' text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice text-[#356CA8]'>
                                -ท่านสามารถตรวจสอบรายชื่อสถานพยาบาลที่ท่าน มีสิทธิได้ในเมนู “ตรวจสอบสถานพยาบาล และสิทธิการรักษา”
                            </p>
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="w-full cursor-pointer label flex flex-row item-start justify-start pl-6 gap-3">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                            <span className=" text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice text-[#356CA8]">ข้าพเจ้าได้อ่านและเข้าใจรายละเอียด</span>
                        </label>
                    </div>
                    <div className='flex flex-row w-full m-3 justify-between px-6'>
                        <Link to="/" className='w-full'>
                            <button className='btn'>
                                ยกเลิก
                            </button>
                        </Link>
                        <button className='btn' onClick={handleNextPage}> ยอมรับ</button>
                    </div>

                </div>
                <div className='flex w-[342px] flex-col items-center pt-10 z-[1]'>
                    <p className=' text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice text-[#356CA8]'>
                        ข้อมูลของคุณจะถูกเก็บเป็นความลับเสมอ
                    </p>
                </div>
                <div className='absolute bottom-0 left-0 z-[0] w-full h-[600px] bg-[url("/GlassBackground.svg")] bg-cover bg-no-repeat bg-bottom' />
            </div>

        </div>
    )
}

export default ConsentPage