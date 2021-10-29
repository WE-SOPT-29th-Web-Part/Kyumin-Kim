import React, { useState } from 'react'

const DateInput = ({year,setYear,month,setMonth,date,setDate}) => {

    const handleChange = (e,setState) => {
        if (e.target.value % 1 === 0 && e.target.value >= 0) {
            setState(e.target.value);
        } else {
            alert("양의 정수를 입력하세요");
        };
    }
    const handleToday = () => {
        setYear(new Date().getFullYear());
        setMonth(new Date().getMonth()+1);
        setDate(new Date().getDate());
    }
    return <div id = "dateInput">
        <div id="todaybtn">
            <button onClick={handleToday}>오늘</button>을 클릭하면 당일 날짜로 자동 지정됩니다!
        </div>
        <div>
            <span>기준날짜:</span>
            <input type="number" value={year} onChange={(e) => handleChange(e,setYear)} /><span>년</span>
            <input type="number" value={month} onChange={(e) => handleChange(e,setMonth)}/><span>월</span>
            <input type="number" value={date} onChange={(e) => handleChange(e,setDate)} /><span>일</span>
        </div>
    </div>
}

export default DateInput;
