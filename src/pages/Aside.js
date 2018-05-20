import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import meImg from 'images/me.jpg'

export default class Aside extends Component {
  state = {
    menu: false,
    sticky: false,
  }

  menuClick () {
    this.setState({menu: !this.state.menu});
  }


  stickyClick (isSticky) {
    this.setState({sticky: isSticky});
  }

  render() {
    const { menu, sticky } = this.state;
    const extended = menu ? 'extended' : '';
    const stickyClass = sticky ? 'sticky' : '';
    const activeStyle = {
      color: 'white',
      fontWeight: 'bold'
    };

    return (
      <aside className="site-sidebar">
        <div className="site-sidebar-bg"></div>

        <div className="site-sidebar-inner">
        <NavLink exact to="/" className="person">
        <a className="person">
          <div className="person-avatar">
            <img src={meImg} alt="HeeBangPicture" className="avatar"/>
          </div>
          <div className="person-content">
            <h1 className="person-title">방희배</h1>
            <h2 className="person-subtitle">풀 스택 웹 개발자</h2>
          </div>
        </a>
        </NavLink >

        <nav className={`block main-navigation ${extended}`} id="myHeader">
          <div className={`navigation-extend-bar ${stickyClass}`}>
            <div className="social-icons">
              <a href="mailto:mirstock@naver.com" className="button button-icon" title="mail: mirstock@naver.com">
                <i className="fa fa-envelope"></i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=100005415841072" className="button button-icon" title="facebook: jtomaszewski">
                <i className="fa fa-facebook-square"></i>
              </a>
            </div>

            <a className={`navigation-extend-button js-extend-main-navigation`}>
              <i className='fa fa-bars' onClick={this.menuClick.bind(this)}></i>
            </a>
          </div>

          < div className = {`navigation-extendable ${stickyClass}`} >
            <ul>
              <li><NavLink exact to="/skill" activeStyle={activeStyle}>My Skills</NavLink></li>
              <li><NavLink exact to="/projects" activeStyle={activeStyle}>Projects</NavLink></li>
            </ul>
            <ul>
              <li><NavLink exact to="/about" activeStyle={activeStyle}>About me</NavLink></li>
              <li><a href="http://tbang.tistory.com/" target="_blank">Personal blog</a></li>
            </ul>
          </div>
        </nav>

        <div className="block block-social">
          <div className="block-title">Get in touch</div>
          <div className="block-content">
            <div className="social-icons">
              <a href="mailto:mirstock@naver.com" className="button button-icon" title="mail: mirstock@naver.com">
                <i className="fa fa-envelope"></i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=100005415841072" className="button button-icon" title="facebook: jtomaszewski">
                <i className="fa fa-facebook-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
    )
  }

  componentDidMount() {
    window.onscroll = function () {
      (() => {
        if (window.pageYOffset >= 300) {
          this.stickyClick(true)
        } else {
          this.stickyClick(false)
        }
      })()
    }.bind(this);

  }
}
