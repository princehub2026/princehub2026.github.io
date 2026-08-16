export type FaqTopic = {
  slug: string;
  title: string;
  summary: string;
  consequences: string;
  questions: { q: string; a: string }[];
};

export const faqTopics: FaqTopic[] = [
  {
    slug: "warrants",
    title: "Warrants",
    summary:
      "A warrant is a court order authorizing law enforcement to make an arrest or conduct a search. Warrants do not resolve on their own — they typically require direct legal action.",
    consequences:
      "An active warrant can lead to arrest at any time, including during a routine traffic stop, and can affect employment, travel, and housing until resolved.",
    questions: [
      { q: "How do I find out if I have a warrant?", a: "Court records can often be checked through the county clerk of courts, though the fastest and safest way to confirm your status is through an attorney." },
      { q: "Can a warrant be resolved without turning myself in unannounced?", a: "In many cases, an attorney can arrange a controlled surrender or address the warrant proactively, which is often preferable to an unplanned arrest." },
      { q: "Does an old warrant expire?", a: "No. Warrants generally remain active indefinitely until they are addressed by the court." },
    ],
  },
  {
    slug: "vop",
    title: "Violation of Probation (VOP)",
    summary:
      "A VOP allegation means the court believes the terms of an existing probation or parole sentence were not followed — a new charge is not required to trigger one.",
    consequences:
      "A VOP finding can result in the original sentence being reimposed, including incarceration that was previously suspended.",
    questions: [
      { q: "What counts as a violation?", a: "Common triggers include a new arrest, missed check-ins, failed drug tests, or not completing required programs." },
      { q: "Will I get a trial for a VOP?", a: "VOP hearings use a different, lower standard of proof than a criminal trial, which makes early legal representation especially important." },
      { q: "Can jail time be avoided at a VOP hearing?", a: "It depends on the circumstances, but outcomes short of incarceration are often possible with the right preparation and advocacy." },
    ],
  },
  {
    slug: "return-of-property",
    title: "Return of Property",
    summary:
      "Property seized by police during an arrest or search is not returned automatically, even after charges are resolved — a formal motion is usually required.",
    consequences:
      "Without action, seized property (including cash, vehicles, and electronics) can remain in police custody indefinitely or become subject to forfeiture.",
    questions: [
      { q: "How do I get my property back after a case ends?", a: "A motion for return of property is typically filed with the court that handled the underlying case." },
      { q: "What if my case was dismissed?", a: "A dismissal does not automatically return property — the motion process still applies." },
      { q: "Can cash be forfeited even without a conviction?", a: "In some circumstances, yes, through civil asset forfeiture proceedings, which are separate from the criminal case." },
    ],
  },
  {
    slug: "pfa",
    title: "PFA (Protection From Abuse)",
    summary:
      "A Protection From Abuse order is a civil court order, separate from criminal charges, that can restrict contact, residence, and firearm possession.",
    consequences:
      "A PFA can result in immediate removal from a shared home and loss of firearms rights, often before a full hearing takes place.",
    questions: [
      { q: "Is a PFA a criminal charge?", a: "No, a PFA is a civil proceeding, though violating one can result in criminal charges." },
      { q: "How much time do I have to respond to a PFA?", a: "A final hearing is typically scheduled within about ten days of a temporary order — the response window is short." },
      { q: "Does a PFA affect gun ownership?", a: "Yes. A final PFA order generally requires the surrender of firearms for its duration." },
    ],
  },
];
