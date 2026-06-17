/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'san-antonio',
    name: 'San Antonio',
    state: 'TX',
    intro:
      'San Antonio is a tough town on brakes, and it comes down to how people drive here. The city is huge and spread out, so almost everything is a stop-and-go grind on Loop 410, I-35, I-10, or US-281 — and stop-and-go traffic is exactly what wears pads and heats rotors. Add the Texas heat that cooks brake fluid, a lot of heavy trucks and SUVs, and plenty of folks towing boats and trailers out to the lakes, and brakes here just do not last as long as the factory mileage suggests. We are a fully mobile brake shop, so we come to you anywhere in the city — downtown, the near north side, the South Side, the medical center area, or out toward the loops. Squeaking, grinding, a pulsing pedal, a soft pedal, or a brake light on the dash, we bring the pads, rotors, fluid, and tools to wherever the vehicle is parked. Tell us the year, make, and model and what the brakes are doing, and we will give you a straight quote and a real time. No driving across town to a shop, no waiting room, no losing your car for the day — that is the whole point of doing brakes mobile in a city this big.',
    neighborhoods: ['Downtown / Southtown', 'Alamo Heights area', 'Medical Center', 'Stone Oak', 'South Side', 'Northwest Side'],
    landmarks: ['The Alamo', 'River Walk', 'Loop 410', 'US-281 / Loop 1604 interchange'],
    issues: [
      {
        title: 'Stop-and-go traffic that eats pads',
        body: 'Crawling Loop 410, I-35, and US-281 at rush hour means hundreds of brake applications per trip. That city stop-and-go wears pads far faster than highway miles, so San Antonio drivers should not stretch a pad set to the factory estimate.',
      },
      {
        title: 'Texas heat boiling old brake fluid',
        body: 'Brake fluid absorbs moisture over the years, and in San Antonio heat that contaminated fluid can boil under hard braking and cause a soft pedal or brake fade. A flush restores a firm pedal — we do it in your driveway.',
      },
      {
        title: 'Heavy trucks, SUVs, and towing to the lakes',
        body: 'San Antonio runs on pickups and SUVs, and a lot of them tow to Canyon Lake and Medina Lake. That extra weight makes more heat and wears pads and rotors faster. We carry parts for the common trucks and do the job on-site.',
      },
    ],
    nearby: ['alamo-heights', 'leon-valley', 'stone-oak'],
    faqs: [
      {
        q: 'Do you cover all of San Antonio?',
        a: 'Yes. We are fully mobile and cover San Antonio and the surrounding communities — Alamo Heights, Stone Oak, Leon Valley, Helotes, and the suburbs out toward Schertz, Cibolo, and Converse. If you are not sure we reach you, call and ask; we likely do.',
      },
      {
        q: 'Can you do my brakes at my office downtown or in the medical center?',
        a: 'Usually, yes — as long as there is safe, legal parking with room to lift the vehicle and pull the wheels. A lot of our customers have us do the brakes in the work parking lot while they are at their desk.',
      },
      {
        q: 'How fast can you get to me in San Antonio?',
        a: 'San Antonio is central to our service area, so we can usually get to you quickly. Urgent brake problems — grinding, a soft pedal, a warning light — get priority because they are a safety issue. Call and we will give you a real time.',
      },
    ],
  },
  {
    slug: 'stone-oak',
    name: 'Stone Oak',
    state: 'TX',
    intro:
      'Stone Oak sits at the far north edge of San Antonio, up in the hills off US-281 and Loop 1604, and it is one of the easiest parts of town for mobile brake work. It is mostly master-planned neighborhoods with driveways and garages, so we come to the house and do the brake job right there. The catch with Stone Oak is the commute: most folks here drive down 281 and the 1604 interchange into the city and back every day, and that long stop-and-go run is hard on brakes. The terrain is hilly too, so there is more braking on the grades than in the flatter parts of town. We see a lot of newer SUVs and trucks up here that get loaded up and driven hard in traffic. Whether it is squeaking pads, a pulsing pedal from warped rotors, a soft pedal that needs a fluid flush, or you just want an honest inspection, we bring the parts and tools to your driveway anywhere in Stone Oak. Give us the year, make, and model and what the brakes are doing, and we will quote it straight.',
    neighborhoods: ['Sonterra', 'Encino Park', 'Rogers Ranch', 'Canyon Springs', 'The Heights at Stone Oak'],
    landmarks: ['US-281', 'Loop 1604', 'Stone Oak Parkway', 'The Rim / La Cantera area'],
    issues: [
      {
        title: 'Long 281 and 1604 commutes',
        body: 'Stone Oak drivers spend a lot of time braking down US-281 and through the 1604 interchange into the city. That daily stop-and-go grind wears pads and heats rotors faster than the mileage on the dash suggests.',
      },
      {
        title: 'Hilly terrain and extra braking',
        body: 'The north-side hills mean more braking on grades than the flatter parts of San Antonio. Riding the brakes downhill builds heat, which is hard on pads and can warp a thin rotor over time.',
      },
      {
        title: 'Heavy SUVs and trucks driven loaded',
        body: 'Stone Oak has a lot of larger SUVs and trucks that get loaded up for the family and the commute. The extra weight makes more brake heat and wears pads and rotors quicker. We carry parts for the common ones.',
      },
    ],
    nearby: ['san-antonio', 'alamo-heights', 'live-oak'],
    faqs: [
      {
        q: 'Do you come to the gated Stone Oak neighborhoods?',
        a: 'Yes. We work in driveways throughout Stone Oak, including gated communities — just arrange gate access for us when you book and have the vehicle reachable with room to lift it.',
      },
      {
        q: 'My pedal pulses on the drive down 281 — what is that?',
        a: 'A pulsing pedal, especially slowing from highway speed, is the classic sign of warped or unevenly worn rotors. The long braking runs down 281 build the heat that warps them. We can replace the rotors and pads in your driveway.',
      },
      {
        q: 'Can you do brakes at my home in Stone Oak?',
        a: 'Yes, that is most of what we do up here. The driveways and garages make Stone Oak simple for mobile service — we come to the house, do the brakes on-site, and you never leave home.',
      },
    ],
  },
  {
    slug: 'alamo-heights',
    name: 'Alamo Heights',
    state: 'TX',
    intro:
      'Alamo Heights — the "09" — is the established, tree-lined community just north of downtown San Antonio, around Broadway, the Quarry, and the older neighborhoods off Austin Highway. It is a dense, mature part of town with a lot of long-owned vehicles, daily-driven cars that spend their lives in city stop-and-go between downtown, the Pearl, and the near north side. That kind of short-trip, stop-and-go driving is hard on brakes, and the older homes here tend to have driveways and street parking that make mobile service straightforward. We come to the house or the curb and do the brake job on-site. We see the full range in Alamo Heights: squeaking and grinding pads on daily drivers, warped rotors that pulse the pedal, soft pedals that need a fluid flush, and folks who just want an honest inspection before a road trip. Whatever it is, we bring the pads, rotors, fluid, and tools to you anywhere in Alamo Heights, Terrell Hills, and the surrounding 78209 neighborhoods. Tell us the year, make, and model and what the brakes are doing, and we will give you a straight quote and a real time.',
    neighborhoods: ['Broadway corridor', 'Terrell Hills', 'Olmos Park area', 'Austin Highway', 'Lincoln Heights / Quarry'],
    landmarks: ['Broadway', 'The Quarry Market', 'Olmos Basin', 'Brackenridge Park'],
    issues: [
      {
        title: 'Short-trip, stop-and-go city driving',
        body: 'Alamo Heights cars do a lot of short hops between downtown, the Pearl, and the near north side. Short trips with constant stops wear pads quickly and rarely get the brakes hot enough to clear off moisture, so squealing and surface rust are common.',
      },
      {
        title: 'Long-owned daily drivers with worn brakes',
        body: 'The established neighborhoods here have plenty of long-owned vehicles whose pads, rotors, and fluid have a lot of city miles on them. Worn brakes and old fluid sneak up gradually, so an honest inspection is worth it.',
      },
      {
        title: 'Older fluid and soft pedals',
        body: 'On cars that have been daily-driven around town for years, the brake fluid is often well past due and the pedal has gone soft. A flush restores a firm pedal and protects the calipers and master cylinder from internal corrosion.',
      },
    ],
    nearby: ['san-antonio', 'stone-oak', 'leon-valley'],
    faqs: [
      {
        q: 'Can you do brakes at the curb if I only have street parking?',
        a: 'Often, yes — as long as it is safe and legal to lift the vehicle and pull the wheels there. A lot of the older Alamo Heights and Terrell Hills homes have driveways too. Tell us your setup when you call and we will confirm.',
      },
      {
        q: 'Do you cover Terrell Hills and Olmos Park?',
        a: 'Yes. We cover Alamo Heights and the surrounding 78209 neighborhoods, including Terrell Hills and the Olmos Park area. Mobile service is easy here with the driveways and quiet streets.',
      },
      {
        q: 'My brakes squeal on short trips around town — is that a problem?',
        a: 'It can be early pad wear, glazed pads, or just surface rust and dust from short stop-and-go trips that never heat the brakes up. It is worth a look — we will tell you whether the pads are fine or getting thin before it turns into a grind.',
      },
    ],
  },
  {
    slug: 'helotes',
    name: 'Helotes',
    state: 'TX',
    intro:
      'Helotes sits on the northwest edge of San Antonio where the city meets the Hill Country, out along Bandera Road and FM 1560. It is a mix of established neighborhoods, newer master-planned communities, and ranch-style properties, and the driving here is different from the flatter parts of town — there are real grades, and a lot of folks tow trailers, boats, and equipment out toward Bandera and the Hill Country. Hills and towing both mean more braking and more brake heat, which is hard on pads and rotors and can warp a thin rotor over time. Most of Helotes is houses with driveways and room to work, so mobile brake service fits perfectly — we come to the property and do the job on-site. We handle the full range out here: worn pads, warped rotors that pulse the pedal, brake fluid flushes for trucks that tow, seized calipers, and honest inspections. Tell us the year, make, and model and what the brakes are doing, and we will bring the parts and tools to you anywhere in Helotes and give you a straight quote.',
    neighborhoods: ['Old Town Helotes', 'Iron Horse Canyon', 'Sonoma Ranch', 'The Reserve', 'Bandera Road corridor'],
    landmarks: ['Bandera Road (FM 1560)', 'Old Town Helotes', 'Government Canyon', 'Floore Country Store'],
    issues: [
      {
        title: 'Hill Country grades and downhill braking',
        body: 'Out where Helotes meets the Hill Country there are real grades, and braking down them builds heat. Riding the brakes downhill is hard on pads and can warp a thin rotor, so brakes here see more heat than in the flat parts of town.',
      },
      {
        title: 'Towing trailers, boats, and equipment',
        body: 'A lot of Helotes drivers tow out toward Bandera and the Hill Country. That extra weight dramatically increases brake heat and wear, and it makes a fresh fluid flush and good rotors important so the brakes do not fade under load.',
      },
      {
        title: 'Work trucks and heavy daily drivers',
        body: 'The ranch and work-truck culture out here means a lot of heavy half-ton and three-quarter-ton trucks that wear brakes fast. We carry parts for the common ones and do the job at the property.',
      },
    ],
    nearby: ['leon-valley', 'boerne', 'san-antonio'],
    faqs: [
      {
        q: 'Do you service work trucks and towing rigs in Helotes?',
        a: 'Yes. We do brakes on half-ton and three-quarter-ton trucks and SUVs, the kind people tow with out here. Towing is hard on brakes, so we also recommend a fluid flush and good rotors to handle the heat. Give us the vehicle details when you call.',
      },
      {
        q: 'My brakes fade when I tow downhill — what fixes that?',
        a: 'Brake fade under load is usually old, moisture-laden fluid boiling from the heat, sometimes combined with worn pads or thin rotors. A fluid flush with high-boiling-point fluid plus fresh pads and good rotors restores stopping power under load. We can do all of it on-site.',
      },
      {
        q: 'Can you come out to the ranch-style properties off Bandera Road?',
        a: 'Yes. We come anywhere in Helotes, including the larger properties off Bandera Road, as long as there is a flat, safe spot to lift the vehicle. Tell us where it is parked when you call.',
      },
    ],
  },
  {
    slug: 'leon-valley',
    name: 'Leon Valley',
    state: 'TX',
    intro:
      'Leon Valley is the small city tucked into the northwest side of San Antonio, wrapped around the busy Bandera Road and Loop 410 corridor. It is a dense, established, working community — a mix of older single-family neighborhoods, apartments, and the heavy commercial strip along Bandera — and a lot of cars here are daily drivers putting on hard city miles. The Bandera Road and 410 traffic is constant stop-and-go, which is exactly the kind of driving that wears pads fast and heats rotors. There are plenty of higher-mileage vehicles around Leon Valley whose brakes and fluid are well used. Because it is mostly houses and apartment lots, mobile brake service works well here — we come to the home or the lot and do the job on-site, so you do not have to fight the Bandera traffic to a shop and sit in a waiting room. We handle worn pads, warped rotors, soft pedals that need a flush, stuck calipers, and honest inspections. Tell us the year, make, and model and what the brakes are doing, and we will bring the parts to you and quote it straight.',
    neighborhoods: ['Bandera Road corridor', 'Huebner area', 'Evers Road', 'Poss Road', 'Eckhert area'],
    landmarks: ['Bandera Road', 'Loop 410', 'Leon Valley city center', 'Huebner Creek'],
    issues: [
      {
        title: 'Constant Bandera Road and 410 stop-and-go',
        body: 'Leon Valley wraps around one of the busiest stretches of Bandera Road and Loop 410 in the city. That nonstop stop-and-go traffic is hard on brakes, wearing pads quickly and heating rotors day after day.',
      },
      {
        title: 'Higher-mileage daily drivers',
        body: 'The established neighborhoods here have a lot of long-owned, higher-mileage vehicles whose pads, rotors, and fluid have plenty of hard city miles on them. Worn brakes and overdue fluid are a steady call in Leon Valley.',
      },
      {
        title: 'Apartment and street parking',
        body: 'With a lot of apartments and street-parked cars, mobile service is the easy option — we come to the lot or the curb. We just need safe access and a flat spot to lift the vehicle and pull the wheels.',
      },
    ],
    nearby: ['helotes', 'san-antonio', 'alamo-heights'],
    faqs: [
      {
        q: 'Can you come to my apartment complex in Leon Valley?',
        a: 'Yes. We do a lot of work in apartment and condo lots here. We just need safe, legal access to the vehicle and a flat spot with room to lift it and pull the wheels. Point us to where it is parked and we will handle it.',
      },
      {
        q: 'My brakes grind in Bandera Road traffic — is it urgent?',
        a: 'Grinding usually means the pads are gone and metal is cutting into the rotor, so yes, get it looked at right away. Driving on it lengthens your stopping distance and damages the rotors every mile. We can come out and tell you exactly what it needs.',
      },
      {
        q: 'How quickly can you reach Leon Valley?',
        a: 'Leon Valley is central to our northwest-side coverage, so we can usually get there quickly. Urgent brake problems get priority. Call with your location and vehicle details and we will give you a real time.',
      },
    ],
  },
  {
    slug: 'converse',
    name: 'Converse',
    state: 'TX',
    intro:
      'Converse is a fast-growing suburb on the northeast side of San Antonio, between Loop 1604, I-35, and FM 1516, close to Randolph Air Force Base. It is heavy commuter and military country — a lot of families and service members driving into the city, out to the base, and around the northeast loops every day. That daily highway-and-stop-and-go mix puts steady miles on brakes, and with so much new-build housing there are plenty of trucks and SUVs out here that get loaded up and driven hard. Most of Converse is single-family homes with driveways and garages, so mobile brake service is a natural fit — we come to the house and do the brake job in the driveway, which beats hauling the family to a shop and waiting around. We handle the full range: squeaking and grinding pads, warped rotors that pulse the pedal, soft pedals needing a fluid flush, seized calipers, and straight-up honest inspections. Tell us the year, make, and model and what the brakes are doing, and we will bring the parts and tools to you anywhere in Converse and give you a real quote.',
    neighborhoods: ['Northampton', 'Stone Crest', 'Wortham Oaks area', 'Kitty Hawk corridor', 'Olympia Hills'],
    landmarks: ['Loop 1604', 'FM 1516', 'Randolph Air Force Base', 'Converse city center'],
    issues: [
      {
        title: 'Commuter miles into the city and the base',
        body: 'Converse drivers cover a lot of ground on Loop 1604, I-35, and the roads to Randolph every day. The mix of highway and stop-and-go traffic puts steady wear on pads and rotors, especially on the family haulers.',
      },
      {
        title: 'New-build trucks and SUVs driven loaded',
        body: 'The growing neighborhoods out here mean a lot of trucks and SUVs hauling families and gear. The extra weight makes more brake heat and wears pads and rotors faster. We carry parts for the common ones and do the work on-site.',
      },
      {
        title: 'Overdue fluid on busy family vehicles',
        body: 'On busy family vehicles, brake fluid is easy to forget, and in the Texas heat old fluid can soften the pedal and fade under load. A flush in your driveway restores a firm pedal without a trip to the shop.',
      },
    ],
    nearby: ['schertz', 'universal-city', 'live-oak'],
    faqs: [
      {
        q: 'Do you come out to the Converse and Randolph area?',
        a: 'Yes. We cover Converse and the northeast-side communities around Randolph Air Force Base. We come to the house or wherever the vehicle is parked, as long as there is a flat, safe spot to work.',
      },
      {
        q: 'Can you do brakes on my truck at home in Converse?',
        a: 'Yes. Trucks and SUVs are a big part of what we do out here. Give us the year, make, and model and we will confirm parts and do the brake job in your driveway in one visit for most vehicles.',
      },
      {
        q: 'My family SUV pedal feels soft — can you fix that on-site?',
        a: 'Yes. A soft pedal usually means old, moisture-laden brake fluid or air in the system. We flush the fluid and bleed every corner in your driveway so the pedal comes back firm. If there is a leak, we will find it.',
      },
    ],
  },
  {
    slug: 'schertz',
    name: 'Schertz',
    state: 'TX',
    intro:
      'Schertz is a growing city on the northeast edge of the San Antonio metro, straddling the I-35 corridor and FM 3009 up toward Cibolo and New Braunfels, close to Randolph Air Force Base. It is commuter and family country, with a lot of newer master-planned neighborhoods and a steady flow of trucks and SUVs running I-35 and the surrounding roads. The I-35 corridor here is heavy stop-and-go at the wrong times of day, and that constant braking, combined with the Texas heat and the weight of all those family haulers, wears brakes faster than open-road driving. Most of Schertz is single-family homes with driveways, which makes mobile brake service easy — we come to the house and do the brake job on-site so you are not driving to a shop and losing the car for the day. We handle worn pads, warped rotors that pulse the pedal, soft pedals that need a flush, stuck calipers, and honest inspections. Give us the year, make, and model and what the brakes are doing, and we will bring the parts to you anywhere in Schertz and quote it straight.',
    neighborhoods: ['FM 3009 corridor', 'The Crossvine', 'Carolina Crossing', 'Greenshire', 'Schertz Parkway area'],
    landmarks: ['I-35', 'FM 3009', 'Randolph Air Force Base', 'The Forum at Olympia Parkway'],
    issues: [
      {
        title: 'I-35 corridor stop-and-go',
        body: 'Schertz lives along I-35, and that corridor backs up into heavy stop-and-go at rush hour. All that braking in traffic wears pads and heats rotors faster than the steady highway miles the factory mileage assumes.',
      },
      {
        title: 'Family trucks and SUVs on the commute',
        body: 'The newer Schertz neighborhoods are full of trucks and SUVs that haul families and run I-35 daily. The weight makes more brake heat and wear, so pads and rotors do not last as long as on a lighter car.',
      },
      {
        title: 'Heat-aged brake fluid',
        body: 'On busy commuter vehicles in the Texas heat, brake fluid gets overlooked and goes soft. A flush restores a firm pedal and protects against fade — we do it in your driveway without a shop visit.',
      },
    ],
    nearby: ['cibolo', 'universal-city', 'converse'],
    faqs: [
      {
        q: 'Do you cover Schertz and the FM 3009 area?',
        a: 'Yes. We cover Schertz from the I-35 corridor up FM 3009 toward Cibolo, and the neighborhoods around the base. We come to the house or wherever the vehicle is parked with a flat, safe spot to work.',
      },
      {
        q: 'Can you replace pads and rotors at my home in Schertz?',
        a: 'Yes. We bring the pads, rotors, and tools to your driveway and do the complete brake job on-site, usually in one visit. We confirm the right parts for your year, make, and model before we come out.',
      },
      {
        q: 'My pedal pulses on I-35 when I slow down — what is wrong?',
        a: 'That pulsing is almost always warped or unevenly worn rotors, and the heavy braking in I-35 traffic is what heats and warps them. We can replace the rotors and pads in your driveway and get smooth, even stops back.',
      },
    ],
  },
  {
    slug: 'universal-city',
    name: 'Universal City',
    state: 'TX',
    intro:
      'Universal City sits right at the gates of Randolph Air Force Base on the northeast side of San Antonio, along Pat Booker Road and Loop 1604. It is a tight-knit, military-anchored community, with a lot of service members, retirees, and families whose vehicles see daily commuting between the base, the city, and the northeast suburbs. The driving is the usual San Antonio mix — stop-and-go on Pat Booker and the loops, heat that is hard on brake fluid, and plenty of trucks and SUVs — and that adds up to steady brake wear. Universal City is mostly established single-family neighborhoods with driveways, so mobile brake service is convenient: we come to the home and do the brake job on-site, which is a real help for busy military families and retirees who would rather not lose a day at a shop. We handle squeaking and grinding pads, warped rotors, soft pedals that need a flush, seized calipers, and honest inspections. Tell us the year, make, and model and what the brakes are doing, and we will bring the parts and tools to you anywhere in Universal City and give you a straight quote and a real time.',
    neighborhoods: ['Pat Booker Road corridor', 'Northview', 'Forest Crest', 'Universal City Center', 'Olympia Hills area'],
    landmarks: ['Randolph Air Force Base', 'Pat Booker Road', 'Loop 1604', 'Northeast Lakeview College'],
    issues: [
      {
        title: 'Pat Booker and base-area stop-and-go',
        body: 'The constant stop-and-go on Pat Booker Road and around the base gates wears pads quickly and heats rotors. It is daily, short-trip city driving, which is harder on brakes than steady highway miles.',
      },
      {
        title: 'Military families and busy daily drivers',
        body: 'Service members and families here put steady commuter miles on their vehicles, and brakes get used hard without much downtime. Mobile service means the brake job happens at home without losing a duty day to a shop.',
      },
      {
        title: 'Heat-aged fluid and worn pads',
        body: 'On well-used daily drivers in the Texas heat, brake fluid softens and pads wear without much warning. An honest inspection and, if needed, a flush keeps the pedal firm and the brakes safe.',
      },
    ],
    nearby: ['converse', 'schertz', 'live-oak'],
    faqs: [
      {
        q: 'Do you offer mobile brake service near Randolph Air Force Base?',
        a: 'Yes. Universal City and the base-area neighborhoods are right in our coverage. We come to your home or wherever the vehicle is parked, as long as there is safe access and a flat spot to lift it.',
      },
      {
        q: 'Can you work around a military schedule?',
        a: 'We do our best to set a time that works, including around duty hours. Tell us when the vehicle is available and where it is parked, and we will schedule the brake job to fit.',
      },
      {
        q: 'My brakes squeal around town — should I worry?',
        a: 'A squeal at low speed is often the wear indicator telling you the pads are getting thin. It is worth a look before it turns into a grind that damages the rotors. We will come out and tell you honestly how much pad is left.',
      },
    ],
  },
  {
    slug: 'live-oak',
    name: 'Live Oak',
    state: 'TX',
    intro:
      'Live Oak is a busy northeast-side community at the crossroads of I-35 and Loop 1604, built up around The Forum shopping district and a steady stream of commuter and retail traffic. It is a mix of established neighborhoods, newer housing, and a lot of cars passing through the heavy commercial corridors every day. The I-35 and 1604 stop-and-go, plus all the short trips around The Forum and Pat Booker, is exactly the kind of driving that wears brakes — constant stops, lots of heat, not much open-road cruising to give the brakes a break. There are plenty of trucks and SUVs out here too. Live Oak is mostly single-family homes with driveways, so mobile brake service is easy: we come to the house and do the brake job on-site instead of you fighting the 1604 traffic to a shop. We handle worn pads, warped rotors that pulse the pedal, soft pedals that need a flush, stuck calipers, and honest inspections. Tell us the year, make, and model and what the brakes are doing, and we will bring the parts to you anywhere in Live Oak and quote it straight.',
    neighborhoods: ['The Forum area', 'Woodcrest', 'Forest Cove', 'Live Oak Town Center', 'Toepperwein corridor'],
    landmarks: ['The Forum at Olympia Parkway', 'I-35 / Loop 1604', 'Pat Booker Road', 'Live Oak City Hall'],
    issues: [
      {
        title: 'I-35 and 1604 interchange stop-and-go',
        body: 'Live Oak sits right at the I-35 and Loop 1604 crossroads, some of the busiest traffic on the northeast side. The constant braking through the interchange and around The Forum wears pads and heats rotors fast.',
      },
      {
        title: 'Heavy retail-corridor short trips',
        body: 'All the short hops around The Forum and the Pat Booker shopping strips mean lots of stops and little open-road driving. That short-trip, stop-and-go pattern is hard on brakes and rarely lets them clear off heat and moisture.',
      },
      {
        title: 'Trucks and SUVs in daily traffic',
        body: 'The northeast side runs on trucks and SUVs, and their weight makes more brake heat and wear in the daily 1604 grind. We carry parts for the common ones and do the brake job at your home.',
      },
    ],
    nearby: ['universal-city', 'converse', 'stone-oak'],
    faqs: [
      {
        q: 'Do you cover the Live Oak and The Forum area?',
        a: 'Yes. We cover Live Oak and the surrounding northeast-side communities around I-35, Loop 1604, and The Forum. We come to your home or wherever the vehicle is parked with a flat, safe spot to work.',
      },
      {
        q: 'Can you do my brakes while I am at work near The Forum?',
        a: 'Often, yes — if there is safe, legal parking with room to lift the vehicle and pull the wheels. A lot of customers have us do the brakes in the work or shopping-center lot while they are busy.',
      },
      {
        q: 'My pedal shakes coming off 1604 — what is that?',
        a: 'A shaking or pulsing pedal as you slow from highway speed is the classic sign of warped rotors, and the heavy braking through the 1604 interchange heats and warps them. We can replace the rotors and pads on-site.',
      },
    ],
  },
  {
    slug: 'cibolo',
    name: 'Cibolo',
    state: 'TX',
    intro:
      'Cibolo is one of the fastest-growing suburbs in the San Antonio metro, out on the northeast side along FM 1103 and I-35 between Schertz and the open country toward New Braunfels. It is family country — block after block of newer master-planned neighborhoods, full of trucks and SUVs hauling kids, gear, and the occasional trailer. Folks here commute into San Antonio and along the I-35 corridor, so the brakes see a steady diet of highway-and-stop-and-go miles, and the Texas heat and the weight of all those family haulers add up to faster brake wear. Because Cibolo is almost all new-build single-family homes with driveways and garages, mobile brake service is about as easy as it gets — we come to the house and do the brake job right in the driveway, which is a real time-saver for busy families. We handle squeaking and grinding pads, warped rotors that pulse the pedal, soft pedals that need a fluid flush, seized calipers, and honest inspections. Tell us the year, make, and model and what the brakes are doing, and we will bring the parts to you anywhere in Cibolo and give you a straight quote.',
    neighborhoods: ['Bentwood Ranch', 'Falcon Ridge', 'Steele Creek', 'Buffalo Crossing', 'FM 1103 corridor'],
    landmarks: ['FM 1103', 'I-35', 'Cibolo Creek', 'Steele High School area'],
    issues: [
      {
        title: 'Commuter miles on I-35 and FM 1103',
        body: 'Cibolo families commute into San Antonio and up the I-35 corridor daily. The mix of highway and stop-and-go traffic puts steady wear on pads and rotors, especially on heavier family vehicles.',
      },
      {
        title: 'New-build trucks and SUVs hauling families',
        body: 'The fast-growing neighborhoods here are full of trucks and SUVs loaded with kids and gear, sometimes towing. The extra weight makes more brake heat and wear, so brakes need attention sooner than on a light car.',
      },
      {
        title: 'Forgotten fluid on busy family vehicles',
        body: 'On a busy family hauler, brake fluid is easy to forget, and Texas heat softens old fluid and invites fade under load. A driveway flush restores a firm pedal without a trip to a shop.',
      },
    ],
    nearby: ['schertz', 'converse', 'universal-city'],
    faqs: [
      {
        q: 'Do you come out to the new Cibolo neighborhoods?',
        a: 'Yes. Cibolo is mostly new-build homes with driveways and garages, which makes it ideal for mobile brake service. We come to the house and do the brake job on-site, usually in one visit.',
      },
      {
        q: 'Can you do brakes on a truck that tows in Cibolo?',
        a: 'Yes. Towing is hard on brakes, so along with pads and rotors we often recommend a fluid flush with high-boiling-point fluid so the brakes hold up under load. Give us the vehicle details and we will set it up.',
      },
      {
        q: 'How fast can you reach Cibolo?',
        a: 'Cibolo is well within our northeast-side coverage. Call with your location and vehicle details and we will give you a real time — urgent brake problems get priority because they are a safety issue.',
      },
    ],
  },
  {
    slug: 'boerne',
    name: 'Boerne',
    state: 'TX',
    intro:
      'Boerne sits northwest of San Antonio up I-10, in the heart of the Hill Country in Kendall County. It is a different kind of driving than the city — real grades and winding Hill Country roads, a lot of pickups and SUVs, and plenty of folks towing trailers, livestock, and boats out to the lakes and ranches. Hills and towing are the two things that punish brakes the most: braking down a long grade builds serious heat, and that heat is what fades old fluid and warps thin rotors. Boerne is mostly homes and properties with driveways and plenty of room, so mobile brake service fits right in — we come out to the property and do the brake job on-site, which beats driving all the way into the city or down to a shop. We handle worn pads, warped rotors that pulse the pedal, fluid flushes for trucks that tow and run the grades, seized calipers, and honest inspections before a trip. Tell us the year, make, and model and what the brakes are doing, and we will bring the parts and tools to you anywhere in Boerne and the surrounding Hill Country and quote it straight.',
    neighborhoods: ['Downtown Boerne', 'Fair Oaks Ranch', 'Cordillera Ranch', 'Tapatio Springs', 'I-10 corridor'],
    landmarks: ['Main Street Boerne', 'I-10', 'Cibolo Center for Conservation', 'Boerne Lake'],
    issues: [
      {
        title: 'Hill Country grades and heavy downhill braking',
        body: 'Boerne driving means real grades and winding roads, and braking down them builds heat fast. Long downhill braking is hard on pads and is exactly what warps a thin rotor or fades old brake fluid.',
      },
      {
        title: 'Towing trailers, livestock, and boats',
        body: 'A lot of Boerne and Hill Country drivers tow heavy loads to ranches and lakes. Towing dramatically increases brake heat and wear, so good rotors, fresh pads, and high-boiling-point fluid matter more than they would on a city car.',
      },
      {
        title: 'Pickups and SUVs that work for a living',
        body: 'Boerne runs on trucks and SUVs that haul and tow, and their weight wears brakes quickly. We carry parts for the common heavy half-ton and three-quarter-ton trucks and do the work right at the property.',
      },
    ],
    nearby: ['helotes', 'leon-valley', 'san-antonio'],
    faqs: [
      {
        q: 'Do you drive out to Boerne and the Hill Country?',
        a: 'Yes. We cover Boerne and the surrounding Kendall County and Hill Country areas, including Fair Oaks Ranch and Cordillera Ranch. We come to the property as long as there is a flat, safe spot to lift the vehicle.',
      },
      {
        q: 'My truck brakes fade towing down the grades — what fixes that?',
        a: 'Brake fade towing downhill is usually old, moisture-laden fluid boiling from the heat, often with worn pads or thin rotors. A fluid flush with high-boiling-point fluid plus fresh pads and good rotors restores stopping power under load. We do it all on-site.',
      },
      {
        q: 'Can you inspect my brakes before a towing trip?',
        a: 'Yes, and that is a smart call before towing in the Hill Country. We check pad and rotor condition, the calipers, and the fluid, and tell you straight whether the brakes are ready for the load and the grades or need work first.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
