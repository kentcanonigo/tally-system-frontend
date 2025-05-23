// app/_layout.tsx
import {RelativePathString, Stack} from 'expo-router';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

export default function RootLayout() {
    const [isAuthResolved, setIsAuthResolved] = useState(true);
    const [userType, setUserType] = useState<null | 'admin' | 'user'>(null);

    const router = useRouter();

    useEffect(() => {
        // Fake a login check (you'd replace this with real auth logic)
        const checkAuth = async () => {
            console.log('Checking auth...');

            // For example, you could check secure storage here
            // const storedUserType = await SecureStore.getItemAsync('userType');

            const storedUserType = null; // simulate not logged in

            if (storedUserType === 'admin') {
                console.log('Logged in as admin');
                router.replace('/admin' as RelativePathString);
            } else if (storedUserType === 'user') {
                console.log('Logged in as user');
                router.replace('/user'as RelativePathString);
            } else {
                console.log('Not logged in, redirecting to /auth');
                router.replace('/auth');
            }

            setIsAuthResolved(true);
        };

        checkAuth();
    }, []);

    if (!isAuthResolved) {
        return null; // You can add a splash screen or loader here if you want
    }

    return (
        <Stack screenOptions={{ headerShown: false }} />
    );
}
