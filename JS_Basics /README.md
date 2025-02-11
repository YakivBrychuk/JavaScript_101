#### JavaScript is a high-level programming language that is essential for creating interactive and dynamic web content. It is primarily used in web browsers to enable interactivity, from simple tasks like form validation to complex features like animations and real-time data updates.
 - V8 Engine: The core of JavaScript execution in browsers, providing fast and efficient performance by compiling JavaScript into machine code.
 - Node.js: A runtime environment that enables JavaScript to be executed outside the browser on servers, desktops, and more.
 - JavaScript can be used both for frontend and backend development (full-stack development), thanks to Node.js.

## Analogy:

    - The Stage (Web Page): This represents the structure of the page, like HTML. It's where everything takes place.
    - Actors (Elements on the Page): These are the individual components on the page, such as buttons, images, or text.
    - Director (JavaScript): The director controls the action and interaction of the actors. Just like JavaScript controls what happens on a web page—whether it's responding to a click, submitting a form, or updating a section dynamically.
    - Script (JavaScript Code): The script is the set of instructions or directions the director (JavaScript) gives to the actors. It tells them what to do and when to do it, adding interactivity and ensuring everything happens as planned. 
### In the browser:

    The V8 Engine is like a super-efficient assistant that helps the director by quickly executing the script (the JavaScript code) to keep the play running smoothly.

### On the server (Node.js):

    Node.js is like a director working behind the scenes in a different setting, where the play can be executed beyond the stage, in a studio or office. It can manage complex tasks like scheduling or setting up resources—just like managing a server.

# Hello World 

'console.log('Hello World');'

'console.log()' -  is a JavaScript function used to print messages to the browser's console.
 -  It is mainly used for debugging and checking values while writing or testing JavaScript code.

 ## Variables 

  - <b>Variables</b> are containers that store information for later use.

  'let test' - We use 'let' to declare variables, Declaring a variable is JavaScript slang for creating a variable.

  
'let test;
console.log(test);'

The result will be 'Undefined' as the firstly we need to assign value to it.

to assign a variable we use operator '='

'let test;
test = 1;
console.log(test);'

```// Declaring Variable
let test;
// Assing value to the Variable 
test = 1;
console.log(test); ```

// Reassign a value to a variable

```let num = 0;
console.log(num);
num = 2;
console.log(num);```


// Assign the value of another variable

```let numOne = 5;
let numTwo = numOne;
console.log(numTwo);```


# Creating Variables with 'const'
 - difference between the two is that you can not assign a new value to a variable that was created with const.
 - You cannot declare a const variable without assigning it a value immediately.


But, why should you use const instead of let?

It is considered good practice to use const for variables whoose value will never change.

```const pi = 3.14159;```



### Booleans are true or false values
### They are used to make decisions in code

```let isOnSale = true;
console.log(isOnSale);
isOnSale = false;
console.log(isOnSale); 
```
### Booleans are true or false values
### They are used to make decisions in code

```let isOnSale = true;
console.log(isOnSale);
isOnSale = false;
console.log(isOnSale);
```

### Examples of truthy values

```console.log(Boolean(100)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true```


### Examples of falsy values


```console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false ```