import React from 'react';

export default class LandingPage extends React.Component {

        render() {
                return (
        // <!-- Preload the Whole Page -->
                <div>
                        <div id="preloader">   		
                        <div id="loading-animation">&nbsp;</div>
                        </div>
                        
                        
                {/* // <!-- NAVIGATION ############################################### --> */}
                <div class="cbp-af-header">                     
                <nav >
                                                        
                {/* <!--  Share DIV-->  */}
                        
                        <div class="right">
                        
                        {/* <!--  Facebook Share Button-->  */}
                                
                        <iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.baribal.be%2Fshowpage%2F&amp;width&amp;layout=standard&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=35" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:170px; height:20px; margin-right:20px;" ></iframe>
                                
                        {/* <!-- Twitter Share Button -->  */}
                                        
                        <a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>
                        {/* <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script> */}
                                
                                                                 
                        </div> 
                                                         {/* <!-- End Share dIV --> */}
                        
                                                         {/* <!-- Logo --> */}
                                                
                                                         <div id="logo">
                                                         
                                                                 <a href="#"><img alt="Logo" src="img/logo.png" /></a>
                                                                 
                                                         </div>
                                                        
                                                         {/* <!-- Links --> */}
                                                        
                                                         <ul id="nav" >
                                                         
                                                                 <li><a href="http://www.iamsupview.be">The Author</a></li>
                                                                                                          
                                                                 <li><a href="http://www.baribal.be/showpage/dl/">Get it</a></li>
                                                                 
                                                         </ul>
                                                                                  
                                                </nav>
                        
                                        
                                        </div> 
                        
                        {/* // <!-- END NAVIGATION ############################################### --> */}
                        
                        
                        {/* // <!-- HEADER / FIRST SECTION ############################################### --> */}
                        
                        
                        <section class="page1">
                         {/* <!-- Huge Title centered -->  */}
                                              
                                <div class="huge-title centered">  
                                                
                                        <div class="logo-phone centered"><img alt="YOURLOGO" src="img/logo-phone.png" /></div>  
                                        {/* <!-- This Logo is only displayed on Tablet/iPhone !-->   */}
                                              
                                        <h1>A Simple & Easy To Use Free App Landing Page</h1>
                                                  
                                        <div class="space"></div>
                                                  
                                        <a href="#container" class="button-white goto">Discover more</a> 
                                                    
                                </div>
                                                    
                                {/* <!-- IMG DISCOVER MORE -->  */}
                                                    
                                <div class="go-down twelve columns">
                                                    
                                        <a href="#container" class="goto"><img src="img/down.png" alt="MORE" /></a>
                                                    
                                </div>
                        
                        </section>
                        
                        
                        {/* <!-- END HEADER ############################################### --> */}
                        
                        
                        
                        {/* <!-- BEGIN CONTAINER ############################################### --> */}
                        
                        
                        <div id="container" class="container">
                        
                        
                        {/* <!-- SECOND SECTION ############################################### --> */}
                        
                        
                        <section class="page2">
                        
                                <div class="row">
                                        
                                                        <div class="six columns article make-it-appear-right">
                                                        
                                                                {/* <!-- Title -->  */}
                                                        
                                                                <h3>A Elegant Design</h3>
                                                                                        
                                                                {/* <!-- Content -->  */}
                                                                
                                                                <p>Bacon ipsum dolor sit amet meatball shank pork chop capicola fatback pork loin sirloin flank. <b>Andouille</b> tongue corned beef rump pork loin shank meatball capicola turducken venison shankle kevin pancetta tri-tip boudin.</p>
                                                                                                        
                                                                <div class="space"></div>
                                                                
                                                                <a  class="js-open-modal button-blue">blue button with Modal video</a> 
                                                                
                                                        
                                                        </div>
                                                        
                                                        {/* <!-- Image from right -->  */}
                                                
                                                        <div class="five columns picture make-it-appear-left" >
                                                        
                                                                <img src="img/1.png" alt="EXEMPLE" />
                                                        
                                                        </div>
                                        
                                                </div> 
                                                {/* <!-- End row div -->     */}
                        
                        </section>
                        
                        {/* <!-- END SECOND SECTION ############################################### --> */}
                        
                        
                        
                        
                        {/* <!-- TIRTH SECTION ############################################### --> */}
                        
                        
                        <section class="page3" >
                        
                                <div class="row">
                        
                                                        {/* <!-- Image from left -->  */}
                                                
                                                        <div class="five columns picture make-it-appear-right" >
                                                        
                                                                <img src="img/2.png" alt="EXEMPLE" />
                                                        
                                                        </div>
                        
                                        
                                                        <div class="six columns article make-it-appear-left">
                                                        
                                                                {/* <!-- Title -->  */}
                                                        
                                                                <h3>Pretty easy to customize</h3>
                                                                                        
                                                                {/* <!-- Content -->  */}
                                                                
                                                                <p>Bacon ipsum dolor sit amet meatball shank pork chop capicola fatback pork loin sirloin flank. <b>Andouille</b> tongue corned beef rump pork loin shank meatball capicola turducken venison shankle kevin pancetta tri-tip boudin.</p>
                                                                                                        
                                                                <div class="space"></div>
                                                                
                                                                <a class="js-open-modal button-green">Another Button</a> 
                                                        
                                                        </div>
                                                        
                                        
                                                </div> 
                                                {/* <!-- End row div -->     */}
                        </section>
                        
                        {/* <!-- END TIRTH SECTION ############################################### --> */}
                        
                        
                        
                        {/* <!-- Modal Window -->  */}
                        
                        <div class='modal' id='modal'>
                        
                                  <div class='modal-content modal-anim--three'>
                                  
                                        <iframe src="//player.vimeo.com/video/64291127?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="560" height="306" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                
                                  </div>
                                  
                        </div>
                        
                        
                        
                        {/* <!-- FOURTH SECTION ############################################### --> */}
                        
                        
                        
                        <section class="page4">
                        
                                <div class="row">
                                        
                                                        <div class="four columns article make-it-appear-right">
                                                        
                                                                {/* <!-- Title -->  */}
                                                        
                                                                <h3>Pretty Simple and Detailed Code.</h3>
                                                                                        
                                                                {/* <!-- Content -->  */}
                                                                
                                                                <p>Here is the simple exemple of the next section, as you can see, everything is pretty well detailed and easy to understand.</p>
                                                                                                        
                                                                <div class="space"></div>
                                                                
                                                        
                                                        </div>
                                                        
                                                        {/* <!-- Image -->  */}
                                                
                                                        <div class="seven columns picture make-it-appear-left" >
                                                        
                        <pre>
                                                    {/* <!-- Article centered on the Page -->  */}
                                        
                                                        <div class="twelve columns centered make-it-appear-top">
                        
                                                                {/* <!-- Title -->  */}
                                                        
                                                                <h4>Finally! Simple and fair pricing.</h4>
                                                                                                                                
                                                                {/* <!-- Content -->  */}
                                                        
                                                        
                                                                <div class="cost">
                                                                        <p class="symbol">$</p>
                                                                        <p class="value">0</p>
                                                                </div>
                                                                
                                
                                                        </div>
                        </pre>
                                                        
                                                        </div>
                                        
                                                </div>
                                                 {/* <!-- End row div -->     */}
                        
                        </section>
                        
                        
                        {/* <!-- END FOURTH SECTION ############################################### --> */}
                        
                        
                        
                        {/* <!-- FIFTH SECTION ############################################### --> */}
                        
                        
                        <section class="page5">
                        
                                        
                                            <div class="row">
                                            
                                                    {/* <!-- Article centered on the Page -->  */}
                                        
                                                        <div class="twelve columns centered make-it-appear-top">
                        
                                                                {/* <!-- Title -->  */}
                                                        
                                                                <h4>Finally! Simple and fair pricing.</h4>
                                                                                                                                
                                                                {/* <!-- Content -->  */}
                                                        
                                                                <h1>€0</h1>
                                                        
                                                                
                                
                                                        </div>
                                                        
                                        
                                            </div>
                                                
                        
                        </section>
                        
                        
                        {/* <!-- END FIFTH SECTION ############################################### --> */}
                        
                        
                        {/* <!-- FOOTER SECTION ############################################### --> */}
                        
                        
                        <section class="footer">
                        
                                        
                                            <div class="row">
                                            
                                                    {/* <!-- Article centered on the Page -->  */}
                                        
                                                        <div class="nine columns centered">
                                                        
                                                                {/* <!-- Nav Footer -->  */}
                                                        
                                                                <ul> 
                                                                        <li><a href="http://www.iamsupview.be">About Supview</a> </li> 
                                                                        <li> <a href="http://www.baribal.be/showpage/dl/">Get it</a> </li> 
                                                                        <li> <a href="http://dribbble.com/Supview">Dribbble</a> </li> 
                                                                        <li> <a href="http://www.facebook.com/Supview" rel="nofollow">Facebook</a> </li> 
                                                                        <li> <a href="http://twitter.com/Supview" rel="nofollow">Twitter</a> </li> 
                                                                        <li> <a href="http://www.behance.net/Supview" rel="nofollow">Behance</a> </li> 
                                                                </ul>
                        
                                                                {/* <!-- Title -->  */}
                                                                                                                                                        
                                                                <p class="copyright">Showpage is a free app landing page made by <a href="http://www.iamsupview.be">Supview</a> and is under  <a href="http://creativecommons.org/licenses/by/4.0/">CC License</a> <br>© Copyright 2014 Supview. All rights reserved.</br></p>	
                                
                                                                {/* <!-- Logo -->  */}
                                
                                
                                                                <img class="logo" src="img/logo.png" alt="Logo" />
                                
                                                        </div>
                                                        
                                        
                                            </div>
                                                
                        
                        </section>
                        
                        
                        {/* <!-- END FOOTER SECTION ############################################### --> */}
                        
                        
                        
                        
                        
                        </div> 
                        {/* <!-- end of container --> */}
                        
                        
                          {/* <!-- Grab Google CDN's jQuery, fall back to local if offline --> */}
                          {/* <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
                          <script>window.jQuery || document.write('<script src="js/jquery-1.9.1.min.js"><\/script>')</script>
                          
                          <script src="js/main.js" type="text/javascript"></script> 								<!-- Main Javascript File -->
                          <script src="js/classie.js" type="text/javascript"></script> 								<!-- Scroll from left & right -->
                          <script src="js/waypoints.min.js" type="text/javascript"></script>						<!-- Waypoints -->
                          <script src="js/jquery.scrollto.js" type="text/javascript"></script> 						<!-- ScrollTo -->	
                          <script src="js/mediaCheck.js" type="text/javascript"></script> 							<!-- MediaCheck -->	
                         */}
                        
                          
                          {/* <!-- Change UA-XXXXX-X to be your site's ID --> */}
                          {/* <!-- */}
                          <script>
                            {/* window._gaq = [['_setAccount','UAXXXXXXXX1'],['_trackPageview'],['_trackPageLoadTime']];
                            Modernizr.load({
                              load: ('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js'
                            }); */}
                          </script> 
                           {/* --> */}
                              
        </div>
            
        )
        }


}