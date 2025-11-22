import { convertAdToBs } from "./conversion";
import { calculateAge, calculateAgeDifference, fromNow } from "./features";


function App() {

  // test
  const ageAd = calculateAge("2002-03-17");
  console.log(ageAd, "AD Age");  // { years: 23, months: 7, days: 27 }

  const diff = calculateAgeDifference("2021", '2020')
  // console.log(diff, "diff")

  const todayBs = convertAdToBs(new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" }));
  console.log("Today BS:", todayBs.formatted.standard);  // 2082-07-27

  const bs = convertAdToBs("2025-11-13")
  // console.log(bs, "Bs")

  return (
    <div>
      {bs.formatted.en}
      <>{fromNow(new Date())}</>
    </div>
  )
}

export default App
