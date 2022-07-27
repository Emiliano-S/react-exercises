import React from 'react';
import { Hello } from './Hello';
import './index.css';
import { DisplayLanguage  } from './LanguageContext ';


export class App extends React.Component{
    state = {
        language: 'en'
    }

    handleLanguageChange  = (event) =>{
        this.setState({
            language: event.target.value
        })
    }

    render(){
        return(
            <div>
                <div>
                    <select value={this.state.value} onChange={this.handleLanguageChange}>
                        <option value="en">English</option>
                        <option value="it">Italiano</option>
                    </select>
                </div>
                <DisplayLanguage.Provider value={this.state.language}>
                    <Hello />
                </DisplayLanguage.Provider>
            </div>
        );
    };
};