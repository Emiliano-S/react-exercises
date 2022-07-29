import React from 'react';
import { FilteredList } from './FilteredList';

import './index.css';



export function App (){
    const list = [
        {id:45, name:"Emiliano", age: 27},
        {id:87, name:"Antonio", age: 17},
        {id:12, name:"Giovanni", age: 20},
        {id:1, name:"Carlo ", age: 10},
    ]


        return(
            <div>
                <FilteredList list={list} />
            </div>
        );
};