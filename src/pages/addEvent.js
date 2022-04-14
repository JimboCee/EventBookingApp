import React from "react";
import TodoList from "./TodoList";
import './style.css';

function AddEvent(){
    return(
        <div>
            List of Events:<br/><br/>
            Football Match<br/>
            Music Festival<br/>
            Basketball Match<br/>
            Table Tennis Tournament<br/>
            <TodoList />
        </div>

    );

}

export default AddEvent;