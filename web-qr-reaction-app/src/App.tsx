import FlashCard from "./Components/FlashCard";
import "./App.css";
import ContainerComponent from "./Components/Container";
import Button from "./Components/Button";
import QRComponent from "./Components/LinkToQR";
//import InputComponent from './Components/Input'

function App() {
  return (
    <>
      <ContainerComponent backgroundColour={"orange"} displayprop="flex">
        <FlashCard
          modified={new Date()}
          title="Cap"
          name="Wesley"
          picChosen="https://natyari.com/frontendmentor/blog-preview-card/assets/images/image-avatar.webp"
          Description="Dark souls 2 is a hard game thats why niggas hate it but imma buy all of them and form  my own opinion"
        />
        <Button
          Action={() => {
            console.log("works");
          }}
          Width={10}
          Height={10}
        >
          Click me
        </Button>
        <QRComponent link={"example.com"} size={300} />
      </ContainerComponent>
    </>
  );
}

export default App;
