import React from 'react';
import DynamicCompo_ from './dynamic-compo.js'

function DynamicCompo(props) {
    return (
        <ul className='pl-4 p-0  cursor-pointer'>
            <li className='p-1'>{props.data.title}</li>
            {
                props.data.decision.map((item, index) => {
                    return (
                        <ul className='pl-4 p-0  cursor-pointer'>
                            <li className='p-1'>{item.title}</li>
                            {Object.keys(item.story).length == 0 && null}
                            {Object.keys(item.story).length > 0 && <DynamicCompo_ data={item.story} />}
                        </ul>
                    )
                })
            }
        </ul >
    );
}

export default DynamicCompo;