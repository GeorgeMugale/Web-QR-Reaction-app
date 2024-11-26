import FlashCard from './Components/FlashCard';
import './App.css'
import ContainerComponent from './Components/Container';
//import InputComponent from './Components/Input'
import QRComponent from './Components/LinkToQR'




function App() {
    

    return (
        <>
            <ContainerComponent backgroundColour={"orange"}>
                <FlashCard
                    modified={new Date()}
                    title="Cap" name="Wesley"
                    picChosen="https://natyari.com/frontendmentor/blog-preview-card/assets/images/image-avatar.webp"
                    Description="Dark souls 2 is a hard game thats why niggas hate it but imma buy all of them and form  my own opinion" />
                <QRComponent link={ "example.com" } size={ 300 } />
            </ContainerComponent>
        </>);

}

export default App
