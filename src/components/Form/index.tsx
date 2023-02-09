import React from "react";
import { v4 as uuidV4 } from "uuid"
import { Itarefas } from "../../types/tarefa";
import Button from "../Button/index"
import style from "./Form.module.scss"

class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefas[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        this.props.setTarefas( previousTarefas => 
            [
                ...previousTarefas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidV4()
                }
            ]
        );
        this.setState({
            tarefa: "",
            tempo: ""
        })
    }

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione uma tarefa</label>
                    <input
                        onChange={(e) => this.setState({ ...this.state, tarefa: e.target.value})}
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
                        value={this.state.tempo}
                        onChange={(e) => this.setState({ ...this.state, tempo: e.target.value})}
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
}

export default Form