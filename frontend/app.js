// Sample user object
let user = {
    username: 'johndoe',
    password: 'password123',
    posts: [
      {id: 1, title: 'First post', body: 'This is my first post.'},
      {id: 2, title: 'Second post', body: 'This is my second post.'},
      {id: 3, title: 'Third post', body: 'This is my third post.'}
    ]
  };
  
  
  // Login function
  function login(username, password) {
    // Check if credentials are valid
    if (username === user.username && password === user.password) {
      // Set current user
      currentUser = user;
      // Redirect to posts page
      window.location.href = 'posts.html';
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
  
  // Logout function
  function logout() {
    // Clear current user
    currentUser = null;
    // Redirect to posts page
    window.location.href = 'posts.html';
  }
  
  // Update post function
  function updatePost(postId, title, body) {
    let post = user.posts.find(p => p.id === postId);
    post.title = title;
    post.body = body;
    updatePostCounter();
  }
  
  // Delete post function
  function deletePost(postId) {
    user.posts = user.posts.filter(p => p.id !== postId);
    updatePostCounter();
  }
  
  // Update post counter function
  function updatePostCounter() {
    let postCounter = document.getElementById('post-counter');
    postCounter.innerText = user.posts.length;
  }
  
  // Check if user is logged in
  if (!currentUser) {
    // Redirect to login page
    window.location.href = 'login.html';
  } else {
    // Update post counter
    updatePostCounter();
  }
  