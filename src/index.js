import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);


/*
Props-02
What happens if no name prop is passed to the Welcome component? Can you set a default value for the name prop?
Se non passiamo name la stessa verrà valorizzato come undefined.
Per settare un valore di default possiamo utilizzare un'operatore logico "||" per settare un valore di fallback,
in questo modo se la prop non viene dichiarata si mostrerà il valore di fallback.
*/

/*
Props-04
What happens if the name prop is a JSX expression instead of a string? How do you pass a prop that contains a JSX expression?
Per assegnare qualsiasi valore, che non sia una stringa, a un prop, bisogna utilizzare le { }, quindi in questo caso, per passare name
con strong in JSX dobbiamo assegnarlo in questo modo name={<strong>Carlo</strong>}.
*/