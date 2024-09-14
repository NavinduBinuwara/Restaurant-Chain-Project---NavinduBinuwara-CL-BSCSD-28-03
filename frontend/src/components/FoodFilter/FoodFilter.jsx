import React, { useContext,useEffect,useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import "./FoodFilter.css"
import axios from 'axios';
import FoodItem from '../FoodItem/FoodItem';


const FoodFilter = () => {
   const [hotel,setHotel]=useState([]);
   const[res,setRes] = useState([]);
  const { restaurants,url}  = useContext(StoreContext);
  const [query, setQuery] = useState('');



  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredData = res.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log()
  useEffect(()=>{
        const fetch=async()=>{

          try{
           const response = await axios.get(`${url}/api/restaurant/available/${hotel} `);
            console.log(response.data.foodItems,"res filtered")
            setRes(response.data.foodItems,"res")

          }catch(error){
           console.log("no items",error);
          }
          
        }
        fetch()
  },[hotel,url])
  return (
    <div>
      <h2>Food Search</h2>
      <div>
        {restaurants ? (
          <select value={hotel} onChange={(e) => setHotel(e.target.value)}>
            <option value="">Select a restaurant</option>
            {restaurants.map((item, index) => (
              <option key={index} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        ) : null}

        <input type="text" placeholder="Search for food..." onChange={handleInputChange}/>
      </div>


        <div className="food-display-list">
            {
              filteredData? filteredData.map((item,index)=>(
            <FoodItem key={index} name={item.name} image={item.image} />

              )) :  null
            }
        </div>
    </div>)
}

export default FoodFilter