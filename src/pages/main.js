import React from "react";

import { Link, useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    
    const onAddEventButtonClick = (e) => {
      navigate('/add_event')
    }

    return (
      <div className="main">
        <br/><br/>
          <button onClick={onAddEventButtonClick}>Add Event</button>
      </div>
    );
  }
  
  export default Main;