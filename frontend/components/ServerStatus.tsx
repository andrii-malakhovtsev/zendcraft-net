import React from 'react'
import './ServerStatus.css'

interface ServerStatusProps {
  loading: boolean
  status?: {
    online: boolean
    playerCount: number
    paused?: boolean
  }
  showPlayers?: boolean
}

const ServerStatus: React.FC<ServerStatusProps> = ({ loading, status, showPlayers = true }) => {
  if (loading) {
    return (
      <p className="server-status">
        Status:{' '}
        <span className="status-group">
          <span className="status-text loading">Loading...</span>
        </span>
      </p>
    )
  }

  const isPaused = status?.paused ?? false
  const isOnline = status?.online ?? false
  const playerCount = status?.playerCount ?? 0

  let statusText = 'Offline'
  let statusClass = 'offline'
  let lampIcon = '/lamp-off.png'
  let lampAlt = 'Offline'

  if (isPaused) {
    statusText = 'Paused'
    statusClass = 'offline'
    lampIcon = '/lamp-off.png'
    lampAlt = 'Paused'
  } else if (isOnline) {
    statusText = 'Online'
    statusClass = 'online'
    lampIcon = '/lamp-on.png'
    lampAlt = 'Online'
  }

  return (
    <p className="server-status">
      Status:{' '}
      <span className="status-group">
        <span className={`status-text ${statusClass}`}>{statusText}</span>
        <img
          className="lamp-icon"
          src={lampIcon}
          alt={lampAlt}
        />
      </span>

      {isOnline && !isPaused && showPlayers && (
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
