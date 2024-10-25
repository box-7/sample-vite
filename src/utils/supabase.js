
import { createClient } from "@supabase/supabase-js";

// supabaseのHPのAPISettingsから、ProjectURLとAPI Keysを取得
// vite.configにdefine: { 'process.env': process.env }が定義されていると、process.env.VITE_SUPABASE_URL;で環境変数を取得できる
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// 環境変数が設定されているかどうかを確認
if (supabaseUrl) {
        console.log('Supabase URL is set');
} else {
        console.log('Supabase URL is not set');
}

if (supabaseKey) {
        console.log('supabaseKey is set');
} else {
        console.log('supabaseKey is not set');
}

export default supabase;


// .envのディレクトリの階層が誤っていたためエラーになった
