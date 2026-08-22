// County + Magisterial District Court (MDJ) data.
// Bucks County is fully built out for this first draft (sample county).
// Chester, Delaware, and Montgomery are stubbed with confirmed court counts
// only — full court-by-court data is queued once the Bucks page pattern is approved.
// Philadelphia has a single Municipal Court, so it does not use a court list.

export type Court = {
  slug: string;
  dcNumber: string;
  judge: string;
  address: string;
  cityStateZip: string;
  phone: string;
  fax?: string;
  townships?: string; // not provided in the Bucks source list — left undefined intentionally
};

export type Facility = {
  name: string;
  address: string;
  cityStateZip: string;
  phone?: string;
  note?: string;
  photo?: string; // hotlinked Wikimedia Commons image URL for the courthouse/jail photo band
};

export type DiversionProgram = {
  name: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type County = {
  slug: string;
  name: string;
  courtCount: number;
  courtCountNote?: string;
  status: "sample" | "coming-soon" | "single-court";
  courts?: Court[];
  courthouse?: Facility;
  jail?: Facility;
  diversionPrograms?: DiversionProgram[];
  faq?: FaqItem[];
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[.,]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const bucksCourts: Omit<Court, "slug">[] = [
  { dcNumber: "07-1-01", judge: "Michael W. Gallagher", address: "2404 Byberry Road", cityStateZip: "Bensalem, PA 19020", phone: "215-638-1040", fax: "267-885-1665" },
  { dcNumber: "07-1-02", judge: "David J. Chichilitti", address: "501 Bath Street", cityStateZip: "Bristol, PA 19007", phone: "215-785-3521", fax: "267-885-1666" },
  { dcNumber: "07-1-03", judge: "Kevin P. Wagner, Sr.", address: "3030 Bath Road", cityStateZip: "Bristol, PA 19007", phone: "215-788-5561", fax: "267-885-1667" },
  { dcNumber: "07-1-04", judge: "Terrence P. Hughes, Sr.", address: "7325 New Falls Road", cityStateZip: "Levittown, PA 19055", phone: "215-943-9414", fax: "267-885-1668" },
  { dcNumber: "07-1-07", judge: "Daniel Baranoski", address: "142 Centre Street", cityStateZip: "Penndel, PA 19047", phone: "215-757-6761", fax: "267-885-1669" },
  { dcNumber: "07-1-08", judge: "Charles D. Jonas", address: "2661 Trenton Road", cityStateZip: "Levittown, PA 19056-1491", phone: "215-946-5450", fax: "267-885-1670" },
  { dcNumber: "07-1-09", judge: "Christopher E. O'Neill", address: "567 Newtown Road", cityStateZip: "Warminster, PA 18974", phone: "215-672-5853", fax: "267-885-1671" },
  { dcNumber: "07-1-10", judge: "John T. Galloway", address: "9187 New Falls Road", cityStateZip: "Fallsington, PA 19054", phone: "215-736-0231", fax: "267-885-1672" },
  { dcNumber: "07-1-11", judge: "Corryn L. Kronnagel", address: "31 East Cleveland Avenue", cityStateZip: "Morrisville, PA 19067", phone: "215-736-1121", fax: "267-885-1673" },
  { dcNumber: "07-1-12", judge: "Joseph P. Falcone", address: "3101 Bristol Road, Ste 7", cityStateZip: "Bensalem, PA 19020", phone: "215-741-3501", fax: "267-885-1674" },
  { dcNumber: "07-2-01", judge: "Brian M. Marriott", address: "60 Township Road", cityStateZip: "Richboro, PA 18954", phone: "215-322-0144", fax: "267-885-1682" },
  { dcNumber: "07-2-02", judge: "Mark D. Douple", address: "1277 Almshouse Road", cityStateZip: "Warrington, PA 18976", phone: "215-343-7961", fax: "267-885-1675" },
  { dcNumber: "07-2-05", judge: "Lisa J. Gaier", address: "281 California Road", cityStateZip: "Quakertown, PA 18951", phone: "215-536-9650", fax: "267-885-1676" },
  { dcNumber: "07-2-07", judge: "Michael W. Petrucci", address: "28 North State Street", cityStateZip: "Newtown, PA 18940", phone: "215-968-1657", fax: "267-885-1677" },
  { dcNumber: "07-2-08", judge: "Regina Armitage", address: "962 Town Center", cityStateZip: "New Britain, PA 18901", phone: "215-230-7265", fax: "267-885-1678" },
  { dcNumber: "07-3-01", judge: "Timothy J. Barton", address: "4001 Durham Rd (Rt 413)", cityStateZip: "Doylestown, PA 18902", phone: "215-345-7516", fax: "267-885-1679" },
  { dcNumber: "07-3-02", judge: "Stacy Wertman", address: "1720 Kendarbren Drive, Suite 711", cityStateZip: "Jamison, PA 18929", phone: "215-343-0627", fax: "267-885-1680" },
  { dcNumber: "07-3-03", judge: "Gary Gambardella", address: "276 Tabor Road", cityStateZip: "Ottsville, PA 18942", phone: "610-847-5164", fax: "267-885-1681" },
];

// Montgomery County MDJ data sourced from the county's own official directory
// ("Court of Common Pleas - MDJ Addresses with Jurisdictions - 2026," published
// via montgomerycountypa.gov, fetched 2026-08-22). Two seats (38-1-07, 38-1-25)
// were vacant as of that date, each currently covered by an assigned Senior MDJ
// at that court's regular address/phone — noted rather than omitted, since the
// court itself is still operating.
const montgomeryCourts: Omit<Court, "slug">[] = [
  { dcNumber: "38-1-01", judge: "Marc A. Alfarano", address: "160 W. Germantown Pike, Ste D-5", cityStateZip: "Norristown, PA 19401", phone: "610-272-3029", fax: "610-272-5080" },
  { dcNumber: "38-1-02", judge: "R. Emmett Madden", address: "117 York Road, Suite 100 B", cityStateZip: "Jenkintown, PA 19046", phone: "215-635-1535", fax: "215-635-2256" },
  { dcNumber: "38-1-03", judge: "Christopher J. Cerski", address: "117 York Road, Suite 100 A", cityStateZip: "Jenkintown, PA 19046", phone: "215-885-4796", fax: "215-884-6530" },
  { dcNumber: "38-1-04", judge: "John D. Kessler", address: "1150 Old York Road", cityStateZip: "Abington, PA 19001", phone: "215-887-2362", fax: "215-887-2364" },
  { dcNumber: "38-1-05", judge: "Juanita A. Price", address: "117 York Road, Suite 100 C", cityStateZip: "Jenkintown, PA 19046", phone: "215-885-4120", fax: "215-885-2190" },
  { dcNumber: "38-1-06", judge: "John I. McMahon Jr.", address: "925 Montgomery Avenue, Suite 100", cityStateZip: "Narberth, PA 19072", phone: "610-664-5262", fax: "610-667-3120" },
  { dcNumber: "38-1-07", judge: "Vacant (assigned Senior MDJ)", address: "925 Montgomery Avenue, Suite 300", cityStateZip: "Narberth, PA 19072", phone: "610-896-8585", fax: "610-896-8601" },
  { dcNumber: "38-1-08", judge: "Katherine E. McGill", address: "1316 Bruce Road", cityStateZip: "Oreland, PA 19075", phone: "215-572-7845", fax: "215-572-7891" },
  { dcNumber: "38-1-09", judge: "Patrick O. Krouse", address: "168 Allendale Road", cityStateZip: "King of Prussia, PA 19406", phone: "610-265-3950", fax: "610-265-8932" },
  { dcNumber: "38-1-10", judge: "Douglas H. Lavenberg", address: "1301 S. Bethlehem Pike", cityStateZip: "Ambler, PA 19002", phone: "215-542-1262", fax: "215-646-3588" },
  { dcNumber: "38-1-11", judge: "Scott T. Palladino", address: "1 Security Plaza, Suite 101", cityStateZip: "Pottstown, PA 19464", phone: "610-326-9271", fax: "610-326-4179" },
  { dcNumber: "38-1-12", judge: "Edward C. Kropp Sr.", address: "1 Security Plaza, Suite 102", cityStateZip: "Pottstown, PA 19464", phone: "610-326-9274", fax: "610-326-8136" },
  { dcNumber: "38-1-13", judge: "Jodi L. Griffis", address: "625 West Ridge Pike, Building B, Suite 101", cityStateZip: "Conshohocken, PA 19428", phone: "610-828-0278", fax: "610-828-6722" },
  { dcNumber: "38-1-16", judge: "Hakim K. Jones", address: "601 DeKalb Street, Suite 200", cityStateZip: "Norristown, PA 19401", phone: "610-279-6226", fax: "610-279-2423" },
  { dcNumber: "38-1-18", judge: "Andrea Duffy", address: "271 Bethlehem Pike, Suite 105", cityStateZip: "Colmar, PA 18915", phone: "215-855-3946", fax: "215-855-1975" },
  { dcNumber: "38-1-19", judge: "Richard H. Welsh", address: "497 West Ridge Pike", cityStateZip: "Limerick, PA 19468", phone: "610-495-8440", fax: "610-495-8442" },
  { dcNumber: "38-1-20", judge: "Cathleen K. Rebar", address: "3860 Ridge Pike", cityStateZip: "Collegeville, PA 19426", phone: "610-409-2515", fax: "610-409-2517" },
  { dcNumber: "38-1-21", judge: "Suzan G. Leonard", address: "653 Skippack Pike, Ste. 101", cityStateZip: "Blue Bell, PA 19422", phone: "215-646-8201", fax: "215-646-4156" },
  { dcNumber: "38-1-22", judge: "Todd Stephens", address: "955 Horsham Road, Suite 100", cityStateZip: "Horsham, PA 19044", phone: "215-675-2040", fax: "215-675-2344" },
  { dcNumber: "38-1-23", judge: "Dara A. Nasatir", address: "4002 Center Avenue", cityStateZip: "Lafayette Hill, PA 19444", phone: "610-828-5226", fax: "610-828-0446" },
  { dcNumber: "38-1-24", judge: "Adam T. Katzman", address: "840 Harleysville Pike, Suite 2", cityStateZip: "Harleysville, PA 19438", phone: "610-584-4732", fax: "610-584-4751" },
  { dcNumber: "38-1-25", judge: "Vacant (assigned Senior MDJ)", address: "128 West Fourth Street", cityStateZip: "Bridgeport, PA 19405", phone: "610-277-3377", fax: "610-277-3379" },
  { dcNumber: "38-1-28", judge: "Edward Levine", address: "430-440 Pennbrook Parkway", cityStateZip: "Lansdale, PA 19446", phone: "215-393-7534", fax: "215-393-7536" },
  { dcNumber: "38-1-15", judge: "Denise Ashe", address: "601 DeKalb Street, Suite 300", cityStateZip: "Norristown, PA 19401", phone: "610-279-3332", fax: "610-279-3010" },
  { dcNumber: "38-2-02", judge: "Maureen C. Coggins", address: "80 H Gravel Pike, Suite 100", cityStateZip: "Red Hill, PA 18076", phone: "215-679-5811", fax: "215-679-7561" },
  { dcNumber: "38-2-03", judge: "Maurice H. Saylor", address: "1050 E. Philadelphia Avenue, Suite 20", cityStateZip: "Gilbertsville, PA 19525", phone: "610-326-1145", fax: "610-326-6513" },
  { dcNumber: "38-2-04", judge: "Karen Eisner Zucker", address: "925 Montgomery Avenue, Suite 200", cityStateZip: "Narberth, PA 19072", phone: "610-668-1201", fax: "610-668-1204" },
  { dcNumber: "38-2-08", judge: "Thomas P. Murt", address: "2727 Philmont Ave., Suite 100", cityStateZip: "Huntingdon Valley, PA 19006", phone: "215-659-6840", fax: "215-659-6903" },
  { dcNumber: "38-2-09", judge: "Todd N. Barnes", address: "601 DeKalb Street, Suite 100", cityStateZip: "Norristown, PA 19401", phone: "610-945-9156", fax: "610-994-2882" },
];

export const counties: County[] = [
  {
    slug: "bucks",
    name: "Bucks County",
    courtCount: 18,
    status: "sample",
    courts: bucksCourts.map((c) => ({ ...c, slug: `dc-${c.dcNumber}` })),
  },
  {
    slug: "chester",
    name: "Chester County",
    courtCount: 17,
    courtCountNote: "16 confirmed from source records; final court pending confirmation.",
    status: "coming-soon",
  },
  {
    slug: "delaware",
    name: "Delaware County",
    courtCount: 26,
    status: "coming-soon",
  },
  {
    slug: "montgomery",
    name: "Montgomery County",
    courtCount: 29,
    status: "sample",
    courts: montgomeryCourts.map((c) => ({ ...c, slug: `dc-${c.dcNumber}` })),
    courthouse: {
      name: "Montgomery County Court of Common Pleas",
      address: "2 East Airy Street",
      cityStateZip: "Norristown, PA 19404",
      phone: "610-278-3224",
      note: "Preliminary hearings are heard at the Magisterial District Court covering the municipality where the case arose. Formal arraignment, pretrial proceedings, and trial move to the Court of Common Pleas in Norristown.",
    },
    jail: {
      name: "Montgomery County Correctional Facility",
      address: "60 Eagleville Road",
      cityStateZip: "Eagleville, PA 19403",
      phone: "610-635-7100",
    },
    diversionPrograms: [
      {
        name: "ARD (Accelerated Rehabilitative Disposition)",
        description:
          "A pretrial diversion program for eligible first-time offenders, most commonly used in DUI cases. Montgomery County requires a CRN (Court Reporting Network) evaluation as part of the DUI-ARD application — an added step some neighboring counties don't require, so it's worth planning for early.",
      },
      {
        name: "Montgomery County Drug Court",
        description:
          "A treatment-focused diversion track for qualifying drug offenses, supervising participants through substance-abuse treatment as an alternative to standard prosecution.",
      },
    ],
    faq: [
      {
        question: "What happens after an arrest in Montgomery County?",
        answer:
          "Most cases start with a preliminary arraignment, then a preliminary hearing at the Magisterial District Court covering the municipality where the arrest happened. From there, cases that proceed move to the Montgomery County Court of Common Pleas in Norristown for formal arraignment and, if needed, trial.",
      },
      {
        question: "What is ARD, and do I need a CRN evaluation?",
        answer:
          "ARD is a pretrial diversion program for eligible first-time offenders. In Montgomery County, a DUI-ARD application requires a CRN (Court Reporting Network) evaluation. Eligibility depends on the specific charge and record, so it's worth discussing your situation directly before assuming you qualify.",
      },
      {
        question: "Which court will hear my case — the Magisterial District Court or Common Pleas?",
        answer:
          "Preliminary matters (arraignment, preliminary hearing, most summary and traffic offenses) are handled at the Magisterial District Court for the municipality where the case arose. Formal proceedings for cases that continue past the preliminary hearing move to the Court of Common Pleas in Norristown.",
      },
      {
        question: "What happens if I miss a court date in Montgomery County?",
        answer:
          "Missing a court date can result in a bench warrant. If that's already happened, it's better addressed directly and promptly than avoided — call to discuss the specific circumstances rather than waiting.",
      },
      {
        question: "Where is the Montgomery County jail, and what happens if bail isn't set or can't be paid?",
        answer:
          "The Montgomery County Correctional Facility is located at 60 Eagleville Road, Eagleville, PA. Bail decisions and amounts vary case by case and are set at arraignment — this is one of the first things worth discussing with an attorney directly after an arrest.",
      },
    ],
  },
  {
    slug: "philadelphia",
    name: "Philadelphia",
    courtCount: 1,
    courtCountNote: "Philadelphia Municipal Court",
    status: "single-court",
  },
];

export function getCounty(slug: string) {
  return counties.find((c) => c.slug === slug);
}
