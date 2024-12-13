import React, { useState } from "react";

interface SelectableSubstantProp {
    name?: string;
    substantName?: string;
    description?: string;
    uniqueId: string
    value: boolean
    stateChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}


const SelectableSubstant: React.FC<SelectableSubstantProp> = ({
    name = "0",
    substantName = "Default Name",
    description = "Default Description",
    uniqueId,
    value,
    stateChangeHandler
}) => {

    return (
        <label
            key={uniqueId}
            className={`${value ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-blue-100 hover:bg-blue-200 text-blue-800"
                } flex flex-col justify-around w-[167px] h-[120px]  p-4 rounded-lg shadow-md text-center cursor-pointer`}
        >
            <input
                name={name}
                key={uniqueId}
                type="checkbox"
                checked={value}
                onChange={stateChangeHandler}
                className="hidden" // Hide the checkbox itself
            />
            <p className=" text-[18px] font-bold leading-[21.6px] tracking-[-0.011em] text-center decoration-skip-ink-none">
                {substantName}
            </p>
            <p className={`${value ? "" : "text-black"} text-xs`}>{description}</p>
        </label>
    );
};

export default SelectableSubstant;
