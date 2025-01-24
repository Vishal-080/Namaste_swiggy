import { RES_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="flex w-60 h-[500px] border border-black border-solid p-2 m-5 flex-col justify-center items-center text-center bg-[#faebd7] rounded-lg text-black cursor-pointer hover:border-8 hover:border-solid hover:border-lime-500">
      <img
        className="my-4 object-none rounded-lg h-44"
        src={RES_URL + resData?.info?.cloudinaryImageId}
      />
      <h2 className="p-2 text-red-600 text-xl font-semibold	leading-4	">
        {resData?.info?.name}
      </h2>
      <h4>{resData?.info?.avgRating} Stars</h4>
      <h4>{resData?.info?.costForTwo}</h4>
      <button className="bg-[#6fe86f] text-black py-2 px-3 my-2 rounded-lg cursor-pointer hover:bg-[#4a9c4a] hover:text-white">
        Order Now
      </button>
    </div>
  );
};

export const isOpen = (RestaurantCard) => {
  return (props)=>{
    return (<>
      <label className="p-1 rounded-lg z-10 relative left-5 top-12 bg-black hover:text-lime-400">Open Now</label>
      <RestaurantCard {...props}/>
    </>)
  }

}

export default RestaurantCard;
