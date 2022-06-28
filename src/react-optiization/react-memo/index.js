import React, { useState } from 'react';
import AdminTable from './admin';
import LiveUsersConter from './liveUserCount';

function Index(props) {
    let liveUserCounterInterval = null;
    const [liveUserCounter, setLiveUserCounter] = useState(0)
    const [admins, setAdmins] = useState([
        { id: 1, name: 'Zain Ahmed', isActive: true },
        { id: 3, name: 'Faraz Ahmed', isActive: false },
        { id: 2, name: 'Arsalan Ahmed', isActive: true },
    ])

    const handleLiveUserCounter = () => {
        liveUserCounterInterval = setInterval(() => {
            setLiveUserCounter(liveUserCounter => liveUserCounter + 1);
        }, 500)
    }

    useState(() => {
        handleLiveUserCounter()
        return () => {
            liveUserCounterInterval = null
        }
    }, [])

    return (
        <div>
            <LiveUsersConter counter={liveUserCounter} />
            <AdminTable data={admins} />
        </div>
    );
}

export default Index;