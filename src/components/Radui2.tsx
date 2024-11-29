import React from 'react'
import "./RadioInput.css"; // Assuming the styles are stored in this file

const Radui2 = () => {
    return (
        <div className="radio-input">
            <label className='text-center'>
                <input value="value-1" name="value-radio" id="value-1" type="radio" />
                <p>ผู้ป่วย</p>
            </label>
            <label className='text-center'>
                <input value="value-2" name="value-radio" id="value-2" type="radio" />
                <p>ผู้ใช้ชิดของผู้ป่วย</p>
            </label>
            <label className="text-center">
                <input value="value-3" name="value-radio" id="value-3" type="radio" />
                <p className='text-sm'>บุคลากรการแพทย์</p>
            </label>
            <p className="selection"></p>
        </div >
    )
}

export default Radui2