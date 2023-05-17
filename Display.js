import React from 'react'

function Display({days,hours,minutes,seconds}) {
  return (
    <div>
        <h1>OFFER SALES COUNTDOWN TIMER</h1>
        <h2>Offer ends in </h2>
        <table>
            <tbody>
                <tr>
                    <th>{days}</th>&emsp;&emsp;
                    <th>{hours}</th>&emsp;&emsp;
                    <th>{minutes}</th>&emsp;&emsp;
                    <th>{seconds}</th>&emsp;&emsp;
                </tr>
                <tr>
                    <td>DAYS</td>&emsp;&emsp;
                    <td>HOURS</td>&emsp;&emsp;
                    <td>MINUTES</td>&emsp;&emsp;
                    <td>SECONDS</td>&emsp;&emsp;
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Display