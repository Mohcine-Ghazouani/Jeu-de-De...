import React from "react";
import { useState } from "react";



export default function Game() {
    let numCache = Math.floor(Math.random() * 6 + 1)

    const [state, setState] = useState({face : null , nbEssai :0});

    function jeuer() {
        let nb_rand = Math.floor(Math.random() * 6 + 1);
        setState({ face: nb_rand, nbEssai: state.nbEssai + 1 })
    }
    function Initialiser() {
        numCache = Math.floor(Math.random() * 6 + 1)
        setState({ face: null, nbEssai: 0 })
    }
    return (
        <React.Fragment>
            <img src="./images/dice.PNG" alt="img" />
            <br />
            <h1>Jeu de ...</h1>
            <p>Face : {state.face}</p>
            <img src={"./images/dice-" + state.face + ".PNG"} alt="img" />
            <p>Nombre d'essai : {state.nbEssai}</p>
            {state.face === numCache ?
                <><p>Bravo vous avez trouvez la face cachee .</p><button onClick={() => Initialiser()}>Initialiser</button></>
                : <button onClick={() => jeuer()}>jeuer</button>}
        </React.Fragment>
    )
}
