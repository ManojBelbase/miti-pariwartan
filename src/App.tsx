import { adToBs, bsToAd } from "./utils";


function App() {

  // test
  const ad = adToBs("2002-03-17")
  // console.log('Ad to BS conversion:', ad);


  const bs = bsToAd("2082-06-31")
  console.log('Bs to Ad conversion:', bs);


  return (
    <div>
      {bs.formatted.en}
    </div>
  )
}

export default App
