import React, { useEffect, useState } from 'react';
import './Team.css'; 
import axios from 'axios';
import toast from 'react-hot-toast';
import { BarLoader } from 'react-spinners';

const Team = () => {

  
    const [admindata, setadmindata] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(()=>{
        const alladmin = async ()=>{
            try {
                setloading(true)
                const alldata = await axios.get("https://zozacbackend.onrender.com/api/signup/admin")
                setadmindata(alldata.data);
            } catch (error) {
                toast.error(error)
            }finally{
                setloading(false)
            }
        }
        alladmin()
    },[])
  return (
    <div className="body">
    <div className="grape-container">
      <h1 className="apple-title">Our Team</h1>
      <div className="banana-row">
        {loading && <BarLoader/>}
     { admindata.map((admin, i)=>(
 <div className="mango-card" key={i} style={{ "--bc": "#8E9792", "--btn": "#8E9792" }}>
          <img src={admin.profileImage} alt={admin.username} />
          <h2>{admin.username}</h2>
          <p className="orange-role">{admin.about}</p>
          {/* <p>{admin.email}</p> */}
          {/* <a href={`tel: ${admin.number}`}>Call</a> */}
        </div>
     )) 
        }


     
      </div>
    </div>
    </div>
  );
};

export default Team;

