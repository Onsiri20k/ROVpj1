import React from 'react';
import './App.css';
// var imageName = require('./Rov_cut_Design_Final/navbar/logo_rov.png');
// import Carousel from 'react-bootstrap/Carousel'
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router } from 'react-router-dom';


//console.log(imageName);

function App() {
    return (
        <div className="App">


            {/* <Router>
            <Navbar />
            </Router> */}


            <head>

            </head>
            <body>
                <nav class="navbar navbar-default">
                    <ul class="topnav" id="myTopnav">

                        {/* <li><img src="" alt="logo"></img></li> */}
                       {/* <li><imageName src="./Rov_cut_Design_Final/navbar/logo_rov.png" alt="testt"/></li> */}

                        <li><a href="home">หน้าหลัก<p><small>HOME</small></p></a></li>

                        <li><a href="https://esports.rov.in.th/">ทัวร์นาเมนต์<p><small>TOURNAMENT</small></p></a></li>

                        <li><a href="https://rpl2021.rov.in.th/">กิจกรรม<p><small>ACTIVITY</small></p></a></li>

                        <li><div class="dropdown">
                            <div class="dropbtn">หอเกียรติยศ<p><small>HALL OF FLAME</small></p></div>
                            <div class="dropdown-content">
                                <a href="https://rov.in.th/esports/rpls1">RoV Pro League S1</a>
                                <a href="https://rov.in.th/esports/rpls2">RoV Pro League S2</a>
                                <a href="https://rov.in.th/esports/rpls3">RoV Pro League S3</a>
                                <a href="https://rov.in.th/esports/rpls4">RoV Pro League S4</a>
                                <a href="https://rov.in.th/esports/rpls5">RoV Pro League 2020 Summer</a>
                                <a href="https://rov.in.th/esports/rpls6">RoV Pro League 2020 Winter</a>
                            </div>
                        </div></li>

                        <li><a href="https://support.garena.in.th/new/games/faqs/1/garena-rov">บริการลูกค้า<p><small>SUPPORT</small></p></a></li>
                        <li><a href="news">ข่าวสาร<p><small>NEWS</small></p></a></li>

                        <li class="right"><a href="#about">เข้าสู่ระบบ</a></li>

                    </ul>

                </nav>

                <p>FEATURED</p>

                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>100000000</p>


                <div class="container">
                    <div class="carousel">
                        <input type="radio" id="carousel-1" name="carousel[]" checked></input>
                        <input type="radio" id="carousel-2" name="carousel[]"></input>
                        <input type="radio" id="carousel-3" name="carousel[]"></input>
                        <input type="radio" id="carousel-4" name="carousel[]"></input>
                        <input type="radio" id="carousel-5" name="carousel[]"></input>
                        <ul class="carousel__items">
                            <li class="carousel__item"><img src="//lh5.googleusercontent.com/-cTEgPOnd3l8/U8-EmaZ4KNI/AAAAAAAABc8/6eacbALkQ6A/w1358-h905-no/carousel-1.JPG" alt=""></img></li>
                            <li class="carousel__item"><img src="//lh4.googleusercontent.com/-ntVHbbWX5eo/U8-EmV8P4cI/AAAAAAAABc4/ICYBGkcztTc/w1358-h905-no/carousel-2.jpg" alt=""></img></li>
                            <li class="carousel__item"><img src="//lh5.googleusercontent.com/-batEXUZE_e4/U8-EmLF9-hI/AAAAAAAABc0/J3tJVUa6Buk/w1358-h905-no/carousel-3.jpg" alt=""></img></li>
                            <li class="carousel__item"><img src="//lh5.googleusercontent.com/-gywqIeMvel0/U8-EolKdtkI/AAAAAAAABdM/G0-NHuvvJUU/w1358-h905-no/carousel-4.jpg" alt=""></img></li>
                            <li class="carousel__item"><img src="//lh5.googleusercontent.com/--2iANjL3ikc/U8-EoGJ18mI/AAAAAAAABdI/fBe-q3Gos6Y/w1358-h905-no/carousel-5.jpg" alt=""></img></li>
                        </ul>
                        <div class="carousel__prev">
                            <label for="carousel-1"></label>
                            <label for="carousel-2"></label>
                            <label for="carousel-3"></label>
                            <label for="carousel-4"></label>
                            <label for="carousel-5"></label>
                        </div>
                        <div class="carousel__next">
                            <label for="carousel-1"></label>
                            <label for="carousel-2"></label>
                            <label for="carousel-3"></label>
                            <label for="carousel-4"></label>
                            <label for="carousel-5"></label>
                        </div>
                        <div class="carousel__nav">
                            <label for="carousel-1"></label>
                            <label for="carousel-2"></label>
                            <label for="carousel-3"></label>
                            <label for="carousel-4"></label>
                            <label for="carousel-5"></label>
                        </div>
                    </div>
                </div>





                <div id="container">
                    <div class="footer">
                        <div>
                            <h1>test</h1>
                        </div>
                    </div>
                </div>
            </body>




        </div>



    );
}

export default App;



