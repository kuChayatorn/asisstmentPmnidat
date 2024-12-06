import React, { ChangeEvent } from 'react'

interface InputTextProps {
    text: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void // update user information
    name: string | null | undefined,
    value: string | null | undefined,
    placeholder?: string,
    required: boolean
}


const InputText = ({ text, onChange, name = "name", value = "", placeholder, required = false }: InputTextProps) => {
    return (
        <div className='flex flex-col w-full items-start justify-start '>
            <label className='w-full' htmlFor={name ?? ""}>{text}
                <input required={required} type="text" id={name ?? ""} name={name ?? ""} value={value ?? ""} placeholder={placeholder ?? ""} className='w-full border border-gray-300 rounded-md p-2 mt-2' onChange={onChange} />
            </label>
        </div>
    )
}

export default InputText
