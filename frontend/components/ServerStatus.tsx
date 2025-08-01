import React from 'react'
import './ServerStatus.css'

interface ServerStatusProps {
  loading: boolean
  status?: {
    online: boolean
    playerCount: number
  }
  showPlayers?: boolean
}

const ServerStatus: React.FC<ServerStatusProps> = ({ loading, status, showPlayers = true }) => {
  if (loading) {
    return (
      <p><span className="status-loading">Loading server status...</span></p>
    )
  }

  const isOnline = status?.online ?? false
  const playerCount = status?.playerCount ?? 0

  return (
    <p className="server-status">
      Status:{' '}
      <span className="status-group">
        <span className={`status-text ${isOnline ? 'online' : 'offline'}`}>
          {isOnline ? 'Online' : 'Offline'}
        </span>
        <img
          className="lamp-icon"
          src={isOnline ? '/lamp-on.png' : '/lamp-off.png'}
          alt={isOnline ? 'Online' : 'Offline'}
        />
      </span>

      {isOnline && showPlayers && (
        <>
          <br />
          Players online:{' '}
          <span className="status-group">
            <span className={`status-text ${playerCount > 0 ? 'online' : 'offline'}`}>
              {playerCount}
            </span>
            <img
              className="lamp-icon"
              src={playerCount > 0 ? '/lamp-on.png' : '/lamp-off.png'}
              alt={playerCount > 0 ? 'Players online' : 'No players online'}
            />
          </span>
        </>
      )}
    </p>
  )
}

export default ServerStatus
