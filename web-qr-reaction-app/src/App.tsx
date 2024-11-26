import FlashCard from './Components/FlashCard';
import './App.css'
import ContainerComponent from './Components/Container';
import InputComponent from './Components/Input'





function App() {
    

    return (
        <>
            <FlashCard
                modified={new Date()}
                title="Cap" name="Wesley"
                picChosen="https://natyari.com/frontendmentor/blog-preview-card/assets/images/image-avatar.webp"
                Description="Dark souls 2 is a hard game thats why niggas hate it but imma buy all of them and form  my own opinion" />
            <ContainerComponent backgroundColour={"orange"} font={"Arial"}>

            </ContainerComponent>
        </>);

}

export default App
