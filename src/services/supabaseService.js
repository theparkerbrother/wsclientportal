
// src/services/supabaseService.js
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://octlpwxudsigslaoqzic.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Fetch company by subdomain
 * @param {string} subdomain - The subdomain to query for
 * @returns {Promise<{ name: string }>} The company name, or an error if not found
 */
export async function getCompanyBySubdomain(subdomain) {
  const { data, error } = await supabase
    .from('companies')
    .select('company_name')
    .eq('subdomain', subdomain)
    .single();

  if (error) {
    console.error('Error fetching company:', error.message);
    throw error;
  }

  return data;
}

