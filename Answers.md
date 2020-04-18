1. What problem does the context API help solve?

It simplifies state management, especially the necessity of props drilling. It allows components to share data outside the parent-child relationship.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is an object that holds all application state that can be updated via dispatch() .
Actions are also objects that send data from application to the store, describe what happened in the app. Actions are the only source of information for the store.
Reducers specify how the state changes in response to action sent to the store. It is a pure function that takes the previous state and action and return next state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, while component state is local to the component.
When we use Redux store we are talking about application state which can ba accesssed by
any component. Component state can only be updated within the component and passed down to child components via props.
If a value is specific to a single component, then using component may be better option.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware that allows you to write action creators that return a function instead of an action. It give Redux the ability to run asynchronous operations.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer ContexApi for its clearer syntax, while I find Redux a bit too complex for the size of application we've been building so far.
