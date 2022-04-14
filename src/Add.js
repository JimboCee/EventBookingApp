import React, {useState} from 'react';

function Add(props) {
    const [disabled, cDisabled] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        cDisabled(true)
        let result
        if (props.currentBook) {
            result = props.client.updateEvent(
                props.currentEvent._id,
                e.target.name.value,
                e.target.type.value,
                e.target.description.value,                
                e.target.date.value,
                e.target.location.value
                
            )
        } else {
            result = props.client.addEvent(
                e.target.name.value,
                e.target.type.value,
                e.target.description.value,                
                e.target.date.value,
                e.target.location.value)
        }
        result
            .then(() => {
                cDisabled(false)
                document.getElementById("addForm").reset()
                props.refreshList()
            })
            .catch(() => {
                alert("an error occured, please try again");
                cDisabled(false);
            });
    }

    return (
        <>
        {props.currentEvent ? 'Update' : 'Add'}
        <br />

        <form onSubmit={(e) => submitHandler(e)} id="addForm">
            Event Name: <br />
            <input
                type="text"
                defaultValue={props.currentEvent?.name}
                name="name"
                disabled={disabled}
            />
            <br />
            Event Type:
            <br />
            <input
                type="text"
                defaultValue={props.currentEvent?.type}
                name="type"
                disabled={disabled}
            />
            <br />
            Description:
            <br />
            <input
                type="text"
                defaultValue={props.currentEvent?.description}
                name="description"
                disabled={disabled}
            />
            <br />
            Location:
            <br />
            <input
                type="text"
                defaultValue={props.currentEvent?.location}
                name="location"
                disabled={disabled}
            />
            <br />
            Date:
            <br />
            <input
                type="text"
                defaultValue={props.currentEvent?.date}
                name="blurb"
                disabled={disabled}
            />
            <br />
            
            <br />
            <br />
            <button type="submit" disabled={disabled}>
                {" "}
                Submit{" "}
            </button>

        </form>

        </>
    )
}

export default Add;