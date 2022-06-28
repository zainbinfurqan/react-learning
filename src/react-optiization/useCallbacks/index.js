import React, { useCallback, useState } from 'react';

function Index(props) {

    const [toDoList, setDoToList] = useState([]);
    const [value, setValue] = useState("");

    const handleAddItem = useCallback((data) => {
        try {

            const temToDoList = toDoList;
            temToDoList.push({ value: data, id: toDoList.length + 1 });
            setDoToList([...temToDoList])
        } catch (error) {
            console.log(error)
        }
    })

    const handleDeleteitem = (id) => {
        try {
            const filterItem = toDoList.findIndex(item => item.id == id);
            const temToDoList = toDoList;
            temToDoList.splice(filterItem, 1)
            setDoToList([...temToDoList])
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            {console.log(toDoList)}
            <input onChange={(e) => setValue(e.target.value)} value={value} />
            <button onClick={() => handleAddItem(value)}>Add</button>
            <div>
                {toDoList.map((item, indx) => {
                    return (
                        <div key={item.id} style={{ display: 'flex' }}>
                            <p style={{ padding: '4px' }}>{item.value}</p>
                            <p style={{ padding: '4px', cursor: 'pointer' }} onClick={() => handleDeleteitem(item.id)}>Delete</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Index;