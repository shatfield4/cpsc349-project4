import { useEffect, useState } from 'react';
import ForumPosts from './components/ForumPosts';


const App = () => {
  // On load we need to get all the posts from pocketbase and store them in the posts variable
  const [posts, setPosts] = useState([
    { id: 1, title: 'Hello World', body: 'Welcome to the forum! text text more stuff Welcome to the forum! text text more stuff Welcome to the forum! text text more stuff Welcome to the forum! text text more stuff Welcome to the forum! text text more stuff Welcome to the forum! text text more stuff Welcome to the forum! text text more stuff Welcome to the forum! text text more stuff Welcome to the forum! text text more stuff ', author: 'Sean', date: '12/15/2022' },
  ]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState('Sean');

  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  // function addPost() {
  //   const newPost = {
  //     id: (posts.length + 1),
  //     title: `Hello this is post #${posts.length+1}`,
  //     body: 'This is a test post.',
  //     author: 'Sean',
  //     date: '12/15/2022'
  //   };
  //   setPosts(posts.concat(newPost));
  // }

  function logout() {
    setLoggedIn(false);
    setUsername('');
  }

  function login() {
    // Connect to pocketbase

    // Pass credentials to pocketbase and ensure it is a valid login

    console.log(userLogin);
    console.log(userPassword);

    setLoggedIn(true);
    setUsername('Sean');
  }

  function createAccount() {
    setLoggedIn(false);
    setUsername('');
  }

  function createPost() {
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    const dateString = `${month}/${day}/${year}`;
    const newPost = {
      id: (posts.length + 1),
      title: title,
      body: body,
      author: username,
      date: dateString
    };
    setPosts(posts.concat(newPost));
  }

  function handleCreatePost() {
    createPost();

  }

  useEffect(() => {
    console.log(posts)
  }, [posts, username]);

  return (
    <div className='bg-slate-100 h-full'>
      <div className='flex items-center flex-col pt-12'>
        <h1 className="text-7xl text-center text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">Project 4 Forum Engine</h1>

        <span className='m-5 text-2xl' hidden={loggedIn===true}>Log In:</span>


        <div className='w-1/4 flex flex-row items-center justify-between'>
          <label hidden={loggedIn===true}>Username:</label>
          <input hidden={loggedIn===true} type="text" className='m-3' onInput={e => setUserLogin(e.target.value)}></input>
          <label hidden={loggedIn===true}>Password:</label>
          <input hidden={loggedIn===true} type="password" className='m-3' onInput={e => setUserPassword(e.target.value)}></input>
          <button hidden={loggedIn===true} className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline" onClick={login}>Login</button>
        </div>

        <span className='m-5 text-2xl' hidden={loggedIn===true}>Or Sign Up:</span>

        <div className='w-1/4 flex flex-row items-center justify-between'>
          <label hidden={loggedIn===true}>Username:</label>
          <input hidden={loggedIn===true} type="text" className='m-3' onInput={e => setUserLogin(e.target.value)}></input>
          <label hidden={loggedIn===true}>Password:</label>
          <input hidden={loggedIn===true} type="password" className='m-3' onInput={e => setUserPassword(e.target.value)}></input>
          <button hidden={loggedIn===true} className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline" onClick={createAccount}>Create</button>
        </div>


        <div className='w-3/4 flex flex-row items-center justify-between'>
          <span hidden={loggedIn===false} className='text-2xl'>Logged in as: {username}</span>
          <button hidden={loggedIn===false} className="px-4 py-2 text-lg font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={logout}>Logout</button>
        </div>

      {/* Create new posts form */}
      <div className='w-3/4 mt-12' hidden={loggedIn===false}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
          Body
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          id="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button hidden={loggedIn===false} className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline" onClick={handleCreatePost}>Create New Post</button>
      </div>
      </div>

      {/* Display forum posts */}
      <ForumPosts posts={posts} username={username}/>
      </div>
    </div>
  );
};

export default App;
