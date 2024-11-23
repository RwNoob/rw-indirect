import router from './router';

export function App() {
    const route = router.useRoute();
    return (
        <div id='app'>
            <h1>Rw App Router</h1>
            <p>
                <strong>Current route path:</strong> {route.value.fullPath}
            </p>
            <nav>
                <router.Link to='/'>Go to Home</router.Link>
                <router.Link to='/about'>Go to About</router.Link>
            </nav>
            <main>
                <router.View />
            </main>
        </div>
    );
}
