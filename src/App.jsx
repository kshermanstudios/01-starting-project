import PostList from './components/PostList';
import MainHeader from './components/MainHeader';
import {useState} from 'react';

function App() {

  const [modalIsVisible, SetModalIsVisible ] = useState(false);
  
  function showModalHandler() {
    SetModalIsVisible(true);
  }

  function hideModalHandler() {
    SetModalIsVisible(false);
  }


  return (
  <>
  <MainHeader onCreatePost={showModalHandler} />

  <main>
    <PostList 
    isPosting={modalIsVisible}
    onStopPosting={hideModalHandler} />
  </main>
  </>
  )
}

export default App;
