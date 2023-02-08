import { Itarefas } from "../../types/tarefa"
import Item from "./Item"
import style from "./List.module.scss"


function List({tarefas}: {tarefas: Itarefas[]}) {
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Tarefas do dia </h2>
            <ul>
                {tarefas.map( (item, index) => (
                   <Item key={index}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List