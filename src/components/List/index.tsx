import react from "react"

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
        <aside>
            <h2>Tarefas do dia </h2>
            <ul>
                {tarefas.map( (item, index) => (
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List