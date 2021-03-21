const UserListItem = (props) => {
    const {user, onClick} = props
    return (
        <div className="user-card" onClick={() => onClick(user.id)}>
            <h3>{user.name}</h3>
            <a href={"mailto:" + user.email}>{user.email}</a>
            <br />
            <a href={"callto:" + user.phone}>{user.phone}</a>
            <br />
            <a href={user.website}>{user.website}</a>
        </div>
    )
}

export default UserListItem