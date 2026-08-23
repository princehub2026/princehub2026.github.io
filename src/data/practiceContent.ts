// Practice-area page content — Pennsylvania-specific legal information.
// Voice: informational only. No directed advice. All statutes verified against
// 2025 PA Consolidated Statutes; attorney-reviewed before publication.

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface PracticeFaq {
  q: string;
  a: string;
}

export interface PracticeContent {
  sections: ContentSection[];
  faq: PracticeFaq[];
}

export const practiceContent: Record<string, PracticeContent> = {

  "criminal-defense": {
    sections: [
      {
        heading: "How a Pennsylvania criminal case moves",
        paragraphs: [
          "Every criminal case in Pennsylvania follows the same life cycle, and knowing where a case is in that cycle is the first step in defending it. After an arrest, the accused is brought before a Magisterial District Judge or hearing officer for a preliminary arraignment — usually within hours — where the charges are read and bail is set. For many lower-level offenses, police release the person and mail a summons instead of holding them.",
          "The preliminary hearing follows at the magisterial district court — or the Municipal Court in Philadelphia — scheduled within 14 days for someone in custody or 21 days for someone released. There the Commonwealth must show a prima facie case — enough evidence, if believed, that a crime occurred and the accused committed it. Charges held for court move to the Court of Common Pleas for formal arraignment, which starts the clock on pretrial motions: suppression of evidence, habeas corpus challenges, and discovery. The case then resolves by dismissal, diversion, negotiated plea, or trial — before a judge or a jury of twelve and two alternates. Sentencing follows Pennsylvania's guidelines, and post-sentence rights include a direct appeal to the Superior Court and, later, post-conviction relief under the PCRA.",
          "Pennsylvania's speedy-trial rule, Rule 600, requires trial within 365 days of the complaint, excluding defense-caused delay, and a defendant held in jail pretrial is entitled to release on nominal bail after 180 days. These deadlines are enforceable — but only if someone is counting."
        ]
      },
      {
        heading: "What the grading of a charge really decides",
        paragraphs: [
          "Pennsylvania grades offenses by maximum penalty, and the grade drives nearly everything: the sentencing guidelines, whether a record can ever be sealed, firearm rights, professional licensing, and immigration consequences. Often the most valuable work in a case happens early, negotiating what a charge is graded as — the difference between a third-degree felony and a first-degree misdemeanor can matter more than the eventual sentence."
        ],
        list: [
          "First-degree felony (F1): up to 20 years and a $25,000 fine",
          "Second-degree felony (F2): up to 10 years and $25,000",
          "Third-degree felony (F3): up to 7 years and $15,000",
          "First-degree misdemeanor (M1): up to 5 years and $10,000",
          "Second-degree misdemeanor (M2): up to 2 years and $5,000",
          "Third-degree misdemeanor (M3): up to 1 year and $2,500",
          "Summary offense: up to 90 days"
        ]
      },
      {
        heading: "A conviction reaches further than the sentence",
        paragraphs: [
          "The consequences of a conviction extend well past the courtroom. Employers may consider convictions that relate to the job, and Pennsylvania law requires written notice when criminal history is the reason for a rejection. Licensing boards scrutinize convictions for nurses, teachers, contractors, and other licensed professionals. Non-citizens can face removal or inadmissibility — sometimes from offenses that sound minor. A first-degree misdemeanor, because it is punishable by five years, triggers the federal firearms prohibition even when no jail time is ever served. Custody courts must consider certain convictions. Housing applications ask.",
          "This is why cases here are prepared as though they are going to trial from the first filing: the Commonwealth's evidence gets tested at every stage — the stop, the search, the statements, the identification — because Pennsylvania's constitution often protects more than the federal minimum, and because leverage at trial is what produces outcomes that protect a client's record, rights, and livelihood."
        ]
      }
    ],
    faq: [
      {
        q: "What happens right after an arrest in Pennsylvania?",
        a: "After an arrest, the person is brought before a Magisterial District Judge or hearing officer for a preliminary arraignment, usually within hours. The judge reads the charges, explains the right to counsel and to a preliminary hearing, and sets bail. For many lower-level offenses, police release the person and mail a summons instead. The preliminary hearing is then scheduled within 14 days if the person is in custody, or 21 days if released."
      },
      {
        q: "What is the difference between a felony, a misdemeanor, and a summary offense?",
        a: "Pennsylvania grades crimes by maximum penalty: felonies range from 7 years (third degree) to 20 years (first degree); misdemeanors from 1 year to 5 years; summary offenses carry up to 90 days. The grade also drives sentencing guidelines, record-sealing eligibility, and consequences like firearm rights — so the grading of a charge often matters as much as the charge itself."
      },
      {
        q: "Do I need a lawyer if I plan to plead guilty?",
        a: "A guilty plea is a conviction with permanent consequences — a criminal record, possible jail exposure, and effects on licensing, immigration, employment, and firearm rights. Counsel can evaluate whether the evidence actually supports the charge, whether diversion or a reduced grading is available, and what the plea truly costs long-term. Pennsylvania courts appoint counsel for those who cannot afford it in any case where jail is possible."
      },
      {
        q: "How does bail work in Pennsylvania?",
        a: "Bail is set at the preliminary arraignment — the judge will look at the nature of the charge, ties to the community, criminal record, and history of appearing in court. Release can be on recognizance, on conditions, on unsecured or nominal bail, or on monetary bail, which may be no higher than necessary to reasonably ensure appearance. Bail can be revisited at the preliminary hearing and again at the Court of Common Pleas."
      },
      {
        q: "Is there a time limit on how long a case can take?",
        a: "Yes. Rule 600 requires trial within 365 days of the complaint, excluding delay caused by the defense and delay that occurs despite the prosecution's due diligence. A defendant held in jail before trial must be released on nominal bail after 180 days, but a motion often must be filed. Violations of the 365-day rule can result in dismissal with prejudice."
      },
      {
        q: "What is ARD and who qualifies?",
        a: "ARD — Accelerated Rehabilitative Disposition — is a pretrial diversion program, typically for first-time, non-violent charges. The District Attorney in each county controls admission. Participants complete supervision, fees, classes, and community service; completing the program results in dismissal of the charges and eligibility for expungement of the arrest record."
      }
    ]
  },

  "preliminary-hearings": {
    sections: [
      {
        heading: "What the judge actually decides",
        paragraphs: [
          "A preliminary hearing is not a trial. The judge decides one question: whether the Commonwealth has presented a prima facie case — evidence that, if believed, shows a crime was committed and the accused committed it. Credibility is not weighed and guilt is not decided. But the judge rules charge by charge, which means individual counts can be dismissed or reduced even when others remain and move forward."
        ]
      },
      {
        heading: "Why this hearing shapes the whole case",
        paragraphs: [
          "The preliminary hearing is usually the defense's first look at the Commonwealth's witnesses, months before formal discovery. Testimony given there is under oath — and a witness who testifies one way at the preliminary hearing and another way at trial has handed the defense impeachment material that lasts the life of the case.",
          "It is also where overgraded charges get corrected. An aggravated assault charged as a first-degree felony on thin evidence of serious bodily injury, a theft graded above what the value supports — holding the Commonwealth to its burden at this stage changes bail amounts, guideline exposure for sentencing, and the entire negotiating posture that follows. A dismissal at the preliminary hearing is not always permanent, because the Commonwealth can generally refile — but it forces the prosecution to show its cards."
        ]
      },
      {
        heading: "Waiving the hearing is a decision, not a formality",
        paragraphs: [
          "Hearings are sometimes waived in exchange for something concrete: a bail reduction, an agreement on ARD admission, or negotiated plea terms. In some counties, applying for ARD requires waiving the hearing. A waiver gives up none of the defenses that matter at trial — suppression motions and every trial right survive. What it gives up is the chance to test and lock in testimony. Whether that trade makes sense is a case-specific, strategic decision, and it deserves more thought than it usually gets in a courthouse hallway."
        ]
      }
    ],
    faq: [
      {
        q: "What does the judge decide at a preliminary hearing?",
        a: "Only whether the Commonwealth has shown a prima facie case: enough evidence, if believed, that a crime occurred and the accused committed it. The judge does not decide guilt or weigh credibility. If the standard is met, the case is held for court and moves to the Court of Common Pleas; if not, charges are dismissed."
      },
      {
        q: "Can charges be dismissed or reduced at the preliminary hearing?",
        a: "Yes. The judge rules charge by charge, so individual counts can be dismissed while others are held, and prosecutors sometimes withdraw or amend counts at the hearing. If key witnesses fail to appear and the remaining evidence is only hearsay, dismissal is possible. A dismissal is not always final — the Commonwealth may generally refile."
      },
      {
        q: "Should a preliminary hearing be waived?",
        a: "It depends on what is offered in return. Waivers are commonly exchanged for bail reductions, ARD admission, or plea terms. A contested hearing, by contrast, previews the evidence, creates a transcript for later impeachment, and can get charges dismissed or reduced. Waiving the hearing gives up none of the defenses available at trial. It is a strategic decision made case by case."
      },
      {
        q: "Can the officer just read the police reports, or do witnesses have to appear?",
        a: "Some hearsay is allowed. In practice, the Commonwealth usually needs at least one witness with firsthand knowledge — an officer simply reading from reports arguably shows that a witness lacks adequate memory of the events."
      }
    ]
  },

  "firearms": {
    sections: [
      {
        heading: "Pennsylvania's most common gun charges",
        paragraphs: [
          "Most Pennsylvania firearms prosecutions arise under a handful of sections of the Uniform Firearms Act. Section 6106 — carrying a firearm concealed or in a vehicle without a license to carry — is a third-degree felony, but drops to a first-degree misdemeanor when the person was otherwise eligible for a license and committed no other violation. That single grading distinction is one of the most important negotiating levers in any carry case.",
          "Section 6105 — possession by a prohibited person — is the most serious charge in the chapter: a second-degree felony for most disqualifying convictions, and a first-degree felony, with up to twenty years of exposure, when the person was physically holding or controlling the firearm or has a prior Section 6105 conviction. Section 6108 separately makes carrying on Philadelphia's public streets without a license a first-degree misdemeanor. Possessing a firearm with an altered or obliterated serial number is a second-degree felony, and straw purchases — buying or transferring a gun for someone who cannot pass a background check — are felonies with a five-year mandatory minimum on a second violation."
        ]
      },
      {
        heading: "Who is prohibited from possessing a firearm",
        paragraphs: [
          "Section 6105 prohibits possession by people convicted of roughly forty enumerated offenses — aggravated assault, robbery, burglary, and drug felonies among them — and by several other categories: fugitives, subjects of active final Protection From Abuse orders, people involuntarily committed for mental health treatment under Sections 302, 303, or 304, certain juvenile adjudications, and those with three DUI convictions in five years (for purchases). Federal law layers its own prohibitions on top under 18 U.S.C. 922(g), and the two lists do not match perfectly — a trap that catches people who believe, in good faith, that they are allowed to possess a firearm."
        ]
      },
      {
        heading: "Where gun cases are won: the stop and the search",
        paragraphs: [
          "In most firearms prosecutions, the gun is the whole case — which makes the legality of how police found it the whole defense. Pennsylvania's constitution is more protective than federal law here. Under Commonwealth v. Alexander (2020), police need both probable cause and exigent circumstances to search a vehicle without a warrant — Pennsylvania rejected the federal automobile exception. Under Commonwealth v. Hicks (2019), the mere fact that someone is carrying a firearm does not create reasonable suspicion for a stop, because carrying may be perfectly legal.",
          "When the firearm was not found on the person — in a shared car, a shared home — the Commonwealth must prove constructive possession: the power and the intent to control the gun. Mere presence near a firearm is not enough, and multi-occupant vehicle cases are among the most defensible gun cases in Pennsylvania. Every case here gets the same review: the stop, the frisk, the search, the statements, and the possession theory, each tested against what the law actually requires."
        ]
      }
    ],
    faq: [
      {
        q: "What are the most common gun charges in Pennsylvania?",
        a: "The most common charges are carrying a firearm without a license (Section 6106, a third-degree felony or first-degree misdemeanor), possession by a prohibited person (Section 6105, typically a first- or second-degree felony), carrying on Philadelphia streets (Section 6108, a first-degree misdemeanor), and possessing a firearm with an altered serial number (Section 6110.2, a second-degree felony)."
      },
      {
        q: "Is it illegal to carry a gun without a license in Pennsylvania?",
        a: "Carrying a firearm concealed on the person or in any vehicle without a license to carry is a crime under Section 6106 — a third-degree felony, reduced to a first-degree misdemeanor when the person was otherwise license-eligible and committed no other criminal violation. Open carry on foot outside Philadelphia is generally not a licensing offense for adults who are not prohibited."
      },
      {
        q: "Who is prohibited from possessing a firearm in Pennsylvania?",
        a: "Section 6105 covers people convicted of roughly forty enumerated offenses — including aggravated assault, robbery, burglary, and drug felonies — plus fugitives, subjects of active final PFA orders, people involuntarily committed under Sections 302, 303, or 304, and certain juvenile adjudications. Federal law adds overlapping categories under 18 U.S.C. 922(g), and the state and federal lists do not match perfectly."
      },
      {
        q: "Can police search a car for a gun without a warrant in Pennsylvania?",
        a: "Generally no. Under Commonwealth v. Alexander (2020), the Pennsylvania Constitution requires both probable cause and exigent circumstances before police may search a vehicle without a warrant — a stricter rule than federal law. Firearms recovered from warrantless car searches without genuine exigency are frequently subject to suppression motions, which can end the prosecution."
      },
      {
        q: "Can gun rights be restored in Pennsylvania?",
        a: "Sometimes. Pennsylvania courts can restore state firearm rights through petitions under Section 6105(d) or (f), Section 6105.1, or expungement of a 302 commitment record. But a state court order alone does not always lift a federal prohibition — for most disqualifying convictions, only a Governor's pardon or an expungement removes the federal bar. Both analyses have to be run before anyone relies on a restoration."
      }
    ]
  },

  "restoration-of-firearms-rights": {
    sections: [
      {
        heading: "The paths back to firearm rights",
        paragraphs: [
          "Pennsylvania law provides several distinct restoration routes, each filed in the Court of Common Pleas for the county where the applicant lives. Section 6105(d) covers people whose disqualifying conviction has been pardoned or vacated. Section 6105(f) covers mental-health commitments and expired PFA-based prohibitions — the court may grant relief if it determines the applicant can possess a firearm without risk to themselves or anyone else. Section 6105.1 addresses older convictions under prior law that are graded today at no more than two years. And for involuntary 302 commitments, Section 6111.1(g) allows a court to review whether the evidence actually supported the commitment — and if it did not, the record itself is expunged, which removes the prohibition at its root."
        ]
      },
      {
        heading: "The federal trap — and why it matters",
        paragraphs: [
          "This is where restoration cases are won or lost, and where a great deal of well-meaning advice goes wrong. Federal law disregards a disqualifying conviction only if it was expunged, set aside, pardoned, or followed by a restoration of civil rights. A Pennsylvania relief order under Section 6105(f) is none of those things — so a person who is federally prohibited can win in state court and still be committing a federal felony by possessing a firearm. The same mismatch affects mental-health commitments: state relief under 6105(f)(1) leaves the federal bar intact, while a successful 6111.1(g) expungement of the commitment record clears both.",
          "A full pardon from the Governor is the one remedy that reliably removes both the state and federal disabilities. The Board of Pardons process takes years, but for convictions that no other route reaches, it is the path that actually works. Any honest restoration analysis runs the state and federal questions side by side before a petition is ever filed — a state-court win that leaves a client federally prohibited is worse than no petition at all, because it creates a false sense of security with felony consequences."
        ]
      },
      {
        heading: "What the process looks like",
        paragraphs: [
          "Restoration petitions are heard in the county of the applicant's principal residence. Hearings under Section 6105(f) are closed unless the applicant asks otherwise. For PFA-based relief, the former PFA plaintiff receives notice and is a party to the proceeding. The evidence that persuades courts is concrete: time elapsed, treatment records where relevant, steady employment, and credible character testimony. These petitions are buildable cases, not paperwork — and they are far more likely to succeed when they are prepared like cases."
        ]
      }
    ],
    faq: [
      {
        q: "How does a firearms rights restoration petition work in Pennsylvania?",
        a: "A petition is filed in the Court of Common Pleas for the county where the applicant lives. Depending on the disability, relief may proceed under Section 6105(d) for pardoned or vacated convictions, Section 6105(f) for mental-health commitments and expired PFA orders, or Section 6105.1 for older, lower-graded offenses. The court holds a hearing and decides whether restoration is appropriate."
      },
      {
        q: "If a Pennsylvania court restores my gun rights, does federal law still prohibit me?",
        a: "Often, yes. Federal law only disregards a conviction that was expunged, set aside, pardoned, or followed by a restoration of civil rights. A Pennsylvania relief order under Section 6105(f) is none of those, so a person prohibited under 18 U.S.C. 922(g) can remain federally barred even after winning in state court. A full Governor's pardon removes both bars."
      },
      {
        q: "Can an involuntary 302 commitment be removed so gun rights come back?",
        a: "Yes, in two ways. Under Section 6111.1(g), a court can review whether the evidence supported the 302 commitment — and if it was insufficient, the record must be expunged, which removes both the state and federal prohibitions. Alternatively, Section 6105(f) relief restores state rights only, leaving the federal bar in place. Which route fits depends on the commitment record itself."
      },
      {
        q: "Does a pardon restore gun rights?",
        a: "A full pardon from the Governor removes the conviction as a basis for both the Pennsylvania prohibition and the federal one, so long as the pardon does not expressly reserve a firearms restriction. The pardon process runs through the Board of Pardons and commonly takes years — but for convictions no other restoration route reaches, it is the remedy that actually works."
      }
    ]
  },

  "firearm-purchase": {
    sections: [
      {
        heading: "How Pennsylvania gun purchases work — and fail",
        paragraphs: [
          "Every dealer sale in Pennsylvania runs through the Pennsylvania Instant Check System (PICS), operated by the State Police, which reviews criminal history, juvenile delinquency, and mental-health records alongside the federal databases. Handgun transfers between private parties must also go through a licensed dealer or the county sheriff, with narrow exceptions for transfers between spouses, parents and children, and grandparents and grandchildren. Private long-gun sales between Pennsylvania residents are not subject to the state dealer requirement, though the prohibited-person rules still apply in full.",
          "Denials are more common than people expect, and often wrong. Old out-of-state offenses misclassified as disqualifying, uncorrected dispositions, mismatched identities, and 302 commitment records that qualify for expungement all produce denials that can be fixed — because fixing the record fixes the denial."
        ]
      },
      {
        heading: "Challenging a PICS denial",
        paragraphs: [
          "The challenge process has real deadlines. A denied buyer may challenge the accuracy of the record within 30 days; the State Police must state the basis for the denial within 20 days and issue a final decision within 60. If the denial is upheld, an appeal lies to the Attorney General, who holds a full de novo hearing at which the Commonwealth bears the burden of proof — and that decision is further appealable to the Commonwealth Court. This ladder is distinct from the license-to-carry appeal route, and choosing the right one matters."
        ]
      },
      {
        heading: "The straw purchase trap",
        paragraphs: [
          "Buying a firearm for someone who cannot pass a background check is a third-degree felony, and making a materially false statement on the purchase paperwork is a separate third-degree felony — with a second violation graded as a second-degree felony carrying a five-year mandatory minimum. Federal exposure stacks on top, up to fifteen years under the straw-purchasing statutes. These cases frequently involve a buyer with no criminal record at all — a girlfriend, a relative — who did not understand that the 'actual buyer' question on the form has felony consequences. A denied or flagged attempted purchase can itself generate charges, which is why a denial letter deserves legal attention before any response is made. People get charged for materially false statements on a gun application over honest mistakes. Be careful — if there is any doubt about how to answer a question on the form, it costs nothing to call and check first."
        ]
      }
    ],
    faq: [
      {
        q: "What happens during a Pennsylvania gun purchase background check?",
        a: "The dealer submits the buyer's application to the State Police through the Pennsylvania Instant Check System (PICS), which reviews criminal history, juvenile delinquency, and mental-health records along with federal databases. PSP either issues an approval number or denies the sale. Most checks resolve in minutes, though some are held for research."
      },
      {
        q: "Why was my PICS check denied, and can I challenge it?",
        a: "Common reasons include old convictions, involuntary mental-health commitments, PFA orders, juvenile adjudications, or plain record errors. A denied buyer may challenge the record's accuracy within 30 days; if PSP upholds the denial, an appeal lies to the Attorney General for a de novo hearing where the Commonwealth bears the burden of proof, with further review in Commonwealth Court."
      },
      {
        q: "Is buying a gun for someone else illegal in Pennsylvania?",
        a: "Buying a firearm for a person who cannot pass a background check — a straw purchase — is a third-degree felony, and lying on the purchase forms is a separate third-degree felony. A second violation is a second-degree felony carrying a five-year mandatory minimum, and federal straw-purchase charges can add up to fifteen years. Bona fide gifts to eligible persons are treated differently, and the line between the two is where these cases are fought."
      },
      {
        q: "Do private gun sales in Pennsylvania require a background check?",
        a: "Handgun transfers between private parties must be completed through a licensed dealer or county sheriff with a PICS check, except transfers between spouses, parents and children, or grandparents and grandchildren. Private sales of rifles and shotguns between Pennsylvania residents are not subject to the state dealer requirement — but transferring any firearm to someone known to be prohibited remains a crime under both state and federal law."
      },
      {
        q: "Can I go to jail for answering the gun form incorrectly?",
        a: "Yes. Many people answer a question on the purchase form incorrectly by accident, and the Commonwealth can characterize that mistake as a lie. A materially false statement on the application is charged as a third-degree felony — which means an error on a form can turn into a criminal case. When in doubt about how to answer, it is worth checking with an attorney before signing."
      }
    ]
  },

  "license-to-carry": {
    sections: [
      {
        heading: "How licenses to carry are issued",
        paragraphs: [
          "Pennsylvania licenses to carry are issued by the sheriff of the applicant's home county — in Philadelphia, by the police department's Gun Permit Unit. Applicants must be 21 or older; the license costs $19, is valid statewide for five years, and covers concealed carry and carry in a vehicle. The issuing authority must investigate and decide within 45 days, and a written denial must state its reason.",
          "The statutory disqualifiers include convictions under the drug act, Section 6105 prohibitions, pending charges punishable by more than a year, involuntary commitments, and habitual intoxication — plus the broadest clause in the statute: an individual whose 'character and reputation' indicate a likelihood of acting dangerously. Character-clause denials, often built on stale arrests, dismissed cases, or 911-call histories, are the most commonly appealed — and the most commonly reversed, because courts require actual evidence of dangerousness, not just a thick file."
        ]
      },
      {
        heading: "Revocation comes fast — and is appealable",
        paragraphs: [
          "Because a pending charge punishable by more than one year is itself a disqualifier, sheriffs typically revoke a license promptly after any felony or first-degree misdemeanor arrest — long before any conviction. The revocation notice must be in writing and state the specific reason, and the license must be surrendered within five days. Both denials and revocations are appealable to the Court of Common Pleas in the licensee's home county.",
          "The interaction between a criminal case and a license is worth planning from day one: how a charge resolves — the grading, whether it ends in dismissal, ARD, or a non-disqualifying disposition — determines whether the license comes back. Defending the criminal case and preserving the license are the same project, handled together."
        ]
      }
    ],
    faq: [
      {
        q: "How do I get a license to carry a firearm in Pennsylvania?",
        a: "Apply to the sheriff of your home county — in Philadelphia, to the police department. Applicants must be 21 or older. The issuing authority investigates criminal, mental-health, and character records and must issue or deny the license within 45 days. The license costs $19 and is valid statewide for five years, covering concealed and vehicle carry."
      },
      {
        q: "Why do sheriffs deny license-to-carry applications?",
        a: "The statute lists the disqualifiers: drug-act convictions, Section 6105 prohibitions, pending charges punishable by more than a year, involuntary commitments, habitual intoxication, and the broad character-and-reputation clause covering individuals likely to act dangerously. Character-clause denials based on old arrests or dismissed cases are the most commonly appealed — and courts regularly reverse ones unsupported by concrete evidence."
      },
      {
        q: "Can a license-to-carry denial or revocation be appealed?",
        a: "Yes. A person whose license is denied or revoked may appeal to the Court of Common Pleas for the county where they live. Revocation notices must be written, must state the specific reason, and the license must be surrendered within five days. On appeal, the issuing authority has to support its decision with evidence — a stale or unproven incident is often not enough."
      },
      {
        q: "Does a criminal charge automatically cost me my license to carry?",
        a: "Being charged with any crime punishable by more than one year is a statutory disqualifier, so sheriffs typically revoke promptly after a felony or first-degree-misdemeanor arrest — before any conviction. If the case ends in acquittal, dismissal, or a non-disqualifying result, the person can reapply or pursue an appeal. How the criminal case is resolved usually decides whether the license returns."
      }
    ]
  },

  "security-guard-act-235": {
    sections: [
      {
        heading: "What Act 235 certification is",
        paragraphs: [
          "Act 235 — the Lethal Weapons Training Act — requires privately employed agents who carry a lethal weapon on the job in Pennsylvania to hold State Police certification: armed security guards, watch guards, patrol officers, private detectives, and investigators. Certification requires a background check, a physician's physical exam with vision standards, a psychological examination, and a 40-hour training program with a written exam and range qualification. It is valid for five years, with an eight-hour recertification course to renew."
        ]
      },
      {
        heading: "Act 235 is not a license to carry",
        paragraphs: [
          "The most common — and most dangerous — misunderstanding in this field is treating the Act 235 card as a carry license. It is not. Act 235 certification does not substitute for a license to carry under Section 6106, and the State Police say the same thing in their own materials. The certification covers carrying a lethal weapon as an incident of employment. Carrying concealed or in a vehicle off duty — including commuting to and from a post with the duty weapon — requires a separate license to carry. A guard stopped on the way home with a duty weapon and no LTC is facing a felony carry charge, not a paperwork problem."
        ]
      },
      {
        heading: "When a criminal charge threatens an armed-security career",
        paragraphs: [
          "Certification disqualifiers include convictions graded first-degree misdemeanor or higher, crimes of violence, active PFA orders, and involuntary mental-health commitments — and agents must report disqualifying changes immediately. That means a single M1 conviction, even for something unrelated to firearms, can end an armed-security career, and a pending charge typically triggers revocation of the license to carry at the same time. For a certified agent, any criminal charge has to be defended through three lenses at once: the criminal grading itself, the Act 235 disqualifier list, and license-to-carry eligibility. How the charge is graded and resolved — felony versus misdemeanor, M1 versus M2 — often decides whether the client keeps working."
        ]
      }
    ],
    faq: [
      {
        q: "What is Act 235 certification and who needs it?",
        a: "Act 235, the Lethal Weapons Training Act, requires privately employed agents — armed security guards, watch guards, patrol officers, detectives, and investigators — who carry a lethal weapon on the job in Pennsylvania to complete a State Police program: background check, physical and psychological exams, and a 40-hour training course. Certification lasts five years, with an eight-hour recertification to renew."
      },
      {
        q: "Is Act 235 certification the same as a license to carry?",
        a: "No. An Act 235 card is not a substitute for a license to carry. The certification covers carrying a lethal weapon as part of employment. Carrying concealed or in a vehicle off duty — including commuting with the duty weapon — requires a separate license to carry under Section 6109."
      },
      {
        q: "What disqualifies someone from Act 235 certification?",
        a: "Disqualifiers include convictions graded first-degree misdemeanor or higher, crimes of violence, active protection-from-abuse orders, and involuntary mental-health commitments, along with failing the physical, vision, or psychological examinations. Certified agents must immediately report any change in circumstances that would have barred certification."
      },
      {
        q: "Can a criminal charge end an armed-security career?",
        a: "It can. A conviction graded M1 or higher disqualifies an agent from Act 235 certification, and a pending charge punishable by more than a year typically triggers revocation of the license to carry. How a charge is graded and resolved — felony versus misdemeanor, M1 versus M2, conviction versus dismissal or diversion — often determines whether the agent can keep working armed."
      }
    ]
  },

  "drug-charges": {
    sections: [
      {
        heading: "Possession versus possession with intent to deliver",
        paragraphs: [
          "Pennsylvania draws no specific weight line between personal-use possession and possession with intent to deliver. Simple possession is an ungraded misdemeanor — up to one year for a first offense. PWID is an ungraded felony whose maximum depends on the drug: up to 15 years and $250,000 for heroin, fentanyl, and other Schedule I and II narcotics; 10 years and $100,000 for cocaine, methamphetamine, or PCP; 5 years for marijuana and most other substances. A small amount of marijuana — 30 grams or less — is its own misdemeanor capped at 30 days. In some areas, you may only be assessed a ticket.",
          "Because there is no per-se weight threshold, PWID is proven circumstantially — packaging, scales, cash, multiple phones — usually through a Commonwealth expert. All of it can be challenged, and the same facts often tell a personal-use story: small quantity, use paraphernalia, no distribution indicators. The distance between a misdemeanor and a fifteen-year felony frequently comes down to that fight."
        ]
      },
      {
        heading: "Suppression: where drug cases are actually won",
        paragraphs: [
          "Drug prosecutions rise and fall on how the evidence was found. Pennsylvania's constitution requires both probable cause and exigent circumstances for a warrantless vehicle search under Commonwealth v. Alexander (2020) — a stricter rule than federal law. And under Commonwealth v. Barr (2021), the smell of marijuana alone no longer establishes probable cause to search, because hundreds of thousands of Pennsylvanians lawfully possess medical marijuana. Those two decisions changed car-stop cases across Pennsylvania.",
          "Beyond the search itself: constructive-possession fights in shared cars and homes, chain-of-custody and lab-analysis challenges, confidential-informant disclosure where the informant witnessed the alleged transaction, and warrant challenges for staleness and false statements. Each is a door, and a careful defense checks every one."
        ]
      },
      {
        heading: "Avoiding a conviction: diversion and immunity",
        paragraphs: [
          "First offenders have real options. ARD can end a case in dismissal and expungement. Section 17 — probation without verdict — lets a drug-dependent first offender complete probation with no verdict ever entered, followed by dismissal and expungement; it is available once in a lifetime and does not extend to PWID. Drug court offers another option.",
          "Pennsylvania's overdose immunity law also deserves to be better known: a person who calls 911 in good faith for someone overdosing — giving their name and location, cooperating, and staying — is immune from prosecution for possession and paraphernalia offenses, and so is the person who overdosed. It is a charge-defeating immunity, not a plea for mercy."
        ]
      },
      {
        heading: "What a drug conviction touches",
        paragraphs: [
          "Pennsylvania repealed the automatic driver's license suspension for drug convictions in 2018, so a conviction alone no longer suspends a license. But the other collateral consequences remain serious: professional-license discipline, firearm prohibitions under both state and federal law, public-housing consequences, and — most severely — immigration. For non-citizens, nearly any controlled-substance conviction creates removal exposure, and a PWID conviction is treated as an aggravated felony. Those consequences get weighed here before any resolution is considered, not after."
        ]
      }
    ],
    faq: [
      {
        q: "What is the difference between drug possession and possession with intent to deliver?",
        a: "Simple possession is an ungraded misdemeanor carrying up to one year for a first offense. PWID is a felony carrying up to 5, 10, or 15 years depending on the drug. Pennsylvania has no set weight that makes a case PWID — prosecutors rely on circumstantial evidence like packaging, scales, and cash, usually through expert testimony, all of which can be challenged."
      },
      {
        q: "What are the maximum penalties for drug charges in Pennsylvania?",
        a: "Simple possession: up to 1 year and $5,000 for a first offense. PWID: up to 15 years and $250,000 for heroin and other Schedule I/II narcotics; 10 years and $100,000 for cocaine, methamphetamine, or PCP; 5 years for marijuana and most other drugs. A small amount of marijuana — 30 grams or less — is a separate misdemeanor capped at 30 days; paraphernalia carries up to one year."
      },
      {
        q: "Can drug evidence be thrown out because of an illegal search?",
        a: "Often, yes. Police must always comply with the Fourth Amendment when they search your car or your person. Under Commonwealth v. Alexander (2020), Pennsylvania police need both probable cause and exigent circumstances — or a warrant — to search a vehicle. Under Commonwealth v. Barr (2021), the smell of marijuana alone no longer justifies a search. Suppression motions challenging the stop, the search, or the warrant are frequently the decisive battle in a drug case."
      },
      {
        q: "Will a drug conviction suspend my driver's license?",
        a: "No — Pennsylvania repealed the automatic license suspension for drug convictions in 2018. A conviction can still affect professional licenses, employment, housing, firearm rights, and immigration status, where even minor drug convictions can carry severe consequences for non-citizens."
      },
      {
        q: "Are there ways to avoid a conviction for a first drug offense?",
        a: "Yes. First offenders may qualify for ARD or Section 17 probation without verdict, both ending in dismissal and expungement when completed. Bucks, Chester, Delaware, Montgomery, and Philadelphia counties all operate drug treatment courts emphasizing recovery over jail. Eligibility differs by county and charge — PWID generally does not qualify for Section 17."
      },
      {
        q: "Can I be charged if I call 911 for someone who is overdosing?",
        a: "Pennsylvania's overdose immunity law protects both the caller and the person overdosing from prosecution for possession and paraphernalia offenses when the caller reports in good faith, provides their name and location, cooperates with responders, and stays until help arrives. The immunity does not cover delivery charges."
      }
    ]
  },

  "violent-crimes": {
    sections: [
      {
        heading: "Simple assault, aggravated assault, and what elevates a charge",
        paragraphs: [
          "Simple assault — causing or attempting bodily injury — is generally a second-degree misdemeanor, dropping to a third-degree misdemeanor for a fight entered by mutual consent. Aggravated assault is a different world: a second-degree felony for bodily injury with a deadly weapon or against protected classes like police officers and teachers, and a first-degree felony — up to twenty years — for causing or attempting serious bodily injury, meaning injury that risks death or causes permanent impairment.",
          "The gap between those gradings is where these cases are fought. A bar-fight punch charged as first-degree aggravated assault rests on the claim that the defendant attempted serious bodily injury — an element the Commonwealth must actually prove, and one that frequently cannot survive a contested preliminary hearing. Strangulation deserves particular attention: it requires no visible injury at all, and jumps from a misdemeanor to a second-degree felony in domestic contexts and a first-degree felony when a protective order was in effect. Robbery, terroristic threats, and recklessly endangering another person round out the charges most often seen alongside assault counts."
        ]
      },
      {
        heading: "Self-defense in Pennsylvania",
        paragraphs: [
          "Pennsylvania law justifies force a person reasonably believes immediately necessary for protection, and deadly force against threats of death, serious bodily injury, kidnapping, or forcible sexual assault. There is no duty to retreat in one's home or workplace.",
          "Just as important is who carries the burden. Once any evidence of self-defense enters the case — from any witness, including the Commonwealth's — the prosecution must disprove it beyond a reasonable doubt. The defendant never has to prove justification. That makes early investigation decisive: 911 audio from both sides, photographs of the client's own injuries before they fade, surveillance video before it is overwritten, and scene geometry all become the raw material of a justification defense."
        ]
      },
      {
        heading: "When the complainant wants to drop the charges",
        paragraphs: [
          "<strong>In Pennsylvania, the Commonwealth — not the complainant — controls the prosecution.</strong> A complainant cannot withdraw charges; only the District Attorney can. Prosecutors regularly proceed without a cooperating complainant, using 911 recordings, photographs, medical records, body-camera footage, and other witnesses. A recantation creates proof problems, but it does not end the case — and no-contact bail conditions remain fully enforceable while the case is open, which is something families need to understand early and clearly."
        ]
      }
    ],
    faq: [
      {
        q: "The alleged victim wants to drop the charges. Is the case over?",
        a: "No. Criminal charges belong to the Commonwealth, not the complainant. Only the District Attorney can withdraw them, and prosecutors often proceed using 911 recordings, photographs, medical records, and police testimony even without a cooperating complainant. No-contact conditions also remain in effect while the case is open. One caution: pressuring or persuading a witness not to come to court — by anyone — can itself be prosecuted as witness tampering, a separate crime."
      },
      {
        q: "What is the difference between simple assault and aggravated assault?",
        a: "Simple assault — causing or attempting bodily injury — is a misdemeanor, usually second-degree. Aggravated assault is a felony: second-degree for bodily injury with a deadly weapon or against protected workers like police and teachers, and first-degree — up to 20 years — for causing or attempting serious bodily injury, meaning injury that risks death or causes permanent impairment."
      },
      {
        q: "Is self-defense legal in Pennsylvania?",
        a: "Yes. A person may use force reasonably believed immediately necessary for protection, and deadly force against threats of death, serious bodily injury, kidnapping, or forcible sexual assault. There is no duty to retreat at home or work."
      },
      {
        q: "Who has to prove self-defense?",
        a: "Not the defendant. Once any evidence of self-defense enters the case — from any witness, including the prosecution's — the Commonwealth must disprove it beyond a reasonable doubt. A defendant does not carry the burden of proving justification at trial."
      },
      {
        q: "What is strangulation under Pennsylvania law?",
        a: "Strangulation means knowingly impeding someone's breathing or circulation by pressure on the throat or neck, or by blocking the nose and mouth. Visible injury is not required, and its absence is not a defense. It is a second-degree felony against a family or household member, and first-degree if a protective order was in effect."
      }
    ]
  },

  "computer-crimes": {
    sections: [
      {
        heading: "How these investigations start",
        paragraphs: [
          "Most computer crime cases in Pennsylvania begin long before an arrest. Platforms like Google and Meta detect flagged files and report to the National Center for Missing and Exploited Children, whose CyberTips route to Pennsylvania's Internet Crimes Against Children task force. Police software separately monitors peer-to-peer networks for flagged file hashes. An IP address gets subpoenaed into a subscriber name and address, and a search warrant follows at the door.",
          "That sequence contains the case's first defenses. An IP address identifies a household's connection — not a person. Shared homes, open Wi-Fi, and multi-user devices all complicate the attribution the Commonwealth needs."
        ]
      },
      {
        heading: "The charges — and the state-federal divide",
        paragraphs: [
          "Pennsylvania's hacking statutes — unlawful use of a computer, disruption of service, computer trespass — are third-degree felonies. In cases involving child sexual abuse material, knowing possession or intentional viewing is a third-degree felony for a first offense and dissemination the same, with both escalating to second-degree felonies for repeat offenses or aggravating factors — and each file can be charged as a separate count. Unlawful contact with a minor and sexual extortion carry their own gradings, and convictions under the CSAM statutes carry sex-offender registration of fifteen years to life.",
          "The most consequential fact in many of these cases is which courthouse they land in. Federal law imposes a five-year mandatory minimum for receipt or distribution — a mandatory Pennsylvania simply does not have. Cases involving distribution evidence, large collections, or multi-state conduct are more likely to be adopted federally. Early, quiet advocacy about charging decisions, made while the forensic review is still underway, can be the most important work in the entire case."
        ]
      },
      {
        heading: "Devices, forensics, and the knowledge element",
        paragraphs: [
          "Seized devices go to a forensic lab for months. Charges typically follow the forensic report, not the search — and that window is when the defense catches up: scrutinizing the warrant, retaining a defense forensic expert, and protecting the client from interviews. The knowledge element matters enormously: files in browser caches, thumbnails, deleted space, or auto-synced folders may not prove knowing possession, and peer-to-peer software that shares a download folder by default is often the difference between a possession charge and a distribution charge. User attribution — who was at the keyboard — is a genuine trial issue, not a formality."
        ]
      }
    ],
    faq: [
      {
        q: "How do computer crime investigations usually start?",
        a: "Most begin with a CyberTipline report — platforms detect a flagged file and report to the National Center for Missing and Exploited Children, which forwards it to Pennsylvania's ICAC task force — or with police software monitoring peer-to-peer networks. Investigators subpoena the internet provider to match an IP address to a home, then execute a search warrant. An IP address identifies a connection, not a person."
      },
      {
        q: "What is the difference between possession, receipt, and distribution charges?",
        a: "In Pennsylvania, knowing possession or intentional viewing of CSAM is a third-degree felony for a first offense; dissemination is graded similarly but both escalate for repeat offenses and aggravating factors. Federally, the gap is dramatic: possession has no mandatory minimum, while receipt or distribution carries a five-year mandatory minimum. File-sharing software that uploads automatically is often the dividing line."
      },
      {
        q: "The police took my computer and phone. What happens now?",
        a: "Seized devices go to a forensic lab, where examiners create verified copies and search them under the warrant's terms — a process that can take months. Charges often follow the forensic report rather than the search. That window is when counsel can scrutinize the warrant, retain a defense forensic expert, and protect against interviews. Devices are rarely returned quickly."
      },
      {
        q: "When does a computer case become federal instead of state?",
        a: "Any internet transmission technically supports federal jurisdiction, so the real question is prosecutorial choice. Cases involving distribution, production, large collections, prior offenses, or multi-state conduct are more likely to be adopted federally, where mandatory minimums are far harsher. Purely local matters more often stay in county court — and where a case is charged can matter more than almost anything else."
      }
    ]
  },

  "probation-parole-violations": {
    sections: [
      {
        heading: "The detainer is the emergency",
        paragraphs: [
          "The first crisis in most violation cases is not the hearing — it is the detainer. When a violation is alleged, the probation department or Parole Board lodges a detainer that holds the person in custody regardless of bail on any new charge. People routinely post bail on a new case and remain in jail anyway. Getting the detainer lifted — at the Gagnon I hearing or by motion to the supervising judge — is typically the most urgent work in the case, and it is where early representation earns its keep."
        ]
      },
      {
        heading: "Gagnon I and Gagnon II",
        paragraphs: [
          "Violation proceedings run in two stages. Gagnon I is a prompt preliminary hearing: whether there is probable cause that a violation occurred and whether the detainer should hold. Gagnon II is the final hearing before the judge, where the Commonwealth must prove the violation by a preponderance of the evidence — a lower standard than trial, with hearsay more freely admitted — and the judge decides whether to continue, modify, or revoke supervision. Counsel is provided as of right, evidence can be presented and challenged, and in new-conviction cases the real fight is usually over the disposition rather than the violation itself."
        ]
      },
      {
        heading: "Technical violations after Act 44 — the rules changed",
        paragraphs: [
          "Pennsylvania's 2023 probation reform changed the landscape for technical violations — missed appointments, failed screens, unpaid costs. There is now a statutory presumption against confinement for most technical violations, with jail capped at 14 days for a first violation and 30 for a second. Exceptions exist — absconding, weapons- or sexual-conduct-related violations, repeated program failures, or an identifiable threat to public safety — and a new conviction remains full-exposure: the court can resentence up to the original maximum. Because courts are still adjusting to this framework, invoking the presumptions and caps explicitly, on the record, matters.",
          "State parole runs on its own track: technical violators face capped recommitments with presumptive reparole, while convicted violators can forfeit their street time — the time spent at liberty on parole — extending the sentence's end date. Every recalculation order deserves a check; credit errors are common and appealable."
        ]
      }
    ],
    faq: [
      {
        q: "What happens at a Gagnon hearing?",
        a: "There are two. Gagnon I is a prompt preliminary hearing where a neutral decision-maker finds whether there is probable cause that a violation occurred and whether a detainer keeps the person in custody. Gagnon II is the final hearing: the Commonwealth must prove the violation by a preponderance of the evidence, and the judge decides whether to continue, modify, or revoke supervision."
      },
      {
        q: "What is the difference between a technical violation and a new-charge violation?",
        a: "A technical violation breaks a condition of supervision — missed appointments, failed drug tests, unpaid costs — without a new conviction. A direct violation is a conviction for a new offense. The difference now controls outcomes: Pennsylvania's Act 44 presumes against jailing technical violators and caps confinement, while a new conviction exposes a probationer to resentencing up to the original maximum."
      },
      {
        q: "Can I still be jailed for a technical violation?",
        a: "Yes, but the law now limits it. For most technical violations there is a presumption against confinement, with jail capped at 14 days for a first violation and 30 for a second. Exceptions apply — absconding, weapons- or sexual-conduct-related violations, repeated program failures, or a finding of an identifiable threat to public safety — and a third violation removes the caps."
      },
      {
        q: "I posted bail on my new case — why am I still in jail?",
        a: "Almost certainly a probation or parole detainer. A detainer is a separate hold lodged by the supervising authority, and bail on the new charge does not release it. Getting the detainer lifted — at a Gagnon I hearing, by motion to the supervising judge, or through the Parole Board for state cases — is typically the most urgent step in any violation case."
      }
    ]
  },

  "dui-defense": {
    sections: [
      {
        heading: "Pennsylvania's three tiers — and when a DUI becomes a felony",
        paragraphs: [
          "Pennsylvania grades alcohol DUIs by blood alcohol concentration: general impairment (.08 to .099), high rate (.10 to .159), and highest rate (.16 and above). Drug-based DUIs and most refusal cases are penalized at the highest tier. The penalties escalate sharply — a first offense runs from probation and a $300 fine at the lowest tier to a 72-hour mandatory minimum and a $1,000-plus fine at the highest — and prior offenses within a ten-year lookback multiply everything: mandatory minimums, fines, suspension lengths, and grading.",
          "A DUI becomes a third-degree felony on a third offense within ten years at the highest tier or involving drugs, and on any fourth offense. Under Deana's Law, a fourth or subsequent highest-tier or drug DUI is a second-degree felony carrying up to ten years. Separate felony statutes apply when impaired driving causes serious injury or death.",
          "In 2025, the Pennsylvania Supreme Court held in Commonwealth v. Shifflett that a prior ARD acceptance cannot be treated as a prior conviction for mandatory-minimum purposes, and the legislature responded with Act 58 of 2025, which created a distinct offense for a DUI committed within ten years after completing ARD, carrying second-offense-level mandatory minimums. How a prior ARD is treated is now one of the first questions in any repeat-DUI case, and getting it right can change the mandatory minimum a client faces."
        ]
      },
      {
        heading: "The license is a separate case",
        paragraphs: [
          "The criminal case and the driver's license run on separate tracks with separate deadlines — and winning one does not decide the other. A chemical-test refusal triggers an automatic civil suspension from PennDOT of 12 or 18 months that stands even if the DUI charge is dismissed, and it must be appealed within 30 days of the notice's mailing date. Conviction suspensions run 12 or 18 months depending on the tier and priors, though a first-offense general-impairment conviction carries no suspension at all.",
          "Most first offenders can apply for an ignition interlock limited license immediately rather than sitting out a hard suspension, and time on the interlock license counts toward any required interlock period. Commercial drivers face a harsher reality: a DUI in a personal vehicle still disqualifies a CDL for a year, ARD counts as a conviction against a CDL, and no limited license restores commercial driving — which makes early, CDL-aware strategy essential for anyone who drives for a living."
        ]
      },
      {
        heading: "Where DUI cases are defended",
        paragraphs: [
          "DUI prosecutions are built on technical evidence, and technical evidence has rules. The BAC generally must be established within two hours of driving — late blood draws need statutory justification. After Birchfield v. North Dakota, a warrantless blood draw requires valid consent given after accurate warnings, and every blood case gets checked for the warrant, the consent, and the exact form the officer read. Breath results have their own regulatory checklist: Pennsylvania requires two consecutive breath tests using the lower result, a simulator test, and an accuracy inspection within 30 days before evidentiary use — and if the two breath results differ by .02 or more, the results are disregarded and the device comes out of service. Calibration and accuracy records are discoverable, and they are among the first documents requested here in every breath case.",
          "Field sobriety testing has limits too: the standard battery is admissible as observation, but the eye-movement test requires expert foundation Pennsylvania courts do not presume. And in marijuana cases, metabolites remain detectable long after any impairment has passed — an issue that matters for the growing number of medical marijuana patients charged at the highest tier without evidence of actual impairment.",
          "First offenders in every county in this practice have access to ARD, and each District Attorney sets its own admission policy — Chester County and Philadelphia publish detailed criteria, while Bucks, Delaware, and Montgomery counties evaluate applications case by case. A required CRN evaluation and alcohol highway safety school are part of the process everywhere. Whether ARD, a tier reduction, a suppression motion, or trial is the right path is exactly the kind of judgment a DUI case deserves before anything is signed."
        ]
      }
    ],
    faq: [
      {
        q: "Will a DUI cost me my driver's license?",
        a: "Most DUI convictions carry a 12- or 18-month suspension, but a first-offense general-impairment conviction — BAC .08 to .099 with no accident — carries no suspension at all. Since Act 33 of 2016, most first offenders can apply for an ignition interlock limited license immediately and keep driving. A chemical-test refusal triggers its own separate civil suspension, even if the criminal case is later won."
      },
      {
        q: "What happens if I refused the breath or blood test?",
        a: "Refusal triggers an automatic PennDOT suspension — 12 months, or 18 with a prior — that applies even if the DUI charge is dismissed, and it must be appealed within 30 days of the notice's mailing. Refusal of a breath test, or of a blood test backed by a warrant, also places an alcohol case in the highest penalty tier upon conviction."
      },
      {
        q: "What are Pennsylvania's DUI tiers?",
        a: "General impairment (.08 to .099), high rate (.10 to .159), and highest rate (.16 and above), with drug DUIs and most refusals penalized at the highest tier. A first offense ranges from probation and a $300 fine at the lowest tier to 72 hours in jail and a $1,000-plus fine at the highest. The BAC generally must be established within two hours of driving, which makes borderline results and testing delays legally significant."
      },
      {
        q: "When is a DUI a felony in Pennsylvania?",
        a: "A third offense within ten years at the highest tier or involving drugs is a third-degree felony, as is any fourth offense. Under Deana's Law, a fourth or subsequent highest-tier or drug DUI is a second-degree felony punishable by up to ten years. Separate felony statutes apply when impaired driving causes serious injury or death."
      },
      {
        q: "Who qualifies for ARD, and what happens afterward?",
        a: "ARD is first-offender diversion controlled by each county's District Attorney, generally excluding anyone with a DUI or ARD within ten years, cases with death or serious injury, or a passenger under 14. Completion results in dismissal and expungement eligibility. Since Act 58 of 2025, a new DUI within ten years of completing ARD is a distinct, more serious offense — and ARD counts as a conviction against a commercial driver's license."
      },
      {
        q: "Can prescription medication or marijuana lead to a DUI?",
        a: "Yes. Pennsylvania's statute covers any amount of a Schedule I substance or its metabolites — including marijuana, even for medical marijuana cardholders — and any drug, prescribed or not, that impairs safe driving. Because marijuana metabolites remain detectable for days or weeks after impairment has passed, cardholders can face highest-tier charges without being impaired — a significant and actively litigated defense issue."
      }
    ]
  },

  "juvenile-defense": {
    sections: [
      {
        heading: "A different system with different stakes",
        paragraphs: [
          "Juvenile court is built around rehabilitation, not punishment — and the vocabulary reflects the difference. Children aged 10 through 17 face delinquency petitions, not criminal charges; adjudications, not convictions; dispositions, not sentences. A judge decides the case without a jury, the Commonwealth must still prove its allegations beyond a reasonable doubt, and outcomes range from probation and treatment to placement, with supervision possible until age 21. Most hearings are closed to the public.",
          "The system's flexibility is also its opportunity. Informal adjustment can resolve a case before a petition is ever filed, and a consent decree suspends the case entirely — both end with no adjudication at all and fast expungement eligibility. Early involvement, before charging decisions harden, is where these outcomes get built."
        ]
      },
      {
        heading: "When a child faces adult court",
        paragraphs: [
          "Murder charges start in adult court at any age, and certain violent offenses committed at 15 or older with a deadly weapon do as well. For everything else, prosecutors can petition to transfer a child 14 or older charged with a felony — and the fight over that motion, or over decertification back to juvenile court for a child charged as an adult, is often the whole case. The difference is stark: juvenile supervision ending at 21 versus adult exposure up to twenty years and a permanent public record.",
          "Decertification is a buildable case. School records, trauma and mental-health evaluations, expert testimony on adolescent development, and concrete treatment plans are the evidence that meets the child's burden of showing the juvenile system can work. That record has to be assembled quickly and deliberately — while the client waits, it is the defense that carries the case forward."
        ]
      },
      {
        heading: "The record does not erase itself — and school runs on its own track",
        paragraphs: [
          "The most persistent myth in juvenile law is that records disappear at 18. They do not. Juvenile records are confidential but exist until a court orders expungement: dismissed cases and completed diversions can be expunged within months, misdemeanor-level adjudications generally after two clean years, felony-level after five — and someone must actually file. Serious sexual offenses committed at 14 or older cannot be expunged at all. Unexpunged records can surface in FBI fingerprint checks, military enlistment, and licensing.",
          "Meanwhile, Pennsylvania's Safe Schools laws require information sharing between courts, probation, and school districts, so school discipline — suspension, expulsion, alternative placement — often proceeds in parallel with the court case. Defending a juvenile means managing both tracks at once, because a good court outcome can be undone by an unmanaged school one."
        ]
      }
    ],
    faq: [
      {
        q: "Can my child be tried as an adult in Pennsylvania?",
        a: "Yes, two ways. Murder charges — and certain violent offenses committed at 15 or older with a deadly weapon — start automatically in adult court. Otherwise, prosecutors can ask a judge to transfer a child 14 or older charged with a felony. A juvenile charged as an adult can petition for decertification back to juvenile court, where the defense builds the case that the juvenile system can work."
      },
      {
        q: "How is juvenile court different from adult court?",
        a: "Juvenile court aims at rehabilitation: a judge, not a jury, decides the case, and outcomes are dispositions — probation, treatment, or placement — lasting no later than age 21. Adult court means public proceedings, jury trials, exposure up to the statutory maximum, and a permanent public criminal record. The Commonwealth must prove its case beyond a reasonable doubt in both."
      },
      {
        q: "Will my child's juvenile record disappear automatically?",
        a: "No — that is a common myth. Juvenile records are confidential but remain until a court orders expungement. Dismissed cases and completed diversions can be expunged within months; misdemeanor-level adjudications generally after two clean years, felony-level after five. Someone must file for expungement — and serious sexual offenses committed at 14 or older cannot be expunged."
      },
      {
        q: "Will the school find out about my child's case?",
        a: "Usually, yes. Pennsylvania's Safe Schools laws require information sharing between courts, probation, and school districts for certain offenses. School discipline — suspension, expulsion, or alternative placement — can proceed separately from the court case, so both tracks need attention at the same time."
      }
    ]
  },

  "return-of-property": {
    sections: [
      {
        heading: "Rule 588 — the motion that gets property back",
        paragraphs: [
          "Property seized by police is not returned automatically, even when a case ends well. The remedy is a motion for return of property under Rule 588, filed in the Court of Common Pleas for the county where the property is held. The person seeking return must show entitlement to lawful possession; the burden then shifts to the Commonwealth to prove the property is contraband or was used in crime. Absent that proof, the rule says the property shall be restored — and since Commonwealth v. Irland (2018), the Commonwealth cannot keep property without actual statutory forfeiture authority.",
          "Timing is the trap. A person charged with a crime must file while the case is pending or within roughly 30 days after the charges conclude. Waiting longer generally waives the remedy entirely — which is why return motions belong on the calendar the day a case resolves, not months later when the inconvenience becomes acute."
        ]
      },
      {
        heading: "Forfeiture is a different fight — with a higher burden on the Commonwealth",
        paragraphs: [
          "A return motion is the owner asking for property back; forfeiture is the Commonwealth suing to keep it. Pennsylvania's 2017 forfeiture reforms raised the stakes for prosecutors: once the claimant shows lawful ownership, the Commonwealth must prove unlawful use by clear and convincing evidence, and courts can reject forfeitures grossly disproportionate to the offense. Cash near drugs, cars driven to an alleged transaction, phones in a pocket — proximity alone is contestable, and the elevated burden makes many of these fights winnable."
        ]
      },
      {
        heading: "The practical points that decide these cases",
        paragraphs: [
          "Proof of ownership wins return motions: property receipts, titles, purchase records, and bank statements for cash provenance. Many returns resolve by negotiation with the District Attorney's office — especially phones after the data has been extracted. When a device is held as evidence in an open case, a forensic image in lieu of the physical device is often a workable middle ground. Firearms carry an extra wrinkle: agencies will not release a gun to someone who has become legally prohibited, so a conviction during the case can make direct return impossible — though transfer to a licensed dealer or an eligible third party may still be negotiated. And because a return motion asserts ownership under oath, its timing relative to any open case deserves careful thought."
        ]
      }
    ],
    faq: [
      {
        q: "How do I get property back that police seized?",
        a: "The remedy is a motion for return of property under Pennsylvania Rule of Criminal Procedure 588, filed in the Court of Common Pleas for the county where the property is held. It is a real court proceeding with a burden of proof and firm deadlines: the person seeking return must show entitlement to lawful possession, and the Commonwealth then has the chance to argue the property is contraband or was used in a crime — which is why these motions are best prepared and argued by an attorney rather than handled alone."
      },
      {
        q: "Is there a deadline to ask for seized property back?",
        a: "Effectively, yes. A motion generally must be filed while the case is pending, or within roughly 30 days after the case is resolved. Waiting longer will generally waive the remedy, so return motions are best filed alongside the criminal case or immediately after disposition."
      },
      {
        q: "What property can't be returned?",
        a: "Contraband that is illegal to possess — drugs, illegal weapons — is never returned. Property the Commonwealth proves was used in crime can be kept or forfeited. Firearms cannot be released to anyone legally prohibited from possessing them, even as the lawful owner, though transfer to a dealer or eligible third party may be an option."
      },
      {
        q: "What is the difference between a return motion and forfeiture?",
        a: "A return motion is the owner asking the court for property back. Forfeiture is the Commonwealth suing to keep it permanently. Since Pennsylvania's 2017 reforms, the Commonwealth must prove unlawful use by clear and convincing evidence, and courts can reject forfeitures grossly disproportionate to the offense."
      }
    ]
  },

  "traffic-violations": {
    sections: [
      {
        heading: "How points become suspensions",
        paragraphs: [
          "Pennsylvania assigns two to five points per moving violation. At six points, PennDOT orders corrective action — a written exam or driver improvement school the first time, departmental hearings with possible 15- or 30-day suspensions for later accumulations. At eleven points, suspension is automatic: five days per point for a first suspension, escalating to a full year by a fourth. Three points come off for every twelve violation-free months, and a record that reaches zero and holds it for a year resets entirely. Drivers under 18 face a 90-day suspension at just six points or a single conviction of 26 mph or more over the limit."
        ]
      },
      {
        heading: "Paying the ticket is pleading guilty",
        paragraphs: [
          "A paid fine is a conviction. The points and any collateral suspension follow automatically — there is no paying a ticket 'without points.' And some offenses carry mandatory suspensions entirely independent of points: reckless driving, racing, fleeing police, school-bus and railroad-gate violations, and hit-and-run among them. The plea-bargaining trap hiding in that list: reckless driving carries zero points but a six-month suspension, while careless driving carries three points and no suspension. A driver who 'takes the deal' to reckless without knowing that has traded a manageable outcome for a suspended license.",
          "Citations are tried before a Magisterial District Judge, where the Commonwealth must prove the violation beyond a reasonable doubt and reduced charges or dismissals are common outcomes. A conviction can be appealed for an entirely new trial in the Court of Common Pleas within 30 days. For commercial drivers, the stakes are steeper everywhere: serious traffic violations disqualify a CDL even when committed in a personal vehicle, and federal rules bar masking CDL convictions through diversion."
        ]
      }
    ],
    faq: [
      {
        q: "How do points lead to a license suspension?",
        a: "Pennsylvania assigns two to five points per moving violation. At six points, PennDOT orders corrective action — an exam or driver school first, then hearings with possible short suspensions. At eleven points, suspension is automatic: five days per point at first, escalating to a year by a fourth suspension. Three points are removed for every twelve violation-free months."
      },
      {
        q: "Is paying a traffic ticket the same as admitting guilt?",
        a: "Yes. Paying the fine is a guilty plea, and the conviction is reported to PennDOT, which assigns points and imposes any collateral suspension automatically. Some offenses — reckless driving, fleeing, racing, hit-and-run — carry mandatory suspensions independent of points, so the true cost of simply paying can far exceed the fine on the citation."
      },
      {
        q: "Which tickets are worth fighting?",
        a: "Any citation carrying four or five points, any offense with its own mandatory suspension, any high-speed charge of 26 mph or more over the limit, and any ticket that pushes a record toward six or eleven points. Commercial drivers and drivers under 18 have far lower tolerances. Summary trials are heard by a Magisterial District Judge, and convictions can be appealed for a new trial within 30 days."
      },
      {
        q: "What happens when an out-of-state driver gets a Pennsylvania ticket?",
        a: "Pennsylvania reports convictions to the driver's home state, which applies its own point and suspension rules. Pennsylvania can also suspend a non-resident's privilege to drive in the Commonwealth. Ignoring a citation is the worst option: failure to respond leads to an indefinite hold that most home states enforce by suspending the driver's license until the Pennsylvania case is resolved."
      }
    ]
  },

  "license-appeal": {
    sections: [
      {
        heading: "Thirty days — and the clock starts at the mailbox",
        paragraphs: [
          "A PennDOT suspension can be appealed to the Court of Common Pleas, but the deadline is 30 days from the mailing date of the notice — not the day it was read — and the deadline is jurisdictional. Late appeals are almost never heard, regardless of merit. For most suspensions the appeal is filed in the driver's home county; chemical-test refusal appeals are filed in the county of the DUI arrest.",
          "Filing a timely appeal of a suspension generally operates as an automatic supersedeas: the driver keeps a valid license until the judge rules, often months later. That alone is frequently the practical value of filing — it converts an immediate crisis into a scheduled hearing."
        ]
      },
      {
        heading: "What the appeal can and cannot do",
        paragraphs: [
          "The hearing is a fresh civil proceeding before a judge. PennDOT must first establish its grounds through the certified driving record; the driver then rebuts. What can be attacked: whether the reported conviction actually supports the suspension imposed, wrong offense codes, miscounted points, and credit miscalculations. In refusal cases, PennDOT must prove four things — reasonable grounds for the DUI arrest, a request to test, an actual refusal, and proper warnings — and each element is contestable, including medical inability to complete a breath test and defects in the warning form the officer read.",
          "What the appeal cannot do is re-litigate the underlying conviction: a license appeal tests PennDOT's action, not the traffic or DUI case. And for drivers who cannot win the appeal, limited licenses fill the gap — the occupational limited license for many point and non-DUI suspensions, and the ignition interlock limited license for DUI and refusal suspensions, available immediately to most first-time DUI offenders. Neither restores commercial driving, and time never starts running on a suspension until the license is actually surrendered to PennDOT — a credit trap that catches people who thought they had already served their time."
        ]
      }
    ],
    faq: [
      {
        q: "How does a license suspension appeal work, and what is the deadline?",
        a: "A driver has 30 days from the mailing date of the PennDOT notice to appeal to the Court of Common Pleas — the home county for most suspensions, the county of arrest for refusals. A timely appeal of a suspension generally stays it, so the driver keeps driving until the judge rules. The 30-day deadline is jurisdictional, and late appeals are almost never heard."
      },
      {
        q: "How is the license appeal different from the criminal case?",
        a: "They are separate proceedings. The license appeal is a civil case against PennDOT decided by a judge on a preponderance standard; the criminal case is prosecuted by the District Attorney and requires proof beyond a reasonable doubt. Winning one does not decide the other — a refusal suspension can stand even after a DUI acquittal."
      },
      {
        q: "What is an occupational limited license, and who qualifies?",
        a: "An occupational limited license allows driving for work, study, and medical treatment during many suspensions; PennDOT decides petitions within 20 days. DUI, ARD, and refusal suspensions are not eligible — those drivers use the ignition interlock limited license, available immediately to most first-time DUI offenders. Neither limited license authorizes commercial driving. See PennDOT's website for the most up-to-date information."
      },
      {
        q: "What actually happens at the appeal hearing?",
        a: "A common pleas judge hears the case without a jury. PennDOT introduces the certified driving record — and in refusal cases, officer testimony establishing reasonable grounds, a test request, proper warnings, and a refusal. We can cross-examine and present evidence, such as medical proof a breath test could not be completed or records showing the reported conviction or points are wrong."
      }
    ]
  },

  "pfa": {
    sections: [
      {
        heading: "What a PFA is — and what counts as abuse",
        paragraphs: [
          "A Protection From Abuse order is a civil order available between family or household members — spouses and former spouses, intimate partners, relatives, and co-parents. The statute defines abuse as causing or attempting bodily injury or sexual offenses, placing someone in reasonable fear of imminent serious bodily injury, false imprisonment, abuse of a child, or a repeated course of conduct — following, stalking — that creates reasonable fear of bodily injury. Those definitional elements are precisely where contested PFA hearings are fought.",
          "The process moves fast. A temporary order can be entered the day of filing, ex parte, on an allegation of immediate danger — and it can bar the respondent from their own home, pause contact with children, and require surrender of firearms to the sheriff, a dealer, or an attorney within 24 hours. The final hearing must be held within ten business days, and a final order can last up to three years, with extensions possible."
        ]
      },
      {
        heading: "The final hearing is a real trial — treat it like one",
        paragraphs: [
          "At the final hearing, the petitioner must prove abuse by a preponderance of the evidence, the rules of evidence apply, witnesses testify under oath, and everything is transcribed. Cross-examination, subpoenaed records — texts, call logs, medical records — and defense witnesses all matter. And because PFA petitions frequently accompany separations, custody disputes, and parallel criminal charges, the hearing's consequences reach beyond the order itself: testimony given there can be used in the criminal case, and the custody terms in a PFA often set the status quo a custody court later sees.",
          "That interplay demands strategy. A respondent with pending criminal charges who testifies at the PFA hearing hands the Commonwealth sworn testimony; one who stays silent may lose the civil hearing. Pennsylvania law also permits resolution by consent agreement — accepting terms without any finding or admission of abuse — which avoids an adverse finding but remains fully enforceable. Which path serves a particular client depends on the whole board, not just the PFA."
        ]
      },
      {
        heading: "Violations and consequences",
        paragraphs: [
          "Violating a PFA is indirect criminal contempt: police can arrest without a warrant on probable cause and must seize any firearms in the respondent's possession. Conviction carries a $300 to $1,000 fine plus up to six months in jail, decided by a judge without a jury — and the same conduct can generate separate criminal charges for stalking, harassment, or assault. A final PFA also triggers the federal firearm prohibition while it lasts, appears in civil court records that landlords and employers can find, and — though it is not a criminal conviction — a contempt conviction is. The order deserves to be taken exactly as seriously as a criminal case, because its consequences behave like one."
        ]
      }
    ],
    faq: [
      {
        q: "What counts as abuse under the PFA Act?",
        a: "Pennsylvania defines abuse between family or household members as causing or attempting bodily injury or sexual offenses, placing someone in reasonable fear of imminent serious bodily injury, false imprisonment, physical or sexual abuse of a child, or a repeated course of conduct — such as following or stalking — that creates reasonable fear of bodily injury. It applies only between family or household members, including current or former intimate partners."
      },
      {
        q: "What is the difference between a temporary and a final PFA?",
        a: "A temporary PFA is entered ex parte — without the defendant present — based on the petition alone, when a judge finds immediate danger. It lasts until the final hearing, which must be held within ten business days. A final PFA issues only after a hearing where both sides can testify and present evidence, and can last up to three years."
      },
      {
        q: "What happens right after a PFA is filed against me?",
        a: "If a temporary order issues, the respondent can be immediately barred from the home and from contact with the petitioner, and ordered to surrender firearms within 24 hours to the sheriff, a licensed dealer, or an attorney. Police serve the order. Nothing in the petition has been proven at that point — that happens at the final hearing, which is where the case is actually decided."
      },
      {
        q: "What happens if a PFA is violated?",
        a: "Violation is indirect criminal contempt: police can arrest without a warrant on probable cause and must seize any firearms in the respondent's possession. Conviction carries a $300 to $1,000 fine plus up to six months in jail, decided by a judge without a jury — and separate criminal charges can be filed for the same conduct."
      },
      {
        q: "Will a PFA affect my job, my guns, or my custody case?",
        a: "A final PFA requires surrendering firearms and triggers a federal possession ban while the order lasts, which matters for any job requiring a weapon. The PFA itself is civil — not a criminal conviction — but it appears in court records, a contempt conviction is criminal, and the custody and residence terms in a PFA often shape a later custody case."
      }
    ]
  },

  "expungement": {
    sections: [
      {
        heading: "Expungement, sealing, and Clean Slate — three different things",
        paragraphs: [
          "Expungement destroys the record. Sealing — 'limited access' in Pennsylvania — hides it from the public and most employers, while police, courts, and certain licensing and federal screenings can still see it. Clean Slate is Pennsylvania's automatic sealing law: qualifying records seal by operation of law, with no petition and no fee, on a rolling monthly cycle. Knowing which remedy a record qualifies for — and which it never will — is the entire game.",
          "The eligibility map, as it stands after the 2023 Clean Slate expansion: charges that ended in dismissal, withdrawal, or acquittal can be expunged at any time, and Clean Slate seals them automatically on an ongoing basis. Summary convictions can be expunged after five arrest-free years. Most second- and third-degree misdemeanors seal automatically after seven conviction-free years; eligible first-degree misdemeanors can be sealed by petition after seven; certain felonies — including qualifying drug felonies — after ten. Restitution must be paid first. First- and second-degree felonies, crimes of violence, firearms offenses, sex offenses, and most domestic-violence-related convictions are excluded from sealing entirely — for those, a pardon is the remaining path, and since 2023 a full pardon leads to automatic expungement."
        ]
      },
      {
        heading: "ARD, and who still sees a sealed record",
        paragraphs: [
          "Completing ARD entitles most people to expungement of the arrest record — but a petition usually must be filed; it does not happen by itself. Prosecutors retain DUI-ARD information for the ten-year lookback, PennDOT keeps the notation on the driving record, and ARD counts as a conviction against a commercial driver's license — nuances that matter when deciding whether ARD is the right resolution in the first place.",
          "Sealed records are hidden, not gone. Criminal justice agencies and courts always see them; so do child-protective screenings and employers required by federal law to check criminal history, such as banks. Immigration authorities apply their own rules, and expunged or sealed state convictions generally still count for immigration purposes. Older commercial background databases can also lag behind a sealing. The honest framing: sealing dramatically shrinks who can see a record — it does not rewrite history for every audience."
        ]
      },
      {
        heading: "How the process actually works — and why it should be verified",
        paragraphs: [
          "Petitions are filed in the county where the case happened, on statewide forms, with filing fees that vary by county; the District Attorney has a window to object, and unopposed petitions are often granted without a hearing. For non-conviction records, the Commonwealth bears the burden of justifying keeping the record. One caveat from the case law: charges dismissed as part of a plea bargain may be refused expungement, because courts decline to obscure the circumstances of the related conviction — though Clean Slate now typically seals those counts automatically anyway.",
          "Automatic sealing runs on a monthly administrative cycle, which means records seal on a rolling schedule rather than on the eligibility anniversary — and errors happen. The verification step is worth doing: confirming the docket no longer appears on the public UJS portal and requesting a current record check. A clean record that exists on paper but not in the databases employers actually search is not yet a clean record."
        ]
      }
    ],
    faq: [
      {
        q: "What is the difference between expungement, sealing, and Clean Slate?",
        a: "Expungement destroys the record entirely. Sealing — called limited access in Pennsylvania — hides it from the public and most employers, though police, courts, and some licensing and federal screenings can still see it. Clean Slate is Pennsylvania's automatic sealing law; petition-based sealing and expungement require filing in the county where the case happened."
      },
      {
        q: "What can be cleared, and how long are the waiting periods?",
        a: "Dismissed and withdrawn charges can be expunged anytime. Summary convictions can be expunged after five arrest-free years. Most low-level misdemeanors seal automatically after seven conviction-free years; eligible first-degree misdemeanors can be sealed by petition after seven years, and certain felonies — including qualifying drug felonies — after ten. Restitution must be paid first."
      },
      {
        q: "Can I expunge my record after ARD?",
        a: "Yes. Successful completion of ARD entitles most people to expungement of the arrest record, but a petition usually must be filed — it does not happen automatically. Exceptions apply to certain offenses, and prosecutors keep DUI-ARD information for ten years to evaluate any future DUI charge."
      },
      {
        q: "Who can still see a sealed record?",
        a: "Police, prosecutors, and courts always can. So can child-protective screenings and employers required by federal law to check criminal history, such as banks and securities firms. Immigration authorities apply their own rules and generally can still consider sealed or expunged convictions. Older commercial background databases can also lag behind a sealing."
      },
      {
        q: "Do domestic violence cases qualify for Clean Slate?",
        a: "Convictions usually do not — offenses against the family and most crimes of violence, including strangulation, stalking, and assault charges common in domestic cases, are excluded from sealing. Dismissed or withdrawn charges, however, can still be expunged or sealed, and a pardon can clear an otherwise ineligible conviction."
      },
      {
        q: "What if my conviction is not eligible for expungement or sealing?",
        a: "A pardon from the Governor, recommended by the Board of Pardons, is the remaining path. There is no filing fee, but the process typically takes several years and includes an investigation and a public hearing. Since 2023, a full pardon leads to automatic expungement of the pardoned conviction."
      }
    ]
  }
};

export function getPracticeContent(slug: string): PracticeContent | undefined {
  return practiceContent[slug];
}
