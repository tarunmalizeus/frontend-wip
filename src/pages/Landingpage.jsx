import { Link } from 'react-router-dom'

function Landingpage() {
    return (
      <>
        <h1>Landingpage</h1>
        <h1>Implement Chatgpt like Landing page here</h1>
        <button>
          <Link to="/signup">Signup</Link>
        </button>
        <button>
          <Link to="/login">Login</Link>
        </button>        
      </>
    )
  }

export default Landingpage
