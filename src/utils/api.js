// utils/api.js
export const fetchCompany = async (subdomain) => {
    const response = await fetch(`/api/company/${subdomain}`);
    const data = await response.json();
    return data;
  };
  