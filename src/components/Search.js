import React from "react"
import { connect } from "react-redux"

import {changeUser, loadReposAsync } from "../redux/actions"

export class Search extends React.Component {
    
    render() {

        console.log("props", this.props)
        const { user, changeUser, requestRepos } = this.props

        return (
            <div>
                <input type="text" placeholder="Github login" onChange={(e) => changeUser(e.target.value)} value={user}/>
                <button onClick={() => requestRepos(user)}>OK</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    changeUser: (user) => dispatch(changeUser(user)),
    requestRepos: (user) => dispatch(loadReposAsync(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)