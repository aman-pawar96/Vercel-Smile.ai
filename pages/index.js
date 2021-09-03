
import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {Line} from 'react-chartjs-2';

export default function Home() {

  
  const [graphData,setGraphData]=useState({
  labels: [],
  datasets: [
    {
      label: 'Temprature',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
})

  useEffect(()=>{
    axios.get("https://vercel-smile-ai.vercel.app/api/temp")
    .then((response)=>{
      console.log(response);
	  let temprature=[]
	  let date=[]
	  for(let i=0;i<response.data.length;i++){
		temprature.push(response.data[i]["Temprature"]);
		date.push(response.data[i]["Date"]);
	  }
	  console.log(date);
	  console.log(temprature);
	  setGraphData({
			  labels: date,
			  datasets: [
				{
				  label: 'Temprature',
				  fill: false,
				  lineTension: 0.1,
				  backgroundColor: 'rgba(75,192,192,0.4)',
				  borderColor: 'rgba(75,192,192,1)',
				  borderCapStyle: 'butt',
				  borderDash: [],
				  borderDashOffset: 0.0,
				  borderJoinStyle: 'miter',
				  pointBorderColor: 'rgba(75,192,192,1)',
				  pointBackgroundColor: '#fff',
				  pointBorderWidth: 1,
				  pointHoverRadius: 5,
				  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				  pointHoverBorderColor: 'rgba(220,220,220,1)',
				  pointHoverBorderWidth: 2,
				  pointRadius: 1,
				  pointHitRadius: 10,
				  data: temprature
				}
			  ]
			});
    })
  },[])
  return (
    <div>
    <h2>Temprature Graph</h2>
    <Line
      data={graphData}
      width={100}
      height={100}
    />
  </div>
  )
}
