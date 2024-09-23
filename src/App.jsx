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

const RestaurantCard = () => {
  return (
    <div className='res-card'>
      <img className='res-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"/>
      <h2>Meghna Foods</h2>
      <h3>Ratings</h3>

    </div>
  )
}

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>
        <input cl type="text" name="search" placeholder="Search Restaurants, Cusines, Dishes here..."/>
      </div>
      <div className='res-container'>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  )
}

const AppLayout = () => {

  return (
    <>
      <Header/>
      <Body/>
    </>
  )
}

export default AppLayout;
