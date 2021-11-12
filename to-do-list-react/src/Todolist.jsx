import React, { useState } from 'react'
import styled from 'styled-components'
import Today from './Today';
import Tomorrow from './Tomorrow';

const Todolist = ({setDate}) => {
    const [todayinfo, setTodayinfo] = useState([{data:null}]);
    const [tomorrowinfo,setTomorrowinfo] = useState([{data:null}]);

    switch(setDate.status) {
        case "today": 
            return (
                <Root>
                    <Today todayinfo={todayinfo} setTodayinfo={setTodayinfo} />
                </Root>
            );
        
        case "tomorrow":
            return (
                <Root>
                    <Tomorrow tomorrowinfo={tomorrowinfo} setTomorrowinfo={setTomorrowinfo} />
                </Root>
            );
        
        case "both":
            return (
                <Root>
                    <Today todayinfo={todayinfo} setTodayinfo={setTodayinfo} />
                    <Tomorrow tomorrowinfo={tomorrowinfo} setTomorrowinfo={setTomorrowinfo} />
                </Root>
            );
    }
}

export default Todolist;

const Root = styled.div`
    background-color: #C6DBE8;
    height: 75vh;
    display: flex;
`;