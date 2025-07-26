import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { statusLegacy, statusBedrock } from 'minecraft-server-util';

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://www.zendcraft.net',
    'https://zendcraft.net'
  ],
}));

const PORT = Number(process.env.PORT) || 3000;

const JAVA_SERVER_IP = process.env.JAVA_SERVER_HOST || 'localhost';
const JAVA_SERVER_PORT = parseInt(process.env.JAVA_SERVER_PORT || '25565');

const BEDROCK_SERVER_IP = process.env.BEDROCK_SERVER_HOST || 'localhost';
const BEDROCK_SERVER_PORT = parseInt(process.env.BEDROCK_SERVER_PORT || '19132');

app.get('/api/java-server-status', async (_req, res) => {
  try {
    const response = await statusLegacy(JAVA_SERVER_IP, JAVA_SERVER_PORT, {
      timeout: 5000,
      enableSRV: false,
    });

    res.json({
      server: 'java-1.5.2',
      online: true,
      playerCount: response.players.online,
    });
  } catch (err) {
    res.json({
      server: 'java-1.5.2',
      online: false,
      playerCount: 0,
    });
  }
});

app.get('/api/bedrock-server-status', async (_req, res) => {
  try {
    const response = await statusBedrock(BEDROCK_SERVER_IP, BEDROCK_SERVER_PORT, {
      timeout: 5000,
    });

    res.json({
      server: 'bedrock',
      online: true,
      playerCount: response.players.online,
    });
  } catch (err) {
    res.json({
      server: 'bedrock',
      online: false,
      playerCount: 0,
    });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API server listening on port ${PORT}`);
});
