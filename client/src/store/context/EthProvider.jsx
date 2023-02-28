import React, { useCallback, useEffect, useReducer } from 'react'
import Web3 from "web3";
import { actions } from './EthContext/actions';
import EthContext from './EthContext/EthContext';
import { Reducer } from './EthContext/Reducer';
import Marketplace from '../../contracts/Marketplace.json';

export default function EthProvider({ children }) {
    const initialState = {
        artifact: null,
        web3: null,
        accounts: null,
        networkID: null,
        contract: null
    };

    const [state, dispatch] = useReducer(Reducer, initialState);

    const init = useCallback(
        async artifact => {
            if (artifact) {
                // if (window.ethereum) {
                //     window.web3 = new Web3(window.ethereum)
                //     await window.ethereum.enable()

                //     const web3 = window.web3
                //     // Load account
                //     const accounts = await web3.eth.getAccounts()
                //     this.setState({ account: accounts[0] })
                //     const networkId = await web3.eth.net.getId()
                //     const networkData = Marketplace.networks[networkId];
                //     alert(ne)

                // }
                // else if (window.web3) {
                //     window.web3 = new Web3(window.web3.currentProvider)
                // }
                // else {
                //     window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
                // }
                const web3 = new Web3(Web3.givenProvider || "ws://localhost:9545");
                const accounts = await web3.eth.requestAccounts();
                const networkID = await web3.eth.net.getId();
                const networkData = Marketplace.networks[networkID];

                console.log(networkID, 'id');

                const { abi } = artifact;
                let address, contract;

                try {
                    address = artifact.networks[networkID].address;
                    contract = new web3.eth.Contract(abi, address);
                } catch (err) {
                    console.error(err);
                }

                dispatch({
                    type: actions.init,
                    data: { artifact, web3, accounts, networkID, contract }
                });
            }
        },
        []);


    /*  */
    useEffect(() => {
        const tryInit = async () => {
            try {
                const artifact = require("../../contracts/SimpleStorage.json");
                init(artifact);
            } catch (err) {
                console.error(err);
            }
        };

        tryInit();
    }, [init, state.artifact]);

    /* set thay đổi account */
    useEffect(() => {
        const events = ["chainChanged", "accountsChanged"];
        const handleChange = () => {
            init(state.artifact);
        };

        // console.log(window.ethereum)

        events.forEach(e => window.ethereum.on(e, handleChange));
        return () => {
            events.forEach(e => window.ethereum.removeListener(e, handleChange));
        };
    }, [init, state.artifact]);

    const connectMetaMark = async () => {

    }


    return (
        <EthContext.Provider value={{
            state,
            dispatch,
            connectMetaMark
        }}>
            {children}
        </EthContext.Provider>
    )
}
