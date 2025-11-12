import { calculateAgeDifference, calculateAge } from "./age";
import { convertAdToBs } from "./conversion";

function App() {

  // test
  const age = calculateAge("2025-03-17")
  console.log(age, "age")

  const diff = calculateAgeDifference("2021", '2020')
  console.log(diff, "diff")


  const bs = convertAdToBs("Fri Nov 07 2025 08:19:22 GMT+0545")
  console.log(bs, "Bs")

  return (
    <div>
      {bs.formatted.en}
    </div>
  )
}

export default App
