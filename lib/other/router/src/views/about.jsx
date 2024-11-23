import { computed } from 'rw-indirect';
import router from '../router';

export default function About() {
    const to = router.useRouter();
    const route = router.useRoute();
    const search = computed({
        get() {
            return route.value.query.search ?? '';
        },
        set(search) {
            to.replace({ query: { search } });
        },
    });
    return (
        <>
            <h2>AboutView</h2>
            <label>
                Search: <input bind:value$trim={search} maxlength='20' />
            </label>
        </>
    );
}
