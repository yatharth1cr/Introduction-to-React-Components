1. Create a div HTML element with the id of root using React.createElement

```js
// Answer:-
let div = ReactcreateElement("div", { id: "root" });
```

2. In the given HTML find out the tag name , attributes and children while using React.createElement.

```js
<span class="sub-heading" id="main">
  Hello React Element
</span>


// Answer:-
tagname = span
attribute = class="sub-heading",id="main"
children = Hello React element
```

3. Create a h1 React element with text Hello React🔥 and class heading

```js
// Answer:-
let h1 = React.createElement("h1", null, "Hello React🔥");
```

4. Convert this React element into HTML element and JSX

```js
React.createElement("input", {
  type: "checkbox",
  placeholder: "What are you learning?",
});

// Answer:-
let input = <input type="checkbox" placeholder="What are you learning?" />;
```

5. Using ReactDOM render the element created in step 4 into DOM. (div with id root).

```js
// Answer:-
ReactDOM.createRoot(document.getElementById(root)).render(input);
```

6. Convert the following HTML element into React element using React.createElement. After converting to React.createElement convert the code below to JSX.

```js
<div class="container">
  <img src="https://images.unsplash.com/photo-1610847034016-49565e0c068a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80" />
  <input type="checkbox" />
  <p>Learing React</p>
  <span>Delete</span>
</div>;

React.createElement(
  "div",
  { class: "container" },
  React.createElement("img", {
    src: "https://images.unsplash.com/photo-1610847034016-49565e0c068a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
  }),
  React.createElement("input"),
  React.createElement("p", null, "Learing React"),
  React.createElement("span", null, "Delete")
);

let div = (
  <div class="container">
    <img src="https://images.unsplash.com/photo-1610847034016-49565e0c068a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80" />
    <input type="checkbox" />
    <p>Learing React</p>
    <span>Delete</span>
  </div>
);
```

7. Convert the following HTML element into React element using React.createElement. After converting to React.createElement convert the code below to JSX.

```js
<div>
  <div class="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese" />
  </div>
  <div class="preference">
    <label for="peas">Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas" />
  </div>
  <h2>List of numbers!</h2>
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
</div>;

// Answer:-
React.createElement("div", {
  children: React.createElement("div", {
    class: "preference",
    children: React.createElement("label", {
      htmlFor: "cheese",
      children: "Do you like cheese?"
    }), React.createElement("input", {
      type: "checkbox",
      name: "cheese",
      id: "cheese"
    })
  }), React.createElement("div", {
    class: "preference",
    children:React.createElement("label", {
      htmlFor: "peas",
      children: "Do you like peas?"
    }),React.createElement("input", {
      type: "checkbox",
      name: "peas",
      id: "peas"
    })
  }),React.createElement("h2", {
    children: "List of numbers!"
  }), React.createElement("ul", {
    children:React.createElement("li", {
      children: "one"
    }),React.createElement("li", {
      children: "two"
    }),React.createElement("li", {
      children: "three"
    })
  })
});
```

8. Why you need to name the components capital case? Explain with examples.

`Answer:-`

- Distinction Between HTML Elements and React Components
- JSX Compilation
- Avoiding Conflicts
- Readability and Best Practices
