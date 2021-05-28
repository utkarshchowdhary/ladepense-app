import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { firebase } from '../firebase/firebase'
import { login, logout } from '../actions/auth'
import { startSetDepenses } from '../actions/depenses'
import DepenseDashboardPage from '../components/DepenseDashboardPage'
import AddDepensePage from '../components/AddDepensePage'
import EditDepensePage from '../components/EditDepensePage'
import LoginPage from '../components/LoginPage'
import LoadingPage from '../components/LoadingPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export class AppRouter extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.login(user.uid)
        this.props.startSetDepenses()
      } else {
        this.props.logout()
      }
      if (this.state.loading) this.setState({ loading: false })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    if (this.state.loading) return <LoadingPage />
    return (
      <Router>
        <Switch>
          <PublicRoute path='/' component={LoginPage} exact={true} />
          <PrivateRoute path='/dashboard' component={DepenseDashboardPage} />
          <PrivateRoute path='/create' component={AddDepensePage} />
          <PrivateRoute path='/edit/:id' component={EditDepensePage} />
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: uid => dispatch(login(uid)),
  logout: () => dispatch(logout()),
  startSetDepenses: () => dispatch(startSetDepenses())
})

export default connect(undefined, mapDispatchToProps)(AppRouter)
