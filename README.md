# Cory REACT Project1

<b>Topics Covered</b>
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

<h1>Component Life Cycle Methods</h1>

<h2><b>Mounting</b></h2>
Methods called when an instance of a component is being created and inserted into the DOM.
<i>
- constructor()
- static getDirivedStateFromProps()
- componentWillMount()
- render()
- componentDidMount()
</i>
<br>
<h2><b>Updating</b></h2>
An update can be caused by changes to props or state. These methods are called when a component is being re-rendered.
<i>
- componentWillReceiveProps()
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()
</i>
<br>
<h2><b>Unmounting</b></h2>
This method is called when a component is being removed from the DOM.
<i>
- componentWillUnmount()
</i>

<h2><b>Error Handling</b></h2>
This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
<i>
- componentDidCatch()
</i>