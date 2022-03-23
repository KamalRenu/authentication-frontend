import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [count,setCount] = useState(0);
    useEffect(async ()=>{
        try {
            let dashboard = await axios.get("http://localhost:3001/dashboard",{
                headers : {
                    Authorization : window.localStorage.getItem("my_token")
                }
            });
            setCount(dashboard.data.totalUsers)
        } catch (error) {
            console.log(error);
        }
    })
  return (
      <h1>Dashboard</h1>
  )
}

export default Dashboard;
