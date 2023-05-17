# <h3>Cory REACT Project-1</h3>

<h1>Topics Covered</h1>
<b>
Props

React Tools

State

this

Functional vs Class components

Component Based Architecture

Code Organization
</b>

<br>

<h2>Component Life Cycle Methods</h2>

<h3>Mounting</h3>

These methods are called when an instance of a component is being created and inserted into the *DOM*.
<i>
- constructor()
- static getDerivedStateFromProps()
- componentWillMount()
- render()
- componentDidMount()
</i>
* * *

<h3>Updating</h3>

An update can be caused by changes to *props* or *state*. These methods are called when a component is being re-rendered.
<i>
- componentWillReceiveProps()
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()
</i>
* * *

<h3>Unmounting</h3>

This method is called when a *component* is being removed from the *DOM*.
<i>
- componentWillUnmount()
</i>
* * *

<h3>Error Handling</h3>

This method is called when there is an error during rendering, in a *lifecycle method*, or in the constructor of any child component.
<i>
- componentDidCatch()
</i>
* * *