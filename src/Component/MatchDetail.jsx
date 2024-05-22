/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import InPageNavigation from "./inPageNavigation";


function MatchDetail() {
  let { id } = useParams();
  const [data, setData] = useState([])

  async function fetchMathcDetail() {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c3d72ebbe7mshe9938d3cfdc7ba3p18dc3ajsn8a5141f7f8c1',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchMathcDetail()
  }, [])
  return (
    <div className="bg-white">
      <div className="text-2xl text-center m-5">Match Details</div>
      {
        data.length <= 0 ?  (<h1>Loading..</h1>) : ( <InPageNavigation teams={[data.matchInfo.team1.shortName, data.matchInfo.team2.shortName]}>
          {
            data.matchInfo.team1.playerDetails.map((data,i) =>
              (<div className="text-xl m-5" key={i}>
                <h1>{data.fullName}</h1>
                <h2 className="opacity-50">{data.role}</h2>
              </div>)
            )
          }
          {
            data.matchInfo.team2.playerDetails.map((data,i) =>
              (<div className="text-xl m-5"  key={i}>
                <h1>{data.fullName}</h1>
                <h2 className="opacity-50">{data.role}</h2>
              </div>)
            )
          }
        </InPageNavigation>

        )
      }
      
    </div>
  )
}

export default MatchDetail;