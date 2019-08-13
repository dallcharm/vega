import React, {Component} from 'react'
//import './styles/showcase.css'


class Showcase extends Component {
render(){
    return(
    <div className="showcase">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="">
          <br></br>
          <h2> Reserve citas con clientes</h2>
          <p className="">Atraiga a más clientes a sus puertas y conviértalos en usuarios habituales. El software de programación de citas en línea Vega afina la imagen de su marca mientras usted se hace cargo de su agenda.</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className=""></div>
        <div className="">
          <h2>Fácil de usar y configurar</h2>
          <p className="">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className=""></div>
        <div className="">
          <h2>Easy to Use Customize</h2>
          <p className="">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
        </div>
      </div>
    </div>
  </div>   
    );
}
}
export default Showcase