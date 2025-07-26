"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const minecraft_server_util_1 = require("minecraft-server-util");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
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
app.get('/api/java-server-status', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, minecraft_server_util_1.statusLegacy)(JAVA_SERVER_IP, JAVA_SERVER_PORT, {
            timeout: 5000,
            enableSRV: false,
        });
        res.json({
            server: 'java-1.5.2',
            online: true,
            playerCount: response.players.online,
        });
    }
    catch (err) {
        res.json({
            server: 'java-1.5.2',
            online: false,
            playerCount: 0,
        });
    }
}));
app.get('/api/bedrock-server-status', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, minecraft_server_util_1.statusBedrock)(BEDROCK_SERVER_IP, BEDROCK_SERVER_PORT, {
            timeout: 5000,
        });
        res.json({
            server: 'bedrock',
            online: true,
            playerCount: response.players.online,
        });
    }
    catch (err) {
        res.json({
            server: 'bedrock',
            online: false,
            playerCount: 0,
        });
    }
}));
app.listen(PORT, '0.0.0.0', () => {
    console.log(`API server listening on port ${PORT}`);
});
