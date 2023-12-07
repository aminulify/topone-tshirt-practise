import React, { useContext } from 'react';
import CousinN from '../CousinN/CousinN';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({uncleCousinAge}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>Granpha Money: {money}</small></p>
            <div className='flex'>
            <CousinN uncleCousinAge={uncleCousinAge}>Anik</CousinN>
            <CousinN>Fahad</CousinN>
            </div>
        </div>
    );
};

export default Uncle;