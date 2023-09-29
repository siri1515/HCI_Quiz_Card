import './CardSetItem.css';

export default function CardSetItem(props){

    function cardSetClickHandler(){
        props.onCardSetItemClick(props.id);
    }

    return(
        <div className="card_set_item" onClick={cardSetClickHandler}>
            {props.title}
        </div>
    )
}