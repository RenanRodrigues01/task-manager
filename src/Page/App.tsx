import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { Itarefas } from "../types/tarefa";
import style from "./App.module.scss"

function App() {
  const [tarefas, setTarefas] = useState<Itarefas[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefas>();

  function selecionaTarefa(itemSelecionado: Itarefas): void {
    setSelecionado(itemSelecionado);
    setTarefas( previousTarefas => previousTarefas.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === itemSelecionado.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <h1>hello world</h1>
      <Form setTarefas = {setTarefas} />
      <List 
        tarefas = {tarefas}
        selecionaTarefa = {selecionaTarefa}
      />
      <Stopwatch />
    </div>
  );
}

export default App;
