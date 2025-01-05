import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const handler = async (req, res) => {
    if(req.method === "POST"){
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({ error: "Email and password are required" });
        }

        try {
            const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
                email, password
            })

            if(signInError){
                return res.status(400).json({ error: signInError.message });  
            }

            return res.status(200).json({ user: signInData });
        } catch(error) {
            return res.status(500).json({ message: "An error occurred while trying to login" });
        }
    }else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

export default handler