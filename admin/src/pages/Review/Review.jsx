import React, { useEffect, useState } from 'react'
import './List.css'
import { url} from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const Review = () => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/review/list`)
    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

//   const removeFood = async (foodId) => {
//     const response = await axios.post(`${url}/api/food/remove`, {
//       id: foodId
//     })
//     await fetchList();
//     if (response.data.success) {
//       toast.success(response.data.message);
//     }
//     else {
//       toast.error("Error")
//     }
//   }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          
          <b>Name</b>
          <b>email</b>
          <b>number</b>
          <b>message</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
          
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.number}</p>
              <p>{item.message}</p>
            
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Review;
