'use client';

import React, { useState, useEffect } from 'react';

import Flag from '../../components/Flag';
import ServerStatus from '../../components/ServerStatus';
import '../ReasonButtons.css';

type ServerStatus = {
  online: boolean;
  playerCount: number;
};

export default function BedrockPage() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [showReason, setShowReason] = useState(false);

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
      <p>
        This is the main{' '}
        <a
          href="#"
          className="reason-link"
          onClick={(e) => {
            e.preventDefault();
            setShowReason((prev) => !prev);
          }}
          aria-expanded={showReason}
          aria-controls="server-reason"
        >
          <b>SURVIVAL</b>
        </a>{' '}
        server
      </p>
      <br />
      <ServerStatus
        loading={false}
        status={{ online: false, paused: true, playerCount: 0 }}
      />
      <p>Region: <b>US East <Flag.US /></b></p>
      <p>Achievements: <b>ON</b></p>
      <p>Show Coordinates: <b>ON</b></p> 
      <p>Difficulty: <b>EASY</b></p>
      <br />
      {showReason && (
        <p id="server-reason" className="server-reason">
            <u>Reason</u>: The only version of Minecraft constantly updated to newest versions
          <br />
          and available on all platforms at the same time
        </p>
      )}

      <p className="pause-reason">
        <br />
        Reason for pause: Switched to Realm and moved server computer resources<br></br>
         for <b>CREATIVE</b> server. All the logic is being left for future revival.
      </p>

      <br />
    </main>
  );
}
