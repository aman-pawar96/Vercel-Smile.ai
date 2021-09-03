// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moment from 'moment'
export default function handler(req, res) {
  let response=[]
  for(let i=0;i<10;i++){
    response.push({
        Date:moment().subtract(9-i,'days').format('DD-MM-YYYY'),
        Temprature:parseFloat((Math.random()*30+20).toFixed(2))
    })
  }
  res.status(200).json(response)
}
