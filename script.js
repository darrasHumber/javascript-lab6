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
  fetchUserProfile()
    .then((user) => {
      console.log("User profile retrieved(Sequantial):", user);
      return fetchPosts(user.id);
    })
    .then((posts) => {
      console.log("Posts retrieved(Sequantial):", posts);
      return fetchComments(posts[0].id);
    })
    .then((comments) => {
      console.log("Comments retrieved(Sequantial):", comments);
    })
    .catch((error) => {
      console.error("Error in sequential fetch(Sequantial):", error);
    });
}

//fetchSequentially();

//Parallel Fetching
function fetchInParallel() {
  Promise.all([fetchUserProfile(), fetchPosts(1), fetchComments(101)])
    .then(([user, posts, comments]) => {
      console.log("\nUser profile retrieved(Parallel):", user);
      console.log("Posts retrieved(Parallel):", posts);
      console.log("Comments retrieved(Parallel):", comments, "\n\n");
    })
    .catch((error) => {
      console.error("Error in parallel fetch(Parallel):", error);
    });
}

console.log(
  "We will fetch data using sequantial and parallel techniques and compare results, some error will be randomly generated!"
);

setTimeout(fetchSequentially, 1000);
setTimeout(fetchInParallel, 1000);

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
    }, 2000);
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
  try {
    const user = await fetchUserProfileAsync();
    console.log("User profile retrieved(Sequantial/Async):", user);

    const posts = await fetchPostsAsync(user.id);
    console.log("Posts retrieved(Sequantial/Async):", posts);

    const comments = await fetchCommentsAsync(posts[0].id);
    console.log("Comments retrieved(Sequantial/Async):", comments);
  } catch (error) {
    console.error("Error in sequential fetch(Sequantial/Async):", error);
  }
}

// Parallel fetching using async/await
async function fetchInParallelAsync() {
  try {
    const [user, posts, comments] = await Promise.all([
      fetchUserProfileAsync(),
      fetchPostsAsync(1),
      fetchCommentsAsync(101),
    ]);
    console.log("\nUser profile retrieved(Parallel/Async):", user);
    console.log("Posts retrieved(Parallel/Async):", posts);
    console.log("Comments retrieved(Parallel/Async):", comments, "\n\n");
  } catch (error) {
    console.error("Error in parallel fetch(Parallel/Async):", error);
  }
}

setTimeout(fetchSequentiallyAsync, 1000);
setTimeout(fetchInParallelAsync, 1000);

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

setTimeout(fetchDataWithErrorHandling, 6000);
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

setTimeout(getUserContent, 11000);
setTimeout(() => console.log("\nAll completed, Thank you"), 18000);
