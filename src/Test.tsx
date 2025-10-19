import { adToBs, bsToAd } from './utils';

function Test() {

      // AD to BS: 2025-10-17 → Ashoj 31, 2082
      const ad = adToBs('2025-10-17');
      console.log('Ad to Bs conversion:', ad);

      const bs = bsToAd('2089-12-30');
      console.log('Bs to Ad conversion:', bs.formatted);

      // Set the results to state
      
      

  return (
    <div>
      <h1>Date Converter Test</h1>
    
    </div>
  );
}

export default Test;