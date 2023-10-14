// Promise-1
const fetchUserData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 1, username: 'mdShoeb' });
      }, 1000); // 1 second
    });
  };
  
// Promise-2
  const fetchUserPosts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(['Post 1', 'Post 2', 'Post 3']);
      }, 1500); // 1.5 second
    });
  };

// Promise-3
  const fetchComments = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(['Comment 1', 'Comment 2']);
      }, 2000); // 2 second
    });
  };
  
// Using Promise.all to fetch user data, user posts, and comments concurrently
  Promise.all([fetchUserData(), fetchUserPosts(), fetchComments()])
    .then((results) => {
      const [userData, userPosts, comments] = results;
      console.log('User Data:', userData);
      console.log('User Posts:', userPosts);
      console.log('Comments:', comments);
    })
    .catch((error) => {  // if any promises get rejected catch block executes at once 
      console.error('An error occurred:', error);
    });
  

/*
User Data: { id: 1, username: 'mdShoeb' }
User Posts: [ 'Post 1', 'Post 2', 'Post 3' ]
Comments: [ 'Comment 1', 'Comment 2' ]
*/