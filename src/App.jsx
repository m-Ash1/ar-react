import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
function App() {
  const title = "Welcome to Ash's personal blog";
  const link = "https://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">CONTENT</div>
      <Sidebar />
    </div>
  );
}

export default App;
