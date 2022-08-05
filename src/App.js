import "./styles.css";
import Avatar from "./Avatar.js";

export default function App() {
  let index = Math.floor(Math.random() * Avatar.length);
  return (
    <div className="App">
      <img
        className="img-design"
        src="https://api.minimalavatars.com/avatar/minimal/png"
        alt="alien"
      />
      <h1>{Avatar[index].name}</h1>
      <h2>{Avatar[index].planeta}</h2>
      <h2>{Avatar[index].frase}</h2>
    </div>
  );
}
