export const requestRepos = () => ({
    type: "REQUEST_REPOS"
})

export const changeUser = (user) => ({
    type: "CHANGE_USER",
    user

})

export const receivedRepos = (repos) => ({
    type: "RECEIVED_REPOS",
    repos
})

const noRepos = () => ({
    type: "NO_REPOS"
})

function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }
  

export const loadReposAsync = (user) => dispatch => {

    dispatch(requestRepos())

    const URL = `https://api.github.com/users/${user}/repos?sort=updated`;
    setTimeout(() => {
        return fetch(URL)
        .then(status)
        .then(data => data.json())
        .then(data => {
            return data
        })
        .then(data => {
            console.log("data", data)
            if (! data.length) {
                dispatch(noRepos())
            } else {
                dispatch(receivedRepos(data))

            }
        })
        .catch(err => {
            console.error("Erreur Ajax", err)
            dispatch(noRepos())
        })
    }, 1500)
}