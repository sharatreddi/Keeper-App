import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title : "",
    content : ""
  })
  function handleChange(event){
    const {name, value} = event.target;
    
    setnote(prevNote => {
        return {
            ...prevNote, 
            [name]:value
        }
    })
  }  
  function submitnote(event){
    props.toadd(note);
    setnote({
      title: "",
      content: ""
    });
    event.preventDefault()
  }
  return (
    <div>
      <form>
        <input name="title" value={note.title}   placeholder="Title" onChange={handleChange}/>
        <textarea name="content"  value={note.content}   placeholder="Take a note..." rows="3" onChange={handleChange}/>
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;