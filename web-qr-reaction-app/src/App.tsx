import React, { useState } from 'react';
import './App.css'
import ContainerComponent from './Components/Container';
import InputComponent from './Components/Input'

function App() {

    return (
        <ContainerComponent backgroundColour={"orange"} font={"Arial"}>
            <InputComponent id={"input example"} purpose={"enter to test"} placeHolder={"please fill in feild"} type={"text"} />
        </ContainerComponent>
    )
}

export default App
