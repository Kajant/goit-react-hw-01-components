import PropTypes from "prop-types";
import css from './Profile.module.css'

const Profile = ({username, tag, location, avatar, stats:{followers, views, likes}}) => {
     return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <h2 className={css.name}>{ username }</h2>
        <p className={css.tag}>@{ tag }</p>
                <p className={css.location}>{ location }</p>
      </div>
      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{ followers }</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{ views }</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{ likes }</span>
        </li>
      </ul>
    </div>
    )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
}

export default Profile;