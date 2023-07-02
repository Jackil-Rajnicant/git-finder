import { createContext } from "react";
import React, { useReducer } from 'react'
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({children}) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

  //   const fetchUsers = async () => {
  //       setLoading()
  //       const response = await fetch(`${GITHUB_URL}/users`, {
  //         headers: {
  //           Authorization: `token ${GITHUB_TOKEN}`,
  //         },
  //       })
    
  //       const data = await response.json()
  //       getUsers(data)
  //   }

  //   const seachUsers = async (text) => {
  //       setLoading()
  //       const params = new URLSearchParams({ q: text })

  //       const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //           headers: {
  //             Authorization: `token ${GITHUB_TOKEN}`,
  //           },
  //         })
        
  //       const { items } = await response.json()
  //       getUsers(items)
  //   }

  //   const getUser = async (username) => {
  //     setLoading()
  //     const response = await fetch(`${GITHUB_URL}/users/${username}`, {
  //         headers: {
  //           Authorization: `token ${GITHUB_TOKEN}`,
  //         },
  //       })
      
  //     if(response.status === 404) {
  //       window.location = '/notfound'
  //     } else {
  //       const data = await response.json()
  //       dispatch({ type: 'GET_USER', user: data })
  //     }
  // }

  //   const getRepos = async (login) => {
  //     setLoading()
  //     const params = new URLSearchParams({
  //         sort: 'created',
  //         per_page: 10
  //     })

  //     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     })

  //     const data = await response.json()

  //     dispatch({ type: 'GET_REPOS', repos: data})
  //   }

  //   const getUsers = (items) => dispatch({ type: 'GET_USERS', payload: items })

  //   const setLoading = () => dispatch({type: 'SET_LOADING'})

  //   const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

    return <GithubContext.Provider value={{
                ...state,
                dispatch
            }}
        >
        {children}
    </GithubContext.Provider>
}

export default GithubContext