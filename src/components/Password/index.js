import './index.css'

const Password = props => {
  const {item, onDeleteCardItem} = props
  const {website, username, password, id} = item
  const initial = website.slice(0, 1)

  const onDeleteCard = () => {
    onDeleteCardItem(id)
  }

  return (
    <li>
      <div className="card-division">
        <div className="font-edit">{initial}</div>
        <div>
          <p className="font-edit">{website}</p>
          <p className="font-edit">{username}</p>
          <p className="font-edit">{password}</p>
        </div>
        <div>
          <button type="button" onClick={onDeleteCard} data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-image"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default Password
