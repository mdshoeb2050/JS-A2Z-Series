# Module -4 

### Understanding DOM

1. **DOM**  
   - Summary 
   - DOM is a representation of logical structure of a web page.
2. **Accessing DOM**  
   - Summary 
   - JS uses DOM to manipulate the webpage.
   - document.getElementById , window.document(print overall html structure )
   - window.screen (All the details regarding browser screen) 
   - Every elements have lots of property , understand one by one
   - API : interface b/w user & application, 
   - API : code written by somebody else.
   - API makes things easy for us.
   - DOM serve as a programming API for us.
3. **Fetching Elements**
   - Summary 
   - `document.getElementById('')` ,`document.getElementByTagName('')`, `heading.style.color='red'`
   - store Result into a variable and manipulate according to your needs.
   - Access document elements by using CSS selectors 
   - `document.querySelector('#id')` ,`document.querySelector('.class')`,`document.querySelectorAll('.class') `
   - querySelector - return 1st matching result
   - window.navigator or navigator : used to obtain Browser's information
   - `element.innerHTML` is used to Gets or sets the text.
   - `document.getElementByTagName('')`  is used to find an element by element Id.
   - These all returns list of elements.
   - `getElementByClassName('')`,`querySelectorAll('')`,`getElementByTagName('')`
4. **Event Handling**
    - Summary 
    - Event handler is nothing but just a Function
    - `on + eventname`
    - `addEventListener(-, -)`- two parameter , event name & event listener/handler (Function)
    - event listener (function) : the action/Task which has to be performed.
    - the `browser invoke the handler` when `specified event occurs` 
    - when user clicks over a document or moves over a document : mouse events generated.
    - 
5. **Script Tag**
    - Summary 
    - `internal JS` - inside head tag using script tag , inside body using script tag
6. **External JS File**
    - Summary 
    - `External JS` - adding external file named .js extension
7. **Other Mouse and Keyboard events**
    - Summary
    - `mouseover`,`mouseout`,and many more.
    - `keypress` - press and leave then it will be counted 
    - `keydown`- counted if only press  
    - `keyup` - counted when you leave key
8. **Propagation of Event**
    - Summary 
    - when you clicked on / triggers a particular `event target element` then all the `Nodes` in that path from `document` to `event target element` will be triggered automatically .
    - eg :  inner -> outer -> document 
9.  **Strict Mode**
    - Summary (5min)
    - using `use strict ` method  in JS will help to investigate to find error in your code.
    - `use strict ` - it treat Js code as newer version.
    - eg - count=0; (ReferenceError : count is not defined)
10. **More on Strict Mode**
    - Summary
    - you can use `use strict` method inside functions and Globally also.
    - eg - inside a fun -  demo =100; (ReferenceError : count is not defined)

11. **Assignments**
    - summary
  






















