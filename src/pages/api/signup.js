import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                return res.status(400).json({ error: error.message });
            }

            return res.status(200).json({ user });
        } catch (error) {
            return res.status(500).json({ error: 'An error occurred during sign up' });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
};

export default handler;
