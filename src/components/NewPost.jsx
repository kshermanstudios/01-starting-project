import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({ onCancel }) {
 
  const [enteredText, SetEnteredText] = useState('React is great');
  const [enteredAuthor, SetAuthor] = useState('Kevin');
  
  const changeTextAreaHandler = (event) => {
      SetEnteredText(event.target.value);
  };

  const changeAuthorHandler = (event) => {
      SetAuthor(event.target.value);
  };
    
  const submitHandler = (event) => {
    event.preventDefault(); 

    const postData ={
      body: enteredText,
      author: enteredAuthor
    } 

    console.log(postData);

    // now we can close the modal window
    onCancel();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeTextAreaHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
