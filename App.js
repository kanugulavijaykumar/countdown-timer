import { useState,useEffect } from "react"; 
import Display from "./Display";

function App() {
  const endTime = new Date('May 20, 2023 00:00:00').getTime();
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const gapTime = endTime - currentTime;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gapTime/days);
  const remainingHours = Math.floor((gapTime % days)/hours);
  const remainingMinutes = Math.floor((gapTime % hours)/minutes);
  const remainingSeconds = Math.floor((gapTime % minutes)/seconds);

  useEffect(() =>{
    setTimeout(() => setCurrentTime(new Date().getTime()),1000)
  },[currentTime])

  return (
    <div>
      <center>
      <Display 
      days = {remainingDays}
      hours = {remainingHours}
      minutes = {remainingMinutes}
      seconds = {remainingSeconds}
      />
      </center>
    </div>
  )
}

export default App