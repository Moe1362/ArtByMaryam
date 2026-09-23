// Studio contact details and social profiles, used across the site.
// Social links with an empty href are hidden until filled in.
const site = {
  name: 'Art By Maryam',
  email: 'hello@artbymaryam.com',
  location: 'San Jose, California',
  socials: [
    { label: 'Instagram', href: '' },
    { label: 'Pinterest', href: '' },
    { label: 'Behance', href: '' },
  ],
};

export const commissionMailto = `mailto:${site.email}?subject=${encodeURIComponent('Commission enquiry')}`;

export default site;
