import { React, useState } from 'react';

export default function AddNewCardSet(){
    const [addNew, setAddNew] = useState(false);

    function onClickHandler(){
        setAddNew(true);
    }

    return (
        <div>
            {addNew ? 
                (
                    <div>
                        <button onClick={onClickHandler}>Add Your New CardSet</button>
                    </div>
                )
            :
                (
                    <div></div>
                )
            };
        </div>
        
    )
}