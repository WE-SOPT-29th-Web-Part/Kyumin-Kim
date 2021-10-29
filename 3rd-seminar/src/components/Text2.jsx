import React, { useState } from 'react'

const Text2 = ({year,month,date}) => {
    const [inputValue,setInputValue] = useState("");
    const [resultDate,setResultDate] = useState("yyyy년 mm월 dd일");

    const handleChange = (e) => {
        setInputValue(e.target.value);
        printDate(e.target.value);
    }

    const printDate = (value) => {
        const tempDate = new Date();
        tempDate.setFullYear(Number(year));
        tempDate.setMonth(Number(month)-1);
        tempDate.setDate(Number(date) - Number(value));

        const result = `${tempDate.getFullYear()}년 ${tempDate.getMonth()+1}월 ${tempDate.getDate()}일`;
        setResultDate(result);
    }
    return (
        <div className="text">
            <div>
                D-<input type="text" value={inputValue} onChange={handleChange} />는?
            </div>
            <div>
                {resultDate}
            </div>
        </div>
    )
}

export default Text2
