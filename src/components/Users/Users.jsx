import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userLogo from '../../images/userLogo.jpg' 

let Users = (props) => {
    
    let getUsers = () => 
    {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });  
        }
    }

    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userLogo} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                         ? <button onClick={() => {props.unfollow(u.id) } }>Unfollow</button> 
                         : <button onClick={() => {props.follow(u.id) } }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>)
        }
    </div>
};

export default Users;

// {id: 1, photoUrl: 'http://i.imgur.com/e4KKINz.png', followed: false, fullName: 'Denis', status: 'I am Boss', location: {city: 'Minsk', country: 'Belarus'} },
// {id: 2, photoUrl: 'http://i.imgur.com/e4KKINz.png', followed: true, fullName: 'Sascha', status: 'I am Boss too', location: {city: 'Moscow', country: 'Russia'} },
// {id: 3, photoUrl: 'http://i.imgur.com/e4KKINz.png', followed: false, fullName: 'Dmitriy', status: 'I am too Boss', location: {city: 'Kiev', country: 'Ukraine'} },