import React from 'react';
import styles from "./friends.module.css";

const Friends = (props) => {
    return (
        <div className={styles.friends}>
            <div className={styles.icon}>
                <img src="https://static.wikia.nocookie.net/fallout/images/6/63/FO76_Atomic_Shop_-_Too_Cool_player_icon.png/revision/latest/scale-to-width-down/340?cb=20190604170244"/>
            </div>
            <div className={styles.icon}>
                <img src="https://static.wikia.nocookie.net/fallout/images/6/63/FO76_Atomic_Shop_-_Too_Cool_player_icon.png/revision/latest/scale-to-width-down/340?cb=20190604170244"/>
            </div>
            <div className={styles.icon}>
                <img src="https://static.wikia.nocookie.net/fallout/images/6/63/FO76_Atomic_Shop_-_Too_Cool_player_icon.png/revision/latest/scale-to-width-down/340?cb=20190604170244"/>
            </div>
        </div>
    )
}

export default Friends;