import router from '../router';

export default function Home() {
    const to = router.useRouter();
    return (
        <>
            <h2>HomeView</h2>
            <button onClick={() => to.push('/about')}>Go to About</button>
        </>
    );
}
