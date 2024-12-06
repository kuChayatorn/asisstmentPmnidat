import { ChangeEvent } from 'react'

interface InputOptionsProps {
    name: string
    text: string,
    options: EnumOptions[],
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

type EnumOptions = {
    text: string;
    value: string | number;
};

const InputOptions = ({ name, text, options, onChange }: InputOptionsProps) => {
    return (
        <div className='flex flex-col w-full items-start justify-start'>
            <p>{text}</p>
            <div className='flex flex-row w-full items-center justify-start gap-4 mt-2'>
                {options.map(({ text: optionText, value }, index) => (
                    <div key={value} className="form-control">
                        <label className="label cursor-pointer gap-4">
                            <input
                                type="radio"
                                name={name}
                                value={value}
                                className="radio checked:bg-blue-500"
                                onChange={onChange}
                                defaultChecked={index === 0}
                            />
                            <span className="label-text">{optionText}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InputOptions