## React interview questions

1. What is state and props in reactjs?

--State and props are basically the foundation block of React.js library. State is the central location where a certain record about a dynamic data is kept which has the possiblity to change in the near future and with the help of state react can track and monitor changes that could occur in different renders. In order to use state in react we use the useState hook in functional component and we always use the setState method to mutate the acutal state itself.

-- Props is bascially property which enables the agility to transfer information and data from one component to another component. 
We pass the inside the parameter of our functional component and for simpler use we can destructure them. 



2. What is high order component? How do you use it?

---Higher order component are those component which share their state or functionality available in them to the presentational components. A common example is when we create a higher order component which will share the logged in user state to the components that will require them to enable certain functionality.

-- In order to use higher order components we create a component that recieves the props and then we wrap the component to a higher order component.

3. What is context? What are the benefits of it?
-- context in react is a way of passing data through the component tree without worrying about passing data down through them manually at every level. 
-- Context solves the problem of prop drilling and helps us to write cleaner code. 

4. How to assign and change the value of state in a component?

-- In order to assign and change the value of state in a component we use the useState hook which return an array with two values state and setState. Hence, we can destructure it and assign them in this way

const [state, setState] = React.useState[''];

In order, to change the state we use the setState method to mutate it.

5. Could you explain the life-cycle of a react component?

-- So, in react each component has three main life-cycle phases, these phases are used in monitoring and manipulating the components for any changes.


first one is Mounting, it simply refers to putting element on the OM tree.

second is Updating which refers to the stage where the state of any specific component is updated and repaint and reflow occurs.

third one is unmounting in which the component is removed from the page.


6. What is fragment in react?
--Fragment enables us to return multiple component in react.js library.


7. What is ref in react?

--Ref are functions which enables us to access and target the DOM element to perform certain or apply certain functionality to the DOM element. 


8. What is container component? What is presentational component?
-- Container Component is the one which shares the state in HOC and presentational component is the component that is wrapper which the HOC and receives the state from it.


9. How to pass a function to a component?
-- We can pass a function to a component by the helps of props

//fn a

<Component function={a}>

10. What is portal?

--Portal is a way which enables react to render childern into certain DOM node which is not located in the hirearchy of the parent component.

11. How to share state between parent component and child component? How to share state between sibling components?

-- we can use the context API  if the tree is excessively large in which react has useContext hook which will act as the context provider or, in simple cases we can use the Prop drlling method to share the state.


