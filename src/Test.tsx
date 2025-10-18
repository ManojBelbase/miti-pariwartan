import { adToBs, bsToAd } from 'miti-pariwartan';
import { useEffect, useState } from 'react';

function Test() {
  const [adResult, setAdResult] = useState<string>('');
  const [bsResult, setBsResult] = useState<string>('');

  useEffect(() => {
    try {
      // AD to BS: 2025-10-17 → Ashoj 31, 2082
      const ad = adToBs('2025-10-17');
      setAdResult(ad.readable);
      console.log('Ad to Bs conversion:', ad.readable);

      // BS to AD: 2082-06-30 → 2025-10-16
      const bs = bsToAd('2082-06-30');
      setBsResult(bs.readable);
      console.log('Bs to Ad conversion:', bs.formatted);
    } catch (error) {
      console.error('Conversion error:', error);
    }
  }, []);

  return (
    <div>
      <h1>Date Converter Test</h1>
      <p>AD to BS (2025-10-17): {adResult || 'Loading...'}</p>
      <p>BS to AD (2082-06-30): {bsResult || 'Loading...'}</p>
    </div>
  );
}

export default Test;