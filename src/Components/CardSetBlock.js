import CardSetItem from "./CardSetItem";
import './CardSetBlock.css';
import { useNavigate } from 'react-router-dom';

export default function CardSetBlock(props){

    const navigate = useNavigate();

    function getIdHandler(id){
        props.onCardSetItemClick2(id);
        navigate('/quizcard');
    }

    return(
        <div className="card_set_block">
            {props.list.map((cardset) => {
                return(
                    <CardSetItem 
                        title={cardset.title} 
                        id={cardset.id} 
                        key={cardset.id} 
                        onCardSetItemClick={getIdHandler}/>
                )
            })}
        </div>
    );
}