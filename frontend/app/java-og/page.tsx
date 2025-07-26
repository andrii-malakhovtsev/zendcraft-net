'use client';

import React, { useState, useEffect } from 'react';

type ServerStatus = {
  online: boolean;
  playerCount: number;
};

export default function JavaPage() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchStatus() {
    try {
      const response = await fetch(`http://localhost:4000/api/java-server-status/`);
      const data = await response.json();
      setStatus(data);
    } catch {
      setStatus({ online: false, playerCount: 0 });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Java Edition: OG Survival</h2>
      <br />
      {loading ? (
        <p><span style={{ color: 'lightblue' }}>Loading server status...</span></p>
      ) : status?.online ? (
        <h3>
          Server is <span style={{ color: 'yellowgreen' }}>Online</span>
          <br />
          Players online: <span style={{ color: 'yellowgreen' }}>{status.playerCount}</span>
        </h3>
      ) : (
        <h3 style={{ color: 'orange' }}>Server is Offline</h3>
      )}
      <br />
      <h3>Version 1.5.2</h3>
      <br />
      <p>This is the main <b>NOSTALGIA</b> server</p>
      <p>Difficulty: <b>NORMAL</b></p>
      <br />
      <p>
        <u>Reason: </u>Was selected to be of the first and most nostalgic versions among most friends
      </p>
      <br />
      <p>
        Instructions to join are on{' '}
        <strong>
          <a href="https://discord.gg/McyvbNsrED" target="_blank" rel="noreferrer">
            Discord
          </a>
        </strong>
      </p>
    </main>

  );
}
