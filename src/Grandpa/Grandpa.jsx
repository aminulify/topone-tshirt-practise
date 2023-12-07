import React, { createContext, useEffect, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext();
export const MoneyContext = createContext();

const Grandpa = () => {
    const ring = 'diamond';
    const uncleCousinAge = 18;
    const [money,setMoney] = useState(0);
    useEffect(()=>{
        const amount = 200;
        setMoney(amount);
    },[])
    return (
        <div className='grandpa'>
            <h2 className='text-center'>Granpa</h2>
            <p className='text-center'>Has Money: {money}</p>
            <button className='send-money-btn px-2 py-1 bg-slate-500 text-white hover:bg-slate-400' onClick={()=> setMoney(money+1000)}>Send 1000tk</button>
            <MoneyContext.Provider value = {[money, setMoney]}>
                <RingContext.Provider value='golden ring' >
                    <section className='flex justify-center'>
                        <Father ring={ring}></Father>
                        <Uncle uncleCousinAge={uncleCousinAge}></Uncle>
                        <Aunty uncleCousinAge={uncleCousinAge}></Aunty>
                    </section>
                </RingContext.Provider> 
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1.create context and export
 * 2. create a provider and pass a value
 * 3. use useContext to receive 
 */