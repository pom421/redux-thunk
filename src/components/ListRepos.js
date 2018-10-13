import React from "react"

import { connect } from "react-redux"

export class ListRepos extends React.Component {

    render() {
        console.log("props", this.props)
        const { isFetching, error, repos } = this.props

        if (error) {
            return (<div style={{ marginTop: 20}}>{ error }</div>)
        }
        else if (isFetching) {
            
            return (<div style={{ marginTop: 20}}>Pending...</div>)
        } else {
            return (
                <div>
                    <ul>
                        {repos.map(repo => {
                            return (
                                <li key={repo.id}><a href={repo.url}>{repo.name}</a></li>
                            )
                        })}
                    </ul>
                </div>

            )
        }

    }
}


const mapStateToProps = ({ repos }) => ({
    isFetching: repos.isFetching,
    error: repos.error,
    repos: repos.repos
})

export default connect(mapStateToProps)(ListRepos)