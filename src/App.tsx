import { adToBs, bsToAd } from "./utils";


function App() {

  // test
  const ad = adToBs('2002-03-17')
  console.log('Ad to BS conversion:', ad);

  const bs = bsToAd("2058/12/04")
  console.log('Bs to Ad conversion:', bs);


  return (
    <div>
      {ad.formatted.np}
    </div>
  )
}

export default App
