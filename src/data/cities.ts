/**
 * Cities served — within ~40 miles of Dacula, GA
 * Tier 1: Primary target markets (highest priority)
 * Tier 2: Strong nearby markets (well-known to local audience)
 * Tier 3: Extended reach within service area
 */

export interface City {
  slug: string;
  name: string;
  county: string; // matches county.slug
  tier: 1 | 2 | 3;
  /** rough miles from Dacula, GA */
  distance: number;
  /** Single-line vibe descriptor used in localized intros */
  vibe: string;
  /** A few neighborhoods or local landmarks for color */
  neighborhoods: string[];
  /** Slugs of nearby cities for cross-linking */
  nearby: string[];
}

export const cities: City[] = [
  /* ─── Gwinnett County ─── */
  {
    slug: "dacula",
    name: "Dacula",
    county: "gwinnett",
    tier: 1,
    distance: 0,
    vibe: "our home base — a fast-growing community in northeast Gwinnett",
    neighborhoods: ["Hebron", "Hamilton Mill", "Apalachee Heritage", "Trail Creek"],
    nearby: ["lawrenceville", "auburn", "hoschton", "buford", "loganville"],
  },
  {
    slug: "lawrenceville",
    name: "Lawrenceville",
    county: "gwinnett",
    tier: 1,
    distance: 7,
    vibe: "the Gwinnett County seat with a thriving historic square",
    neighborhoods: ["Downtown Lawrenceville", "Sugarloaf", "Five Forks"],
    nearby: ["dacula", "snellville", "duluth", "grayson", "lilburn"],
  },
  {
    slug: "duluth",
    name: "Duluth",
    county: "gwinnett",
    tier: 1,
    distance: 13,
    vibe: "a vibrant business hub with a redeveloped downtown core",
    neighborhoods: ["Parsons", "Sugarloaf", "Berkeley Lake area"],
    nearby: ["peachtree-corners", "suwanee", "norcross", "lawrenceville", "johns-creek"],
  },
  {
    slug: "peachtree-corners",
    name: "Peachtree Corners",
    county: "gwinnett",
    tier: 1,
    distance: 17,
    vibe: "Georgia's first smart city and a tech-forward business community",
    neighborhoods: ["Technology Park", "Peachtree Industrial", "Jones Bridge"],
    nearby: ["norcross", "duluth", "johns-creek", "dunwoody", "berkeley-lake"],
  },
  {
    slug: "suwanee",
    name: "Suwanee",
    county: "gwinnett",
    tier: 2,
    distance: 11,
    vibe: "a family-focused community known for Town Center Park and small-town feel",
    neighborhoods: ["Town Center", "Olde Town", "Sims Lake"],
    nearby: ["sugar-hill", "duluth", "buford", "johns-creek", "cumming"],
  },
  {
    slug: "sugar-hill",
    name: "Sugar Hill",
    county: "gwinnett",
    tier: 2,
    distance: 9,
    vibe: "a tight-knit community anchored by The Bowl outdoor venue",
    neighborhoods: ["Downtown Sugar Hill", "E. E. Robinson Park"],
    nearby: ["buford", "suwanee", "cumming", "flowery-branch", "duluth"],
  },
  {
    slug: "snellville",
    name: "Snellville",
    county: "gwinnett",
    tier: 2,
    distance: 11,
    vibe: "a residential hub at the south end of Gwinnett County",
    neighborhoods: ["Briscoe Park", "Southlake", "Towne Center"],
    nearby: ["grayson", "lilburn", "loganville", "lawrenceville", "stone-mountain"],
  },
  {
    slug: "grayson",
    name: "Grayson",
    county: "gwinnett",
    tier: 2,
    distance: 8,
    vibe: "a small but growing community with a charming city center",
    neighborhoods: ["Downtown Grayson", "Country Club Estates"],
    nearby: ["snellville", "loganville", "lawrenceville", "dacula", "lilburn"],
  },
  {
    slug: "lilburn",
    name: "Lilburn",
    county: "gwinnett",
    tier: 2,
    distance: 16,
    vibe: "a diverse, established community on the Gwinnett-DeKalb border",
    neighborhoods: ["Old Town Lilburn", "Mountain Park", "Killian Hill"],
    nearby: ["norcross", "snellville", "tucker", "lawrenceville", "stone-mountain"],
  },
  {
    slug: "norcross",
    name: "Norcross",
    county: "gwinnett",
    tier: 2,
    distance: 18,
    vibe: "a historic downtown surrounded by major business corridors",
    neighborhoods: ["Historic Norcross", "Pinckneyville", "Jimmy Carter Boulevard"],
    nearby: ["peachtree-corners", "duluth", "lilburn", "tucker", "doraville"],
  },
  {
    slug: "buford",
    name: "Buford",
    county: "gwinnett",
    tier: 2,
    distance: 10,
    vibe: "a Mall of Georgia anchor with a thriving downtown and Lake Lanier access",
    neighborhoods: ["Mall of Georgia", "Bogan Lakes", "Friendship Acres"],
    nearby: ["sugar-hill", "flowery-branch", "suwanee", "hoschton", "cumming"],
  },
  {
    slug: "loganville",
    name: "Loganville",
    county: "walton",
    tier: 1,
    distance: 12,
    vibe: "a fast-growing suburb straddling Gwinnett and Walton counties",
    neighborhoods: ["Bay Creek", "Highland Pointe"],
    nearby: ["grayson", "snellville", "monroe", "dacula", "walnut-grove"],
  },
  {
    slug: "berkeley-lake",
    name: "Berkeley Lake",
    county: "gwinnett",
    tier: 3,
    distance: 16,
    vibe: "a quiet, well-kept lake community tucked inside Gwinnett",
    neighborhoods: ["Berkeley Lake Estates"],
    nearby: ["duluth", "peachtree-corners", "norcross", "johns-creek", "doraville"],
  },
  {
    slug: "mountain-park",
    name: "Mountain Park",
    county: "gwinnett",
    tier: 3,
    distance: 18,
    vibe: "a small lakeside community known for its quiet residential feel",
    neighborhoods: ["Lake Cherokee", "Lake Garrett"],
    nearby: ["lilburn", "norcross", "stone-mountain", "tucker", "lawrenceville"],
  },

  /* ─── Hall County ─── */
  {
    slug: "gainesville",
    name: "Gainesville",
    county: "hall",
    tier: 1,
    distance: 22,
    vibe: "the poultry capital of the world and the major hub of Hall County",
    neighborhoods: ["Downtown Gainesville", "Lakeside", "Riverside"],
    nearby: ["oakwood", "flowery-branch", "lula", "clermont", "buford"],
  },
  {
    slug: "flowery-branch",
    name: "Flowery Branch",
    county: "hall",
    tier: 2,
    distance: 14,
    vibe: "a charming Lake Lanier town with a walkable downtown",
    neighborhoods: ["Downtown Flowery Branch", "Sterling on the Lake"],
    nearby: ["oakwood", "buford", "gainesville", "sugar-hill", "hoschton"],
  },
  {
    slug: "oakwood",
    name: "Oakwood",
    county: "hall",
    tier: 2,
    distance: 18,
    vibe: "a quiet community at the gateway to Gainesville",
    neighborhoods: ["Oakwood Plantation", "University Drive corridor"],
    nearby: ["flowery-branch", "gainesville", "buford", "hoschton", "sugar-hill"],
  },
  {
    slug: "lula",
    name: "Lula",
    county: "hall",
    tier: 3,
    distance: 28,
    vibe: "a small north-Hall community with deep agricultural roots",
    neighborhoods: ["Lula city center"],
    nearby: ["gainesville", "clermont", "commerce", "talmo", "pendergrass"],
  },
  {
    slug: "clermont",
    name: "Clermont",
    county: "hall",
    tier: 3,
    distance: 30,
    vibe: "a tiny mountain-foothills town just north of Gainesville",
    neighborhoods: ["Clermont city center"],
    nearby: ["gainesville", "lula", "oakwood", "flowery-branch", "commerce"],
  },

  /* ─── Jackson County ─── */
  {
    slug: "jefferson",
    name: "Jefferson",
    county: "jackson",
    tier: 2,
    distance: 18,
    vibe: "the Jackson County seat with a historic town square",
    neighborhoods: ["Downtown Jefferson", "Traditions"],
    nearby: ["hoschton", "commerce", "pendergrass", "talmo", "braselton"],
  },
  {
    slug: "hoschton",
    name: "Hoschton",
    county: "jackson",
    tier: 2,
    distance: 8,
    vibe: "a fast-growing community at the Jackson-Gwinnett line",
    neighborhoods: ["Reunion", "Cresswind"],
    nearby: ["braselton", "jefferson", "dacula", "buford", "auburn"],
  },
  {
    slug: "braselton",
    name: "Braselton",
    county: "jackson",
    tier: 2,
    distance: 10,
    vibe: "a four-county town home to Château Élan and Northeast Georgia Medical Center",
    neighborhoods: ["Château Élan", "Reunion", "Liberty Park"],
    nearby: ["hoschton", "jefferson", "buford", "auburn", "flowery-branch"],
  },
  {
    slug: "commerce",
    name: "Commerce",
    county: "jackson",
    tier: 3,
    distance: 24,
    vibe: "a friendly outlet-shopping town in eastern Jackson County",
    neighborhoods: ["Tanger Outlets area", "Downtown Commerce"],
    nearby: ["jefferson", "pendergrass", "talmo", "lula", "athens"],
  },
  {
    slug: "pendergrass",
    name: "Pendergrass",
    county: "jackson",
    tier: 3,
    distance: 20,
    vibe: "a small town along I-85 known for its livestock auction and growing logistics scene",
    neighborhoods: ["Pendergrass city center"],
    nearby: ["jefferson", "commerce", "talmo", "hoschton", "braselton"],
  },
  {
    slug: "talmo",
    name: "Talmo",
    county: "jackson",
    tier: 3,
    distance: 22,
    vibe: "a small rural community in northern Jackson County",
    neighborhoods: ["Talmo city center"],
    nearby: ["pendergrass", "jefferson", "commerce", "hoschton", "lula"],
  },

  /* ─── Barrow County ─── */
  {
    slug: "winder",
    name: "Winder",
    county: "barrow",
    tier: 2,
    distance: 12,
    vibe: "the Barrow County seat with a revitalized downtown",
    neighborhoods: ["Downtown Winder", "Chateau Forest"],
    nearby: ["auburn", "bethlehem", "statham", "carl", "dacula"],
  },
  {
    slug: "auburn",
    name: "Auburn",
    county: "barrow",
    tier: 2,
    distance: 6,
    vibe: "a fast-growing residential community at the Barrow-Gwinnett line",
    neighborhoods: ["Whistler", "Brooks Mountain"],
    nearby: ["dacula", "winder", "hoschton", "bethlehem", "carl"],
  },
  {
    slug: "bethlehem",
    name: "Bethlehem",
    county: "barrow",
    tier: 2,
    distance: 9,
    vibe: "a small Barrow County town known for its holiday post-office tradition",
    neighborhoods: ["Bethlehem city center"],
    nearby: ["winder", "auburn", "loganville", "monroe", "statham"],
  },
  {
    slug: "statham",
    name: "Statham",
    county: "barrow",
    tier: 3,
    distance: 18,
    vibe: "a small Barrow community on the way to Athens",
    neighborhoods: ["Statham city center"],
    nearby: ["winder", "carl", "bogart", "athens", "bethlehem"],
  },
  {
    slug: "carl",
    name: "Carl",
    county: "barrow",
    tier: 3,
    distance: 15,
    vibe: "a quiet residential community in Barrow County",
    neighborhoods: ["Carl city center"],
    nearby: ["winder", "auburn", "statham", "bethlehem", "hoschton"],
  },

  /* ─── Walton County ─── */
  {
    slug: "monroe",
    name: "Monroe",
    county: "walton",
    tier: 2,
    distance: 18,
    vibe: "the Walton County seat with a beautifully preserved historic downtown",
    neighborhoods: ["Downtown Monroe", "Alcovy"],
    nearby: ["loganville", "walnut-grove", "social-circle", "bethlehem", "winder"],
  },
  {
    slug: "walnut-grove",
    name: "Walnut Grove",
    county: "walton",
    tier: 3,
    distance: 16,
    vibe: "a quiet community at the south end of Walton County",
    neighborhoods: ["Walnut Grove city center"],
    nearby: ["monroe", "loganville", "social-circle", "grayson", "bethlehem"],
  },
  {
    slug: "social-circle",
    name: "Social Circle",
    county: "walton",
    tier: 3,
    distance: 26,
    vibe: "a historic Walton County town with a charming small-town center",
    neighborhoods: ["Downtown Social Circle"],
    nearby: ["monroe", "walnut-grove", "loganville", "conyers", "bethlehem"],
  },

  /* ─── Oconee County ─── */
  {
    slug: "bogart",
    name: "Bogart",
    county: "oconee",
    tier: 3,
    distance: 24,
    vibe: "a small town on the western edge of Athens",
    neighborhoods: ["Bogart city center"],
    nearby: ["watkinsville", "athens", "statham", "winder", "bishop"],
  },
  {
    slug: "watkinsville",
    name: "Watkinsville",
    county: "oconee",
    tier: 3,
    distance: 27,
    vibe: "the Oconee County seat with a charming arts-and-antiques downtown",
    neighborhoods: ["Downtown Watkinsville", "Eagle Tavern"],
    nearby: ["bogart", "athens", "bishop", "bogart", "statham"],
  },
  {
    slug: "bishop",
    name: "Bishop",
    county: "oconee",
    tier: 3,
    distance: 30,
    vibe: "a tiny, historic Oconee County community",
    neighborhoods: ["Bishop city center"],
    nearby: ["watkinsville", "bogart", "athens", "statham", "social-circle"],
  },

  /* ─── Athens-Clarke County ─── */
  {
    slug: "athens",
    name: "Athens",
    county: "athens-clarke",
    tier: 1,
    distance: 27,
    vibe: "home to UGA and a thriving creative, culinary, and music scene",
    neighborhoods: ["Downtown Athens", "Five Points", "Normaltown", "Eastside"],
    nearby: ["bogart", "watkinsville", "statham", "winder", "commerce"],
  },

  /* ─── Forsyth County ─── */
  {
    slug: "cumming",
    name: "Cumming",
    county: "forsyth",
    tier: 2,
    distance: 22,
    vibe: "the Forsyth County seat and one of the fastest-growing markets in Georgia",
    neighborhoods: ["Downtown Cumming", "Vickery", "Coal Mountain"],
    nearby: ["suwanee", "buford", "alpharetta", "sugar-hill", "flowery-branch"],
  },

  /* ─── Fulton County (north) ─── */
  {
    slug: "alpharetta",
    name: "Alpharetta",
    county: "fulton",
    tier: 2,
    distance: 22,
    vibe: "a North Fulton tech and finance hub with a vibrant downtown",
    neighborhoods: ["Downtown Alpharetta", "Avalon", "Windward"],
    nearby: ["johns-creek", "milton", "roswell", "cumming", "duluth"],
  },
  {
    slug: "johns-creek",
    name: "Johns Creek",
    county: "fulton",
    tier: 2,
    distance: 19,
    vibe: "an affluent North Fulton community with a strong professional services base",
    neighborhoods: ["Medlock Bridge", "St. Ives", "Newtown Park"],
    nearby: ["duluth", "alpharetta", "peachtree-corners", "suwanee", "roswell"],
  },
  {
    slug: "roswell",
    name: "Roswell",
    county: "fulton",
    tier: 3,
    distance: 25,
    vibe: "a historic North Fulton city with a vibrant Canton Street scene",
    neighborhoods: ["Historic Roswell", "Canton Street", "Crabapple"],
    nearby: ["alpharetta", "johns-creek", "milton", "sandy-springs", "dunwoody"],
  },
  {
    slug: "milton",
    name: "Milton",
    county: "fulton",
    tier: 3,
    distance: 26,
    vibe: "an equestrian-flavored North Fulton city with an emphasis on green space",
    neighborhoods: ["Crabapple", "Birmingham Crossroads"],
    nearby: ["alpharetta", "roswell", "johns-creek", "cumming", "sandy-springs"],
  },

  /* ─── DeKalb County ─── */
  {
    slug: "tucker",
    name: "Tucker",
    county: "dekalb",
    tier: 3,
    distance: 22,
    vibe: "a community-minded DeKalb city anchored by Main Street",
    neighborhoods: ["Downtown Tucker", "Northlake"],
    nearby: ["lilburn", "stone-mountain", "doraville", "chamblee", "norcross"],
  },
  {
    slug: "stone-mountain",
    name: "Stone Mountain",
    county: "dekalb",
    tier: 3,
    distance: 22,
    vibe: "a historic DeKalb city next to the iconic Stone Mountain Park",
    neighborhoods: ["Downtown Stone Mountain", "Smoke Rise"],
    nearby: ["tucker", "lilburn", "snellville", "lithonia", "decatur"],
  },
  {
    slug: "decatur",
    name: "Decatur",
    county: "dekalb",
    tier: 3,
    distance: 30,
    vibe: "a walkable DeKalb city with a thriving downtown square",
    neighborhoods: ["Downtown Decatur", "Oakhurst"],
    nearby: ["tucker", "stone-mountain", "brookhaven", "chamblee", "lithonia"],
  },
  {
    slug: "doraville",
    name: "Doraville",
    county: "dekalb",
    tier: 3,
    distance: 22,
    vibe: "a diverse, business-forward city along the Buford Highway corridor",
    neighborhoods: ["Buford Highway", "Assembly Yards"],
    nearby: ["chamblee", "norcross", "tucker", "brookhaven", "peachtree-corners"],
  },
  {
    slug: "chamblee",
    name: "Chamblee",
    county: "dekalb",
    tier: 3,
    distance: 24,
    vibe: "a fast-rising DeKalb city with a redeveloped Antique Row downtown",
    neighborhoods: ["Antique Row", "Peachtree-Dunwoody corridor"],
    nearby: ["doraville", "brookhaven", "tucker", "norcross", "dunwoody"],
  },
  {
    slug: "brookhaven",
    name: "Brookhaven",
    county: "dekalb",
    tier: 3,
    distance: 27,
    vibe: "a young, professional DeKalb city with vibrant restaurant and retail scenes",
    neighborhoods: ["Town Brookhaven", "Ashford Park"],
    nearby: ["chamblee", "dunwoody", "decatur", "doraville", "sandy-springs"],
  },
  {
    slug: "dunwoody",
    name: "Dunwoody",
    county: "dekalb",
    tier: 3,
    distance: 26,
    vibe: "a North DeKalb city anchored by Perimeter Mall and a strong residential base",
    neighborhoods: ["Perimeter", "Dunwoody Village"],
    nearby: ["brookhaven", "sandy-springs", "chamblee", "doraville", "peachtree-corners"],
  },

  /* ─── Rockdale County ─── */
  {
    slug: "conyers",
    name: "Conyers",
    county: "rockdale",
    tier: 3,
    distance: 28,
    vibe: "the Rockdale County seat with the historic Olde Town district",
    neighborhoods: ["Olde Town Conyers", "Honey Creek"],
    nearby: ["snellville", "loganville", "social-circle", "lithonia", "stone-mountain"],
  },

  /* ─── Sandy Springs (Fulton) ─── */
  {
    slug: "sandy-springs",
    name: "Sandy Springs",
    county: "fulton",
    tier: 3,
    distance: 30,
    vibe: "a major North Fulton commercial and residential center",
    neighborhoods: ["Perimeter", "City Springs"],
    nearby: ["dunwoody", "brookhaven", "roswell", "milton", "johns-creek"],
  },
];

export const cityBySlug = (slug: string): City | undefined =>
  cities.find((c) => c.slug === slug);

export const citiesByTier = (tier: 1 | 2 | 3): City[] =>
  cities.filter((c) => c.tier === tier);

export const allCitySlugs = (): string[] => cities.map((c) => c.slug);

export const priorityCities = (): City[] =>
  cities.filter((c) => c.tier === 1);

/**
 * Cities included in the current SEO rollout phase.
 * Phase 1: Tier 1 only (~9 cities)
 * Phase 2: Tier 1 + Tier 2 (~28 cities)
 * Phase 3: All cities (~53 cities)
 *
 * Bump this constant to widen the rollout — every dynamic route
 * that uses currentPhaseCities() will automatically include the
 * new tier on the next build.
 */
type Phase = 1 | 2 | 3;
export const CURRENT_PHASE = 2 as Phase;

export const currentPhaseCities = (): City[] => {
  const phase: Phase = CURRENT_PHASE;
  if (phase === 1) return cities.filter((c) => c.tier === 1);
  if (phase === 2)
    return cities.filter((c) => c.tier === 1 || c.tier === 2);
  return cities;
};
