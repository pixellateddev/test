import { Component } from "react"

class UserDetails extends Component {
    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        const {user, onClose} = this.props
        return (
            <div>
                <h3>{user.name}</h3>
                <a href={"mailto:" + user.email}>{user.email}</a>
                <br />
                <a href={"callto:" + user.phone}>{user.phone}</a>
                <br />
                <a href={user.website}>{user.website}</a>
                {/* <p>Address: {user.address.street}, {user.address.suite},&nbsp;
                {user.address.city} - {user.address.zipcode}</p> */}
                <button onClick={onClose}>Go back</button>
            </div>
        )
    }
}

export default UserDetails