import { data } from "../data/module-data.js";
import { useParams } from 'react-router-dom';
import PersonProfile from "../components/PersonProfile.jsx"
import FlexContainer from "../components/FlexContainer.jsx";
import FormPageEdit from "../components/FormPageEdit.jsx";
import React, {useContext} from "react";
import AppContext from '../data/AppContext';


function Lab4Edit() {
    const { id } = useParams();
    const context = useContext(AppContext);
    const items = context.items;
    if (!id) {
      return <h1>Brak parametru ID. Proszę podać poprawne ID.</h1>;
    }
  
    const index = parseInt(id) - 1;
  
    if (isNaN(index) || index < 0 || index >= items.length) {
        return <h1>Niepoprawny parametr ID. Proszę podać ID w zakresie od 1 do {items.length}.</h1>;
    }
  
    return (
      <>
        <h1>Editing Entry ID: {id}</h1>
        <FormPageEdit key={id} {...items[index]} />
      </>
    );
}

export default Lab4Edit;