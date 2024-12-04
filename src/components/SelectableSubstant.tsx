import React, { useState } from "react";

interface SelectableSubstantProp {
    name?: string;
    description?: string;
    key: string | undefined
}

const SelectableSubstant: React.FC<SelectableSubstantProp> = ({
    name = "Default Name",
    description = "Default Description",
    key
}) => {
    const [check, setCheck] = useState<boolean>(false);

    const stateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(event.target.checked);
    };

    return (
        <label
            key={key}
            className={`${check ? "border-blue-500" : "border-blue-100"
                } border-2 flex flex-col justify-around w-[167px] h-[120px] bg-blue-100 hover:bg-blue-200 p-4 rounded-lg shadow-md text-center cursor-pointer`}
        >
            <input
                type="checkbox"
                checked={check}
                onChange={stateChangeHandler}
                className="hidden" // Hide the checkbox itself
            />
            <p className="text-blue-800 text-[18px] font-bold leading-[21.6px] tracking-[-0.011em] text-center decoration-skip-ink-none">
                {name}
            </p>
            <p className="text-black text-xs ">{description}</p>
        </label>
    );
};

export default SelectableSubstant;
