import React from 'react'
import SmileIcon from '/Smiley.svg';

interface AvatarChatProps {
    textLine1: string | undefined;
    textLine2: string | undefined;
    bgColor: string;
}

const AvatarChat = ({ textLine1, textLine2, bgColor }: AvatarChatProps) => {

    const bgColors: { [key: string]: string } = {
        'red': 'bg-red-500',
        'yellow': 'bg-[#FFF5CC]',
        'green': 'bg-green-500',
        'blue': 'bg-blue-500',
        'purple': 'bg-purple-500',
        'pink': 'bg-pink-500',
    }

    return (
        <div className=' flex w-[100%] h-[60px] gap-[16px] items-center justify-center z-[1]'>
            <img src={SmileIcon} alt="Ambulance Call Icon" className="flex w-[60x] h-[60px]" />
            <div className={`${bgColors[bgColor] ? bgColors[bgColor] : bgColor} rounded-full flex h-[60px] justify-center items-center text-center flex-col p-4`}>
                <p className=' text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice'>{textLine1}</p>
                <p className=' text-sm font-light leading-[22.4px] tracking-tight text-left decoration-slice'>
                    {textLine2}</p>
            </div>
        </div>
    )
}

export default AvatarChat