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
  policeDepartments?: string[]; // municipal police departments confirmed (High/Medium confidence) to report to this court, per police-departments-by-mdj-court.xlsx
  pspNote?: string; // note on municipalities within this court's territory covered by PA State Police rather than a municipal department
  criminalProceedings?: string; // day criminal proceedings are heard (Chester County publishes this per court)
  note?: string; // court-specific operational note (e.g. temporary coverage arrangements)
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
  courtProse?: string[]; // county-specific paragraphs rendered on every MDJ court page in this county
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[.,]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const bucksCourts: Omit<Court, "slug">[] = [
  { dcNumber: "07-1-01", judge: "Michael W. Gallagher", address: "2404 Byberry Road", cityStateZip: "Bensalem, PA 19020", phone: "215-638-1040", fax: "267-885-1665",
    townships: "Bensalem Township (Lower East 1-4 and 6-8, Lower Middle 1-4, Lower West 1-2, and Upper West voting districts)",
    policeDepartments: ["Bensalem Township Police Department"] },
  { dcNumber: "07-1-02", judge: "David J. Chichilitti", address: "501 Bath Street", cityStateZip: "Bristol, PA 19007", phone: "215-785-3521", fax: "267-885-1666",
    townships: "Bristol Borough, Bristol Township (Wards 1, 4)",
    policeDepartments: ["Bristol Borough Police Department", "Bristol Township Police Department"] },
  { dcNumber: "07-1-03", judge: "Kevin P. Wagner, Sr.", address: "3030 Bath Road", cityStateZip: "Bristol, PA 19007", phone: "215-788-5561", fax: "267-885-1667",
    townships: "Bristol Township (Wards 2, 3, 5, 6, 10)",
    policeDepartments: ["Bristol Township Police Department"] },
  { dcNumber: "07-1-04", judge: "Terrence P. Hughes, Sr.", address: "7325 New Falls Road", cityStateZip: "Levittown, PA 19055", phone: "215-943-9414", fax: "267-885-1668",
    townships: "Bristol Township (Wards 7, 8, 9, 11), Tullytown Borough",
    policeDepartments: ["Bristol Township Police Department", "Tullytown Borough Police Department"] },
  { dcNumber: "07-1-07", judge: "Daniel Baranoski", address: "142 Centre Street", cityStateZip: "Penndel, PA 19047", phone: "215-757-6761", fax: "267-885-1669",
    townships: "Hulmeville Borough, Langhorne Borough, Langhorne Manor Borough, Lower Southampton Township, Middletown Township (Lower 1, 2, 13 and Upper 2, 4 voting districts), Penndel Borough",
    policeDepartments: ["Lower Southampton Township Police Department", "Middletown Township Police Department", "Penndel Borough Police Department"],
    pspNote: "Hulmeville, Langhorne, and Langhorne Manor Boroughs are patrolled by the Pennsylvania State Police (Troop M — Trevose Station) rather than a municipal department." },
  { dcNumber: "07-1-08", judge: "Charles D. Jonas", address: "2661 Trenton Road", cityStateZip: "Levittown, PA 19056-1491", phone: "215-946-5450", fax: "267-885-1670",
    townships: "Middletown Township (Lower 3-12 and Upper 1, 3, 5-8 voting districts)",
    policeDepartments: ["Middletown Township Police Department"] },
  { dcNumber: "07-1-09", judge: "Christopher E. O'Neill", address: "567 Newtown Road", cityStateZip: "Warminster, PA 18974", phone: "215-672-5853", fax: "267-885-1671",
    townships: "Ivyland Borough, Warminster Township",
    policeDepartments: ["Warminster Township Police Department"],
    pspNote: "Ivyland Borough is patrolled by the Pennsylvania State Police (Troop M — Trevose Station) rather than a municipal department." },
  { dcNumber: "07-1-10", judge: "John T. Galloway", address: "9187 New Falls Road", cityStateZip: "Fallsington, PA 19054", phone: "215-736-0231", fax: "267-885-1672",
    townships: "Falls Township",
    policeDepartments: ["Falls Township Police Department"] },
  { dcNumber: "07-1-11", judge: "Corryn L. Kronnagel", address: "31 East Cleveland Avenue", cityStateZip: "Morrisville, PA 19067", phone: "215-736-1121", fax: "267-885-1673",
    townships: "Lower Makefield Township, Morrisville Borough, Yardley Borough",
    policeDepartments: ["Lower Makefield Township Police Department", "Morrisville Borough Police Department"],
    pspNote: "Yardley Borough is patrolled by the Pennsylvania State Police (Troop M — Trevose Station) rather than a municipal department." },
  { dcNumber: "07-1-12", judge: "Joseph P. Falcone", address: "3101 Bristol Road, Ste 7", cityStateZip: "Bensalem, PA 19020", phone: "215-741-3501", fax: "267-885-1674",
    townships: "Bensalem Township (Lower East 5, Lower Middle 5, and Upper 1-12 voting districts)",
    policeDepartments: ["Bensalem Township Police Department"] },
  { dcNumber: "07-2-01", judge: "Brian M. Marriott", address: "60 Township Road", cityStateZip: "Richboro, PA 18954", phone: "215-322-0144", fax: "267-885-1682",
    townships: "Northampton Township, Upper Southampton Township",
    policeDepartments: ["Northampton Township Police Department", "Upper Southampton Township Police Department"] },
  { dcNumber: "07-2-02", judge: "Mark D. Douple", address: "1277 Almshouse Road", cityStateZip: "Warrington, PA 18976", phone: "215-343-7961", fax: "267-885-1675",
    townships: "Doylestown Borough, Doylestown Township",
    policeDepartments: ["Central Bucks Regional Police Department", "Doylestown Township Police Department"] },
  { dcNumber: "07-2-05", judge: "Lisa J. Gaier", address: "281 California Road", cityStateZip: "Quakertown, PA 18951", phone: "215-536-9650", fax: "267-885-1676",
    townships: "Milford Township, Quakertown Borough, Richland Township, Richlandtown Borough, Trumbauersville Borough",
    policeDepartments: ["Milford Township Police Department", "Quakertown Borough Police Department", "Richland Township Police Department"],
    pspNote: "Richlandtown and Trumbauersville Boroughs are patrolled by the Pennsylvania State Police (Troop M — Dublin Station) rather than a municipal department." },
  { dcNumber: "07-2-07", judge: "Michael W. Petrucci", address: "28 North State Street", cityStateZip: "Newtown, PA 18940", phone: "215-968-1657", fax: "267-885-1677",
    townships: "Newtown Borough, Newtown Township, Upper Makefield Township, Wrightstown Township",
    policeDepartments: ["Newtown Township Police Department"],
    pspNote: "Upper Makefield and Wrightstown Townships are patrolled by the Pennsylvania State Police (Troop M — Dublin Station) rather than a municipal department." },
  { dcNumber: "07-2-08", judge: "Regina Armitage", address: "962 Town Center", cityStateZip: "New Britain, PA 18901", phone: "215-230-7265", fax: "267-885-1678",
    townships: "Chalfont Borough, Hilltown Township, New Britain Borough, New Britain Township, Perkasie Borough, Sellersville Borough, Silverdale Borough, Telford Borough (Bucks County portion)",
    policeDepartments: ["Central Bucks Regional Police Department", "Hilltown Township Police Department", "New Britain Township Police Department", "Perkasie Borough Police Department"],
    pspNote: "Silverdale Borough is patrolled by the Pennsylvania State Police (Troop M — Dublin Station) rather than a municipal department. Sellersville Borough is served by the Perkasie Borough Police Department under contract." },
  { dcNumber: "07-3-01", judge: "Timothy J. Barton", address: "4001 Durham Rd (Rt 413)", cityStateZip: "Doylestown, PA 18902", phone: "215-345-7516", fax: "267-885-1679",
    townships: "Buckingham Township, New Hope Borough, Solebury Township",
    policeDepartments: ["Buckingham Township Police Department", "Solebury Township Police Department"],
    pspNote: "New Hope Borough is patrolled by the Pennsylvania State Police (Troop M — Dublin Station) rather than a municipal department." },
  { dcNumber: "07-3-02", judge: "Stacy Wertman", address: "1720 Kendarbren Drive, Suite 711", cityStateZip: "Jamison, PA 18929", phone: "215-343-0627", fax: "267-885-1680",
    townships: "Warrington Township, Warwick Township",
    policeDepartments: ["Warrington Township Police Department", "Warwick Township Police Department"] },
  { dcNumber: "07-3-03", judge: "Gary Gambardella", address: "276 Tabor Road", cityStateZip: "Ottsville, PA 18942", phone: "610-847-5164", fax: "267-885-1681",
    townships: "Bedminster Township, Bridgeton Township, Dublin Borough, Durham Township, East Rockhill Township, Haycock Township, Nockamixon Township, Plumstead Township, Riegelsville Borough, Springfield Township, Tinicum Township, West Rockhill Township",
    policeDepartments: ["Bedminster Township Police Department", "Dublin Borough Police Department", "Pennridge Regional Police Department", "Plumstead Township Police Department", "Springfield Township Police Department (Bucks)", "Tinicum Township Police Department (Bucks)"],
    pspNote: "Bridgeton and Durham Townships, Haycock and Nockamixon Townships, and Riegelsville Borough are patrolled by the Pennsylvania State Police (Troop M — Dublin Station) rather than a municipal department." },
];

// Montgomery County MDJ data sourced from the county's own official directory
// ("Court of Common Pleas - MDJ Addresses with Jurisdictions - 2026," published
// via montgomerycountypa.gov, fetched 2026-08-22). Two seats (38-1-07, 38-1-25)
// were vacant as of that date, each currently covered by an assigned Senior MDJ
// at that court's regular address/phone — noted rather than omitted, since the
// court itself is still operating.
const montgomeryCourts: Omit<Court, "slug">[] = [
  { dcNumber: "38-1-01", judge: "Marc A. Alfarano", address: "160 W. Germantown Pike, Ste D-5", cityStateZip: "Norristown, PA 19401", phone: "610-272-3029", fax: "610-272-5080",
    townships: "East Norriton Township, West Norriton Township",
    policeDepartments: ["East Norriton Township Police Department", "West Norriton Township Police Department"] },
  { dcNumber: "38-1-02", judge: "R. Emmett Madden", address: "117 York Road, Suite 100 B", cityStateZip: "Jenkintown, PA 19046", phone: "215-635-1535", fax: "215-635-2256",
    townships: "Jenkintown Borough, Cheltenham Township (voting districts 3-2, 3-3, 5-1 to 5-4, 6-1 to 6-3, 7-1 to 7-3)",
    policeDepartments: ["Cheltenham Township Police Department", "Jenkintown Borough Police Department"] },
  { dcNumber: "38-1-03", judge: "Christopher J. Cerski", address: "117 York Road, Suite 100 A", cityStateZip: "Jenkintown, PA 19046", phone: "215-885-4796", fax: "215-884-6530",
    townships: "Cheltenham Township (voting districts 1-1 to 1-4, 2-1 to 2-4, 3-1, 3-4, 4-1 to 4-4)",
    policeDepartments: ["Cheltenham Township Police Department"] },
  { dcNumber: "38-1-04", judge: "John D. Kessler", address: "1150 Old York Road", cityStateZip: "Abington, PA 19001", phone: "215-887-2362", fax: "215-887-2364",
    townships: "Rockledge Borough, Abington Township (voting districts 1-1 to 1-3, 2-1, 2-2, 5-1, 5-2, 8-1, 8-2, 10-1 to 10-3, 11-2, 14-1, 14-2, 15-1, 15-2)",
    policeDepartments: ["Abington Township Police Department", "Rockledge Borough Police Department"] },
  { dcNumber: "38-1-05", judge: "Juanita A. Price", address: "117 York Road, Suite 100 C", cityStateZip: "Jenkintown, PA 19046", phone: "215-885-4120", fax: "215-885-2190",
    townships: "Abington Township (voting districts 2-3, 3-1 to 3-3, 4-1, 4-2, 6-1, 6-2, 7-1 to 7-3, 9-1, 9-2, 11-1, 11-3, 12-1 to 12-3, 13-1 to 13-3)",
    policeDepartments: ["Abington Township Police Department"] },
  { dcNumber: "38-1-06", judge: "John I. McMahon Jr.", address: "925 Montgomery Avenue, Suite 100", cityStateZip: "Narberth, PA 19072", phone: "610-664-5262", fax: "610-667-3120",
    townships: "West Conshohocken Borough, Lower Merion Township (voting districts 1-1 to 1-3, 2-1 to 2-3, 6-1 to 6-3, 11-3)",
    policeDepartments: ["Lower Merion Township Police Department", "West Conshohocken Borough Police Department"] },
  { dcNumber: "38-1-07", judge: "Vacant (assigned Senior MDJ)", address: "925 Montgomery Avenue, Suite 300", cityStateZip: "Narberth, PA 19072", phone: "610-896-8585", fax: "610-896-8601",
    townships: "Narberth Borough, Lower Merion Township (voting districts 4-1 to 4-3, 5-1 to 5-3, 8-2, 8-4, 10-1 to 10-3, 11-1, 11-2)",
    policeDepartments: ["Lower Merion Township Police Department", "Narberth Borough Police Department"] },
  { dcNumber: "38-1-08", judge: "Katherine E. McGill", address: "1316 Bruce Road", cityStateZip: "Oreland, PA 19075", phone: "215-572-7845", fax: "215-572-7891",
    townships: "Springfield Township",
    policeDepartments: ["Springfield Township Police Department"] },
  { dcNumber: "38-1-09", judge: "Patrick O. Krouse", address: "168 Allendale Road", cityStateZip: "King of Prussia, PA 19406", phone: "610-265-3950", fax: "610-265-8932",
    townships: "Upper Merion Township (Gulph 1, Gulph 2, King 1, King 2, Roberts, Swedeland and Swedesburg voting districts)",
    policeDepartments: ["Upper Merion Township Police Department"] },
  { dcNumber: "38-1-10", judge: "Douglas H. Lavenberg", address: "1301 S. Bethlehem Pike", cityStateZip: "Ambler, PA 19002", phone: "215-542-1262", fax: "215-646-3588",
    townships: "Ambler Borough, Upper Dublin Township",
    policeDepartments: ["Ambler Borough Police Department", "Upper Dublin Township Police Department"] },
  { dcNumber: "38-1-11", judge: "Scott T. Palladino", address: "1 Security Plaza, Suite 101", cityStateZip: "Pottstown, PA 19464", phone: "610-326-9271", fax: "610-326-4179",
    townships: "West Pottsgrove Township, Pottstown Borough (voting districts 2-1, 2-2, 3, 4, 5)",
    policeDepartments: ["Pottstown Borough Police Department", "West Pottsgrove Township Police Department"] },
  { dcNumber: "38-1-12", judge: "Edward C. Kropp Sr.", address: "1 Security Plaza, Suite 102", cityStateZip: "Pottstown, PA 19464", phone: "610-326-9274", fax: "610-326-8136",
    townships: "Lower Pottsgrove Township, Pottstown Borough (voting districts 1-1, 1-2, 6, 7-1, 7-2)",
    policeDepartments: ["Lower Pottsgrove Township Police Department", "Pottstown Borough Police Department"] },
  { dcNumber: "38-1-13", judge: "Jodi L. Griffis", address: "625 West Ridge Pike, Building B, Suite 101", cityStateZip: "Conshohocken, PA 19428", phone: "610-828-0278", fax: "610-828-6722",
    townships: "Plymouth Township",
    policeDepartments: ["Plymouth Township Police Department"] },
  { dcNumber: "38-1-16", judge: "Hakim K. Jones", address: "601 DeKalb Street, Suite 200", cityStateZip: "Norristown, PA 19401", phone: "610-279-6226", fax: "610-279-2423",
    townships: "Norristown Borough (voting districts 2-3, 4-1 to 4-3)",
    policeDepartments: ["Norristown Borough Police Department"] },
  { dcNumber: "38-1-18", judge: "Andrea Duffy", address: "271 Bethlehem Pike, Suite 105", cityStateZip: "Colmar, PA 18915", phone: "215-855-3946", fax: "215-855-1975",
    townships: "Montgomery Township, Hatfield Township (voting districts 1-1, 1-2, 5-1, 5-2)",
    policeDepartments: ["Hatfield Township Police Department", "Montgomery Township Police Department"] },
  { dcNumber: "38-1-19", judge: "Richard H. Welsh", address: "497 West Ridge Pike", cityStateZip: "Limerick, PA 19468", phone: "610-495-8440", fax: "610-495-8442",
    townships: "Royersford Borough, Limerick Township, Upper Providence Township (Mingo 1, Mingo 2 and Trappe voting districts)",
    policeDepartments: ["Limerick Township Police Department", "Royersford Borough Police Department", "Upper Providence Township Police Department"] },
  { dcNumber: "38-1-20", judge: "Cathleen K. Rebar", address: "3860 Ridge Pike", cityStateZip: "Collegeville, PA 19426", phone: "610-409-2515", fax: "610-409-2517",
    townships: "Collegeville Borough, Trappe Borough, Lower Providence Township, Upper Providence Township (Oaks and Mont Clare voting districts)",
    policeDepartments: ["Collegeville Borough Police Department", "Lower Providence Township Police Department", "Upper Providence Township Police Department"],
    pspNote: "Trappe Borough is patrolled by the Pennsylvania State Police (Troop K — Skippack Station) rather than a municipal department." },
  { dcNumber: "38-1-21", judge: "Suzan G. Leonard", address: "653 Skippack Pike, Ste. 101", cityStateZip: "Blue Bell, PA 19422", phone: "215-646-8201", fax: "215-646-4156",
    townships: "North Wales Borough, Lower Gwynedd Township, Upper Gwynedd Township, Whitpain Township",
    policeDepartments: ["Lower Gwynedd Township Police Department", "North Wales Borough Police Department", "Upper Gwynedd Township Police Department", "Whitpain Township Police Department"] },
  { dcNumber: "38-1-22", judge: "Todd Stephens", address: "955 Horsham Road, Suite 100", cityStateZip: "Horsham, PA 19044", phone: "215-675-2040", fax: "215-675-2344",
    townships: "Hatboro Borough, Horsham Township",
    policeDepartments: ["Hatboro Borough Police Department", "Horsham Township Police Department"] },
  { dcNumber: "38-1-23", judge: "Dara A. Nasatir", address: "4002 Center Avenue", cityStateZip: "Lafayette Hill, PA 19444", phone: "610-828-5226", fax: "610-828-0446",
    townships: "Whitemarsh Township, Conshohocken Borough",
    policeDepartments: ["Conshohocken Borough Police Department", "Whitemarsh Township Police Department"] },
  { dcNumber: "38-1-24", judge: "Adam T. Katzman", address: "840 Harleysville Pike, Suite 2", cityStateZip: "Harleysville, PA 19438", phone: "610-584-4732", fax: "610-584-4751",
    townships: "Schwenksville Borough, Souderton Borough, Telford Borough (Montgomery County portion), Franconia Township, Lower Salford Township, Perkiomen Township, Skippack Township, Worcester Township",
    policeDepartments: ["Franconia Township Police Department", "Lower Salford Township Police Department", "Schwenksville Borough Police Department", "Souderton Borough Police Department", "Telford Borough Police Department"],
    pspNote: "Perkiomen, Skippack, and Worcester Townships are patrolled by the Pennsylvania State Police (Troop K — Skippack Station) rather than a municipal department." },
  { dcNumber: "38-1-25", judge: "Vacant (assigned Senior MDJ)", address: "128 West Fourth Street", cityStateZip: "Bridgeport, PA 19405", phone: "610-277-3377", fax: "610-277-3379",
    townships: "Bridgeport Borough, Upper Merion Township (Belmont 1-5 and Candlebrook 1, 2 voting districts)",
    policeDepartments: ["Bridgeport Borough Police Department", "Upper Merion Township Police Department"] },
  { dcNumber: "38-1-28", judge: "Edward Levine", address: "430-440 Pennbrook Parkway", cityStateZip: "Lansdale, PA 19446", phone: "215-393-7534", fax: "215-393-7536",
    townships: "Hatfield Borough, Lansdale Borough, Towamencin Township, Hatfield Township (voting districts 2-1, 2-2, 3-1, 3-2, 4-1, 4-2)",
    policeDepartments: ["Hatfield Township Police Department", "Lansdale Borough Police Department", "Towamencin Township Police Department"] },
  { dcNumber: "38-1-15", judge: "Denise Ashe", address: "601 DeKalb Street, Suite 300", cityStateZip: "Norristown, PA 19401", phone: "610-279-3332", fax: "610-279-3010",
    townships: "Norristown Borough (voting districts 1-1 to 1-3, 2-1)",
    policeDepartments: ["Norristown Borough Police Department"] },
  { dcNumber: "38-2-02", judge: "Maureen C. Coggins", address: "80 H Gravel Pike, Suite 100", cityStateZip: "Red Hill, PA 18076", phone: "215-679-5811", fax: "215-679-7561",
    townships: "East Greenville Borough, Green Lane Borough, Pennsburg Borough, Red Hill Borough, Marlborough Township, Salford Township, Upper Hanover Township, Upper Salford Township",
    policeDepartments: ["East Greenville Borough Police Department", "Marlborough Township Police Department", "Upper Perkiomen Police Department"],
    pspNote: "Green Lane and Red Hill Boroughs, and Salford, Upper Hanover, and Upper Salford Townships, are patrolled by the Pennsylvania State Police (Troop K — Skippack Station) rather than a municipal department." },
  { dcNumber: "38-2-03", judge: "Maurice H. Saylor", address: "1050 E. Philadelphia Avenue, Suite 20", cityStateZip: "Gilbertsville, PA 19525", phone: "610-326-1145", fax: "610-326-6513",
    townships: "Douglass Township, Lower Frederick Township, New Hanover Township, Upper Frederick Township, Upper Pottsgrove Township",
    policeDepartments: ["Douglass Township Police Department", "Lower Frederick Township Police Department", "New Hanover Township Police Department", "Upper Pottsgrove Township Police Department"],
    pspNote: "Upper Frederick Township is patrolled by the Pennsylvania State Police (Troop K — Skippack Station) rather than a municipal department." },
  { dcNumber: "38-2-04", judge: "Karen Eisner Zucker", address: "925 Montgomery Avenue, Suite 200", cityStateZip: "Narberth, PA 19072", phone: "610-668-1201", fax: "610-668-1204",
    townships: "Lower Merion Township (voting districts 3-1 to 3-3, 7-1 to 7-3, 8-1, 8-3, 9-1 to 9-3, 12-1 to 12-3, 13-1 to 13-3, 14-1 to 14-3)",
    policeDepartments: ["Lower Merion Township Police Department"] },
  { dcNumber: "38-2-08", judge: "Thomas P. Murt", address: "2727 Philmont Ave., Suite 100", cityStateZip: "Huntingdon Valley, PA 19006", phone: "215-659-6840", fax: "215-659-6903",
    townships: "Bryn Athyn Borough, Lower Moreland Township, Upper Moreland Township",
    policeDepartments: ["Bryn Athyn Borough Police Department", "Lower Moreland Township Police Department", "Upper Moreland Township Police Department"] },
  { dcNumber: "38-2-09", judge: "Todd N. Barnes", address: "601 DeKalb Street, Suite 100", cityStateZip: "Norristown, PA 19401", phone: "610-945-9156", fax: "610-994-2882",
    townships: "Norristown Borough (voting districts 2-2, 3-1 to 3-3)",
    policeDepartments: ["Norristown Borough Police Department"] },
];

// Chester County MDJ data sourced from Chester County's own official district court
// directory (chesco.org), provided by the client as screenshots of the county listing.
// Chester publishes the weekday each court hears criminal proceedings and the exact
// municipalities (including ward and voting-district splits) each court covers — both
// captured below. Court 15-1-02 is currently vacant; the office still operates at its
// regular address and phone.
const chesterCourts: Omit<Court, "slug">[] = [
  { dcNumber: "15-1-01", judge: "Marc Lieberman", address: "201 West Market Street, Suite 1307", cityStateZip: "West Chester, PA 19380", phone: "610-431-4814", fax: "610-455-1169",
    townships: "Borough of West Chester (Wards 3, 6, 7), East Bradford Township, West Bradford Township",
    criminalProceedings: "Wednesday",
    policeDepartments: ["West Chester Borough Police Department"],
    pspNote: "West Bradford Township is patrolled by the Pennsylvania State Police (Troop J) rather than a municipal department." },
  { dcNumber: "15-1-02", judge: "Vacant", address: "1572 Paoli Pike", cityStateZip: "West Chester, PA 19380", phone: "610-455-1100", fax: "610-455-1105",
    townships: "Malvern Borough, East Goshen Township, Easttown Township, Willistown Township, Tredyffrin Township (Precincts E-1, E-2, E-5, M-1, M-5, M-6, W-4), Westtown Township (Voting District 2)",
    criminalProceedings: "Monday",
    policeDepartments: ["Easttown Township Police Department", "Malvern Borough Police Department", "Tredyffrin Township Police Department", "Westtown-East Goshen Regional Police Department", "Willistown Township Police Department"] },
  { dcNumber: "15-1-03", judge: "Gregory Hines", address: "One City Hall Place, Suite 200", cityStateZip: "Coatesville, PA 19320-3446", phone: "610-455-1155", fax: "610-455-1139",
    townships: "City of Coatesville, Borough of South Coatesville",
    criminalProceedings: "Wednesday",
    policeDepartments: ["Coatesville City Police Department", "South Coatesville Borough Police Department"] },
  { dcNumber: "15-1-04", judge: "Marian T. Vito", address: "21 West Market Street, Suite 100", cityStateZip: "West Chester, PA 19382", phone: "610-344-6622", fax: "610-455-1186",
    townships: "Borough of West Chester (Wards 1, 2, 4, 5)",
    criminalProceedings: "Tuesday",
    policeDepartments: ["West Chester Borough Police Department"] },
  { dcNumber: "15-2-01", judge: "James C. Kovaleski", address: "347 Bridge Street", cityStateZip: "Phoenixville, PA 19460", phone: "610-455-1125", fax: "610-455-1109",
    townships: "Borough of Phoenixville, Charlestown Township, Schuylkill Township",
    criminalProceedings: "Tuesday",
    policeDepartments: ["Phoenixville Borough Police Department", "Schuylkill Township Police Department"],
    pspNote: "Charlestown Township is patrolled by the Pennsylvania State Police (Troop J) rather than a municipal department." },
  { dcNumber: "15-2-03", judge: "Anthony DiFrancesca", address: "Government Services Center, 601 Westtown Road, Suite 110", cityStateZip: "West Chester, PA 19382", phone: "610-436-5757", fax: "610-455-1187",
    townships: "Thornbury Township, West Goshen Township, Westtown Township (Voting Districts 1, 3, 4, 5)",
    criminalProceedings: "Friday",
    policeDepartments: ["West Goshen Township Police Department", "Westtown-East Goshen Regional Police Department"] },
  { dcNumber: "15-2-07", judge: "N. Paige Simmons", address: "75 East Uwchlan Avenue, Suite 110", cityStateZip: "Exton, PA 19341", phone: "610-455-1140", fax: "610-455-1136",
    townships: "East Caln Township, West Pikeland Township, Upper Uwchlan Township, Uwchlan Township",
    criminalProceedings: "Thursday",
    policeDepartments: ["Downingtown Borough Police Department", "Upper Uwchlan Township Police Department", "Uwchlan Township Police Department", "West Pikeland Township Police Department"] },
  { dcNumber: "15-3-01", judge: "John Hipple", address: "1101 Ridge Road, Suite B", cityStateZip: "Pottstown, PA 19465", phone: "610-455-1120", fax: "610-455-1108",
    townships: "Borough of Spring City, East Coventry Township, East Nantmeal Township, East Pikeland Township, East Vincent Township, North Coventry Township, South Coventry Township, Warwick Township, West Vincent Township",
    criminalProceedings: "Thursday",
    policeDepartments: ["East Coventry Township Police Department", "East Pikeland Township Police Department", "East Vincent Township Police Department", "North Coventry Township Police Department", "Spring City Borough Police Department", "West Vincent Township Police Department"],
    pspNote: "East Nantmeal Township, South Coventry Township, and Warwick Township are patrolled by the Pennsylvania State Police (Troop J) rather than a municipal department." },
  { dcNumber: "15-3-04", judge: "Albert Iacocca", address: "916 West Cypress Street", cityStateZip: "Kennett Square, PA 19348", phone: "610-455-1170", fax: "610-455-1166",
    townships: "Borough of Kennett Square, Birmingham Township, East Marlborough Township, Kennett Township, Newlin Township, Pennsbury Township, Pocopson Township",
    criminalProceedings: "Wednesday",
    policeDepartments: ["Birmingham Township Police Department", "East Marlborough Township Police Department", "Kennett Square Borough Police Department", "Kennett Township Police Department"],
    pspNote: "Newlin Township, Pennsbury Township, and Pocopson Township are patrolled by the Pennsylvania State Police (Troop J) rather than a municipal department." },
  { dcNumber: "15-3-05", judge: "Scott A. Massey", address: "305 South Third Street", cityStateZip: "Oxford, PA 19363", phone: "610-455-1160", fax: "610-455-1165",
    townships: "Borough of Oxford, East Nottingham Township, Elk Township, Lower Oxford Township, New London Township, Oxford Township, Penn Township, Upper Oxford Township, West Nottingham Township",
    criminalProceedings: "Tuesday",
    policeDepartments: ["Oxford Borough Police Department", "West Nottingham Township Police Department"],
    pspNote: "East Nottingham Township, Elk Township, Lower Oxford Township, New London Township, Penn Township, and Upper Oxford Township are patrolled by the Pennsylvania State Police (Troop J) rather than a municipal department." },
  { dcNumber: "15-3-06", judge: "J. Timothy Arndt III", address: "4824 Horseshoe Pike", cityStateZip: "Honey Brook, PA 19344", phone: "610-455-1110", fax: "610-455-1106",
    townships: "Borough of Elverson, Borough of Honey Brook, Honey Brook Township, Sadsbury Township, Wallace Township, West Brandywine Township, West Caln Township, West Nantmeal Township",
    criminalProceedings: "Monday",
    policeDepartments: ["Honey Brook Borough Police Department", "Sadsbury Township Police Department", "West Brandywine Township Police Department", "West Caln Township Police Department"],
    pspNote: "Elverson Borough, Honey Brook Township, and West Nantmeal Township are patrolled by the Pennsylvania State Police (Troop J) rather than a municipal department." },
  { dcNumber: "15-3-07", judge: "Joe Heffern", address: "315 First Avenue, Building 3", cityStateZip: "Parkesburg, PA 19365", phone: "610-455-1115", fax: "610-455-1107",
    townships: "Borough of Atglen, Borough of Modena, Borough of Parkesburg, East Fallowfield Township, Highland Township, Londonderry Township, Valley Township, West Fallowfield Township, West Sadsbury Township",
    criminalProceedings: "Monday",
    policeDepartments: ["East Fallowfield Township Police Department", "Parkesburg Borough Police Department", "South Coatesville Borough Police Department", "Valley Township Police Department", "West Fallowfield Township Police Department", "West Sadsbury Township Police Department"],
    pspNote: "Highland Township and Londonderry Township are patrolled by the Pennsylvania State Police (Troop J) rather than a municipal department." },
  { dcNumber: "15-4-01", judge: "Lauren Holt", address: "950 West Valley Road, Suite 3100", cityStateZip: "Wayne, PA 19087", phone: "610-455-1130", fax: "610-455-1135",
    townships: "East Whiteland Township (Wards 3, 4, 5, 6), Tredyffrin Township (Precincts E-3, E-4, W-1, W-2, W-3, W-5, M-2, M-3, M-4, M-7)",
    criminalProceedings: "Thursday",
    policeDepartments: ["East Whiteland Township Police Department", "Tredyffrin Township Police Department"] },
  { dcNumber: "15-4-02", judge: "Ann Feldman", address: "231 Boot Road", cityStateZip: "Downingtown, PA 19335", phone: "610-455-1145", fax: "610-455-1137",
    townships: "Borough of Downingtown, Caln Township, East Brandywine Township",
    criminalProceedings: "Wednesday",
    policeDepartments: ["Caln Township Police Department", "Downingtown Borough Police Department", "East Brandywine Township Police Department"] },
  { dcNumber: "15-4-03", judge: "Erin Bruno", address: "Whiteland Business Park, 748 Springdale Drive, Suite 110", cityStateZip: "Exton, PA 19341", phone: "610-455-1150", fax: "610-455-1168",
    townships: "East Whiteland Township (Wards 1, 2), West Whiteland Township",
    criminalProceedings: "Friday",
    policeDepartments: ["East Whiteland Township Police Department", "West Whiteland Township Police Department"] },
  { dcNumber: "15-4-04", judge: "Matthew Seavey", address: "914 West Cypress Street", cityStateZip: "Kennett Square, PA 19348", phone: "610-455-1175", fax: "610-455-1167",
    townships: "Borough of Avondale, Borough of West Grove, Franklin Township, London Britain Township, London Grove Township, New Garden Township, West Marlborough Township",
    criminalProceedings: "Friday",
    policeDepartments: ["Southern Chester County Regional Police Department"],
    pspNote: "Franklin Township, London Britain Township, London Grove Township, and West Marlborough Township are patrolled by the Pennsylvania State Police (Troop J) rather than a municipal department." },
];

// Delaware County MDJ data sourced from the county's own official directory
// ("2025 Delaware County Magisterial District Judges, Magisterial Districts, Office
// Locations and Municipalities," effective 10/8/2025), provided by the client.
// Several municipalities are split across courts by ward and precinct — Upper Darby
// Township alone is divided across six of these courts — so the municipality detail
// below is recorded exactly as the county publishes it.
const delawareCourts: Omit<Court, "slug">[] = [
  { dcNumber: "32-1-20", judge: "Wilden H. Davis", address: "529 Penn Street", cityStateZip: "Chester, PA 19013-6033", phone: "610-876-2151", fax: "610-874-7864",
    townships: "City of Chester (Wards 1, 2, Ward 6 Precinct 2, and Ward 7 Precincts 1, 3, 4)",
    policeDepartments: ["City of Chester Police Department"] },
  { dcNumber: "32-1-21", judge: "Dawn L. Vann", address: "529 Penn Street", cityStateZip: "Chester, PA 19013-6033", phone: "610-874-7180", fax: "610-874-7864",
    townships: "City of Chester (Wards 3, 4, 5, Ward 6 Precinct 1, Ward 7 Precinct 2, Wards 8, 9)",
    policeDepartments: ["City of Chester Police Department"] },
  { dcNumber: "32-1-22", judge: "Shepard Garner", address: "529 Penn Street", cityStateZip: "Chester, PA 19013-6033", phone: "610-874-1790", fax: "610-874-7864",
    townships: "City of Chester (Wards 10, 11), Marcus Hook Borough, Trainer Borough",
    policeDepartments: ["City of Chester Police Department", "Marcus Hook Borough Police Department", "Trainer Borough Police Department"] },
  { dcNumber: "32-1-23", judge: "Lee Grimes", address: "100 Clifton Avenue", cityStateZip: "Collingdale, PA 19023-3828", phone: "610-534-3443", fax: "610-534-5978",
    townships: "Collingdale Borough (Wards 1, 2, 3, 7), Darby Borough (Wards 1, 2, and Ward 3 Precinct 2)",
    policeDepartments: ["Collingdale Police Department", "Darby Borough Police Department"] },
  { dcNumber: "32-1-27", judge: "David H. Lang", address: "796 Parkway Boulevard", cityStateZip: "Broomall, PA 19008", phone: "610-338-2250", fax: "610-338-2253",
    townships: "Marple Township, Newtown Township",
    policeDepartments: ["Marple Township Police Department", "Newtown Township Police Department"] },
  { dcNumber: "32-1-28", judge: "Elizabeth Gallard", address: "349 West Baltimore Avenue", cityStateZip: "Media, PA 19063-2609", phone: "610-566-0872", fax: "610-566-2732",
    townships: "Media Borough, Swarthmore Borough, Nether Providence Township",
    policeDepartments: ["Media Borough Police Department", "Nether Providence Township Police Department", "Swarthmore Borough Police Department"] },
  { dcNumber: "32-1-30", judge: "George B. Dawson", address: "Ridley Township Municipal Building, 100 MacDade Boulevard", cityStateZip: "Folsom, PA 19033-2594", phone: "610-532-0320", fax: "610-532-0953",
    townships: "Eddystone Borough, Rutledge Borough, Ridley Township (Wards 1, 2, 3, 5, 6, 7, 8, 9)",
    policeDepartments: ["Eddystone Borough Police Department", "Ridley Township Police Department", "Swarthmore Borough Police Department"] },
  { dcNumber: "32-1-32", judge: "Michael Culp", address: "56 Powell Road", cityStateZip: "Springfield, PA 19064-2446", phone: "610-543-2366", fax: "610-543-1920",
    townships: "Springfield Township (Ward 1 Precincts 1-2, Ward 2 Precincts 1-3, and Wards 3, 4, 5, 7), Morton Borough, Ridley Township (Ward 4)",
    policeDepartments: ["Morton Borough Police Department", "Ridley Township Police Department", "Springfield Township Police Department"] },
  { dcNumber: "32-1-33", judge: "Harry J. Karapalides", address: "1500 Garrett Road, Suites 150 & 200", cityStateZip: "Upper Darby, PA 19082-4505", phone: "610-626-6900", fax: "610-623-0463",
    townships: "Millbourne Borough, Upper Darby Township (Ward 5 Precincts 1, 7; Ward 6 Precincts 1, 2, 3, 4, 5, 9, 10, 12; Ward 7 Precincts 3, 5, 11)",
    policeDepartments: ["Millbourne Borough Police Department", "Upper Darby Township Police Department"] },
  { dcNumber: "32-1-34", judge: "Benjamin Johns", address: "1500 Garrett Road, Suites 150 & 200", cityStateZip: "Upper Darby, PA 19082-4505", phone: "610-626-6900", fax: "610-623-0463",
    townships: "Upper Darby Township (Ward 3 Precincts 2, 4, 6, 7, 8, 9, 10; Ward 4 Precincts 1, 2, 3, 4, 8, 9, 10; Ward 5 Precinct 3; Ward 7 Precincts 2, 4, 8, 10)",
    policeDepartments: ["Upper Darby Township Police Department"] },
  { dcNumber: "32-1-36", judge: "David R. Griffin", address: "526 West Ridge Road", cityStateZip: "Linwood, PA 19061-4219", phone: "610-859-9748", fax: "610-859-9751",
    townships: "Upper Chichester Township (Wards 1, 3, 4, 5), Lower Chichester Township",
    policeDepartments: ["Lower Chichester Township Police Department", "Upper Chichester Township Police Department"] },
  { dcNumber: "32-2-37", judge: "Tammi L. Forbes", address: "150 South MacDade Boulevard, Suite E", cityStateZip: "Darby, PA 19023-2202", phone: "610-534-3504", fax: "610-534-0714",
    townships: "Colwyn Borough, Darby Borough (Ward 3 Precinct 1), Sharon Hill Borough",
    policeDepartments: ["Colwyn Borough Police Department", "Darby Borough Police Department", "Sharon Hill Police Department"] },
  { dcNumber: "32-2-38", judge: "Diane Holefelder", address: "2901 Dutton Mill Road, Suite 120", cityStateZip: "Aston, PA 19014-1032", phone: "610-558-3520", fax: "610-558-3528",
    townships: "Aston Township, Chester Township, Upper Chichester Township (Ward 2)",
    policeDepartments: ["Aston Township Police Department", "Chester Township Police Department", "Upper Chichester Township Police Department"] },
  { dcNumber: "32-2-39", judge: "Georgia L. Stone", address: "2 Cambridge Road, Suite 300", cityStateZip: "Brookhaven, PA 19015-1708", phone: "610-874-8178", fax: "610-874-7893",
    townships: "Brookhaven Borough, Parkside Borough, Rose Valley Borough, Upland Borough",
    policeDepartments: ["Brookhaven Borough Police Department", "Parkside Borough Police Department", "Upland Borough Police Department"],
    pspNote: "Rose Valley Borough is patrolled by the Pennsylvania State Police (Troop K — Media Station) rather than a municipal department." },
  { dcNumber: "32-2-40", judge: "Steven A. Sandone", address: "11 Bartram Avenue", cityStateZip: "Glenolden, PA 19036-1802", phone: "610-583-6646", fax: "610-583-1197",
    townships: "Aldan Borough, Folcroft Borough, Darby Township",
    policeDepartments: ["Aldan Borough Police Department", "Darby Township Police Department", "Folcroft Borough Police Department"] },
  { dcNumber: "32-2-42", judge: "Michael A. Burns", address: "11 Bartram Avenue", cityStateZip: "Glenolden, PA 19036-1802", phone: "610-583-6647", fax: "610-583-1197",
    townships: "Collingdale Borough (Wards 4, 5, 6), Glenolden Borough, Norwood Borough",
    policeDepartments: ["Collingdale Police Department", "Glenolden Borough Police Department", "Norwood Borough Police Department"] },
  { dcNumber: "32-2-43", judge: "Sloan Walker", address: "4655 West Chester Pike", cityStateZip: "Newtown Square, PA 19073", phone: "610-356-2997", fax: "610-356-0692",
    townships: "Radnor Township",
    policeDepartments: ["Radnor Township Police Department"] },
  { dcNumber: "32-2-44", judge: "Mary Hopper", address: "1028 Lincoln Avenue", cityStateZip: "Prospect Park, PA 19076-1414", phone: "610-534-5627", fax: "610-534-5610",
    townships: "Prospect Park Borough, Ridley Park Borough, Tinicum Township",
    policeDepartments: ["Prospect Park Borough Police Department", "Ridley Park Borough Police Department", "Tinicum Township Police Department"] },
  { dcNumber: "32-2-46", judge: "Andrew Goldberg", address: "939 North Providence Road", cityStateZip: "Media, PA 19063-1403", phone: "610-566-3495", fax: "610-566-7016",
    townships: "Upper Providence Township",
    policeDepartments: ["Upper Providence Township Police Department"] },
  { dcNumber: "32-2-47", judge: "W. Keith Williams", address: "60 West Marshall Road", cityStateZip: "Lansdowne, PA 19050", phone: "610-259-8848", fax: "610-259-8920",
    townships: "Lansdowne Borough, Yeadon Borough",
    policeDepartments: ["Lansdowne Borough Police Department", "Yeadon Borough Police Department"] },
  { dcNumber: "32-2-48", judge: "Walter A. Strohl", address: "27 South Pennell Road", cityStateZip: "Lima, PA 19037-0093", phone: "610-565-4110", fax: "610-565-1640",
    townships: "Edgmont Township, Middletown Township, Chester Heights Borough",
    policeDepartments: [],
    pspNote: "Edgmont Township, Middletown Township, and Chester Heights Borough are patrolled by the Pennsylvania State Police (Troop K — Media Station) rather than a municipal department." },
  { dcNumber: "32-2-49", judge: "Wendy B. Roberts", address: "485 Baltimore Pike", cityStateZip: "Glen Mills, PA 19342-1161", phone: "610-558-3605", fax: "610-558-3618",
    townships: "Bethel Township, Chadds Ford Township, Concord Township, Thornbury Township",
    policeDepartments: ["Bethel Township Police Department"],
    pspNote: "Chadds Ford Township, Concord Township, and Thornbury Township are patrolled by the Pennsylvania State Police (Troop K — Media Station) rather than a municipal department." },
  { dcNumber: "32-2-51", judge: "Christopher R. Mattox", address: "1500 Garrett Road, Suites 150 & 200", cityStateZip: "Upper Darby, PA 19082-4505", phone: "610-626-6900", fax: "610-623-0463",
    townships: "East Lansdowne Borough, Upper Darby Township (Ward 5 Precincts 2, 4, 5, 6, 8; Ward 6 Precincts 6, 7, 8, 11; Ward 7 Precincts 1, 6, 7, 9)",
    policeDepartments: ["East Lansdowne Police Department", "Upper Darby Township Police Department"] },
  { dcNumber: "32-2-52", judge: "Kelly A. Micozzie-Aguirre", address: "409 Ashland Avenue, Suite 1", cityStateZip: "Secane, PA 19018-2705", phone: "610-622-8102", fax: "610-622-8105",
    townships: "Clifton Heights Borough, Upper Darby Township (Ward 1 Precincts 4, 7; Ward 2; Ward 5 Precinct 9)",
    policeDepartments: ["Clifton Heights Borough Police Department", "Upper Darby Township Police Department"] },
  { dcNumber: "32-2-53", judge: "Elysia J. Mancini Duerr", address: "525 West Chester Pike, Suites 103 and 105", cityStateZip: "Havertown, PA 19083-4539", phone: "610-449-5189", fax: "610-789-9167",
    townships: "Haverford Township, Upper Darby Township (Ward 4 Precincts 5, 6, 7, 11; Ward 5 Precinct 10)",
    policeDepartments: ["Haverford Township Police Department", "Upper Darby Township Police Department"] },
  { dcNumber: "32-2-54", judge: "James Merkins", address: "56 Powell Road", cityStateZip: "Springfield, PA 19064-2446", phone: "610-690-7668", fax: "610-543-1920",
    townships: "Springfield Township (Ward 1 Precinct 3, Ward 6), Upper Darby Township (Ward 1 Precincts 1, 2, 3, 5, 6, 8, 9; Ward 3 Precincts 1, 3, 5, 11)",
    note: "Per the county's current directory, this district is temporarily consolidated with Court 32-2-43, and hearings are held at Court 32-2-52. Confirm where your hearing is scheduled before travelling.",
    policeDepartments: ["Springfield Township Police Department", "Upper Darby Township Police Department"] },
];

export const counties: County[] = [
  {
    slug: "bucks",
    name: "Bucks County",
    courtCount: 18,
    status: "sample",
    courtProse: [
      "Magisterial district courts handle the earliest stages of nearly every criminal case in Bucks County. After an arrest, a preliminary arraignment sets bail and gives you your next court date. Bail can be posted at the Clerk of Courts in the Justice Center during business hours, at the district court of record, or — between 5 p.m. and 10 p.m. on weekdays — at the Bucks County Correctional Facility on South Easton Road.",
      "The preliminary hearing comes next, and it is not a trial. Nobody is found guilty or not guilty here. The Commonwealth only has to show there is enough evidence for the case to move forward. Cases held for court go to the Bucks County Justice Center, 100 North Main Street in Doylestown, where formal arraignment is typically scheduled about four weeks later. Summary offenses and most traffic citations are decided at this court and go no further.",
      "One Bucks County detail worth knowing early: the District Attorney's ARD application is filed at the magisterial district court — this one — and the form itself requires it back on or before the day of your preliminary hearing. Admission also requires waiving that hearing. The decision therefore has to be made before your first appearance is over, which is why it is worth a conversation beforehand.",
    ],
    courts: bucksCourts.map((c) => ({ ...c, slug: `dc-${c.dcNumber}` })),
    courthouse: {
      name: "Bucks County Court of Common Pleas",
      address: "Bucks County Justice Center, 100 North Main Street",
      cityStateZip: "Doylestown, PA 18901",
      phone: "215-348-6000",
      note: "Preliminary hearings are heard at the Magisterial District Court covering the municipality where the case arose. Cases held for court move to the Justice Center in Doylestown, where formal arraignment is typically scheduled about four weeks after the preliminary hearing. Note that criminal matters are at 100 North Main Street — not the Administration Building on East Court Street.",
    },
    jail: {
      name: "Bucks County Correctional Facility",
      address: "1730 South Easton Road",
      cityStateZip: "Doylestown, PA 18901",
      phone: "215-345-3700",
    },
    diversionPrograms: [
      {
        name: "ARD (Accelerated Rehabilitative Disposition)",
        description:
          "A pretrial diversion program for first-time, non-violent offenders, placed at the District Attorney's discretion and resulting in dismissal rather than a conviction. Bucks County runs it on an unusually early clock: the application is filed at the magisterial district court rather than the Justice Center, the form must be returned on or before the day of the preliminary hearing, and admission requires waiving that hearing. Cases completed after April 1, 2013 are expunged automatically. Note that a DUI-ARD still counts as a prior for sentencing on a later DUI within ten years.",
      },
      {
        name: "Recovery Court",
        description:
          "Bucks County's adult drug court, for non-violent defendants with substance use disorders — reached either as a probation or parole violator or post-plea before sentencing. It runs a minimum of fifteen months across five phases, and graduation requires completed treatment, stable housing, employment or a diploma, and six months clean and arrest-free. It was named a National Mentor Court for 2025 through 2027.",
      },
      {
        name: "Wellness Court",
        description:
          "Bucks County's mental health court, established in 2021, for defendants with a serious and persistent mental illness diagnosed within the past two years and a documented treatment history. It typically runs fifteen to twenty-four months across five phases.",
      },
      {
        name: "Veterans Treatment Court",
        description:
          "For Bucks County resident veterans with an honorable or general discharge and a diagnosis of TBI, PTSD, military sexual trauma, or a related psychological or substance use condition. A VA Justice Outreach social worker completes the assessment and treatment plan within twenty days of referral. Requires a DD-214 and proof of diagnosis.",
      },
      {
        name: "District Court Diversion Program",
        description:
          "A treatment-focused diversion for county residents with no prior record facing misdemeanor drug charges. Participants complete sixty to ninety days of treatment with regular check-ins, and the charges are dismissed on successful completion. It runs at the magisterial district court level rather than at the Justice Center.",
      },
      {
        name: "Youthful Offenders Program",
        description:
          "For defendants aged 18 to 24 facing a first, non-violent felony. Options include a thirty-day wilderness program or a tailored pre-trial probation arrangement, aimed at keeping a felony conviction off a young person's record.",
      },
    ],
    faq: [
      {
        question: "What happens after an arrest in Bucks County?",
        answer:
          "Most cases begin with a preliminary arraignment before a magisterial district judge, who sets bail and gives you your next court date, followed by a preliminary hearing at the district court covering the municipality where the arrest happened. Cases held for court move to the Bucks County Justice Center in Doylestown, where formal arraignment is typically about four weeks later.",
      },
      {
        question: "When do I have to apply for ARD in Bucks County?",
        answer:
          "Sooner than most people expect, and in a different place. The application is filed at your magisterial district court rather than at the Justice Center, and the District Attorney's form requires it back on or before the day of your preliminary hearing. Admission also requires waiving that hearing. Because the decision lands before your first appearance is over, it is worth talking through beforehand rather than at the courthouse door.",
      },
      {
        question: "Which court will hear my case — the Magisterial District Court or Common Pleas?",
        answer:
          "Preliminary matters — arraignment, the preliminary hearing, and most summary and traffic offenses — are handled at one of Bucks County's eighteen Magisterial District Courts, spread from Bensalem and Levittown to Quakertown and Ottsville. Cases that continue past the preliminary hearing move to the Court of Common Pleas at the Justice Center in Doylestown.",
      },
      {
        question: "Where and when can bail be posted in Bucks County?",
        answer:
          "During business hours, at the Clerk of Courts in the Justice Center (8:00 a.m. to 4:30 p.m. on weekdays) or at the district court of record. On weekday evenings between 5:00 and 10:00 p.m., bail can be posted at the Bucks County Correctional Facility on South Easton Road. After 10:00 p.m. and on weekends and holidays, call 215-345-3700. Payment is cash or certified check only, and real estate collateral cannot be handled at the jail.",
      },
      {
        question: "Where is the county jail?",
        answer:
          "The Bucks County Correctional Facility is at 1730 South Easton Road in Doylestown. It is county-operated and serves as the central receiving location for everyone committed in Bucks County, whether awaiting trial or serving a sentence. The county also runs separate community corrections and women's facilities.",
      },
    ],
  },
  {
    slug: "chester",
    name: "Chester County",
    courtCount: 16,
    status: "sample",
    courtProse: [
      "Magisterial district courts handle the earliest stages of nearly every criminal case in Chester County. After an arrest, a preliminary arraignment sets bail and gives you your next court date — Chester County's district judges rotate through an on-call night schedule, so this can happen outside normal business hours.",
      "The preliminary hearing comes next, and it is not a trial. Nobody is found guilty or not guilty here. The Commonwealth only has to show there is enough evidence for the case to move forward. Cases held for court go to the Chester County Court of Common Pleas at the Justice Center, 201 West Market Street in West Chester. Summary offenses and most traffic citations are decided at this court and go no further.",
      "One Chester County detail worth knowing early: the District Attorney's published ARD instructions direct DUI defendants to apply for the program at the preliminary hearing, and admission requires waiving that hearing and all pretrial motions. That makes a first appearance at this court more consequential than many people expect.",
    ],
    courts: chesterCourts.map((c) => ({ ...c, slug: `dc-${c.dcNumber}` })),
    courthouse: {
      name: "Chester County Court of Common Pleas",
      address: "Chester County Justice Center, 201 West Market Street",
      cityStateZip: "West Chester, PA 19380",
      phone: "610-344-6000",
      note: "Preliminary hearings are heard at the Magisterial District Court covering the municipality where the case arose. Cases held for court then move to the Justice Center in West Chester for formal arraignment, pretrial proceedings, and trial.",
    },
    jail: {
      name: "Chester County Prison",
      address: "501 South Wawaset Road",
      cityStateZip: "West Chester, PA 19382",
      phone: "610-344-5040",
    },
    diversionPrograms: [
      {
        name: "ARD (Accelerated Rehabilitative Disposition)",
        description:
          "A pretrial diversion program for people with little or no prior record, screened by the District Attorney's Office, with charges dismissed and expungement available on successful completion. Chester County runs ARD on an unusually early clock: the county's own instructions direct DUI defendants to apply at the preliminary hearing, and admission requires waiving the preliminary hearing and all pretrial motions. That makes the decision one to discuss with an attorney before the first court date, not after.",
      },
      {
        name: "Drug Court",
        description:
          "A pretrial diversion track for eligible people with a substance use disorder facing non-violent or first-offense charges. It runs a minimum of twelve months and up to two years, and successful completion makes the participant eligible to have the charges dismissed and petition for expungement.",
      },
      {
        name: "Recovery Court",
        description:
          "Chester County's post-conviction counterpart to Drug Court, for people whose criminal history or charges fall at the higher end of the sentencing guidelines and who are therefore outside Drug Court's eligibility. Applications are due within thirty days of formal arraignment, and the program generally runs two to three years.",
      },
      {
        name: "Mental Health Court",
        description:
          "For Chester County residents diagnosed with a serious and persistent mental illness that is connected to the charged conduct. It runs on two tracks — a pretrial diversion track of roughly one to two years, and a post-conviction track of roughly two to three years. Clinical eligibility is assessed separately from legal eligibility, which the District Attorney's Office determines.",
      },
      {
        name: "Veterans Court",
        description:
          "Open to veterans and active-duty service members, expressly including Guard members and reservists, charged with a misdemeanor or felony in Chester County. Like Mental Health Court it runs a pretrial diversion track and a post-conviction track, and connects participants with the VA and community providers.",
      },
      {
        name: "Law Enforcement Treatment Initiative (LETI)",
        description:
          "A pre-arrest option unique among the counties served here: a person with a substance use disorder can approach any law enforcement officer in Chester County and be referred to treatment rather than charged. Because it operates before charges are filed, it sits outside the court process entirely.",
      },
    ],
    faq: [
      {
        question: "What happens after an arrest in Chester County?",
        answer:
          "Most cases begin with a preliminary arraignment and then a preliminary hearing at the Magisterial District Court covering the municipality where the arrest happened. Chester County's district judges rotate through an on-call night schedule, so preliminary arraignments can happen outside business hours. Cases held for court move to the Court of Common Pleas at the Justice Center in West Chester.",
      },
      {
        question: "If I'm charged with DUI in Chester County, when do I have to apply for ARD?",
        answer:
          "Earlier than most people expect. The District Attorney's published ARD instructions direct DUI defendants to apply at their preliminary hearing, and admission to the program requires waiving that hearing along with all pretrial motions. That is a significant decision with real trade-offs, and it lands at the very first court date — which is exactly why it's worth talking through with an attorney before you appear.",
      },
      {
        question: "Which court will hear my case — the Magisterial District Court or Common Pleas?",
        answer:
          "Preliminary matters — arraignment, the preliminary hearing, and most summary and traffic offenses — are handled at the Magisterial District Court for the municipality where the case arose. Chester County has sixteen of them, spread from Oxford and Kennett Square to Phoenixville and Wayne. Cases that continue past the preliminary hearing move to the Court of Common Pleas in West Chester.",
      },
      {
        question: "What happens if I miss a court date in Chester County?",
        answer:
          "Missing a court date can result in a bench warrant. If that has already happened, it is far better addressed directly and promptly than avoided — the situation rarely improves on its own. Call to discuss the specific circumstances rather than waiting to see what happens.",
      },
      {
        question: "Where is the county prison, and what should I know about bail?",
        answer:
          "Chester County Prison is at 501 South Wawaset Road, West Chester. Depending on which bail authority set it, bail may be posted at the Clerk of Courts, at a Magisterial District Court, or at the prison itself. One easily-missed obligation: the county requires a defendant released on bail to contact the Clerk of Courts within 48 hours of release.",
      },
    ],
  },
  {
    slug: "delaware",
    name: "Delaware County",
    courtCount: 26,
    status: "sample",
    courtProse: [
      "Magisterial district courts handle the earliest stages of nearly every criminal case in Delaware County. After an arrest, a preliminary arraignment sets bail and gives you your next court date. The county also operates a central MDJ Arraignment Room in Media, at 600 North Jackson Street, where preliminary arraignments are held.",
      "The preliminary hearing comes next, and it is not a trial. Nobody is found guilty or not guilty here. The Commonwealth only has to show there is enough evidence for the case to move forward. Cases held for court go to the Delaware County Court of Common Pleas at 201 West Front Street in Media. Summary offenses and most traffic citations are decided at this court and go no further.",
      "One Delaware County detail worth knowing early: the county's own ARD application states that no application will be considered unless the applicant is represented by an attorney, and it is due at least fourteen days before formal arraignment. The window opens early in the case and does not stay open long.",
    ],
    courts: delawareCourts.map((c) => ({ ...c, slug: `dc-${c.dcNumber}` })),
    courthouse: {
      name: "Delaware County Court of Common Pleas",
      address: "Delaware County Courthouse, 201 West Front Street",
      cityStateZip: "Media, PA 19063",
      phone: "610-891-4000",
      note: "Preliminary hearings are heard at the Magisterial District Court covering the municipality where the case arose. Cases held for court move to the Court of Common Pleas in Media. Note that the courthouse and the county government center share the same Front Street address — check which building your hearing is in.",
    },
    jail: {
      name: "George W. Hill Correctional Facility",
      address: "500 Cheyney Road",
      cityStateZip: "Thornton, PA 19373",
      phone: "610-361-3200",
    },
    diversionPrograms: [
      {
        name: "ARD (Accelerated Rehabilitative Disposition)",
        description:
          "A pretrial diversion program for first-time and low-risk offenders, with charges dismissed on successful completion. Two Delaware County requirements matter here: the county's own application states that no application will be considered unless the applicant is represented by an attorney, and the application is due at least fourteen days before the scheduled formal arraignment. Applicants also sign a waiver of speedy-trial rights covering the period from arraignment to the pretrial conference.",
      },
      {
        name: "Second Chance Court",
        description:
          "Established in 2017 in response to the opioid crisis, and structurally unlike most diversion programs: it operates as a voluntary pre-trial bail program, providing immediate access to treatment as a condition of bail rather than after a plea. Participants keep all of their trial rights and legal options. It is open to Delaware County residents facing non-violent opiate-related charges.",
      },
      {
        name: "Drug Treatment Court",
        description:
          "A voluntary, intensive program running roughly thirty months, with early graduation possible at twenty-four. It has two tracks: a lower-level track where a plea is held in abeyance and charges are dismissed on completion, and a higher-level track carrying a supervised sentence. Requires county residency at the time of the offense and a clinical evaluation.",
      },
      {
        name: "Mental Health Court",
        description:
          "For Delaware County residents 18 and older with a diagnosed serious mental illness that contributed to the charged conduct. Co-occurring substance use does not disqualify an applicant who otherwise meets the criteria. Non-violent offenses are preferred, and certain serious felonies are excluded outright.",
      },
      {
        name: "Veterans Court",
        description:
          "For those who have served in a branch of the military. Non-violent offenses are preferred and others are considered case by case; veterans whose cases center on mental health or substance use may be routed to Mental Health Court or Drug Treatment Court instead.",
      },
      {
        name: "Young Offenders Court",
        description:
          "An eighteen-month supervised program for first-time adults aged 18 to 25 at the time of the offense facing marijuana-related felony charges, designed specifically to let a young person avoid a felony conviction. Participants must maintain employment or full-time education and complete community service; successful completion dismisses the felony charges.",
      },
      {
        name: "Misdemeanor Diversion Program",
        description:
          "An alternative to prosecution for low-level, non-violent misdemeanors. No plea is entered — participants complete community service and pay court costs, and the charges are dismissed on completion.",
      },
    ],
    faq: [
      {
        question: "What happens after an arrest in Delaware County?",
        answer:
          "Most cases begin with a preliminary arraignment and then a preliminary hearing at the Magisterial District Court covering the municipality where the arrest happened. Delaware County also operates a central MDJ Arraignment Room in Media, at 600 North Jackson Street, for preliminary arraignments. Cases held for court then move to the Court of Common Pleas in Media for formal arraignment and trial.",
      },
      {
        question: "Do I need a lawyer to apply for ARD in Delaware County?",
        answer:
          "Yes — and this is not a matter of advice but of county policy. Delaware County's own ARD application states that no application will be considered unless the applicant is represented by an attorney. The application is also due at least fourteen days before formal arraignment, which means the window to act is short and opens early in the case.",
      },
      {
        question: "Which court will hear my case — the Magisterial District Court or Common Pleas?",
        answer:
          "Preliminary matters are handled at one of Delaware County's twenty-six Magisterial District Courts. Which one depends on where the case arose, and in Delaware County that can be unusually specific — several municipalities are split by ward and precinct, and Upper Darby Township alone is divided across six different courts. Cases continuing past the preliminary hearing move to the Court of Common Pleas in Media.",
      },
      {
        question: "How does bail work in Delaware County?",
        answer:
          "The county's Pre-Trial and Bail Service Unit interviews charged individuals and prepares a bail recommendation for the judge. No appointment is needed — interviews are taken on a walk-in basis on weekdays, either before preliminary arraignment or after release from detention, and you bring the paperwork from your Magisterial District Court. Bail itself is posted through the Office of Judicial Support, which in Delaware County handles the role that a Clerk of Courts fills elsewhere.",
      },
      {
        question: "Where is the county jail?",
        answer:
          "The George W. Hill Correctional Facility, at 500 Cheyney Road in Thornton, is Delaware County's jail. It has been operated directly by the county since April 2022, when the county ended its contract with the private company that had run it — it had been the only privately managed county jail in Pennsylvania.",
      },
    ],
  },
  {
    slug: "montgomery",
    name: "Montgomery County",
    courtCount: 29,
    status: "sample",
    courtProse: [
      "Magisterial district courts handle the earliest stages of nearly every criminal case in Montgomery County. After an arrest, a preliminary arraignment sets bail and gives you your next court date.",
      "The preliminary hearing comes next, and it is not a trial. Nobody is found guilty or not guilty here. The Commonwealth only has to show there is enough evidence for the case to move forward. Cases held for court go to the Montgomery County Court of Common Pleas at 2 East Airy Street in Norristown for formal arraignment and, if it comes to it, trial. Summary offenses and most traffic citations are decided at this court and go no further.",
      "One Montgomery County detail worth knowing early: a DUI-ARD application here requires a CRN (Court Reporting Network) evaluation — an added step several neighbouring counties do not require. It is far easier to start that early than to discover the requirement late.",
    ],
    courts: montgomeryCourts.map((c) => ({ ...c, slug: `dc-${c.dcNumber}` })),
    courthouse: {
      name: "Montgomery County Court of Common Pleas",
      address: "2 East Airy Street",
      cityStateZip: "Norristown, PA 19404",
      phone: "610-278-3224",
      note: "Preliminary hearings are heard at the Magisterial District Court covering the municipality where the case arose. Formal arraignment, pretrial proceedings, and trial move to the Court of Common Pleas in Norristown.",
      // Photo: Douglas Muth, CC BY-SA 2.0, via Wikimedia Commons — credited in Footer.astro
      photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Montgomery%20County%20Courthouse%20Pennsylvania%20-%20Douglas%20Muth.jpg?width=1920",
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
