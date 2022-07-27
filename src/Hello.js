import React from 'react';
import { DisplayLanguage } from './LanguageContext ';
import { Message } from './Message';


const Strings = {
    en: {
        HELLO_WORLD: "Hello world!"
    },
    it: {
        HELLO_WORLD: "Ciao mondo!"
    }
}

export class Hello extends React.Component{
    render(){
        return (
            <div>
                    <DisplayLanguage.Consumer>
                        {(language) => {
                            return(
                            <h1>{Strings[language].HELLO_WORLD}</h1>
                            )
                        }}
                    </DisplayLanguage.Consumer>
                <Message />
            </div>
        );
    };
};