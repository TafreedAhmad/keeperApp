import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add"
import Fab from "@material-ui/core/Fab"

function CreateArea(props) {

    const [note, newNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        newNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function clicked(event) {
        props.onAdd(note);
        newNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }


    return (
        <div>
            <form className="create-note">
                <input value={note.title} onChange={handleChange} name="title" placeholder="Title" />
                <textarea value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
                <Fab onClick={clicked} >
                    <AddIcon />
                </Fab>
            </form>
        </div>
    );
}

export default CreateArea;