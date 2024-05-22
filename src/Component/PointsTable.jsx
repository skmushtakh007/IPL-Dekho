import { useEffect, useState } from 'react'

export default function PointsTable() {
  const [tableData, setTableData] = useState([]);

  async function fetchPointsTable() {
    const url = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/7607/points-table';
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
      setTableData(result.pointsTable[0].pointsTableInfo)
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPointsTable()
  }, [])

  return (
    <div className='w-full p-3 bg-white text-black'>
      <table className='w-full '>
        <tr className='text-center w-full h-[50px]'>
          <td className='text-left w-[20%] sm:w-[40%]' >Team</td>
          <td >M</td>
          <td>W</td>
          <td>L</td>
          <td>NRR</td>
          <td>Pts</td>
          <td>Last 5</td>
        </tr>
        {
          tableData.map(({ form, matchesLost, matchesPlayed, matchesWon, teamName, nrr, points, teamImageId }, i) =>
            <tr className='text-center w-full border-t border-gray-500 h-[50px]' key={i} >
              <div className='flex gap-2 sm:gap-6 mt-4'>
                <td className='w-5'>{i + 1}</td>
                <img className='w-6 object-contain' src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${teamImageId}`} alt="Loading..." />
                <td>{teamName}</td>
              </div>
              <td>{matchesPlayed}</td>
              <td>{matchesWon}</td>
              <td>{matchesLost}</td>
              <td>{nrr}</td>
              <td>{points}</td>
              <td className='flex gap-1 lg:gap-2 justify-center'>{form.map((data, i) =>
                data === "W" ? <i key={i} className="fi fi-ss-check-circle text-green-500 text-sm"></i> : <i key={i} className="fi fi-sr-cross-circle text-red-500 text-sm"></i>
              )}</td>
            </tr>
          )
        }
      </table>
    </div>
  )
}
