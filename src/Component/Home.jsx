import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    const [matchData, setMatchData] = useState([])

    async function fetchMatchData() {
      const url = 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/7607';
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
        let filteredData = result.matchDetails.filter(singleMatch => singleMatch['matchDetailsMap']);
        setMatchData(filteredData);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {
        fetchMatchData()
    }, [])

    return (
        <div className='flex flex-wrap w-full'>
            {/* Destructuring  */}
            {
                matchData.map(({ matchDetailsMap: { match, key: date } }, i) => (
                    match.map(({ matchInfo: {
                        team1: {
                            teamSName: teamSName1,
                            teamName: team1LongName,
                            imageId: team1Img
                        },
                        team2: {
                            teamSName: teamSName2,
                            imageId: team2Img
                        },
                        status,
                        matchId,
                        matchDesc,
                        state,
                        matchFormat
                    },
                        matchScore
                    }) => (
                        <Link
                            key={i}
                            to={`/matchDetail/${matchId}`}
                            className='w-[50%] '>
                            {/* <h2 > {teamSName1} vs {teamSName} ,{date}  {status} </h2> */}

                            <div className='bg-gray-300 h-[200px] p-3 m-2 flex flex-col gap-4'>
                                <div className='flex justify-between'>
                                    <p> {matchFormat} {matchDesc} </p>
                                    <p> {date.split(" 2024")[0]} </p>
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-4'>
                                            <img className='w-5 object-contain' src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${team1Img}`} alt="Loading..." />
                                            <p> {teamSName1} </p>
                                        </div>

                                        {
                                            matchScore?.team1Score
                                                ? <p>
                                                    {matchScore?.team1Score?.inngs1?.runs}
                                                    /
                                                    {
                                                        matchScore?.team1Score?.inngs1?.wickets
                                                    }
                                                    ({
                                                        matchScore?.team1Score?.inngs1?.overs
                                                    })
                                                </p> : ''
                                        }
                                    </div>
                                    <div className='flex justify-between text-black'>
                                        <div className='flex gap-4'>
                                            <img className='w-5 object-contain' src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${team2Img}`} alt="Loading..." />
                                            <p> {teamSName2} </p>
                                        </div>

                                        {
                                            matchScore?.team2Score
                                                ? <p>{
                                                    matchScore?.team2Score?.inngs1?.runs}/{matchScore?.team2Score?.inngs1?.wickets} ({matchScore?.team2Score?.inngs1?.overs})
                                                </p> : ''
                                        }
                                    </div>
                                </div>

                                <p className='text-sm font-bold'>
                                    {
                                        state === "complete"
                                            ? status.split(" won")[0] ===
                                                team1LongName
                                                ? teamSName1 +
                                                " won " +
                                                status.split("won")[1]
                                                : teamSName2 +
                                                " won" +
                                                status.split("won ")[1]
                                            : status
                                    }

                                </p>
                            </div>
                        </Link>
                    ))
                ))
            }



            {/* here normal process  {
                matchData.map((data,i) => (
                   data.matchDetailsMap.match.map(singleMatch => (
                      
                        <Link key={i} to={`/matchDetail/${singleMatch.matchInfo.matchId}`}>
                        <h2 >{singleMatch.matchInfo.team1.teamSName
                        } vs {singleMatch.matchInfo.team2.teamSName} {data.matchDetailsMap.key}  {singleMatch.matchInfo.status}</h2>
                        </Link>
                    ))
                ))
            } */}
        </div>
    )
}

