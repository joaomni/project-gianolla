import React from 'react';

import './style.scss';

const Section = ({ children, id, className, title, background }) => {
    return (
        <div 
            className={`section ${className ? className : ''} ${background === 'gray' ? 'gray' : 'light'}`} 
            id={id || ''}
        >
            <div className="content">
                {title && (
                    <div className='section-title'>
                        <h6>{title}</h6>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}

export default Section;
