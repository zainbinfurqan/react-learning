import React from 'react';

const AdminTable = (props) => {
    console.log("Admin Table")
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>isActive</td>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((itm, indx) => {
                        return (
                            <tr>
                                <td>{itm.id}</td>
                                <td>{itm.name}</td>
                                <td>{itm.isActive ? "Active" : "No Active"}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default React.memo(AdminTable);