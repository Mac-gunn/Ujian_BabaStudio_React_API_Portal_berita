import  React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Home extends Component {
    render() { 
        return (  
            <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                      
                      
                    <div id="demo" class="carousel slide" data-ride="carousel">

                         
                            <ul class="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" class="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                            </ul>

                            
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={require('./images/opm1.jpg')} alt="Los Angeles"/>
                            </div>
                            <div class="carousel-item">
                                <img src={require('./images/opm2.jpg')} alt="Chicago"/>
                            </div>
                            <div class="carousel-item">
                                <img src={require('./images/opm3.jpg')} alt="New York"/>
                            </div>
                            </div>

                            
                            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#demo" data-slide="next">
                            <span class="carousel-control-next-icon"></span>
                            </a>

                            </div>


                    </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="col-md-12">
                                <div className="alert alert-info info" role="alert">
                                     <p className="text-white text-center">A simple success alert—check it out!</p> 
                                </div>
                        </div>
                    </div>
                </div> 
                {/* end slider */}
                <div className="container slide">
                    <div className="row ">
                        

                    <section class="tm-welcome">
                <div class="row">
                    <div class="col-12">
                        <h2 class="tm-section-header tm-header-floating">Welcome to New Vision</h2>         
                    </div>
                </div>
                <div class="card" width="18rem">
                    <img src={require('./images/img-3x2-01.jpg')} class="card-img-top" alt="..." width="18rem"/>
                    <div class="card-body">
                        <p class="card-text">Aliquam purus arcu, congue a gravida ac, facilisis vel erat. Maecenas pretium sem.</p>
                    </div>
                </div>

                <div class="card" width="18rem">
                    <img src={require('./images/img-3x2-02.jpg')} class="card-img-top" alt="..." width="18rem"/>
                    <div class="card-body">
                        <p class="card-text">Aliquam purus arcu, congue a gravida ac, facilisis vel erat. Maecenas pretium sem.</p>
                    </div>
                </div>

                <div class="card" width="18rem">
                    <img src={require('./images/img-3x2-03.jpg')} class="card-img-top" alt="..." width="18rem"/>
                    <div class="card-body">
                        <p class="card-text">Aliquam purus arcu, congue a gravida ac, facilisis vel erat. Maecenas pretium sem.</p>
                    </div>
                </div>

                <div class="card" width="18rem">
                    <img src={require('./images/img-3x2-04.jpg')} class="card-img-top" alt="..." width="18rem"/>
                    <div class="card-body">
                        <p class="card-text">Aliquam purus arcu, congue a gravida ac, facilisis vel erat. Maecenas pretium sem.</p>
                    </div>
                </div>
                </section>


                
                <div class="row tm-welcome-row-2">
                    <div class="col-lg-4 tm-dotted-box-container">
                        <article class="tm-dotted-box">
                            <i class="fas fa-3x fa-binoculars tm-article-icon"></i>
                            <h3 class="tm-article-title">Template Usage</h3>
                            <p class="tm-article-text">You can feel free to edit and use New Vision template for your commercial websites. Title color is #333</p>
                            <a class="tm-btn tm-btn-rounded tm-article-link" href="#">More Details</a>
                        </article>    
                    </div>
                    <div class="col-lg-4 tm-dotted-box-container">
                        <article class="tm-dotted-box">
                            <i class="fas fa-3x fa-microscope tm-article-icon"></i>
                            <h3 class="tm-article-title">New Vision</h3>
                            <p class="tm-article-text"><a rel="nofollow" target="_parent" href="https://templatemo.com/tm-542-new-vision">New Vision</a> comes with 4 different HTML pages and provided free of charge by TemplateMo. You can add more pages if you need. Text color is #666</p>
                        </article>    
                    </div>
                    <div class="col-lg-4 tm-dotted-box-container">
                        <article class="tm-dotted-box">
                            <i class="fas fa-3x fa-glasses tm-article-icon"></i>
                            <h3 class="tm-article-title">Download Sites</h3>
                            <p class="tm-article-text">Do not re-distribute our template ZIP file on your website. Or contact us first. Button color is #C99</p>
                            <a class="tm-btn tm-article-link" href="#">Read More...</a>
                        </article>
                    </div>
                </div>
                    </div>
                </div>
 
 
                
 
            </div>
        );
    }
}
 
export default Home;