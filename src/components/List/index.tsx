import { Itarefas } from "../../types/tarefa"
import Item from "./Item"
import style from "./List.module.scss"

interface props {
    tarefas: Itarefas[],
    selecionaTarefa: (itemSelecionado: Itarefas) => void
}

function List({tarefas, selecionaTarefa}: props) {
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Tarefas do dia </h2>
            <ul>
                {tarefas.map( (item) => (
                   <Item
                    selecionaTarefa = {selecionaTarefa}
                    key={item.id}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List