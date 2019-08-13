import React from 'react'
import Navbar from '../components/genericComponents/Navbar'
import Jumbotron from '../components/genericComponents/Jumbotron'
import Showcase from '../components/genericComponents/Showcase'
import Footer from '../components/genericComponents/Footer'

function Home () {
    return(
        <div>
            <Navbar />
            <Jumbotron title="Welcome" subtiltle="Home from Vega App" />
            <div className="container">
            <Showcase />
            
            </div>
            <Footer />
        </div>
    )
}
export default Home