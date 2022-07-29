import React from 'react';
import { GithubUser } from './GithubUser';
import './index.css';



export class App extends React.Component{


    render(){
        return(
            <div>
                <GithubUser username="Emiliano-S" />
            </div>
        );
    };
};