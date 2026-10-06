// Canonical firm identity — the single source of truth for name, address and phone.
//
// Everything that displays or publishes these values imports them from here. That matters
// beyond tidiness: Google's local ranking depends on this information appearing identically
// on the site, on the Google Business Profile, and in every directory listing. One file
// means the site can never disagree with itself.
//
// If any of this changes, change it here and nowhere else — then update the Business Profile
// and the directories to match, character for character.

export const FIRM = {
  name: "Yakubu Law",
  attorney: "Prince Charles Yakubu",
  url: "https://yakubulaw.com",
  phone: "484-944-0834",
  phoneTel: "+1-484-944-0834",
  email: "Prince@yakubulaw.com",
  street: "29 E. Marshall St.",
  locality: "Norristown",
  region: "PA",
  postalCode: "19401",
  country: "US",
  // Secondary offices are stated but deliberately not addressed: they are by-appointment
  // space, not staffed locations, and listing them would invite walk-ins and create
  // directory entries that cannot be verified.
  satelliteNote: "Additional offices in Philadelphia and Delaware County.",
  appointmentNote: "Consultations by phone, 24/7. Meetings by appointment.",
} as const;

export const COUNTIES_SERVED = [
  "Bucks County, Pennsylvania",
  "Chester County, Pennsylvania",
  "Delaware County, Pennsylvania",
  "Montgomery County, Pennsylvania",
  "Philadelphia, Pennsylvania",
];

// One shared @id so that every page describing the firm is understood as describing the
// same entity, rather than as a separate business per page.
export const FIRM_ID = `${FIRM.url}/#firm`;

export const firmNode = {
  "@type": ["LegalService", "Attorney"],
  "@id": FIRM_ID,
  name: FIRM.name,
  url: FIRM.url,
  telephone: FIRM.phoneTel,
  email: FIRM.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: FIRM.street,
    addressLocality: FIRM.locality,
    addressRegion: FIRM.region,
    postalCode: FIRM.postalCode,
    addressCountry: FIRM.country,
  },
  areaServed: COUNTIES_SERVED.map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
  knowsLanguage: "en",
  founder: {
    "@type": "Person",
    name: FIRM.attorney,
    jobTitle: "Attorney",
  },
};
