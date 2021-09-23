import { useState } from 'react';
import styles from './CreateRoom.module.css';
import io from 'socket.io-client';

const CreateRoom = () => {

    const socket = io('http://localhost:8000');

    const [roomname, setRoomname] = useState();
    const [roompassword, setRoompassword] = useState();

    const handleForm = () => {
        socket.emit('create-room', {
            room_name: roomname,
            room_password: roompassword
        });

        socket.on('error', (data) => {
            console.log(data)
        })

        socket.on('success', (data) => {
            console.log(data)
        })
    }

    return (
        <div className="page">
            <p className={styles.title}>Create a Room</p>

            <p className={styles.label}>Room Name</p>
            <input onChange={(e) => { setRoomname(e.target.value) }} type="text" className={styles.field} />

            <p className={styles.label}>Room Password</p>
            <input onChange={(e) => { setRoompassword(e.target.value) }} type="password" className={styles.field} />

            <button onClick={handleForm} className={styles.createBtn}>Create Room</button>
        </div>
     );
}

export default CreateRoom;