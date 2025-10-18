import { adToBs, bsToAd } from 'miti-pariwartan';

function Test() {

      // AD to BS: 2025-10-17 → Ashoj 31, 2082
      const ad = adToBs('2025-10-17');
      console.log('Ad to Bs conversion:', ad.readable);

      const bs = bsToAd('2089-12-30');
      console.log('Bs to Ad conversion:', bs);

      // Set the results to state

      
      

  return (
    <div>
      <h1>Date Converter Test</h1>
      <p>AD to BS (2025-10-17): {ad.readable|| 'Loading...'}</p>
      <p>BS to AD (2082-06-31): {bs.readable || 'Loading...'}</p>
    </div>
  );
}

export default Test;