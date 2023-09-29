import { React, Fragment } from "react";
import CardBlock from "./CardBlock";
import EditModeButton from "./EditModeButton";

export default function CardPage(props){

    if (props.list.length > 0){
        return(
            <Fragment>
                <EditModeButton setTitle={props.setTitle}/>
                <CardBlock list={props.list}/>
            </Fragment>
        )
    }
    else{
        return(
            <div>
                there's no card yet
            </div>
        )
    }
}