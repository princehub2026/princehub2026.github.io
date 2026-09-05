// Practice area taxonomy, confirmed against the user's sitemap.
// "Criminal Defense" is a parent hub with its own children; the rest are
// standalone top-level pages (siblings), not nested under Criminal Defense.

export type PracticeArea = {
  slug: string;
  name: string;
  short: string; // one-line summary for cards/nav
  intro: string; // short paragraph for the page itself
  children?: PracticeArea[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "criminal-defense",
    name: "Criminal Defense",
    short: "Full-spectrum criminal defense representation.",
    intro:
      "Every criminal charge carries consequences that extend beyond the courtroom. Cases are prepared as though they are going to trial, from the first filing through final resolution.",
    children: [
      {
        slug: "preliminary-hearings",
        name: "Preliminary Hearings",
        short: "The first critical test of the Commonwealth's case.",
        intro:
          "A preliminary hearing determines whether a case moves forward at all. It is often the earliest opportunity to challenge weak evidence before it defines the rest of a case.",
      },
      {
        slug: "firearms",
        name: "Firearms",
        short: "Pennsylvania firearms charges, rights, and licensing.",
        intro:
          "From possession charges to license restoration, firearms law in Pennsylvania is technical and unforgiving of mistakes. This is a focused area of the practice.",
        children: [
          {
            slug: "restoration-of-firearms-rights",
            name: "Restoration of Firearms Rights",
            short: "Regaining the right to lawfully possess a firearm.",
            intro:
              "A prior conviction or protective order does not always mean a permanent loss of firearms rights. Restoration is possible in certain circumstances under Pennsylvania and federal law.",
          },
          {
            slug: "firearm-purchase",
            name: "Firearm Purchase",
            short: "Denials, delays, and PICS appeal issues.",
            intro:
              "A denied or delayed firearm purchase through the PICS background check system can often be challenged and resolved.",
          },
          {
            slug: "license-to-carry",
            name: "License to Carry",
            short: "Applications, denials, and revocations.",
            intro:
              "License to Carry Firearms denials and revocations can be appealed. Timing matters, and the appeal window is short.",
          },
          {
            slug: "security-guard-act-235",
            name: "Security Guard – Act 235",
            short: "Act 235 licensure and lethal weapons training issues.",
            intro:
              "Act 235 certification issues — from application denials to disciplinary matters — affect a security professional's ability to work.",
          },
        ],
      },
      {
        slug: "drug-charges",
        name: "Drug Charges",
        short: "Possession, distribution, and manufacturing charges.",
        intro:
          "Drug charges range from simple possession to distribution and manufacturing allegations, each carrying dramatically different penalties. Search and seizure issues are examined in every case.",
      },
      {
        slug: "violent-crimes",
        name: "Violent Crimes",
        short: "Assault, robbery, and other charges of violence.",
        intro:
          "Violent crime allegations are prosecuted aggressively and carry serious consequences. These cases demand early, thorough investigation.",
      },
      {
        slug: "computer-crimes",
        name: "Computer Crimes",
        short: "Cybercrime, unlawful access, and digital evidence cases.",
        intro:
          "Computer and internet-related charges often turn on highly technical digital evidence. That evidence deserves the same scrutiny as any other.",
      },
      {
        slug: "probation-parole-violations",
        name: "Probation & Parole Violations",
        short: "Defending against alleged violations (VOP).",
        intro:
          "A probation or parole violation allegation can result in the reinstatement of an original sentence. These hearings move quickly and deserve immediate attention.",
      },
    ],
  },
  {
    slug: "dui-defense",
    name: "DUI Defense",
    short: "Driving under the influence charges, at every tier.",
    intro:
      "DUI cases involve strict technical and procedural rules — from the traffic stop through chemical testing. Each stage is an opportunity to challenge the Commonwealth's case.",
  },
  {
    slug: "juvenile-defense",
    name: "Juvenile Defense",
    short: "Protecting a minor's record and future.",
    intro:
      "Juvenile cases move through a different system with different stakes. The goal is always to protect a young person's future, not just resolve today's charge.",
  },
  {
    slug: "college-campus-cases",
    name: "College & Campus Cases",
    short: "Charges involving students at area colleges and universities.",
    intro:
      "A student charged near campus is usually facing two proceedings at once — a criminal case in a Pennsylvania court and the university’s own disciplinary process. They run on different rules and different timelines, and what happens in one can decide the other.",
  },
  {
    slug: "traffic-violations",
    name: "Traffic Violations",
    short: "Citations with license and record consequences.",
    intro:
      "Some traffic citations carry consequences well beyond a fine, including license points and suspension. Not every citation is worth simply paying.",
  },
  {
    slug: "license-appeal",
    name: "License Appeal",
    short: "PennDOT suspensions and revocations.",
    intro:
      "A driver's license suspension affects work, family, and daily life. PennDOT appeals have strict deadlines that cannot be missed.",
  },
  {
    slug: "return-of-property",
    name: "Return of Property",
    short: "Recovering property seized by police.",
    intro:
      "Property seized during an arrest or investigation is not always returned automatically, even after a case concludes. A formal motion is often required.",
  },
  {
    slug: "expungement",
    name: "Expungement",
    short: "Clearing eligible charges from a criminal record.",
    intro:
      "An eligible criminal record can quietly limit employment, housing, and licensing opportunities for years. Expungement and sealing remedies exist for a reason.",
  },
  {
    slug: "pfa",
    name: "PFA",
    short: "Protection From Abuse petitions and defense.",
    intro:
      "A Protection From Abuse order carries immediate and serious consequences, including loss of firearms rights and removal from a home. Both petitioners and defendants deserve skilled representation.",
  },
];

export function findPracticeArea(slug: string): PracticeArea | undefined {
  for (const pa of practiceAreas) {
    if (pa.slug === slug) return pa;
    if (pa.children) {
      const child = pa.children.find((c) => c.slug === slug);
      if (child) return child;
      for (const c of pa.children) {
        const grandchild = c.children?.find((g) => g.slug === slug);
        if (grandchild) return grandchild;
      }
    }
  }
  return undefined;
}
// Practice area taxonomy, confirmed against the user's sitemap.
// "Criminal Defense" is a parent hub with its own children; the rest are
// standalone top-level pages (siblings), not nested under Criminal Defense.

export type PracticeArea = {
  slug: string;
  name: string;
  short: string; // one-line summary for cards/nav
  intro: string; // short paragraph for the page itself
  children?: PracticeArea[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "criminal-defense",
    name: "Criminal Defense",
    short: "Full-spectrum criminal defense representation.",
    intro:
      "Every criminal charge carries consequences that extend beyond the courtroom. Cases are prepared as though they are going to trial, from the first filing through final resolution.",
    children: [
      {
        slug: "preliminary-hearings",
        name: "Preliminary Hearings",
        short: "The first critical test of the Commonwealth's case.",
        intro:
          "A preliminary hearing determines whether a case moves forward at all. It is often the earliest opportunity to challenge weak evidence before it defines the rest of a case.",
      },
      {
        slug: "firearms",
        name: "Firearms",
        short: "Pennsylvania firearms charges, rights, and licensing.",
        intro:
          "From possession charges to license restoration, firearms law in Pennsylvania is technical and unforgiving of mistakes. This is a focused area of the practice.",
        children: [
          {
            slug: "restoration-of-firearms-rights",
            name: "Restoration of Firearms Rights",
            short: "Regaining the right to lawfully possess a firearm.",
            intro:
              "A prior conviction or protective order does not always mean a permanent loss of firearms rights. Restoration is possible in certain circumstances under Pennsylvania and federal law.",
          },
          {
            slug: "firearm-purchase",
            name: "Firearm Purchase",
            short: "Denials, delays, and PICS appeal issues.",
            intro:
              "A denied or delayed firearm purchase through the PICS background check system can often be challenged and resolved.",
          },
          {
            slug: "license-to-carry",
            name: "License to Carry",
            short: "Applications, denials, and revocations.",
            intro:
              "License to Carry Firearms denials and revocations can be appealed. Timing matters, and the appeal window is short.",
          },
          {
            slug: "security-guard-act-235",
            name: "Security Guard – Act 235",
            short: "Act 235 licensure and lethal weapons training issues.",
            intro:
              "Act 235 certification issues — from application denials to disciplinary matters — affect a security professional's ability to work.",
          },
        ],
      },
      {
        slug: "drug-charges",
        name: "Drug Charges",
        short: "Possession, distribution, and manufacturing charges.",
        intro:
          "Drug charges range from simple possession to distribution and manufacturing allegations, each carrying dramatically different penalties. Search and seizure issues are examined in every case.",
      },
      {
        slug: "violent-crimes",
        name: "Violent Crimes",
        short: "Assault, robbery, and other charges of violence.",
        intro:
          "Violent crime allegations are prosecuted aggressively and carry serious consequences. These cases demand early, thorough investigation.",
      },
      {
        slug: "computer-crimes",
        name: "Computer Crimes",
        short: "Cybercrime, unlawful access, and digital evidence cases.",
        intro:
          "Computer and internet-related charges often turn on highly technical digital evidence. That evidence deserves the same scrutiny as any other.",
      },
      {
        slug: "probation-parole-violations",
        name: "Probation & Parole Violations",
        short: "Defending against alleged violations (VOP).",
        intro:
          "A probation or parole violation allegation can result in the reinstatement of an original sentence. These hearings move quickly and deserve immediate attention.",
      },
    ],
  },
  {
    slug: "dui-defense",
    name: "DUI Defense",
    short: "Driving under the influence charges, at every tier.",
    intro:
      "DUI cases involve strict technical and procedural rules — from the traffic stop through chemical testing. Each stage is an opportunity to challenge the Commonwealth's case.",
  },
  {
    slug: "juvenile-defense",
    name: "Juvenile Defense",
    short: "Protecting a minor's record and future.",
    intro:
      "Juvenile cases move through a different system with different stakes. The goal is always to protect a young person's future, not just resolve today's charge.",
  },
  {
    slug: "college-campus-cases",
    name: "College & Campus Cases",
    short: "Charges involving students at area colleges and universities.",
    intro:
      "A student charged near campus is usually facing two proceedings at once — a criminal case in a Pennsylvania court and the university's own disciplinary process. They run on different rules and different timelines, and what happens in one can decide the other.",
  },
  {
    slug: "traffic-violations",
    name: "Traffic Violations",
    short: "Citations with license and record consequences.",
    intro:
      "Some traffic citations carry consequences well beyond a fine, including license points and suspension. Not every citation is worth simply paying.",
  },
  {
    slug: "license-appeal",
    name: "License Appeal",
    short: "PennDOT suspensions and revocations.",
    intro:
      "A driver's license suspension affects work, family, and daily life. PennDOT appeals have strict deadlines that cannot be missed.",
  },
  {
    slug: "return-of-property",
    name: "Return of Property",
    short: "Recovering property seized by police.",
    intro:
      "Property seized during an arrest or investigation is not always returned automatically, even after a case concludes. A formal motion is often required.",
  },
  {
    slug: "expungement",
    name: "Expungement",
    short: "Clearing eligible charges from a criminal record.",
    intro:
      "An eligible criminal record can quietly limit employment, housing, and licensing opportunities for years. Expungement and sealing remedies exist for a reason.",
  },
  {
    slug: "pfa",
    name: "PFA",
    short: "Protection From Abuse petitions and defense.",
    intro:
      "A Protection From Abuse order carries immediate and serious consequences, including loss of firearms rights and removal from a home. Both petitioners and defendants deserve skilled representation.",
  },
];

export function findPracticeArea(slug: string): PracticeArea | undefined {
  for (const pa of practiceAreas) {
    if (pa.slug === slug) return pa;
    if (pa.children) {
      const child = pa.children.find((c) => c.slug === slug);
      if (child) return child;
      for (const c of pa.children) {
        const grandchild = c.children?.find((g) => g.slug === slug);
        if (grandchild) return grandchild;
      }
    }
  }
  return undefined;
}
// Practice area taxonomy, confirmed against the user's sitemap.
// "Criminal Defense" is a parent hub with its own children; the rest are
// standalone top-level pages (siblings), not nested under Criminal Defense.

export type PracticeArea = {
  slug: string;
  name: string;
  short: string; // one-line summary for cards/nav
  intro: string; // short paragraph for the page itself
  children?: PracticeArea[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "criminal-defense",
    name: "Criminal Defense",
    short: "Full-spectrum criminal defense representation.",
    intro:
      "Every criminal charge carries consequences that extend beyond the courtroom. Cases are prepared as though they are going to trial, from the first filing through final resolution.",
    children: [
      {
        slug: "preliminary-hearings",
        name: "Preliminary Hearings",
        short: "The first critical test of the Commonwealth's case.",
        intro:
          "A preliminary hearing determines whether a case moves forward at all. It is often the earliest opportunity to challenge weak evidence before it defines the rest of a case.",
      },
      {
        slug: "firearms",
        name: "Firearms",
        short: "Pennsylvania firearms charges, rights, and licensing.",
        intro:
          "From possession charges to license restoration, firearms law in Pennsylvania is technical and unforgiving of mistakes. This is a focused area of the practice.",
        children: [
          {
            slug: "restoration-of-firearms-rights",
            name: "Restoration of Firearms Rights",
            short: "Regaining the right to lawfully possess a firearm.",
            intro:
              "A prior conviction or protective order does not always mean a permanent loss of firearms rights. Restoration is possible in certain circumstances under Pennsylvania and federal law.",
          },
          {
            slug: "firearm-purchase",
            name: "Firearm Purchase",
            short: "Denials, delays, and PICS appeal issues.",
            intro:
              "A denied or delayed firearm purchase through the PICS background check system can often be challenged and resolved.",
          },
          {
            slug: "license-to-carry",
            name: "License to Carry",
            short: "Applications, denials, and revocations.",
            intro:
              "License to Carry Firearms denials and revocations can be appealed. Timing matters, and the appeal window is short.",
          },
          {
            slug: "security-guard-act-235",
            name: "Security Guard – Act 235",
            short: "Act 235 licensure and lethal weapons training issues.",
            intro:
              "Act 235 certification issues — from application denials to disciplinary matters — affect a security professional's ability to work.",
          },
        ],
      },
      {
        slug: "drug-charges",
        name: "Drug Charges",
        short: "Possession, distribution, and manufacturing charges.",
        intro:
          "Drug charges range from simple possession to distribution and manufacturing allegations, each carrying dramatically different penalties. Search and seizure issues are examined in every case.",
      },
      {
        slug: "violent-crimes",
        name: "Violent Crimes",
        short: "Assault, robbery, and other charges of violence.",
        intro:
          "Violent crime allegations are prosecuted aggressively and carry serious consequences. These cases demand early, thorough investigation.",
      },
      {
        slug: "computer-crimes",
        name: "Computer Crimes",
        short: "Cybercrime, unlawful access, and digital evidence cases.",
        intro:
          "Computer and internet-related charges often turn on highly technical digital evidence. That evidence deserves the same scrutiny as any other.",
      },
      {
        slug: "probation-parole-violations",
        name: "Probation & Parole Violations",
        short: "Defending against alleged violations (VOP).",
        intro:
          "A probation or parole violation allegation can result in the reinstatement of an original sentence. These hearings move quickly and deserve immediate attention.",
      },
    ],
  },
  {
    slug: "dui-defense",
    name: "DUI Defense",
    short: "Driving under the influence charges, at every tier.",
    intro:
      "DUI cases involve strict technical and procedural rules — from the traffic stop through chemical testing. Each stage is an opportunity to challenge the Commonwealth's case.",
  },
  {
    slug: "juvenile-defense",
    name: "Juvenile Defense",
    short: "Protecting a minor's record and future.",
    intro:
      "Juvenile cases move through a different system with different stakes. The goal is always to protect a young person's future, not just resolve today's charge.",
  },
  {
    slug: "traffic-violations",
    name: "Traffic Violations",
    short: "Citations with license and record consequences.",
    intro:
      "Some traffic citations carry consequences well beyond a fine, including license points and suspension. Not every citation is worth simply paying.",
  },
  {
    slug: "license-appeal",
    name: "License Appeal",
    short: "PennDOT suspensions and revocations.",
    intro:
      "A driver's license suspension affects work, family, and daily life. PennDOT appeals have strict deadlines that cannot be missed.",
  },
  {
    slug: "return-of-property",
    name: "Return of Property",
    short: "Recovering property seized by police.",
    intro:
      "Property seized during an arrest or investigation is not always returned automatically, even after a case concludes. A formal motion is often required.",
  },
  {
    slug: "expungement",
    name: "Expungement",
    short: "Clearing eligible charges from a criminal record.",
    intro:
      "An eligible criminal record can quietly limit employment, housing, and licensing opportunities for years. Expungement and sealing remedies exist for a reason.",
  },
  {
    slug: "pfa",
    name: "PFA",
    short: "Protection From Abuse petitions and defense.",
    intro:
      "A Protection From Abuse order carries immediate and serious consequences, including loss of firearms rights and removal from a home. Both petitioners and defendants deserve skilled representation.",
  },
];

export function findPracticeArea(slug: string): PracticeArea | undefined {
  for (const pa of practiceAreas) {
    if (pa.slug === slug) return pa;
    if (pa.children) {
      const child = pa.children.find((c) => c.slug === slug);
      if (child) return child;
      for (const c of pa.children) {
        const grandchild = c.children?.find((g) => g.slug === slug);
        if (grandchild) return grandchild;
      }
    }
  }
  return undefined;
}
