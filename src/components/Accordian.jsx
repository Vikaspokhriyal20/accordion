import React, { useEffect, useState } from 'react'
import faq from '../API/faq.json';
import FAQ from './UI/FAQ';

const Accordian = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(faq);
    }, []);

    console.log(data);


    return (
        <>
            {data.map((currElement) => {
                return (
                    <FAQ key={currElement.id} currData={currElement} />
                )
            })}
        </>
    )
}

export default Accordian
