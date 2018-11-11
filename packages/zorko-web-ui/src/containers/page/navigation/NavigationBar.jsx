import logo from '../../../logo.png'
import React, { Component, Fragment } from 'react'
import AuthButton from '../../auth/AuthButton'
import LogoutButton from '../../auth/LogoutButton'
import MediaQuery from 'react-responsive'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NewSpecWizardButton } from '../../new-spec-wizard/NewSpecWizardButton'
import AuthModal from '../../auth/AuthModal'

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
          {this.renderUserAvatar()}
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
            <div className={`field is-grouped is-grey`}>
              <p className="control" >
                <NewSpecWizardButton/>
              </p>
              <p className="control">
                <AuthButton/>
                <LogoutButton/>
              </p>
            </div>
          </div>
          <MediaQuery query={'(min-width: 1089px)'}>
            {this.renderUserAvatar()}
          </MediaQuery>
        </div>
      </div>
      <AuthModal/>
    </Fragment>
  }

  renderUserAvatar = () => (
    this.props.user &&
    <div className="navbar-item">
      <a href={`https://github.com/${this.props.user.login}`}>
        <figure className="image is-32x32">
          <img className="is-rounded" src={this.props.user.avatarUrl}/>
        </figure>
      </a>
    </div>
  )

  renderTitle() {
    return <div>
      <div>{this.props.title} </div>
      {this.props.author && (<div><span>by</span> {this.props.author}</div>)}
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

const mapStateToProps = (state, ownProps) => ({
  user: state.userProfile,
  ...ownProps
})

export default connect(mapStateToProps)(NavigationBar)
