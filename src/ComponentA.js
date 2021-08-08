import React, { useEffect, useReducer} from 'react'

    

const ComponentA = () => {

    const reducer = (state,action) => {
        switch (action) {
            case 'increment':
                return state+1;
            default:
                return state;

        }
    }

    const [countA, dispatchCountA] = useReducer(reducer,0);
    const [countB, dispatchCountB] = useReducer(reducer,0);
    const [countC, dispatchCountC] = useReducer(reducer,0);
    const [countD, dispatchCountD] = useReducer(reducer,0);

    const updateCounts = ()=>{
        dispatchCountA('increment');
        dispatchCountB('increment');
        dispatchCountC('increment');
        dispatchCountD('increment');
    }

    useEffect(() => {
        const interval = setInterval(updateCounts, 1);
        return () => {
            clearInterval(interval);
        }
    })

    

    return (
        <div style={{display:'flex', height:'100vh', flexDirection:'row', justifyContent:'space-around', alignItems:'center' ,backgroundColor:'#191919'}}>
            <div>
                <h1 style={{'backgroundColor':'aqua', padding:'10px 20px', borderRadius:'10px', fontFamily:'sans-serif', fontWeight:'500'}}>Count A</h1>
                <h2 style={{color:'white', fontFamily:'sans-serif', fontWeight:'800'}}>{countA}</h2>
            </div>
            <div>
                <h1 style={{'backgroundColor':'aqua', padding:'10px 20px', borderRadius:'10px', fontFamily:'sans-serif', fontWeight:'500'}}>Count B</h1>
                <h2 style={{color:'white', fontFamily:'sans-serif', fontWeight:'800'}}>{countB}</h2>
            </div>
            <div>
                <h1 style={{'backgroundColor':'aqua', padding:'10px 20px', borderRadius:'10px', fontFamily:'sans-serif', fontWeight:'500'}}>Count C</h1>
                <h2 style={{color:'white', fontFamily:'sans-serif', fontWeight:'800'}}>{countC}</h2>
            </div>
            <div>
                <h1 style={{'backgroundColor':'aqua', padding:'10px 20px', borderRadius:'10px', fontFamily:'sans-serif', fontWeight:'500'}}>Count D</h1>
                <h2 style={{color:'white', fontFamily:'sans-serif', fontWeight:'800'}}>{countD}</h2>
            </div>
        </div>
    )
}

export default ComponentA
