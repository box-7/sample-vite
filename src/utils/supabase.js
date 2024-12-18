// createClient関数をインポート この関数を使ってSupabaseクライアントを作成
import { createClient } from "@supabase/supabase-js";

// supabaseのHPのAPISettingsから、ProjectURLとAPI Keysを取得
// vite.config.jsの設定を変えて、process.env.VITE_SUPABASE_URL;で環境変数を取得
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

