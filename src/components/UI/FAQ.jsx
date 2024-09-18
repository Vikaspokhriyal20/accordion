import React, { useState } from 'react'

const FAQ = ({ currData }) => {
    const { question, answer } = currData;

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className='accordion-container'>
                <div className="flex">
                    <p className='question'>{question}</p>
                    <button className={`${'btn'} ${open ? 'active-btn' : ''}`} onClick={handleToggle}>
                        {
                            open ? <i className="bi bi-chevron-double-up"></i>
                            : <i className="bi bi-chevron-double-down"></i>
                        }
                    </button>
                </div>
                <p className='answer'>{open && answer}</p>
            </div>
        </>
    )
}

export default FAQ
