import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

const h1 = React.createElement("h1",{className:"title"},"Namaste React!!"); // args in createElement api - element, props/attributes passed to the element, children (to be displayed/rendered inside element)
const h2 = React.createElement("h1",{className:"title2"},"Nested H1 element"); // args in createElement api - element, props/attributes passed to the element, children (to be displayed/rendered inside element)


const container = React.createElement("div",{className:"container"},[h1,h2]); // args in createElement api - element, props/attributes passed to the element, children (to be displayed/rendered inside element)


root.render(container);