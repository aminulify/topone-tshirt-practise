import React, { useContext } from 'react';
import CousinN from '../CousinN/CousinN';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({uncleCousinAge}) => {
    const reactDev = useContext(RingContext);
    return (
        <div>
            <h2>Aunty</h2>
            <CousinN uncleCousinAge={uncleCousinAge}>Aminul</CousinN>
            <CousinN hasFriend={true}>Nabil <p><small>{reactDev}</small></p></CousinN>
        
        </div>
    );
};

export default Aunty;