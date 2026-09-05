// Colleges and universities across the five counties served.
//
// Purpose: a student charged near campus is prosecuted in the county where the
// conduct occurred, not the county the school mails its bills from — so the list
// is grouped by county rather than alphabetically. Municipality is given because
// several campuses sit on a county or township line.
//
// Scope note: institutions with a physical campus in the county. Closed schools
// are excluded. This list is part of the pre-launch fact-check.

export type Campus = {
  name: string;
  place: string;
  note?: string;
};

export type CampusCounty = {
  countySlug: string;
  countyName: string;
  campuses: Campus[];
};

export const campusCounties: CampusCounty[] = [
  {
    countySlug: "bucks",
    countyName: "Bucks County",
    campuses: [
      { name: "Bucks County Community College", place: "Newtown" },
      { name: "Delaware Valley University", place: "Doylestown" },
      { name: "Cairn University", place: "Langhorne" },
      { name: "Holy Family University — Newtown", place: "Newtown" },
    ],
  },
  {
    countySlug: "chester",
    countyName: "Chester County",
    campuses: [
      { name: "West Chester University", place: "West Chester" },
      { name: "Immaculata University", place: "East Whiteland Township" },
      { name: "Lincoln University", place: "Lower Oxford Township" },
      { name: "Penn State Great Valley", place: "Malvern" },
      {
        name: "Cheyney University of Pennsylvania",
        place: "Cheyney",
        note: "The campus sits on the Chester–Delaware County line.",
      },
    ],
  },
  {
    countySlug: "delaware",
    countyName: "Delaware County",
    campuses: [
      { name: "Villanova University", place: "Radnor Township" },
      { name: "Swarthmore College", place: "Swarthmore" },
      { name: "Haverford College", place: "Haverford Township" },
      { name: "Widener University", place: "Chester" },
      { name: "Neumann University", place: "Aston" },
      { name: "Eastern University", place: "St. Davids" },
      { name: "Penn State Brandywine", place: "Middletown Township" },
      { name: "Delaware County Community College", place: "Marple Township" },
      { name: "Valley Forge Military Academy and College", place: "Wayne" },
    ],
  },
  {
    countySlug: "montgomery",
    countyName: "Montgomery County",
    campuses: [
      { name: "Bryn Mawr College", place: "Lower Merion Township" },
      { name: "Ursinus College", place: "Collegeville" },
      { name: "Arcadia University", place: "Glenside" },
      { name: "Gwynedd Mercy University", place: "Lower Gwynedd Township" },
      { name: "Penn State Abington", place: "Abington Township" },
      { name: "Temple University — Ambler", place: "Upper Dublin Township" },
      { name: "Montgomery County Community College", place: "Blue Bell and Pottstown" },
      { name: "Rosemont College", place: "Lower Merion Township" },
      { name: "Harcum College", place: "Bryn Mawr" },
      { name: "Manor College", place: "Jenkintown" },
      { name: "Bryn Athyn College", place: "Bryn Athyn" },
    ],
  },
  {
    countySlug: "philadelphia",
    countyName: "Philadelphia",
    campuses: [
      { name: "University of Pennsylvania", place: "University City" },
      { name: "Drexel University", place: "University City" },
      { name: "Temple University", place: "North Philadelphia" },
      {
        name: "Saint Joseph's University",
        place: "City Avenue",
        note: "The campus straddles the city line with Lower Merion Township, Montgomery County.",
      },
      { name: "La Salle University", place: "Olney" },
      { name: "Thomas Jefferson University", place: "Center City" },
      { name: "Community College of Philadelphia", place: "Spring Garden" },
      { name: "Chestnut Hill College", place: "Chestnut Hill" },
      { name: "Holy Family University", place: "Torresdale" },
      { name: "Philadelphia College of Osteopathic Medicine", place: "City Avenue" },
      { name: "Moore College of Art & Design", place: "Center City" },
      { name: "Curtis Institute of Music", place: "Rittenhouse Square" },
      { name: "Peirce College", place: "Center City" },
    ],
  },
];
