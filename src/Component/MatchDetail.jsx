import { useParams } from "react-router-dom"

function MatchDetail() {
  let{matchId}=useParams();
  console.log(matchId)
  
  return (
    <div>
      {matchId}
      MatchDetail</div>
  )
}

export default MatchDetail;