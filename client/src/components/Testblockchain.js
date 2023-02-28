import React from 'react'
import useEth from '../store/context/EthContext/useEth';


export default function Testblockchain() {
    const { state } = useEth();

    return (
        <div style={{marginTop:'80px'}}>
            <h3>Welcome:</h3>: {state ? state.accounts : null}
        </div>
    )
}
