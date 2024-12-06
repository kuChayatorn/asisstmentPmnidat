import { Link } from 'react-router-dom';
import Radui2 from '../components/Radui2'
import AmbulanceCallIcon from '/Ambulance-Call--Streamline-Ultimate.svg';
import ContentPaperIcon from '/Content-Paper.svg';
import HospitalIcon from '/Hospital.svg';
import SmileIcon from '/Smiley.svg';
const Home = () => {
    return (
        <div className='h-lvh w-full flex justify-start items-center flex-col p-0 m-0'>
            <div className='flex flex-col bg-[url("/bg.png")] bg-cover bg-center w-full items-center justify-start mb-[-12px]' style={{ height: 'calc(40% + 12px)' }}>
                <div className='flex w-[342px] flex-col gap-[16px] pt-14'>
                    <div className=' flex w-[100%] h-[60px] gap-[16px] items-center justify-center z-[1]'>
                        <img src={SmileIcon} alt="Ambulance Call Icon" className="flex w-[60x] h-[60px]" />
                        <div className='bg-[#FFF5CC] rounded-full flex h-[60px] justify-center items-center text-center flex-col p-4'>
                            <p className='text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice'>สวัสดีครับ! ยินดีต้อนรับเข้าสู่บริการ</p>
                            <p className='text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice'>
                                เพื่อการดูแลสุขภาพของคุณครับ</p>
                        </div>
                    </div>
                    <div className="bg-yellow-100 border border-yellow-300 rounded-lg shadow-md p-6 flex items-center justify-center max-w-md">
                        <div className="text-center flex">
                            <p className="text-lg font-bold font-noto text-yellow-700">
                                คุณได้เริ่มต้นเส้นทางสำคัญสู่ชีวิตที่ดีขึ้นแล้ว!
                            </p>
                            <div className="flex justify-center mt-2">
                                <span className="text-yellow-500 text-xl">✨</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex h-[40%]  w-full flex-col items-center justify-start bg-white mt-0 rounded-t-2xl pt-5'>
                <div className='w-[342px] flex flex-col justify-start items-center'>
                    <div className='flex bg-white  w-full flex-col justify-start items-center'>
                        {/* <Radio /> */}
                        <Radui2 />
                    </div>
                    <p className='text-base text-blue-500 w-max-[342px] pt-5'>คุณต้องการรับบริการด้านไหน</p>
                    <div className='flex w-full flex-col justify-between items-center gap-5 py-5'>
                        <Link to="/assist" className="flex h-[100px] items-center p-3 rounded-lg bg-blue-100 shadow-md cursor-pointer w-full mx-2 hover:bg-blue-200 transition">
                            <div className="flex items-center justify-center w-[80px] h-[80px] p-[10px] bg-white rounded-md mr-4">
                                <img src={ContentPaperIcon} alt="Ambulance Call Icon" className="w-full h-full object-contain" />
                            </div>
                            <div >
                                <p className="text-blue-700 font-medium">ทำแบบประเมิน Assessment</p>
                            </div>
                        </Link>
                        <div className="flex  h-[100px] items-center p-3 rounded-lg bg-blue-100 shadow-md cursor-pointer w-full mx-2 hover:bg-blue-200 transition">
                            <div className="flex items-center justify-center w-[80px] h-[80px] p-[10px] bg-white rounded-md mr-4">
                                <img src={AmbulanceCallIcon} alt="Ambulance Call Icon" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-blue-700 font-medium">ติดต่อและปรึกษาสายด่วน</p>
                            </div>
                        </div>
                        <div className="flex h-[100px] items-center p-3 rounded-lg bg-blue-100 shadow-md cursor-pointer w-full mx-2 hover:bg-blue-200 transition">
                            <div className="flex items-center justify-center w-[80px] h-[80px] p-[10px] bg-white rounded-md mr-4">
                                <img src={HospitalIcon} alt="Ambulance Call Icon" className="w-full h-full object-contain" />
                            </div>

                            {/* Text Section */}
                            <div>
                                <p className="text-blue-700 font-medium">สถานพยาบาลบำบัดและฟื้นฟู</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home