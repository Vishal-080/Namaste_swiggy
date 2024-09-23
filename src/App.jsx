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

const RestaurantCard = (props) => {
  return (
    <div className='res-card'>
      <img className='res-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"/>
      <h2>{props.resName}</h2>
      <h4>{props.resRatings}</h4>
      <h4>{props.price}</h4>
      <button className='order-btn'>Order Now</button>
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
        <RestaurantCard resName={"Meghna Foods"} resRatings={"4.2 stars"} price={"200Rs for two"}/>
        <RestaurantCard resName={"Vegily Foods"} resRatings={"4.2 stars"} price={"300Rs for two"}/>
        <RestaurantCard resName={"Momosa"} resRatings={"4.8 stars"} price={"250Rs for two"}/>
        <RestaurantCard resName={"Meghna Kitchen"} resRatings={"4.9 stars"} price={"100Rs for two"}/>
        <RestaurantCard resName={"Meghna Foods"} resRatings={"4.2 stars"} price={"200Rs for two"}/>
        <RestaurantCard resName={"Meghna Foods"} resRatings={"4.2 stars"} price={"200Rs for two"}/>
        <RestaurantCard resName={"Meghna Foods"} resRatings={"4.2 stars"} price={"200Rs for two"}/>
        <RestaurantCard resName={"Meghna Foods"} resRatings={"4.2 stars"} price={"200Rs for two"}/>
        <RestaurantCard resName={"Meghna Foods"} resRatings={"4.2 stars"} price={"200Rs for two"}/>
        <RestaurantCard resName={"Meghna Foods"} resRatings={"4.2 stars"} price={"200Rs for two"}/>
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
