import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import style from "./App.module.scss"

function App() {
  return (
    <div className={style.AppStyle}>
      <h1>hello world</h1>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
