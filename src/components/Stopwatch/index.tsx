import Button from "../Button";
import Clock from "./Clock";

export default function Stopwatch() {
    return(
        <div>
            <p>Escolha um card e inicie o cronômetro</p>
            <div>
                <Clock />
            </div>
            <Button>Começar</Button>
        </div>
    )
}