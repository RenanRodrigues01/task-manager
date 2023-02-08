import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { Itarefas } from "../types/tarefa";
import style from "./App.module.scss"

function App() {
  const [tarefas, setTarefas] = useState<Itarefas[]>([])

  return (
    <div className={style.AppStyle}>
      <h1>hello world</h1>
      <Form setTarefas = {setTarefas} />
      <List tarefas = {tarefas} />
      <Stopwatch />
    </div>
  );
}

export default App;
