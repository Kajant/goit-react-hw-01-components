import FriendListItem from '../FriendListItem/FriendListItem'
import css from './FriendList.module.css'
import PropTypes from "prop-types";

const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({id, avatar, name, isOnline}) =>
                <FriendListItem
                    key={id} 
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}        
                />
            )}
        </ul>
    )
}
FriendList.propTypes = {
    friends: PropTypes.array,
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}
export default FriendList