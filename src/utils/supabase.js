import { createClient } from '@supabase/supabase-js'

console.log("import.meta.env", import.meta.env);

const supabaseUrl =  import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log("supabaseUrl 000", supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseKey)
console.log("supabase 111", supabase);

export default supabase;





// require('dotenv').config();


// const supabase = createClient(
//         import.meta.env.VITE_SUPABASE_URL,
//         import.meta.env.VITE_SUPABASE_ANON_KEY
// );
// console.log("import.meta.env.VITE_SUPABASE_URL");
// console.log(import.meta.env.VITE_SUPABASE_URL);

// export const supabase = createClient(
//         import.meta.env.VITE_SUPABASE_URL,
//         process.env.SUPABASE_ANON_KEY
// );
// Create a single supabase client for interacting with your database
        // export const supabase = createClient(
        //         'https://xyzcompany.supabase.co', 'public-anon-key')
