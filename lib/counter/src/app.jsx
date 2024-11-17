import { ref } from 'rw-indirect';
import viteLogo from '/vite.svg';
import './app.css';
export function App() {
    const countRef = ref(0);
    return (
        <div id='app'>
            <div>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} class='logo' alt='Vite logo' />
                </a>
                <a href='https://www.npmjs.com/package/rw-indirect' target='_blank'>
                    <p>NPM Rw</p>
                </a>
                <a href='https://github.com/RwNoob/rw-indirect' target='_blank'>
                    <p>GitHub Rw</p>
                </a>
            </div>
            <h1>Vite + Rw</h1>
            <div class='card'>
                <button onClick={() => countRef.value++}>count is {countRef}</button>
                <p>
                    <code>src/app.jsx</code>
                </p>
            </div>
            <p class='read-the-docs'>Click on the Vite and Rw logos to learn more</p>
        </div>
    );
}
