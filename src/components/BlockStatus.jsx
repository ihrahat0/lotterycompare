import React, { useEffect, useState } from 'react';

// Displays the current Bitcoin block height and an estimated countdown to the next block
// Data source: blockchain.info simple endpoint (CORS enabled)
const BlockStatus = ({ compact = false }) => {
  const [height, setHeight] = useState(null);
  const [lastBlockTime, setLastBlockTime] = useState(null);
  const [error, setError] = useState(null);
  const [now, setNow] = useState(Date.now());

  const fetchLatest = async () => {
    try {
      const res = await fetch('https://blockchain.info/latestblock?cors=true');
      const json = await res.json();
      if (json && json.height && json.time) {
        setHeight(json.height);
        setLastBlockTime(json.time * 1000);
      }
    } catch (e) {
      setError('Unable to fetch latest block');
    }
  };

  useEffect(() => {
    fetchLatest();
    const poll = setInterval(fetchLatest, 60_000);
    const tick = setInterval(() => setNow(Date.now()), 1_000);
    return () => { clearInterval(poll); clearInterval(tick); };
  }, []);

  const avgBlockMs = 10 * 60 * 1000; // ~10 minutes
  const elapsed = lastBlockTime ? Math.max(0, now - lastBlockTime) : 0;
  const remaining = Math.max(0, avgBlockMs - elapsed);
  const mins = Math.floor(remaining / 60000);
  const secs = Math.floor((remaining % 60000) / 1000);
  const progress = Math.min(100, Math.floor((elapsed / avgBlockMs) * 100));

  return (
   null
  );
};

export default BlockStatus;


