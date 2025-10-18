import { adToBs, bsToAd } from 'miti-pariwartan';

function Test() {

      // AD to BS: 2025-10-17 → Ashoj 31, 2082
      const ad = adToBs('2025-10-17');
      console.log('Ad to Bs conversion:', ad.readable);

      // BS to AD: 2082-06-30 → 2025-10-16
      const bs = bsToAd('2082-06-31');
      console.log('Bs to Ad conversion:', bs.formatted);

  return (
    <div>
      <h1>Date Converter Test</h1>
      <p>AD to BS (2025-10-17): {ad.readable|| 'Loading...'}</p>
      <p>BS to AD (2082-06-31): {bs.readable || 'Loading...'}</p>
    </div>
  );
}

export default Test;