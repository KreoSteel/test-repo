import "./Grid.css"
import Button from "../Button/Button"

export function GridItem({image, title, description, onClick, ButtonText}) {
    return(
        <div className="grid-item">
            {image && <img src={image} alt={title}/>}
            <h3>{title}</h3>
            <p>{description}</p>
            <Button onClick={() => onClick()}>{ButtonText}</Button>
        </div>
    )
}