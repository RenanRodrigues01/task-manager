import Item from "./Item"
import style from "./List.module.scss"

function List() {
    const tarefas = [
        {
            tarefa: "estudar Typescript",
            tempo: "01:00:00"
        },
        {
            tarefa: "estudar react",
            tempo: "00:30:00"
        },
        {
            tarefa: "limpar a casa",
            tempo: "02:00:00"
        }
    ]
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