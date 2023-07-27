import {useState} from 'react';
import Post from './Post'; 
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

function PostList({isPosting, onStopPosting}) {
    
    const [posts, SetPosts] = useState([]);

    function addPostHandler(postData){
        // SetPosts([postData, ...posts]); // add new post into array and keep others
        // this function automatically gets snapshot of current 
        SetPosts( (existingPosts) => [postData, ...existingPosts]); 
    }

    return (
    <>  
    {isPosting && (
        <Modal hideModal={onStopPosting} >
            <NewPost
                onCancel={onStopPosting} 
                onAddPost={addPostHandler}
            />
        </Modal>
        )
    }
    {posts.length > 0 && (
        <ul className={classes.posts}>
            {/*<Post author='daisy' body="Check out the full lesson" /> */}
            {posts.map((post) => 
                <Post key={post.author} author={post.author} body={post.body} />
            )}
        </ul>
    )}

    {posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
        </div>
    )}

    </>
    )
}

export default PostList;
 