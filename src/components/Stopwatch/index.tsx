import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefas } from "../../types/tarefa";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwhatch.module.scss"

interface props {
    selecionado: Itarefas | undefined
}
export default function Stopwatch( {selecionado}: props) {
    const [tempo, setTempo] = useState<number>()

    useEffect( () => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>Começar</Button>
        </div>
    )
}