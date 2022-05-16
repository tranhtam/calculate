import { createContext } from "react";
import React from 'react'

const CountContext = createContext({})

function Context() {

    return (
        <ExamContext.Provider>
            <CountContext />
        </ExamContext.Provider>

    )
}

export default Context
