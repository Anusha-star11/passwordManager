import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Password from '../Password'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
  }

  onDeleteCardItem = id => {
    const {passwordList} = this.state
    const updatedList = passwordList.filter(each => each.id !== id)

    this.setState({passwordList: updatedList})
  }

  onHandleWebsite = e => {
    this.setState({website: e.target.value})
  }

  onHandleUserName = e => {
    this.setState({username: e.target.value})
  }

  onHandlePassword = e => {
    this.setState({password: e.target.value})
  }

  onChangeSearchInput = e => {
    const {passwordList} = this.state
    const inputValue = e.target.value
    const searchResults = passwordList.fliter(each =>
      each.username.toLowerCase().includes(inputValue.toLowerCase()),
    )

    this.setState({passwordList: searchResults})
  }

  handleAddSubmit = e => {
    e.preventDefault()
    const {website, username, password} = this.state
    const newPasswordList = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordList],

      website: '',
      username: '',
      password: '',
    }))
  }

  renderAuthButton = () => {
    const {passwordList} = this.state
    if (passwordList.length === 0) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="PM-image"
          />
          <p>No Passwords</p>
        </div>
      )
    }
    return (
      <ul className="card-display-area">
        {passwordList.map(each => (
          <Password key={each.id} item={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {website, username, password, passwordList} = this.state
    const count = passwordList.length

    return (
      <div className="passwordmanager-page">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-img"
        />
        <div className="passwordstorage">
          <div className="passwordform">
            <h1 className="heading-white">Add New Password</h1>
            <form onSubmit={this.handleAddSubmit}>
              <div className="input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-img"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.onHandleWebsite}
                />
              </div>
              <br />
              <div className="input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-img"
                />
                <input
                  type="text"
                  placeholder="Enter UserName"
                  value={username}
                  onChange={this.onHandleUserName}
                />
              </div>
              <br />
              <div className="input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-img"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.onHandlePassword}
                />
              </div>
              <br />
              <div>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="PM-image"
            />
          </div>
        </div>
        <div className="passwordstorageB">
          <div>
            <div className="part-header">
              <div className="no-of-passwords">
                <h1 className="heading-white">Your Passwords</h1>
                <p>{count}</p>
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="website-img"
                />
                <input
                  type="search"
                  placeholder="search"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
          </div>

          <div>
            <div>
              <input type="checkbox" id="Showpasswords" />
              <label htmlFor="Showpasswords">Show passwords</label>
            </div>
            <div>{this.renderAuthButton()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
