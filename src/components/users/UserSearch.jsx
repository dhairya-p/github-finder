import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"

function UserSearch() {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleClear = () => {
    clearUsers()
    setText('')
  }

  const {users, searchUsers, clearUsers} = useContext(GithubContext)
  const { setAlert} = useContext(AlertContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      // set alert
      setAlert('Please enter something', 'error')
      setText('')
    } else {
      searchUsers(text)
    }
  }

  return (
    <div className="max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="flex flex-col md:flex-row  md:items-center gap-4">
        <div className="w-full md:flex-grow">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Search"
                  value={text}
                  onChange={ handleChange }
                />
                <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        {users.length > 0 && 
          <div className="flex-shrink-0">
            <button onClick={handleClear} className="btn btn-ghost btn-lg">
              Clear
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default UserSearch
