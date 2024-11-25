
//the properties of the card 
interface CardProp {
    title: string;
    modified: Date;
    name: string;
    picChosen: string;
    Description: string;
}

//card component 
const FlashCard = ({title,modified,name,picChosen,Description }:CardProp) => {
    const theDate: string = modified ? modified.toLocaleDateString() : "Date not available";//date
    
    return 
    (<div className="card">
        
        <div className="img-head">
            <img src="https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA01589_00/4/i_4775fa4753de7530e6c4fa3e985e1869552054a23931b74414eac03cba388ed8/i/icon0.png" alt="Imagen header"/>
        </div>
        <p className="published">Published {theDate}</p>

        <h1>{title}</h1>

        <p className="descr">{Description}</p>

        <div className="author">
            <img src={picChosen}  alt="Author"/>
            <h6>{name}</h6>
        </div>

    </div>);
};

export default FlashCard;
