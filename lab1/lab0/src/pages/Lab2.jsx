import { useParams } from "react-router-dom";
import { data } from "../data/module-data.js";
import PersonProfile from "../components/PersonProfile.jsx"


function Lab2() {
    const { id } = useParams();

    if (!id) {
        return <h1>Brak parametru ID. Proszę podać poprawne ID.</h1>;
    }

    const index = parseInt(id, 10) - 1;

    if (isNaN(index) || index < 0 || index >= data.length) {
        return <h1>Niepoprawny parametr ID. Proszę podać ID w zakresie od 1 do {data.length}.</h1>;
    }

    return ( 
        <>
            <h1>lab2</h1>
            <PersonProfile key={id} {...data[index]} />
        </>
    );
}

export default Lab2;