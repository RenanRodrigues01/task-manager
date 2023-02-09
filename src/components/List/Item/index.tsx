import { Itarefas } from "../../../types/tarefa"
import style from "../List.module.scss"

interface props extends Itarefas{
    selecionaTarefa: (itemSelecionado: Itarefas) => void
}
export default function Item(
    {   
        tarefa, 
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }: props) {
    return(
    <li 
        className={`${style.item} ${selecionado ? style.itemSelecionado: ''}`}
        onClick = {() => selecionaTarefa(
            {
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            }
        )}
    >
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}