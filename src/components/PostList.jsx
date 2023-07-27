import {useState, useEffect} from 'react';
import Post from './Post'; 
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

function PostList({isPosting, onStopPosting}) {
    
    const [posts, SetPosts] = useState([]);
    const [isFetching, SetIsFetching] = useState(false);

    // get data
    useEffect(() => {
        SetIsFetching(true);

        async function getPosts() {
            const response = await fetch('http://localhost:8080/posts/')
            const resData = await response.json();
            if(!response.ok){
                // something
            }
            SetPosts(resData.posts);
            SetIsFetching(false);
        }

        getPosts();

    }, []); // [] no dependencies - loads on first load



    function addPostHandler(postData){

        // this is where we can send the postData to our server
        // available out of the box... could for sending and fetching data
        fetch('http://localhost:8080/posts/', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

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

    {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
            {/*<Post author='daisy' body="Check out the full lesson" /> */}
            {posts.map((post) => 
                <Post key={post.author} author={post.author} body={post.body} />
            )}
        </ul>
    )}

    {!isFetching && posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
        </div>
    )}

    {isFetching && 
        <div style={{textAlign: 'center', color: 'white'}}>
            <p>Loading Posts...</p>
        </div>
    }
    </>
    )
}

export default PostList;
 