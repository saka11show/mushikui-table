import './style.css'
import { renderGame } from './game';

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("#app not found");

renderGame(app);
