import { Component } from "react"
import UserListItem from "./UserListItem"

class UserList extends Component{
    render() {
        const {users, onSelect} = this.props
        return (
            <>
                <div>User List Component</div>
                <div className="user-card-container">
                {users.map(user => (
                    <UserListItem key={user.id} user={user} onClick={onSelect}/>
                ))}
                </div>
            </>
        )
    }
    
}

export default UserList