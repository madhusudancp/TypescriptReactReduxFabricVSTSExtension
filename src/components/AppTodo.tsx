import * as React from 'react'
import AddTodo from '../containers/AddTodo'
import Todos from '../containers/Todos'
import Events from '../containers/Events'
export  class AppTodo extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <AddTodo />
        <Todos />
        <Events/>
      </div>
    );
  }
}
export default AppTodo;
