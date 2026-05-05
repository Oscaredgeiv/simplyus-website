/**
 * Counties served — primary metro areas around Dacula, GA
 */

export interface County {
  slug: string;
  name: string;
  fullName: string; // "Gwinnett County, GA"
  vibe: string;
  citySlugs: string[]; // matches cities.ts slugs
  highlight: string; // anchor city or notable feature
}

export const counties: County[] = [
  {
    slug: "gwinnett",
    name: "Gwinnett County",
    fullName: "Gwinnett County, GA",
    vibe: "the second-largest county in Georgia and our home base",
    highlight: "Lawrenceville is the county seat and Dacula sits in the northeast corner.",
    citySlugs: [
      "dacula",
      "lawrenceville",
      "duluth",
      "peachtree-corners",
      "suwanee",
      "sugar-hill",
      "snellville",
      "grayson",
      "lilburn",
      "norcross",
      "buford",
      "berkeley-lake",
      "mountain-park",
    ],
  },
  {
    slug: "hall",
    name: "Hall County",
    fullName: "Hall County, GA",
    vibe: "a fast-growing region anchored by Gainesville and Lake Lanier",
    highlight: "Home to Gainesville, the poultry capital of the world.",
    citySlugs: ["gainesville", "flowery-branch", "oakwood", "lula", "clermont"],
  },
  {
    slug: "jackson",
    name: "Jackson County",
    fullName: "Jackson County, GA",
    vibe: "a growing market along the I-85 corridor northeast of Atlanta",
    highlight: "Jefferson is the county seat; Braselton and Hoschton are the fastest-growing.",
    citySlugs: ["jefferson", "hoschton", "braselton", "commerce", "pendergrass", "talmo"],
  },
  {
    slug: "barrow",
    name: "Barrow County",
    fullName: "Barrow County, GA",
    vibe: "a Northeast Georgia community right next door to Dacula",
    highlight: "Winder is the county seat and Auburn borders Dacula directly.",
    citySlugs: ["winder", "auburn", "bethlehem", "statham", "carl"],
  },
  {
    slug: "walton",
    name: "Walton County",
    fullName: "Walton County, GA",
    vibe: "a growing residential market east of Gwinnett",
    highlight: "Loganville straddles Walton and Gwinnett; Monroe is the historic county seat.",
    citySlugs: ["loganville", "monroe", "walnut-grove", "social-circle"],
  },
];

export const countyBySlug = (slug: string): County | undefined =>
  counties.find((c) => c.slug === slug);

export const allCountySlugs = (): string[] => counties.map((c) => c.slug);
