import React, {Component} from 'react'
import './styles/footer.css';

class Footer extends Component {
    render() {
        return(
          <footer className="footer bg-light"> 
             <div className="footer-copyright text-center py-3">© 2019 Copyright</div>
          </footer>
        )
    }
}
export default Footer