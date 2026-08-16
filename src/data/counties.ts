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

export type County = {
  slug: string;
  name: string;
  courtCount: number;
  courtCountNote?: string;
  status: "sample" | "coming-soon" | "single-court";
  courts?: Court[];
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
    status: "coming-soon",
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
