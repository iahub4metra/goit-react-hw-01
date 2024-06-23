import css from "./Profile.module.css"
const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.profileContainer}>
            <div className={css.profileContainerImage}>
                <img
                    src={image}
                    alt={`${name} avatar`}
                    className={css.profileImage}
                />
                <p className={css.profileTitle}>{name}</p>
                <p className={css.profileText}>@{tag}</p>
                <p className={css.profileText}>{location}</p>
            </div>

            <ul className={css.profileList}>
                <li className={css.profileListItem}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.profileListItem}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.profileListItem}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}
export default Profile