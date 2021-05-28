import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = props => {
  console.log(props)
  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Ladépense App</h1>
        <p>Whether it’s cloudy or sunny, you should be saving money.</p>
        <button className='button' onClick={props.startLogin}>
          Login with Google
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
