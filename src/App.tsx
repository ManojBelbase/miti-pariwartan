import { adToBs, bsToAd } from "miti-pariwartan";


function App() {
  const ad = adToBs('2025-10-17');
  console.log('Ad to Bs conversion:', ad);

  const bs = bsToAd('2099-12-30');
  console.log('Bs to Ad conversion:', bs.formatted);
  return (
    <div>
    </div>
  )
}

export default App
