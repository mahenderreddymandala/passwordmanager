import './PasswordItem.css'

const PasswordItem = props => {
  const {details, updatedList, checkbox} = props

  const {username, website, password, id} = details
  const word = website.slice(0, 1)

  const onDelete = () => {
    updatedList(id)
  }

  const show = checkbox ? '123' : '456'

  return (
    <li className="list-items">
      <div>
        <p className="word">{word}</p>
      </div>
      <div>
        <p className="paragraph3">{website}</p>
        <p className="paragraph3">{username}</p>
        {show}
        <p>{password}</p>
      </div>
      <div>
        <button className="button" type="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="deleteicon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
