import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />

    </main>
  );
}

export default App;
