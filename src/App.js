import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import TasksManager from './Pages/TasksManager'
import MyInfo from './Pages/MyInfo'
import './App.css'
import Login from './Pages/Login';
import {ProtectedRoute} from './components/ProtectedRoute'


class App extends React.Component {
 
  render () {

    return(
      <HashRouter>
      <div>
      
      <Switch>
      <Route exact path="/" component={Home} />
      <ProtectedRoute exact path ="/mytasks" component={TasksManager} />
      <Route exact path="/mytasks/add" component={() => <h1>Add a task</h1>} />
      <Route exact path="/mytasks/view/:id" component={() => <h1>A View task page</h1>} />
      <ProtectedRoute exact path="/my-info" component={MyInfo} />
      <Route exact path="/login" component={Login} />
      <Route exact path="*" component={() => "404 NOT FOUND"} />
      </Switch>
      
      </div>
      </HashRouter>
    )
  }
}

export default App
