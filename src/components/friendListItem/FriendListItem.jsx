import css from "./FriendListItem.module.css"
import clsx from "clsx";
const FriendListItem = ({ friend }) => {
    return (
        <div className={css.friendListItemContainer}>
            <img src={friend.avatar} alt={`${friend.name}'s avatar`} width="48" />
            <p>{friend.name}</p>
            <p className={clsx(css.friendListItemStatus, { [css.online]: friend.isOnline, [css.offline]: !friend.isOnline})}>{friend.isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
}
export default FriendListItem