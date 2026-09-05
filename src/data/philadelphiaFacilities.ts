// Philadelphia court and detention facility directory.
//
// Philadelphia has no Magisterial District Court network, so its county page carries a
// facilities directory instead. Verified 2026-09-05 against primary sources:
//   - courts.phila.gov (Stout Center for Criminal Justice; Family Court at 1501 Arch)
//   - phila.gov Department of Prisons "Facilities" page (the four operating City facilities)
//   - phila.gov PJJSC program page (juvenile detention)
//
// Only facilities the City lists as currently operating are published. The House of
// Correction is closed and is deliberately omitted. No claim is made about which facility
// houses women, because the City's own page does not state it.

export type PhlFacility = {
  name: string;
  address: string;
  cityStateZip?: string; // omitted where a shared localityNote covers the group
  phone?: string;
  note?: string;
};

export type PhlFacilityGroup = {
  eyebrow: string;
  heading: string;
  // Shared locality line, so a cluster of facilities on one street does not repeat the
  // same city/state/ZIP on every entry. When set, entries omit cityStateZip.
  localityNote?: string;
  facilities: PhlFacility[];
  footnote?: string;
};

export const philadelphiaFacilityGroups: PhlFacilityGroup[] = [
  {
    eyebrow: "Where Philadelphia Cases Are Heard",
    heading: "The Courts",
    facilities: [
      {
        name: "Justice Juanita Kidd Stout Center for Criminal Justice",
        address: "1301 Filbert Street",
        cityStateZip: "Philadelphia, PA 19107",
        phone: "215-686-7000",
        note: "Adult criminal matters — Municipal Court criminal cases and Court of Common Pleas criminal trials. Known to most people simply as the Criminal Justice Center, or the CJC.",
      },
      {
        name: "Philadelphia Family Court",
        address: "1501 Arch Street",
        cityStateZip: "Philadelphia, PA 19102",
        phone: "215-686-7000",
        note: "Juvenile delinquency matters are heard here — not at the Stout Center. If your child has been charged, this is the building.",
      },
    ],
  },
  {
    eyebrow: "Philadelphia Department of Prisons",
    heading: "Adult Detention",
    localityNote: "All four City facilities sit together on State Road in Northeast Philadelphia, PA 19136.",
    facilities: [
      {
        name: "Curran-Fromhold Correctional Facility (CFCF)",
        address: "7901 State Road",
        phone: "215-685-7843",
        note: "The largest facility in the system.",
      },
      {
        name: "Riverside Correctional Facility (RCF)",
        address: "8151 State Road",
        phone: "215-685-6911",
      },
      {
        name: "Detention Center (DC)",
        address: "8201 State Road",
        phone: "215-685-8436",
        note: "The system's intake center, and its medical and behavioral health unit. Someone arrested in Philadelphia is most often processed here first.",
      },
      {
        name: "Philadelphia Industrial Correctional Center (PICC)",
        address: "8301 State Road",
        phone: "215-685-7100",
        note: "Houses adult men.",
      },
    ],
    footnote: "Calls from any City facility are recorded. Be careful what you say on the phone, and to whom.",
  },
  {
    eyebrow: "If a Juvenile Has Been Detained",
    heading: "Juvenile Detention",
    facilities: [
      {
        name: "Philadelphia Juvenile Justice Services Center (PJJSC)",
        address: "91 North 48th Street",
        cityStateZip: "Philadelphia, PA 19139",
        phone: "215-686-4845",
        note: "The city's only secure juvenile detention center, in West Philadelphia. Young people are held here at the request of the court while their cases are pending. Their hearings are at Family Court on Arch Street.",
      },
    ],
  },
];
