import React from 'react'
import Navbar from '../components/genericComponents/Navbar'
import Jumbotron from '../components/genericComponents/Jumbotron'
import Footer from '../components/genericComponents/Footer'

function MyInfo () {
    const userFullname = () => {
        const name = localStorage.getItem("user-data")
        return JSON.parse(name); 
    }

    return(
        <div>
            <Navbar />
            <Jumbotron title="User's Info" subtiltle="Personal Information" />
            <div className="container">
                <div>
                    <h2>
                     Welcome {userFullname().name}!
                     </h2>
                     Your email is: {userFullname().email}
                </div>
                <p>
                    This is Just a demo text.
                </p>
            </div>
            <Footer />
        </div>
    )
}
export default MyInfo