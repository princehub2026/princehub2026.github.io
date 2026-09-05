// College & Campus Cases — page content.
// Voice: informational only, no directed advice, no outcome predictions (RPC 7.1).
// Deliberately avoids eligibility rules, dollar figures and deadlines that would
// need independent verification. Statutory references are limited to provisions
// named in the text and are part of the pre-launch fact-check.

import type { PracticeContent } from "./practiceContent";

export const collegeCampusContent: PracticeContent = {
  sections: [
    {
      heading: "A student charged near campus is usually facing two cases, not one",
      paragraphs: [
        "One case is criminal. It belongs to the Commonwealth, it is heard in a Pennsylvania court, and it carries the protections that come with that — the right to counsel, the right to remain silent, the requirement that the Commonwealth prove its case. The other is the university's own disciplinary process. It is run by the school, under the school's rules, on the school's timeline, and it can end in suspension or expulsion no matter what happens in court.",
        "Those two tracks are not coordinated, and the campus one is often faster. A student can be sitting in a conduct meeting weeks before the first court date. What gets said in that meeting — or written in an email to a dean, or typed into an incident form, or explained to a resident assistant — is not privileged. It can be requested, subpoenaed, or simply repeated by the person who heard it.",
        "That is the single thing most worth understanding early. Handling the school quietly and dealing with the court later is a natural instinct, and it is how good students talk themselves into the worst version of a criminal case.",
      ],
    },
    {
      heading: "The charges that actually come out of campus life",
      paragraphs: [
        "Most campus cases are not exotic. They are ordinary Pennsylvania charges that happen to arise at nineteen, in a dormitory, at a party, or on a street a few blocks from a school.",
      ],
      list: [
        "Underage drinking, and carrying or using false identification",
        "DUI after a party, including cases where the driver was a passenger's designated ride",
        "Possession of marijuana or another controlled substance in a residence hall or vehicle",
        "Possession with intent, where a search turns up a scale, packaging, or messages on a phone",
        "Disorderly conduct, public drunkenness, and failure to disperse",
        "Simple assault and harassment arising from a fight",
        "Criminal mischief and institutional vandalism",
        "Retail theft, including cases that begin with a store's own loss-prevention staff",
        "Hazing, under Pennsylvania's antihazing statute",
        "Computer-related charges involving university networks, accounts, or credentials",
        "Protection From Abuse petitions between students, which can force a student out of housing and off campus",
      ],
    },
    {
      heading: "Hazing is its own statute in Pennsylvania",
      paragraphs: [
        "After the death of Timothy Piazza at Penn State in 2017, Pennsylvania enacted an antihazing law that does more than restate assault. It defines hazing as a distinct offense, creates a more serious grade — a felony — when the conduct causes serious bodily injury or death, and reaches organizations and institutions as well as individuals. It also includes a limited immunity provision intended to encourage people to call for medical help.",
        "Practically, this means a hazing allegation can produce a criminal charge, a fraternity or sorority sanction, a national organization's own investigation, and a university conduct case at the same time — each with a different investigator asking the same student the same questions. Those interviews are not neutral, and they are not confidential.",
      ],
    },
    {
      heading: "Residence halls, resident assistants, and campus police",
      paragraphs: [
        "A great many campus cases start with a search that was never a search warrant. A resident assistant enters for a health-and-safety inspection, or answers a noise complaint, or smells something in a hallway. A housing contract the student signed at eighteen says the university may enter the room.",
        "Whether what turns up that way can be used in a criminal prosecution is a real question, and it turns on details: who actually conducted the search, whether that person is a sworn officer or a university employee, whether police were already involved or directed the entry, and what the person was looking for when they went in. Campus police at Pennsylvania's state universities are sworn officers with arrest authority; public-safety departments at private colleges are not all structured the same way. Pennsylvania's own constitution has been read to protect more in some search-and-seizure situations than the federal minimum does.",
        "None of that is automatic, and none of it is a guaranteed result. It is a reason to examine how a case began rather than assume the evidence in it is simply admissible.",
      ],
    },
    {
      heading: "What a conviction costs a student is rarely the fine",
      paragraphs: [
        "The sentence in a first-time campus case is often modest. The record is not. Pennsylvania licensing boards ask about criminal history for nursing, teaching, pharmacy, counseling, accountancy, and other regulated professions, and bar admission involves its own character-and-fitness review. Clinical placements, student teaching, and internships that involve children or patients require background clearances that a conviction can complicate. Graduate and professional school applications ask. So do employers, and so do landlords.",
        "For international students, a criminal charge can carry immigration consequences that run alongside everything else and are not resolved by the criminal case alone.",
        "Pennsylvania does have relief. Counties operate diversion programs — Accelerated Rehabilitative Disposition among them — that are designed with first-time offenders in mind and that can lead to expungement of the charge when the program is completed. Eligibility, terms, and how each program is run vary county by county, which is one reason the county a case is in matters as much as the charge.",
      ],
    },
    {
      heading: "If you are the parent making this call",
      paragraphs: [
        "Parents are usually the ones who find this page. That is normal, and it is welcome. There is a longer explanation of how this works — what you can helpfully do, what to avoid, and why the student remains the client even when a parent is paying — written for parents and loved ones.",
        '<a href="/for-families" class="text-gold-600 border-b border-gold-500/50 pb-0.5 hover:text-gold-500">For Parents &amp; Loved Ones &rarr;</a>',
      ],
    },
  ],
  faq: [
    {
      q: "The school scheduled a conduct hearing before my court date. What do I do?",
      a: "Do not treat the two as the same proceeding, and do not assume the school's hearing is the low-stakes one. The university process has its own rules about who may accompany or advise a student, and those rules differ by school. The important step is to know, before that hearing, how anything said in it could land in the criminal case. That is a conversation to have with an attorney first, not after.",
    },
    {
      q: "Can what I tell the university be used against me in criminal court?",
      a: "Statements to a university are not privileged. A dean, a conduct officer, a coach, and a resident assistant are not your lawyer, and nothing you tell them is protected the way a conversation with your attorney is. Written statements, incident reports, and emails all exist afterward and can be obtained.",
    },
    {
      q: "Do campus police have the same authority as the local police department?",
      a: "It depends on the institution. Police departments at Pennsylvania's state universities are made up of sworn officers with arrest authority. Public-safety departments at private colleges vary in how they are structured and what authority their officers hold. That difference can matter to how a case was investigated, and it is one of the first things worth pinning down.",
    },
    {
      q: "My RA let themselves into my room and then called the police. Is that allowed?",
      a: "Often the housing agreement does permit the university to enter a room. That is a different question from whether evidence found during that entry can be used in a criminal prosecution. The answer turns on who searched, at whose direction, and for what purpose — which is why the sequence of events on the night in question gets examined closely rather than accepted at face value.",
    },
    {
      q: "Will a campus case follow me after graduation?",
      a: "A criminal record in Pennsylvania is public unless something is done about it. Whether a particular charge can later be expunged or sealed depends on the charge, how the case resolved, and the county. Diversion programs completed successfully can open that door. This is worth planning for at the beginning of a case rather than discovering at the end of one.",
    },
    {
      q: "My parents are paying for the attorney. Who does the attorney represent?",
      a: "The student. A parent can pay the fee, and most parents do, but the client is the person charged — the attorney's duty of confidentiality and loyalty runs to the student. What a parent is told is something the student decides. Setting that out clearly at the start avoids a great deal of friction later, and most families find it a relief to hear it said plainly.",
    },
  ],
};
