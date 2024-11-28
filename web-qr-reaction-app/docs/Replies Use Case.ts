import * as React from "react";
//import FlashCard from "./Components/FlashCard";
import "./App.css";
import ContainerComponent from "./Components/Container";
import Button from "./Components/Button";
//import QRComponent from "./Components/LinkToQR";
//import InputComponent from './Components/Input'
import ViewRepliesComponent from "./Components/ViewReplies";
import ReplyComponent from "./Components/Reply";


function App() {

    const [arrChildren, setChildren] = React.useState<Array<React.ReactNode>>([<ReplyComponent colour={"Red"} text={"I agree with you so much."} containerDimensions={{ width: 400, height: 400 }} />]);

    const addComponent = () => {
        const newComponent = <ReplyComponent key={"1234"} colour={"Green"} text={"Some Reaction"} containerDimensions={{ width: 400, height: 400 }} />;
        setChildren((prev) => [...prev, newComponent]);
    };

    return (

        <ContainerComponent backgroundColour={"orange"} displayprop="flex">
            <ViewRepliesComponent background={"#ececec"} height={400} width={400} topic={"Cammel Case is nice"}>
                {arrChildren}
            </ViewRepliesComponent>
            <Button
                Action={addComponent}
                Width={10}
                Height={10}
            >
                Click me
            </Button>
        </ContainerComponent>
    );
}

export default App;
