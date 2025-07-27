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
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/java-server-status`);
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
      <p>This is the main <b>NOSTALGIA</b> server</p>
      <br />
      {loading ? (
        <p><span style={{ color: 'lightblue' }}>Loading server status...</span></p>
      ) : status?.online ? (
        <p>
          Status: <b><span style={{ color: 'yellowgreen' }}>Online</span></b>
          <br />
          Players online: <b><span style={{ color: 'yellowgreen' }}>{status.playerCount}</span></b>
        </p>
      ) : (
        <p>Status: <span style={{ color: 'darkorange' }}>Offline</span></p>
      )}
      <p>Region: <b>Germany</b></p>
      <p>Version: <b>1.5.2</b></p>
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
