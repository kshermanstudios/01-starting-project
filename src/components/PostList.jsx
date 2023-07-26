import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

function PostList({isPosting, onStopPosting}) {
    
    return (
    <>  
    {isPosting && (
        <Modal hideModal={onStopPosting} >
            <NewPost
                onCancel={onStopPosting}
            />
        </Modal>
        )
    }
    <ul className={classes.posts}>
        <Post author='daisy' body="Check out the full lesson" />
    </ul>
    </>
    )
}

export default PostList;
 