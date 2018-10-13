import { combineReducers } from "redux"

const user = (state = "", action) => {
    console.log("state from user", state)

    switch (action.type) {
        case "CHANGE_USER":
            return action.user
        default:
            return state
    }
}

const repos = (state = { isFetching: false, repos: [], error: "" }, action) => {

    console.log("state from repos", state)

    switch (action.type) {
        case "RECEIVED_REPOS":
            return {
                isFetching: false,
                error: "",
                repos: action.repos.map(repo => ({
                    id: repo.id,
                    name: repo.full_name,
                    url: repo.html_url
                }))
            }
        case "REQUEST_REPOS":
            return {
                isFetching: true,
                error: "",
                repos: []
            }
        case "NO_REPOS":
            return {
                isFetching: false,
                error: "No repo found for this user",
                repos: []
            }

        default:
            return state
    }
}

export default combineReducers({ user, repos })