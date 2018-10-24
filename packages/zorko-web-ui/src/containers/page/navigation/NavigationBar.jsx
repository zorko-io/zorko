import logo from '../../../logo.png'
import React, { Component, Fragment } from 'react'
import AuthButton from '../auth/AuthButton'
import LogoutButton from '../auth/LogoutButton'
import MediaQuery from 'react-responsive'
import PropTypes from 'prop-types'

class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuActive: false
    }
  }

  handleBurgerClick = () => {
    const { isMenuActive } = this.state
    this.setState({
      isMenuActive: !isMenuActive
    })
  }

  render() {
    return (
      <nav className="navbar" aria-label="main navigation">
        {!this.props.stretch ?
          (<div className="container">
            {this.renderContent()}
          </div>) : this.renderContent()
        }
      </nav>
    )
  }

  renderContent() {
    const { isMenuActive } = this.state

    return <Fragment>
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} alt="Zorko: a place to discover and share visualizations"/>
        </a>
        {this.props.title && <MediaQuery query={'(max-width: 1088px)'}>
          <div className={'navbar-title'}>
            <span className="navbar-title-text">{this.renderTitle()}</span>
          </div>
        </MediaQuery>}
        <a
          role="button"
          className={`navbar-burger burger ${isMenuActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={this.handleBurgerClick}
        >
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>

        <MediaQuery query={'(max-width: 1088px)'}>
          <div className="navbar-item">
            <figure className="image is-32x32">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>
          </div>
        </MediaQuery>

      </div>
      {this.props.title && <MediaQuery query={'(min-width: 1089px)'}>
        <div className={'navbar-title'}>
          <span className="navbar-title-text">{this.renderTitle()}</span>
        </div>
      </MediaQuery>}

      <div className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <p className="control">
              <AuthButton/>
              <LogoutButton/>
            </p>
          </div>
          <MediaQuery query={'(min-width: 1089px)'}>
            <div className="navbar-item">
              <p className="control">
                <figure className="image is-32x32">
                  <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                </figure>
              </p>
            </div>
          </MediaQuery>
        </div>
      </div>
    </Fragment>
  }

  renderTitle() {
    return <div>
      <div>{this.props.title} </div>
      <div><span>by</span> {this.props.author}</div>
    </div>
  }
}

NavigationBar.propTypes = {
  title: PropTypes.string,
  stretch: PropTypes.bool,
  author: PropTypes.string,
  user: PropTypes.object
}

NavigationBar.defaultProps = {
  stretch: false
}

export default NavigationBar
