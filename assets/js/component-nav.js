class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="header-wrapper">
      <div class="container">
          <!-- Header -->
              <header id="header">
                  <div class="inner">

                      <!-- Logo -->
                          <h1><a href="index.html" id="logo"><img src="images/logo.png" alt="K-MEP"></a></h1>

                      <!-- Nav -->
                          <nav id="nav">
                              <ul>
                                  <li><a href="index.html">Home</a></li>
                                  <li><a href="services.html">Services</a></li>
                                  <li>
                                      <a href="#">Company</a>
                                      <ul>
                                          <li><a href="about.html">About</a></li>
                                          <li><a href="leadership.html">Leadership</a></li>
                                          <li><a href="team.html">Team</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="contact-us.html">Contact Us</a></li>
                                  <!--li><a href="left-sidebar.html">Left Sidebar</a></li-->
                                  <!--li><a href="right-sidebar.html">Right Sidebar</a></li-->
                              </ul>
                          </nav>

                  </div>
              </header>
      `;
    }
  }
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
      <div id="footer-wrapper">
      <footer id="footer" class="container">
          <div class="row">
              <!--div class="col-3 col-6-medium col-12-small">
              </div-->
              <!--div class="col-3 col-6-medium col-12-small">
              </div-->
              <div class="col-9 col-12-medium imp-medium">
                  <!-- Contact -->
                      <section>
                          <h2>Get in touch</h2>
                          <div>
                              <div class="row">
                                  <div class="col-4 col-12-small">
                                      <dl class="contact">
                                          <dt>Phone</dt>
                                          <dd>
                                            +91 97104 39000<br />
                                            +91 91766 70447
                                          </dd>
                                          <dt>Email</dt>
                                          <dd><a href="mailto:rajesh@kmep.co.in">rajesh@kmep.co.in</a></dd>
                                      </dl>
                                  </div>
                                  <div class="col-4 col-12-small">
                                      <dl class="contact">
                                          <dt>Registered Office</dt>
                                          <dd>
                                              Plot No. 17. Door No. 4<br />
                                              Thiruppur Kumaran Street<br />
                                              Senthil Nagar<br />
                                              Chennai - 600 062<br />
                                              Tamil Nadu - INDIA<br />
                                              
                                          </dd>
                                      </dl>
                                  </div>
                                  <div class="col-4 col-12-small">
                                      <dl class="contact">
                                          <dt>Branches</dt>
                                          <dd>
                                              Chennai<br />
                                              Hosur<br />
                                              Tiruchirappalli<br />
                                              Bangalore
                                          </dd>
                                      </dl>
                                  </div>
                              </div>
                          </div>
                      </section>

              </div>
              <div class="col-12">
                  <div id="copyright">
                      <ul class="menu">
                          <li>&copy; KMEP</li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
  </div>   
      `;
    }
  }
  
  customElements.define('main-header', Header);
  customElements.define('main-footer', Footer);