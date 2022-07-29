import React from 'react';
import { GithubUserList } from './GithubUserList';
import './index.css';



export class App extends React.Component{


    render(){
        return(
            <div>
                <GithubUserList />
            </div>
        );
    };
};