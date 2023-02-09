import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid"
import { Itarefas } from "../../types/tarefa";
import Button from "../Button/index"
import style from "./Form.module.scss"

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefas[]>>
}
function Form ( {setTarefas}: Props ) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00")

    function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setTarefas( previousTarefas => 
            [
                ...previousTarefas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidV4()
                }
            ]
        );
        setTarefa('');
        setTempo("00:00")
    }
    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione uma tarefa</label>
                    <input
                    value={tarefa}
                        onChange={(e) => setTarefa(e.target.value)}
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="Descreva a tarefa"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input
                        value={tempo}
                        onChange={(e) => setTempo(e.target.value)}
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button type="submit">Adicionar</Button>
        </form>
    )
}

export default Form