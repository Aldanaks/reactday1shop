import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Image from "./components/Image";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "beige",
      }}
    >
      <Title />
      <Image />
    </div>
  );
}

export default App;
