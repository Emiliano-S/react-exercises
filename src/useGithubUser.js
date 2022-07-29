import { useEffect, useState } from "react";

export function useGithubUser(username){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    async function fetchGithub(username){

        setLoading(true)
        setError(null)
        try{
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()

            setUser(json.login)
        }catch(error){
            setError(error)
            setUser(null)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchGithub(username)
    }, [username])

    return{
        user: user,
        loading: loading,
        error: error
    }
}