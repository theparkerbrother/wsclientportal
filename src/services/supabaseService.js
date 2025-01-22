import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://octlpwxudsigslaoqzic.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jdGxwd3h1ZHNpZ3NsYW9xemljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1MDIyNzYsImV4cCI6MjA1MzA3ODI3Nn0.2nyTVoXonnA0Noqk0cE_U0q4ITjVWXYYAjp6pil7doY';
const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchCompanyBySubdomain = async (subdomain) => {
  const { data, error } = await supabase
    .from('companies')
    .select('name')
    .eq('subdomain', subdomain)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
};
