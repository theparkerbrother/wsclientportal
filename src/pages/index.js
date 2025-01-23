import { getCompanyBySubdomain } from '../services/supabaseService';

export default function Home({ companyName, error }) {
  if (error) {
    return (
      <div>
        <h1>Error:</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to the {companyName} portal!</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;

  // Extract the subdomain from the host header
  const host = req.headers.host; // e.g., "ivorygrove.portal.wedding"
  const subdomain = host.split('.')[0]; // Get "ivorygrove"
  //const subdomain = "reflectionsmedia";

  try {
    const company = await getCompanyBySubdomain(subdomain);

    return {
      props: {
        companyName: company.company_name, // Pass the company name to the component
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message || 'Unknown error occurred',
      },
    };
  }
}
