import "./App.css";

function App() {
  return (
    <>
      <h1>Github Actions</h1>
      <h2>Complete course with 2 projects</h2>
      <h1>{import.meta.env.VITE_MY_NAME}</h1>
    </>
  );
}

export default App;
