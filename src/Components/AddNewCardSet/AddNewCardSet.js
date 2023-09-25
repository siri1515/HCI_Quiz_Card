import { React, useState } from 'react';
import CardSetForm from './CardSetForm';

export default function AddNewCardSet(props){
    const [addNew, setAddNew] = useState(true);

    function ClickHandler(){
        setAddNew(false);
    }

    function saveCardSetDataHandler(cardSetData){
        const newCardSet = {
            ...cardSetData,
            id: Math.random().toString(),
        };

        props.onAddCardSet(newCardSet); //pass to upper component
    }

    function saveDeleteHandler(state){
        setAddNew(state);
    }

    return (
        <div>
            {addNew ? 
                (
                    <div>
                        <button onClick={ClickHandler}>Add Your New CardSet</button>
                    </div>
                     
                )
            :
                (   
                    <div>
                        <CardSetForm onSaveCardSetData={saveCardSetDataHandler} onDeleteForm={saveDeleteHandler} />
                    </div>
                )
            }
        </div>
        
    )
}