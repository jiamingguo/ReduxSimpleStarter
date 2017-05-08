import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = " APPAIzaSyDr7ynlNGEQMaD1bVk6f9LD82zIs974CCI";

/*
Create a new component, This component should produce some HTML
 */
// Remember: React is the package that used JavaScript to generate HTML for user.


// const is ES6 syntax. Like var, declare a variable.
// However, the variable declared with const won't change (kind of immutable?)

/*
const App = function(){

    // We have somethings looks like inside HTML at here. But they are javascript.
    // These inside HTML, we referred as JSX. JSX is a subset or dialect of JavaScript
    return <div>Hi!</div>;
}
*/

// Below works the same as above code. But in ES6 syntax
const App = () => {
    return <div>Hello World!</div>;
}

// And instantiate of the component(cosnt App, we already had the 'class' but no object) before pass to React.createElement
// by making this <App/>

// Take this component's generated HTML and put it on the page (in the DOM)
// Remember to IMPORT React (core react) and ReactDOM (used to place html on webpage)
// ReactDOM takes second argument for position to place HTML. Here we put it in div that class = 'container'
ReactDOM.render(<App />, document.querySelector('.container'));