import { ageDifference, calculateAge } from "./age";
import { bsToAd } from "./utils";


function App() {

  // test
  const age = calculateAge("2002-03-17")
  console.log(age, "age")

  const diff = ageDifference("2002", '2025-12-04')
  console.log(diff, "diff")


  const bs = bsToAd("2082-06-31")
  // console.log('Bs to Ad conversion:', bs);



  return (
    <div>
      {bs.formatted.en}
    </div>
  )
}

export default App
