import React, { Component } from 'react'
import meImg from 'images/me.jpg'

export default class Aside extends Component {
  render() {
    return (
      <aside class="site-sidebar">
        <div class="site-sidebar-bg"></div>

        <div class="site-sidebar-inner">
        <a href="/" class="person">
          <div class="person-avatar">
            <img src={meImg} alt="HeeBangPicture" class="avatar"/>
          </div>
          <div class="person-content">
            <h1 class="person-title">방희배</h1>
            <h2 class="person-subtitle">풀 스택 웹 개발자</h2>
          </div>
        </a>

        <nav class="block main-navigation">
          <div class="navigation-extend-bar">
            <div class="social-icons">
              <a href="mailto:jacek@jtom.me" class="button button-icon" title="mail: jacek@jtom.me">
                <i class="fa fa-envelope"></i>
              </a>

              <a href="https://facebook.com/jtomaszewski" class="button button-icon" title="facebook: jtomaszewski">
                <i class="fa fa-facebook-square"></i>
              </a>

              <a href="https://twitter.com/jtompl" class="button button-icon" title="twitter: @jtompl">
                <i class="fa fa-twitter-square"></i>
              </a>

              <a href="https://github.com/jtomaszewski" class="button button-icon" title="github: jtomaszewski">
                <i class="fa fa-github-square"></i>
              </a>

              <a href="https://www.linkedin.com/in/jtompl" class="button button-icon" title="linkedin: jtompl">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </div>

            <a href="#" class="navigation-extend-button js-extend-main-navigation">
              <i class="fa fa-bars"></i>
            </a>
          </div>

          <div class="navigation-extendable">
            <ul>
              <li class="current"><a href="/skills-and-offer/">My skills &amp; offer</a></li>
              <li class=""><a href="/portfolio/">Portfolio</a></li>
              <li class=""><a href="/contact/">Contact</a></li>
            </ul>
            <ul>
              <li class=""><a href="/about-me/">About me</a></li>
              <li><a href="http://jackthenomad.com/" target="_blank">Personal blog</a></li>
              <li class=""><a href="/talks/">My talks</a></li>
            </ul>
          </div>
        </nav>

        <div class="block block-social">
          <div class="block-title">Get in touch</div>
          <div class="block-content">
            <div class="social-icons">
              <a href="mailto:jacek@jtom.me" class="button button-icon" title="mail: jacek@jtom.me">
                <i class="fa fa-envelope"></i>
              </a>

              <a href="https://facebook.com/jtomaszewski" class="button button-icon" title="facebook: jtomaszewski">
                <i class="fa fa-facebook-square"></i>
              </a>

              <a href="https://twitter.com/jtompl" class="button button-icon" title="twitter: @jtompl">
                <i class="fa fa-twitter-square"></i>
              </a>

              <a href="https://github.com/jtomaszewski" class="button button-icon" title="github: jtomaszewski">
                <i class="fa fa-github-square"></i>
              </a>

              <a href="https://www.linkedin.com/in/jtompl" class="button button-icon" title="linkedin: jtompl">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
    )
  }
}
