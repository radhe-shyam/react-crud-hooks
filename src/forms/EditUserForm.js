import React, { useState, useEffect } from 'react';

const AddUserForm = props => {

    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = event => {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value });
    }

    const updateUser = event => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user.id, user);
    };

    useEffect(setUser.bind(null, props.currentUser), [props]);
    return (
        <form onSubmit={updateUser}>
            <label>Name</label>
            <input type='text' name='name' value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type='text' name='username' value={user.username} onChange={handleInputChange} />
            <button>Update User</button>
            <button onClick={props.setEditing.bind(null, false)} className="button muted-button">Cancel</button>
        </form>
    );
};

export default AddUserForm;