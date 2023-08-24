import { createSignal } from "solid-js";
import { format, getDate, getYear } from "date-fns";
import { pl } from "date-fns/locale";

function App() {
    const [clock, setClock] = createSignal(new Date());

    setInterval(() => {
        setClock(new Date());
    }, 1000);

    return (
        <main>
            <div class={`day${clock().getDay() === 0 ? " highlight" : ""}`}>
                {format(clock(), "eeee", { locale: pl }).toUpperCase()}
            </div>
            <div class="hour">
                {format(clock(), "HH:mm", { locale: pl }).toUpperCase()}
            </div>
            <div class="date">
                <div>{getDate(clock())}</div>
                <div>{format(clock(), "MMMM", { locale: pl })}</div>
                <div>{getYear(clock())}</div>
            </div>
        </main>
    );
}

export default App;
