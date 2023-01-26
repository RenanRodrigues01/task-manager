import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss"

function App() {
  return (
    <div className={style.AppStyle}>
      <h1>hello world</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
