
# Chapter 01 - Inception

## Description

 Assignment and Important Questions of *Chapter 01 - Inception* from **Namaste React** course.


 ## Assignment

1. What is Emmet?
- Emmet is a plug in for many popular text editors which greatly improves HTML & CSS workflow.
    [Reference](https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c)

2. Difference between a Library and Framework?
- Both frameworks and libraries are code written by someone else that is used to help solve common problems.  
- The technical difference between a framework and library lies in a term called inversion of control.
- When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.
    [More](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/)

3. What is CDN? Why do we use it?
- A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.
- A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.
- The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.
- A properly configured CDN may also help protect websites against some common malicious attacks, such as Distributed Denial of Service (DDOS) attacks.
  [Reference](https://www.cloudflare.com/en-in/learning/cdn/what-is-a-cdn/)

4. What is crossorigin in script tag?
- The crossorigin attribute provides support for CORS, defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data
  [Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)

5. What is diference between React and ReactDOM?
- [visit here](https://medium.com/programming-sage/react-vs-react-dom-a0ed3aea9745)

6. What is difference between react.development.js and react.production.js files via CDN?
- The main difference between react.development.js and react.production.js is react.production.js contains minified code.

7. What is async and defer?
 * ### Defer
    - The defer attribute tells the browser not to wait for the script. 
        Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.
    - In other words:
        1. Scripts with defer never block the page.
        2. Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).

 * ### Async
    - Async scripts load in the background and run when ready
    - The browser doesn’t block on async scripts
    - DOMContentLoaded may happen both before and after async, no guarantees here.
    :warning: **The async attribute is only for external scripts**
    [Reference](https://javascript.info/script-async-defer)


## Important Concepts/Questions w.r.t. Interview
:point_right: Passing Multiple children in React.createElement :heavy_minus_sign: React.createElement("div",{className:"container"},**[** h1,h2 **]**); // pass multiple elements in array
:point_right: root.render(children) will replace all the previous content which is present in div#root 
    
## Authors
- [Ranjan Paul](https://www.linkedin.com/in/ranjan-paul-681730171/)

## License

[MIT License](LICENSE)
