import './App.css';


const Header = ( ) => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search bar</div>
      <div className='res-container'></div>
    </div>
  )
}

const AppLayout = () => {

  return (
    <>
      <Header/>
    </>
  )
}

export default AppLayout;
