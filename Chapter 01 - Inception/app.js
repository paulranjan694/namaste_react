const root = ReactDOM.createRoot(document.getElementById("root"));

const h1 = React.createElement("h1",{className:"title"},"Namaste React!!"); // args in createElement api - element, props/attributes passed to the element, children (to be displayed/rendered inside element)

root.render(h1);