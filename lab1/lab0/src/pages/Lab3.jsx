import { data } from "../data/module-data.js";
import PersonProfile from "../components/PersonProfile.jsx"
import FlexContainer from "../components/FlexContainer.jsx";


function Lab3() {

    return ( 
        <>
        <h1>lab3</h1>
        <FlexContainer element={PersonProfile} data={data} />
        </>
     );
}

export default Lab3;