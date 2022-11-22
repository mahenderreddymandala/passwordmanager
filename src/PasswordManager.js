import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './PasswordManager.css'

import PasswordItem from './PasswordItem'

class PasswordManager extends Component {
  state = {
    appsList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    checkbox: false,
  }

  onwebsite = event => {
    this.setState({website: event.target.value})
  }

  onusername = event => {
    this.setState({username: event.target.value})
  }

  onpassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {website, username, password, searchInput} = this.state

    const newList = {
      id: uuidv4(),
      website,
      username,
      password,
      searchInput,
    }

    this.setState(prevState => ({
      appsList: [...prevState.appsList, newList],
      website: '',
      username: '',
      password: '',
    }))
  }

  onsearch = event => {
    this.setState({searchInput: event.target.value})
  }

  updatedList = id => {
    const {appsList} = this.state
    const filteredList = appsList.filter(each => each.id !== id)

    this.setState({appsList: filteredList})
  }

  checkbox = () => {
    this.setState(prevState => ({checkbox: !prevState.checkbox}))
  }

  render() {
    const {
      website,
      username,
      password,
      appsList,
      searchInput,
      checkbox,
    } = this.state
    console.log(appsList)
    console.log(checkbox)
    const count = appsList.length

    const searchResults = appsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png  "
          alt="app logo"
          className="appLogo"
        />
        <div className="sub-container1">
          <div className="card-section3">
            <img
              src=" https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt=" password manager"
              className="passwordmanager"
            />
          </div>
          <div className="card-section1">
            <h1 className="main-heading">Add New Password</h1>
            <form onSubmit={this.onSubmitForm}>
              <div className="input1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="inputimage"
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onwebsite}
                  value={website}
                />
              </div>
              <div className="input2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="inputimage"
                />

                <input
                  className="input"
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.onusername}
                  value={username}
                />
              </div>
              <div className="input3">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="password"
                  className="inputimage"
                />
                <input
                  className="input"
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.onpassword}
                  value={password}
                />
              </div>

              <button className="button-style" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="card-section2">
            <img
              src=" https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt=" password manager"
              className="passwordmanager"
            />
          </div>
        </div>
        <div className="sub-container2">
          <div className="card2">
            <div className="row">
              <h1 className="heading2">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="searchbar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="search"
              />
              <input
                type="search"
                placeholder="search"
                onChange={this.onsearch}
                value={searchInput}
                className="input11"
              />
            </div>
          </div>
          <hr />
          <div className="checkbox">
            <input id="checkbox" type="checkbox" onClick={this.checkbox} />
            <label className="p2" htmlFor="checkbox">
              Show passwords
            </label>
          </div>

          {appsList.length === 0 ? (
            <div className="conta">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="nopasswordimage"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul className="list-items-style">
              {searchResults.map(each => (
                <PasswordItem
                  details={each}
                  key={each.id}
                  updatedList={this.updatedList}
                  checkbox={this.checkbox}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
