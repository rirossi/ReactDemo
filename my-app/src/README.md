**REACT DEMO**
What is React? 
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 
React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React.

**Prerequisites:**
Node.js: https://nodejs.org/en/

<br><br>
**Installation**
```

npm install -g create-react-app
create-react-app my-app
```

```
cd my-app
rm -f src/*
```

Create index.js
```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    doctument.title='Hello Word'
    document.getElementById('root')
);
```

```
npm start
http://localhost:3000
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

<br><br>
**The Lifecycle of a React Component** (https://www.andreasreiterer.at/web-development/reactjs-lifecycle-methods/)
<p>Let’s begin with the lifecycle of a component according to the React docs. 
There are three particular stages in the lifecycle of a component, that are important for our lifecycle methods, which I will explain:</p>
```
1. Mount
   When React creates an instance of a component and inserts it into the DOM (mounting), the following methods are called:
   
   constructor()
   componentWillMount()
   render()
   componentDidMount()

2. Update
   If props or state of a component are changed for whatever reason, an update of the component is performed. However, this means that the component has to be re-rendered, which causes the following methods to be called:
   
   componentWillReceiveProps()
   shouldComponentUpdate()
   componentWillUpdate()
   render()
   componentDidUpdate()

3. Unmount
   At some point our components will be removed from the DOM again. That process is called unmounting and means that the following method is called:
   
   componentWillUnmount
```

```
_Resume Order_: 
componentWillMount
componentDidMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
componentDidUpdate
componentWillUnmount
```

**RestClients**
Fetch (embedded browser)
axios
superagent
          