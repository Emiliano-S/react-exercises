import { useGithubUser } from "./useGithubUser"


export function GithubUser ({username}){
    const {user, error, loading} = useGithubUser(username);
    

    return(
        <div>
            <h1>
                {loading && "Loading..."}
                {error && "Error"}
                {user && user}
            </h1>
        </div>
    )
}