//Simulate Data Fetching Using Promises:

// Simulate fetching user profile
function fetchUserProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { id: "n01548460", name: "Mohammed Darras" };
      resolve(user);
    }, 1000); // 1s Delay
  });
}

// Simulate fetching posts
function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = [
        { id: 101, title: "JavaSctips is best language", userId },
        { id: 102, title: "Python is also great language", userId },
      ];
      resolve(posts);
    }, 2000); // 2s Delay
  });
}

// Simulate fetching comments
function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Failed to fetch comments"); // Modify your functions so that one or more of them may randomly reject (fail).
      } else {
        const comments = [
          { id: 201, text: "Great post!", postId },
          { id: 202, text: "Thanks for sharing.", postId },
        ];
        resolve(comments);
      }
    }, 1300); //1.3 s Delay
  });
}
// Implement Sequential and Parallel Data Fetching:

//Sequantial Fetching!
function fetchSequentially() {
  console.log("Sequantial Fetching using promise!");
  fetchUserProfile()
    .then((user) => {
      console.log("User profile retrieved:", user);
      return fetchPosts(user.id);
    })
    .then((posts) => {
      console.log("Posts retrieved:", posts);
      return fetchComments(posts[0].id);
    })
    .then((comments) => {
      console.log("Comments retrieved:", comments);
    })
    .catch((error) => {
      console.error("Error in sequential fetch:", error);
    });
}

fetchSequentially();

//Parallel Fetching
function fetchInParallel() {
  console.log("\nParallel Fetching data using Promise");
  Promise.all([fetchUserProfile(), fetchPosts(1), fetchComments(101)])
    .then(([user, posts, comments]) => {
      console.log("User profile retrieved:", user);
      console.log("Posts retrieved:", posts);
      console.log("Comments retrieved:", comments);
    })
    .catch((error) => {
      console.error("Error in parallel fetch:", error);
    });
}

//fetchInParallel();
//4 seconds delay to show results separatly!

setTimeout(
  () =>
    console.log(
      "\nAfter  4 seconds dealay we will test fetch in parallel of promises"
    ),
  4000
);
setTimeout(fetchInParallel, 4000);

// Refactor with Async/Await:

// Refactored functions using async/await
async function fetchUserProfileAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { id: "n01548460", name: "Mohammed Darras" };
      resolve(user);
    }, 1000);
  });
}

async function fetchPostsAsync(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = [
        { id: 101, title: "JS is great also when we use async", userId },
        { id: 102, title: "Python has async and await too", userId },
      ];
      resolve(posts);
    }, 1500);
  });
}

async function fetchCommentsAsync(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Failed to fetch comments");
      } else {
        const comments = [
          { id: 201, text: "Great post!", postId },
          { id: 202, text: "Thanks for sharing.", postId },
        ];
        resolve(comments);
      }
    }, 1300);
  });
}

// Sequential fetching using async/await
async function fetchSequentiallyAsync() {
  console.log("\nSequential fetching using async/await");
  try {
    const user = await fetchUserProfileAsync();
    console.log("User profile retrieved:", user);

    const posts = await fetchPostsAsync(user.id);
    console.log("Posts retrieved:", posts);

    const comments = await fetchCommentsAsync(posts[0].id);
    console.log("Comments retrieved:", comments);
  } catch (error) {
    console.error("Error in sequential fetch:", error);
  }
}

//fetchSequentiallyAsync();
//8 seconds delay to show results separatly!

setTimeout(
  () =>
    console.log(
      "\nAfter  8 seconds dealay we will test fetch sequentially async"
    ),
  8000
);
setTimeout(fetchSequentiallyAsync, 8000);

// Parallel fetching using async/await
async function fetchInParallelAsync() {
  console.log("\nParallel fetching using async/await");
  try {
    const [user, posts, comments] = await Promise.all([
      fetchUserProfileAsync(),
      fetchPostsAsync(1),
      fetchCommentsAsync(101),
    ]);
    console.log("User profile retrieved:", user);
    console.log("Posts retrieved:", posts);
    console.log("Comments retrieved:", comments);
  } catch (error) {
    console.error("Error in parallel fetch:", error);
  }
}

//fetchInParallelAsync();
//12 seconds delay to show results separatly!
setTimeout(
  () =>
    console.log(
      "\nAfter  12 seconds dealay we will test fetch in parallel of async"
    ),
  12000
);
setTimeout(fetchInParallelAsync, 12000);

//Error Handling Simulation
// Updated fetchComment and fetchCommentAsync with radom rejection with prob .1

async function fetchDataWithErrorHandling() {
  console.log("\nFetch Data with error Handeling");
  try {
    const user = await fetchUserProfileAsync();
    console.log("User profile retrieved:", user);

    const posts = await fetchPostsAsync(user.id);
    console.log("Posts retrieved:", posts);

    const comments = await fetchCommentsAsync(posts[0].id);
    console.log("Comments retrieved:", comments);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
//fetchDataWithErrorHandling();
//16 seconds delay then apply function
setTimeout(
  () =>
    console.log(
      "\nAfter  16 seconds dealay we will test fetch with error handeling"
    ),
  16000
);
setTimeout(fetchDataWithErrorHandling, 16000);

//Chaining Async Functions:

async function getUserContent() {
  console.log("\nFetch Data using getUserContent!");
  try {
    const user = await fetchUserProfileAsync();
    console.log("User profile retrieved:", user);

    const posts = await fetchPostsAsync(user.id);
    console.log("Posts retrieved:", posts);

    for (const post of posts) {
      try {
        const comments = await fetchCommentsAsync(post.id);
        console.log(`Comments for post ${post.id} retrieved:`, comments);
      } catch (error) {
        console.error(`Error fetching comments for post ${post.id}:`, error);
      }
    }
  } catch (error) {
    console.error("Error in getUserContent:", error);
  }
}

//getUserContent();
//Delay 20 second then call function
setTimeout(
  () => console.log("\nAfter  20 seconds dealay we will test getUserAccount"),
  20000
);
setTimeout(getUserContent, 20000);
