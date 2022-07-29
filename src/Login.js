import { useLogin } from "./useLogin";

export function Login(){
    const {data, onInputChange} = useLogin();

    console.log(data);
    return(
        <form>
            <input name='username' value={data.username} onChange={onInputChange}/>
            <input name='password' value={data.password} type="password" onChange={onInputChange} />
            <input name='remember' checked={data.remember} type="checkbox" onChange={onInputChange} />
        </form>
    )
}