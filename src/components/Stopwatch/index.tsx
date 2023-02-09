import { tempoParaSegundos } from "../../common/utils/time";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwhatch.module.scss"

export default function Stopwatch() {
    console.log('conversão', tempoParaSegundos('01:01:01'));
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