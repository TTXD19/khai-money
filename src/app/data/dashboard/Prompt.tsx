export async function updateUserPrompt(userId: string, prompt: string): Promise<boolean> {
    const url = `http://127.0.0.1:5001/khai-money/us-central1/promptsHandle?userId=${userId}&prompt=${prompt}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            console.error(`Error: ${response.status} ${response.statusText}`);
            return false;
        }
        console.log(`Success Update`);
        return true; // Assuming your endpoint returns a JSON object with a success property
    } catch (error) {
        console.error('Error fetching user data:', error);
        return false;
    }
}