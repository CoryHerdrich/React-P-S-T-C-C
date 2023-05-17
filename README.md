# <h2>Cory REACT Project-1</h2>

###Topics Covered
<i>
- Props
- React Tools
- State
- this
- Functional vs Class components
- Component Based Architecture
- Code Organization
</i>

<br>

###Component Life Cycle Methods

<h3>Mounting</h3>

*These methods are called when an instance of a component is being created and inserted into the DOM:*

- constructor()
- static getDerivedStateFromProps()
- componentWillMount()
- render()
- componentDidMount()

* * *

<h3>Updating</h3>

*An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:*

- componentWillReceiveProps()
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

* * *

<h3>Unmounting</h3>

*This method is called when a component is being removed from the DOM:*

- componentWillUnmount()

* * *

<h3>Error Handling</h3>

*This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.*

- componentDidCatch()

* * *