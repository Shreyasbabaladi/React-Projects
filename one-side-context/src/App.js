import React,{Fragment} from 'react'
import Provider from './Compenent/Provider';
import Context from './Compenent/Context';


const Agents=()=>{
    return <AgentOne/>;
}
const AgentOne=()=>{
    return <AgentTwo/>;
}
const AgentTwo=()=>{
    return <AgentThree/>;
}
const AgentThree=()=>{
    return (
        <Context.Consumer>
            {
                (context)=>(
                    <Fragment>
                        <h3>Agent Information</h3>
                        <p>Mission Name:{context.data.mname}</p>
                        <h2>Mission Status:{context.data.accept}</h2>
                        <button onClick={context.isMissionAccepted}>Choose to accept</button>
                    </Fragment>
                )
            }
        </Context.Consumer>
    );
}


const App=()=>{
    return(
        <div>
            <Provider>
                <Agents/>
            </Provider>
             
        </div>
    )
}

export default App;