import React from "react";
export default class Game extends React.Component{
    constructor(props){
        super(props)
        this.numCache = Math.floor(Math.random()*6+1)
        this.state = {face : null , nbEssai :0}
    }
    jeuer(){
        let nb_rand = Math.floor(Math.random()*6+1);
        this.setState({face : nb_rand , nbEssai :this.state.nbEssai+1})
    }
    Initialiser(){
        this.numCache = Math.floor(Math.random()*6+1)
        this.setState({face : null , nbEssai :0})
    }
    render(){
        return(
            <React.Fragment>
                <img src="./images/dice.PNG" alt=""/>
                <br/>
                <h1>Jeu de ...</h1>
                <p>Face : {this.state.face}</p>
                <img src={"./images/dice-"+this.state.face+".PNG"} alt=""/>
                <p>Nombre d'essai : {this.state.nbEssai}</p>
                {this.state.face === this.numCache ?
                <><p>Bravo vous avez trouvez la face cachee .</p><button onClick={()=>this.Initialiser()}>Initialiser</button></>
                :<button onClick={()=>this.jeuer()}>jeuer</button>}
            </React.Fragment>
        )
    }
}