import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';
import {useState} from 'react';

function PostList({isPosting, onStopPosting}) {
    const [enteredText, SetEnteredText] = useState('React is great');
    const [enteredAuthor, SetAuthor] = useState('Kevin');
    
    const changeTextAreaHandler = (event) => {
        SetEnteredText(event.target.value);
    };

    const changeAuthorHandler = (event) => {
        SetAuthor(event.target.value);
    };
    
    return (
    <>  
    {isPosting && (
        <Modal hideModal={onStopPosting} >
            <NewPost 
                changeTextArea={changeTextAreaHandler} 
                changeAuthor={changeAuthorHandler}
                onCancel={onStopPosting}
            />
        </Modal>
        )
    }
    <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredText} />
        <Post author='daisy' body="Check out the full lesson" />
    </ul>
    </>
    )
}

export default PostList;
 