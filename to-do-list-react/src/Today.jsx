import React, { useState } from 'react'
import styled from 'styled-components'

const Today = () => {
    const [todayinfo, setTodayinfo] = useState("");

    return (
        <Root>
            <h3>오늘 할 일</h3>
        </Root>
    )
}

export default Today

const Root = styled.div``;