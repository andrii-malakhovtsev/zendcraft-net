'use client';

import React, { useState, useEffect } from 'react';

import ServerStatus from '../../components/ServerStatus';

type ServerStatus = {
  online: boolean;
  playerCount: number;
};

export default function BedrockPage() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchStatus() {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/bedrock-server-status`);
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
      <h2>Bedrock Edition</h2>
      <br></br>
      <p>This is the main <b>SURVIVAL</b> server</p>
      <br></br>
      <ServerStatus loading={loading} status={status} showPlayers={true} />
      <p>Region: <b>US-east</b></p>
      <p>Achievements: <b>ON</b></p>
      <p>Show Coordinates: <b>ON</b></p> 
      <p>Difficulty: <b>EASY</b></p>
      <br />
      <p>
        <u>Reason:</u> The only version of Minecraft constantly updated to newest versions
        <br />
        and available on all platforms at the same time
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
