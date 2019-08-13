import React, {Component} from 'react'
import './styles/jumbotron.css'


class Jumbotron extends Component {
render(){
    return(
       /* <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{this.props.title}</h1>
                <p className="lead">{this.props.subtitle}</p>
            </div> 
        </div> */
        <div className="masthead text-black text-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 align-self-start">
                        <h1 className="mb-5">Software de citas automatizadas</h1>
                    </div>
                <div className="col-sm-4">
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <input type="email" className="form-control form-control-lg" placeholder="Correo electrónico...">

                                </input>
                            </div>
                            <div className="col">
                                <br></br>
                                <button type="submit" className="btn btn-block btn-lg btn-primary">Unirse!</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>     
    );
}
}
export default Jumbotron