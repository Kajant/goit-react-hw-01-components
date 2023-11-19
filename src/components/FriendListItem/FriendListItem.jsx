import PropTypes from "prop-types";
import css from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
         <li className={css.item}>
                {isOnline ? <span className={css.status} style={{backgroundColor: `rgb(13,242,87)`}}></span> : <span className={css.status} ></span>}  
                <img
                    className={css.avatar}
                    src={avatar}
                    alt="User foto"
                />
                <p className={css.name}>
                    {name}
                </p>
            </li>
        )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}

export default FriendListItem