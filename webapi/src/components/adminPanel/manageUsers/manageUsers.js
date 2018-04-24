import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from './../../../actions/usersActions';

class ManageUsers extends Component {
    componentWillMount() {
        getUsers();
    }

    render() {
        return (
            <div class="full-width">
                <h2 className="form-title">List of users</h2>
                {this.props.userList &&
                    <ul className="data-list">
                        {this.props.userList.map((item) =>
                            <li key={item._id}>
                                Username:
                                {item.username}
                            </li>
                        )}
                    </ul>
                }
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.user.userList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (data) => {
            dispatch(getUsers(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);