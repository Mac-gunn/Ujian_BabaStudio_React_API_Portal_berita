import React, {Component} from 'react';
import { render } from '@testing-library/react';
import { directive } from '@babel/types';
class Grid extends Component{

    render(){
        return(
            <div class="container-fluid">
        
        <div class="row-contact">
            <div class="col-12">
                <div class="tm-main-bg tm-contact-bg">
                    <img src={require('./images/new-vision-04.jpg')}/></div>        
                </div>
        </div>
        

        <main>

            <section class="tm-welcome">
                <div class="row">
                    <div class="col-12">
                        <h2 class="tm-section-header tm-header-floating">Contact Information</h2>         
                    </div>
                </div>
                
                <div class="row tm-welcome-row">
                    <div class="col-lg-6 mb-5 tm-contact-box">
                      <div class="tm-contact-form-wrap">
                        <form id="contact-form" action="" method="post" class="tm-contact-form">
                            <div class="form-group">
                              <input type="text" id="contact_name" name="contact_name" class="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Your Name" required="" />
                            </div>
                            <div class="form-group">
                              <input type="email" id="contact_email" name="contact_email" class="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Your Email" required="" />
                            </div>
                    
                            <div class="form-group">
                              <textarea rows="4" id="contact_message" name="contact_message" class="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Message..." required=""></textarea>
                            </div>
                    
                            <div class="form-group mb-0">
                              <button type="submit" class="btn rounded-0 d-block ml-auto tm-btn-primary">
                                Send It Now
                              </button>
                            </div>
                          </form>
                      </div>                    
                    </div>
                    <div class="col-lg-6 mb-5 tm-contact-box">
                      <div class="tm-double-border-1 tm-border-gray">
                        <div class="tm-double-border-2 tm-border-gray tm-box-pad">
                            <p class="mb-4">
                              <a rel="nofollow" target="_parent" href="https://templatemo.com/tm-542-new-vision">New Vision</a> HTML Template is free to download instantly from TemplateMo website. In dapibus dui vitae urna fringilla volupat.
                            </p>
                            <p class="mb-3">
                              120-240 Rio de Janeiro - State of Rio de Janeiro, Brazil
                            </p>
                            <p class="mb-1">Tel: <a href="tel:0900100910" class="tm-link">090-010-0910</a></p>
                            <p>Email: <a href="mailto:info@company.com" class="tm-link">info@company.com</a></p>
                        </div>                    
                      </div>                  
                    </div>
                </div>
                
                
                    
            </section>

            
        </main>
    </div>
        );
    }
}

    export default Grid;