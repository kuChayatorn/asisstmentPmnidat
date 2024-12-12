import { HiSpeakerWave } from "react-icons/hi2";
import AvatarChat from '../../components/AvatarChat';
import { assisTestResultType } from "../../utils/type";
interface ConsentPageProps {
    handleNextPage: () => void;
    handlePrevPage: () => void;
    handleAssisResult: (result: assisTestResultType) => void
    assisResult: assisTestResultType | undefined | null
}
const AssistIntroPage = ({ handleNextPage, handlePrevPage, handleAssisResult, assisResult }: ConsentPageProps) => {
    return (
        <div className='h-lvh w-full flex justify-start items-center flex-col p-0 m-0 bg-gradient-to-t from-[#E6F7FF] to-[#FFFFFF] '>
            <div className='flex w-[342px] h-full flex-col gap-[16px] pt-14 justify-center items-center z-[1]'>
                <div className=' flex flex-col w-[100%] gap-[16px] bg-[#FFF5CC] items-center justify-start p-4 z-[1]'>
                    <AvatarChat textLine1={"ก่อนเข้าสู่การทำ"} textLine2={"แบบประเมิน ASSIST"} bgColor={"bg-[#FFF5CC]"} />
                    <div className='flex flex-col'>
                        <p>
                            คําถามต่อไปนี้เกี่ยวกับประสบการณ์ของคุณในการใช้
                            แอลกอฮอล์ ยาสูบ และสารเสพติดอื่น ๆ ตลอดชีวิต
                            ของคุณ และในช่วง 3 เดือนที่ผ่านมา สารเหล่านี้อาจถูกใช้
                            ในรูปแบบต่างๆ เช่น การสูบ การกลืน การฉีด การสูดดม หรือการรับประทานเป็นยาเม็ด บางครั้งคุณอาจได้รับยา
                            บางชนิดตามใบสั่งแพทย์ เช่น ยากล่อมประสาท ยาแก้ปวด หรือแอมเฟตามีน ในการสัมภาษณ์นี้ เราจะไม่รวมการใช้ยา
                            ตามใบสั่งแพทย์เว้นแต่คุณจะใช้ยาเหล่านั้นในทางที่ไม่ตรง
                            ตามคําสั่งแพทย์ เช่น ใช้บ่อยกว่าหรือในปริมาณมากกว่า
                            ที่แพทย์สั่ง หากมีกรณีเช่นนี้ กรุณาแจ้งให้เราทราบ
                            และโปรดมั่นใจว่า ข้อมูลเกี่ยวกับการใช้สารเสพติดของคุณ
                            จะถูกเก็บเป็นความลับ
                        </p>
                    </div>
                    <div className='flex w-full justify-end'>
                        <button className="btn-sm btn flex flex-row justify-center items-center gap-2  w-40 h-8 rounded-full bg-[#E0E0E0] text-base">
                            <HiSpeakerWave className='w-[24px] h-[24px]' />
                            <p className="text-[14px] font-light leading-[16.8px] tracking-[-0.011em] text-center decoration-skip-ink">
                                เปิดเสียงบรรยาย
                            </p>
                        </button>
                    </div>

                </div>


                <div className='flex flex-row w-full my-3 justify-between'>
                    <div className='flex flex-row w-full justify-between'>
                        <button className='btn w-[30%] h-[44px] rounded-full bg-[#E0E0E0] text-white'
                            onClick={handlePrevPage}>ย้อนกลับ
                        </button>
                        <button className='btn w-[30%] h-[44px] rounded-full bg-[#356CA8] text-white'
                            onClick={handleNextPage}>ถัดไป
                        </button>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-0 z-[0] w-full h-[600px] bg-[url("/GlassBackground.svg")] bg-cover bg-no-repeat bg-bottom' />
        </div>
    )
}

export default AssistIntroPage