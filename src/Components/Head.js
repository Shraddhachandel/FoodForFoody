import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Head = () => {
  const cartItem = useSelector((store) => store.cart.items);
  //console.log(cartItem);

  const cartItemCount = cartItem ? cartItem.length : null;

  
  let counter = 0;
  const getData = () => {
    console.log ("fetching data : " , counter ++);
  }

const debounce = (fn,delay) => {
  let timer;
  return (...args) => {
    clearTimeout (timer);
    timer = setTimeout (() => {
      fn (...args);
    }, delay );
    }
 
}
const betterFunction = debounce (getData, 300)

return (
    <div className="flex items-center justify-between shadow-lg py-4 bg-gray">
      <div className="flex items-center">
        <img className="h-11 mx-2 px-5 m-2" alt="Food-logo" src="food.webp" />
        <div className="p-5 space-x-6">
        <Link to="/">Home</Link>
          <Link to="/about" > About </Link>
          <Link to="/contact" >  Contact  </Link>
        </div>
      </div>
       <div className="w-14 flex items-center justify-end">
        <input
          type="text"
          placeholder="Search"
          className="p-2 w-auto border border-solid rounded-lg  font-bold text-center"
          onKeyUp = {betterFunction} />
       </div>
       <div className="flex">
       <Link to="/cart" > <img className="h-6" src="data:image/jpeg;base64,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" alt="cart"/>
         </Link>({cartItemCount})
         </div>
      <div className="flex  ">
      <Link to="/login" 
      className="nav-link">
        <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"
        alt="user icon"
        className="h-10 mr-10"
        />
      </Link>

    </div>
    </div>
  );
};

export default Head;
