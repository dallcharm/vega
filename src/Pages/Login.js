import React from 'react'
import {withRouter} from 'react-router-dom'
import Navbar from '../components/genericComponents/Navbar'
import Jumbotron from '../components/genericComponents/Jumbotron'
import Footer from '../components/genericComponents/Footer'
import Auth from '../Helper/Auth'
import {getToken} from '../Services/UserServices'



class Login extends React.Component {

    constructor(props) {
        super(props)
            this.state = {
                email: '',
                password: '',
                error: false,
                errorMessage: ''
            }
            this.onChange = this.onChange.bind(this)
    }
    authUser = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        getToken({
        email: email,
        password: password,
        }).then(data => {
            if(data.success == false) {
                this.setState({
                    error: true,
                    errorMessage: data.message
                })
            } else {
                this.setState({
                    error:false,
                    errorMessage: ''
                })
                Auth.login(data, () => {
                    this.props.history.push("/my-info")
                })
            }
        })

    }

    onChange(e){
        e.preventDefault()
        const {name, value} = e.target
        this.setState({[name] : value})
    }
    render(){
    return(
        <div>
            <Navbar />
            <Jumbotron title="Login" subtiltle="Sign In" />
            <div className="container">
                <h2>
                    Please Login User
                </h2>
                <input type="text" name ="email" value={this.state.email} 
                placeholder="email" onChange={this.onChange}/>
                <input type="password" name="password" value={this.state.password} 
                placeholder="password" onChange={this.onChange} />
               <button 
               onClick={this.authUser}
               >Login</button>
               <h2>{this.state.errorMessage}</h2>
            </div>
            <Footer />
        </div>
    )
    }
}
export default withRouter(Login)