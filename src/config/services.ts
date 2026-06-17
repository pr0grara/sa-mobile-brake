/**
 * services.ts — what the business does.
 *
 * EDIT HERE. Keep ~1 broad catch-all marked `hubOnly: true` (no per-city combo pages).
 * Flag urgent services `emergency: true`. Slugs are kebab-case join keys — keep them stable.
 */
import type { ImageMetadata } from 'astro';

import mobileBrakeImg from '../assets/services/mobile-brake-repair.jpg';
import brakePadImg from '../assets/services/brake-pad-replacement.jpg';
import brakeRotorImg from '../assets/services/brake-rotor-replacement.jpg';
import brakeCaliperImg from '../assets/services/brake-caliper-repair.jpg';
import brakeFluidImg from '../assets/services/brake-fluid-flush.jpg';
import brakeInspectionImg from '../assets/services/brake-inspection.jpg';
import emergencyBrakeImg from '../assets/services/emergency-brake-repair.jpg';

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceSection {
  h: string;
  body: string;
}

export interface Service {
  slug: string;
  name: string; // Full service name, e.g. "Brake Pad Replacement"
  short: string; // Short label for nav, cards, breadcrumbs
  blurb: string; // One-line summary
  description: string; // Intro paragraph (hub + city combo pages)
  sections: ServiceSection[]; // Deeper authority sections, rendered on the hub page
  points: string[]; // What's included / bullet points
  faqs: Faq[]; // Service-level FAQs (rendered + FAQ schema on the hub)
  image: ImageMetadata;
  imageAlt: string;
  hubOnly?: boolean; // do not generate per-city combo pages
  emergency?: boolean; // flagged as emergency/urgent (affects copy)
}

export const SERVICES: Service[] = [
  {
    slug: 'mobile-brake-repair',
    name: 'Mobile Brake Repair',
    short: 'Mobile Brake Repair',
    blurb: 'We come to your home or work anywhere in San Antonio and do the brake job in your driveway.',
    description:
      'We are a fully mobile brake shop. There is no garage you have to drive to and no waiting room to sit in — we load the pads, rotors, tools, and fluid in the truck and come to your house, your office parking lot, or wherever the vehicle is parked. Squeaking, grinding, a pulsing pedal, a soft pedal, or a brake light on the dash — we handle the whole range of brake work on cars, trucks, and SUVs. You call, you tell us the year, make, and model and what the brakes are doing, and we give you a straight quote over the phone. In a city as spread out as San Antonio, where you can spend an hour crawling Loop 410 or I-35 just to reach a shop, getting your brakes done in your own driveway saves you the drive, the wait, and the loaner-car runaround.',
    sections: [
      {
        h: 'The whole brake job, done in your driveway',
        body: 'We do pads, rotors, calipers, brake fluid, brake hoses, and the diagnosis when you are not sure what is wrong. Because we are mobile, you do not drop the car off and lose it for the day — we show up at a scheduled time, do the work on-site, and you are back on the road. Most brake jobs are done in one visit. All we need is a flat, reasonably level place to park and lift the vehicle safely.',
      },
      {
        h: 'We come to your home, work, or anywhere it is parked',
        body: 'You should not have to take half a day off to get your brakes fixed. We set up wherever the vehicle is: your driveway, an apartment lot, the office parking garage, or a job site. You keep working or stay home while we handle it. Give us safe access and a bit of room to work and we take care of the rest.',
      },
      {
        h: 'Straight quotes, no shop-counter upsell',
        body: 'We quote off the year, make, model, and what the brakes are doing. No bait pricing, no "while we had it apart" surprise add-ons. If we get there and find the rotors are fine and you only need pads, that is what we tell you — and that is what you pay for. If something genuinely needs attention for your safety, we show you the worn part before we replace it.',
      },
    ],
    points: [
      'Mobile service across San Antonio — we come to you',
      'Brake pads, rotors, calipers, fluid, and hoses',
      'Cars, trucks, and SUVs',
      'Quotes by phone from your year, make, and model',
      'Most brake jobs done on-site in one visit',
      'We show you the worn parts — no surprise upsells',
    ],
    faqs: [
      {
        q: 'What does "mobile brake repair" actually mean?',
        a: 'It means we come to the vehicle instead of you driving to a shop. We bring the pads, rotors, fluid, tools, and a jack to your home, work, or wherever the car is parked and do the brake job there. For most jobs there is nothing you need to do but point us at the vehicle and give us room to work.',
      },
      {
        q: 'How do I get a quote?',
        a: 'Call us with your vehicle year, make, and model and a quick description of what the brakes are doing — squeaking, grinding, a soft or pulsing pedal, a warning light. That is usually enough for a straight price over the phone.',
      },
      {
        q: 'Can you work in an apartment lot or parking garage?',
        a: 'Usually, yes. We just need safe, legal access to the vehicle and a flat spot with enough room to lift it and pull the wheels. Covered shade is a bonus in the summer. Tell us where it is parked when you call.',
      },
      {
        q: 'Do you work on trucks and SUVs too?',
        a: 'Yes. We handle brakes on cars, pickups, and SUVs, including the heavier half-ton and three-quarter-ton trucks common around San Antonio. Give us the year, make, and model and we will confirm parts before we come out.',
      },
    ],
    image: mobileBrakeImg,
    imageAlt: 'Mobile brake repair technician servicing a vehicle in a driveway in San Antonio',
    hubOnly: true,
  },
  {
    slug: 'brake-pad-replacement',
    name: 'Brake Pad Replacement',
    short: 'Brake Pads',
    blurb: 'Squealing or grinding? We replace worn pads at your home or work — most cars done in one visit.',
    description:
      'Brake pads are the part that wears out first and the part you replace most often. When you hear a high squeal at low speed, a grind when you press the pedal, or you notice the car taking longer to stop, the pads are usually the reason. We replace front and rear brake pads on-site anywhere in San Antonio. We pull the wheels, check the rotors and calipers while we are in there, install quality pads matched to your vehicle, clean and lubricate the hardware, and bed the pads in so they stop quiet and even. San Antonio stop-and-go traffic on Loop 410, I-35, and US-281 eats pads faster than open-road driving, so if it has been a while, it is worth having them checked before the squeal turns into a grind that scores your rotors.',
    sections: [
      {
        h: 'Squealing vs. grinding — and why it matters',
        body: 'That high-pitched squeal is usually the wear indicator, a little metal tab built into the pad that is designed to tell you the pad is getting thin. Catch it then and it is a simple pad swap. The grinding sound is metal-on-metal — the pad is gone and the backing plate is cutting into the rotor. Wait that long and a pad job turns into pads and rotors. We will tell you straight which stage you are at when we look.',
      },
      {
        h: 'Why pads wear faster in San Antonio traffic',
        body: 'Brakes wear from use, and city driving is hard on them. Crawling Loop 410 at rush hour, the constant stop-and-go on I-35 and I-10, and short trips around town mean a lot of brake applications per mile compared to highway cruising. Heavy trucks and SUVs, and anyone towing to Canyon Lake or Medina Lake, wear pads faster still. None of that is a problem if you replace them on time — it just means San Antonio drivers should not stretch a pad set as far as the factory mile estimate.',
      },
    ],
    points: [
      'Front and rear brake pads replaced on-site',
      'Rotors and calipers inspected while the wheels are off',
      'Quality pads matched to your year, make, and model',
      'Hardware cleaned and lubricated so the brakes stop quiet',
      'Pads bedded in before we leave for even, quiet stops',
    ],
    faqs: [
      {
        q: 'How do I know my brake pads need replacing?',
        a: 'The common signs are a high squeal at low speed, a grinding noise when you brake, longer stopping distances, a brake-pad warning light, or visibly thin pads through the wheel spokes. If you hear squealing, get it looked at soon — once it grinds, you are usually into rotors too.',
      },
      {
        q: 'Do I need new rotors every time I do pads?',
        a: 'No. If the rotors are still within spec, smooth, and thick enough, we just do pads. We measure and inspect them while the wheels are off and tell you honestly. Rotors usually need attention only if they are warped, scored, or worn past the minimum thickness.',
      },
      {
        q: 'How long does a brake pad job take?',
        a: 'For most cars, a front or rear pad replacement is done in about an hour on-site. Doing all four corners takes a bit longer. We bed the pads in before we leave so they are quiet and stopping evenly.',
      },
      {
        q: 'My brakes squeal but only sometimes — is that urgent?',
        a: 'It is worth checking. A squeal that comes and goes can be early pad wear, glazed pads, or just dust and moisture. We would rather look and tell you the pads are fine than have you wait until it grinds and damages the rotors.',
      },
    ],
    image: brakePadImg,
    imageAlt: 'Worn brake pads being replaced during a mobile brake service in San Antonio',
  },
  {
    slug: 'brake-rotor-replacement',
    name: 'Brake Rotor Replacement',
    short: 'Rotors',
    blurb: 'Pedal pulsing or shaking when you stop? We replace warped or worn rotors at your location.',
    description:
      'If your steering wheel or brake pedal shakes and pulses when you slow down from highway speed, your rotors are almost always the cause. Rotors are the discs the pads clamp onto, and over time and heat they wear thin, get scored by worn pads, or warp so the surface is no longer flat. We replace brake rotors on-site anywhere in San Antonio. We measure the old rotors, confirm they are past spec rather than just guessing, install new rotors matched to your vehicle, and fit fresh pads at the same time since worn pads and bad rotors usually go together. Texas heat and the long downhill grades out toward the Hill Country are hard on rotors — repeated hard braking heats them up, and that is exactly what warps a rotor that is already thin.',
    sections: [
      {
        h: 'What a pulsing pedal is telling you',
        body: 'When you brake and feel a rhythmic shudder through the pedal or the steering wheel — usually worst coming down from highway speed — that is the pads riding over a rotor that is no longer perfectly flat. The rotor has either warped from heat or worn unevenly. A pulsing pedal does not fix itself; it gets worse as the high spots keep getting hit. New rotors and pads bring back smooth, straight, quiet stops.',
      },
      {
        h: 'Why rotors warp in the Texas heat and the hills',
        body: 'Rotors shed the heat your brakes make. When they get too hot too often — riding the brakes down a long Hill Country grade toward Boerne or Bandera, towing a trailer to the lake, or repeated hard stops in summer traffic — a thin or worn rotor can warp. Heavier trucks and SUVs make more heat and are more prone to it. Replacing rotors with quality parts and fresh pads, and bedding them in properly, gives them the best shot at staying flat.',
      },
    ],
    points: [
      'Warped, scored, or worn-thin rotors replaced on-site',
      'Rotors measured against spec before we recommend replacement',
      'Fresh pads installed with the rotors for even, quiet braking',
      'Quality rotors matched to your year, make, and model',
      'New brakes bedded in to prevent early warping',
    ],
    faqs: [
      {
        q: 'Why does my brake pedal or steering wheel shake when I stop?',
        a: 'That pulsing or shudder, especially from highway speed, is the classic sign of warped or unevenly worn rotors. The pad surface is riding over high and low spots on the disc. New rotors and pads restore smooth, even stops.',
      },
      {
        q: 'Can you resurface my rotors instead of replacing them?',
        a: 'Sometimes resurfacing is an option if the rotor still has enough thickness, but many modern rotors are made thin from the factory and are below the minimum once they have warped. In a lot of cases new rotors cost about the same as machining and last longer. We measure yours and give you the honest call.',
      },
      {
        q: 'Do I have to replace rotors and pads together?',
        a: 'Usually yes when the rotors are bad. Old worn pads on new rotors stop poorly and can damage the new surface, and a warped rotor wears pads unevenly. Doing them together gives you a complete, quiet brake job that lasts.',
      },
    ],
    image: brakeRotorImg,
    imageAlt: 'Worn brake rotor being replaced on a vehicle during mobile service in San Antonio',
  },
  {
    slug: 'brake-caliper-repair',
    name: 'Brake Caliper Repair',
    short: 'Calipers',
    blurb: 'Car pulling, dragging, or a wheel running hot? We diagnose and replace stuck or leaking calipers.',
    description:
      'The caliper is the clamp that squeezes the pads against the rotor. When a caliper sticks, seizes, or leaks brake fluid, you get problems that pads and rotors will not fix: the car pulls to one side when braking, one wheel runs hot or smells like burning, the pads on one corner wear out far faster than the others, or the brakes drag and hurt your gas mileage. We diagnose and replace failed calipers on-site in San Antonio. We confirm the caliper is actually the problem — sometimes it is a collapsed brake hose or a sticky slide pin instead — then replace the caliper, fit new pads, and bleed the brakes so the pedal is firm. Texas heat and brake dust are hard on the seals and slide pins inside a caliper, which is why we see seized calipers on higher-mileage vehicles around town.',
    sections: [
      {
        h: 'Signs a caliper is sticking or seized',
        body: 'A bad caliper usually shows up as the car pulling to one side under braking, a burning smell from one wheel after driving, one wheel noticeably hotter than the others, brakes that feel like they are dragging even when you are off the pedal, or pads on a single corner worn down to nothing while the others are fine. Any of those means one caliper is not releasing the way it should. We test it before we replace anything.',
      },
      {
        h: 'Caliper, hose, or slide pin — we find the real cause',
        body: 'A wheel that drags or a car that pulls is not always the caliper itself. A collapsed inner brake hose can act like a one-way valve and hold pressure on one wheel, and dry or corroded slide pins can keep a caliper from releasing. We check all of it so you are not paying to replace a good caliper when a hose or a pin re-lube is the actual fix. When the caliper truly is shot, we replace it, fit fresh pads, and bleed the line.',
      },
    ],
    points: [
      'Stuck, seized, and leaking calipers diagnosed and replaced',
      'We check the hose and slide pins, not just the caliper',
      'Fresh pads fitted and the brakes bled to a firm pedal',
      'Fixes pulling, dragging, and one-side pad wear',
      'Quality calipers matched to your vehicle',
    ],
    faqs: [
      {
        q: 'Why does my car pull to one side when I brake?',
        a: 'The most common cause is a sticking caliper or a collapsed brake hose on one side, so one wheel grabs harder than the other. It can also be uneven pad wear from a caliper that is not releasing. We diagnose which it is before replacing anything.',
      },
      {
        q: 'What does a burning smell from one wheel mean?',
        a: 'It usually means a caliper on that corner is stuck and dragging the pads against the rotor even when you are off the brake. That builds heat fast and wears the pads quickly. Get it looked at soon — a dragging brake gets hot enough to cause damage.',
      },
      {
        q: 'Is a stuck caliper safe to drive on?',
        a: 'Not for long. A dragging caliper overheats the brake, can warp the rotor, hurts your fuel economy, and in a bad case can affect how the car stops and steers under braking. If a wheel is running hot or you smell burning, call us before driving much further.',
      },
    ],
    image: brakeCaliperImg,
    imageAlt: 'Brake caliper being serviced on a vehicle during mobile brake repair in San Antonio',
  },
  {
    slug: 'brake-fluid-flush',
    name: 'Brake Fluid Flush',
    short: 'Fluid Flush',
    blurb: 'Soft or spongy pedal? We flush old, moisture-soaked brake fluid and restore a firm pedal.',
    description:
      'Brake fluid is the part of the brake system nobody thinks about until the pedal goes soft. Over the years brake fluid absorbs moisture from the air, and that water lowers its boiling point and corrodes the system from the inside. When the fluid gets old, the pedal feels soft or spongy, the brakes can fade after repeated hard stops, and internal parts like calipers and the master cylinder wear out early. We flush and replace brake fluid on-site in San Antonio — we remove the old contaminated fluid, push fresh fluid through the whole system, and bleed every corner so the pedal comes back firm. In Texas heat, moisture-laden fluid is a real problem: hot brakes can boil contaminated fluid and cause brake fade right when you need to stop, especially towing or coming down a grade.',
    sections: [
      {
        h: 'Why old brake fluid is a hidden problem',
        body: 'Brake fluid is hygroscopic — it pulls water out of the air over time, even through sealed lines. Water in the fluid lowers its boiling point, so under hard or repeated braking the fluid can boil, turn to vapor, and leave you with a pedal that sinks to the floor. Water also rusts the steel and metal parts inside the calipers, ABS unit, and master cylinder. Most manufacturers recommend a fluid change every couple of years, but it is easy to forget because there is no obvious warning until the pedal feels off.',
      },
      {
        h: 'A firm pedal and protection from brake fade',
        body: 'Flushing the system replaces the old water-laden fluid with fresh fluid that has a high boiling point, so the brakes hold up under heat — important here when you are towing to Canyon Lake, loaded down in summer traffic, or coming down a Hill Country grade. A proper flush also protects the expensive parts of the system from internal corrosion, which is far cheaper than replacing a master cylinder or ABS module down the road.',
      },
    ],
    points: [
      'Old, moisture-soaked brake fluid fully flushed and replaced',
      'Every corner bled for a firm, responsive pedal',
      'Protects calipers, master cylinder, and ABS from corrosion',
      'Restores resistance to brake fade under heat and towing',
      'Correct fluid type (DOT 3, DOT 4, etc.) for your vehicle',
    ],
    faqs: [
      {
        q: 'How often should brake fluid be flushed?',
        a: 'Most manufacturers recommend every two to three years or so, regardless of mileage, because the fluid absorbs moisture over time. If your pedal feels soft, your brakes fade under heat, or you cannot remember the last time it was done, it is worth a flush.',
      },
      {
        q: 'Why does my brake pedal feel soft or spongy?',
        a: 'A soft or sinking pedal often means moisture or air in the brake fluid, or old fluid that has lost its boiling point. It can also point to a leak or a failing master cylinder. A flush and bleed fixes the fluid side; if there is a leak, we will find it.',
      },
      {
        q: 'What is brake fade and why does it matter here?',
        a: 'Brake fade is when the brakes get weaker the harder or longer you use them, usually from heat boiling old fluid. In Texas heat, towing, or coming down a long grade, contaminated fluid can fade right when you need to stop. Fresh fluid with a high boiling point prevents it.',
      },
    ],
    image: brakeFluidImg,
    imageAlt: 'Fresh brake fluid being flushed through a vehicle during mobile service in San Antonio',
  },
  {
    slug: 'brake-inspection',
    name: 'Brake Inspection & Diagnosis',
    short: 'Inspection',
    blurb: 'Not sure what that noise is? We come out, inspect the whole brake system, and tell you straight.',
    description:
      'Sometimes you know something is off — a noise, a smell, a warning light, a pedal that does not feel right — but you do not know what it is or whether it is urgent. That is what a brake inspection is for. We come to you anywhere in San Antonio, pull the wheels, and check the whole brake system: pad thickness, rotor condition and thickness, calipers and slide pins, brake hoses and lines, fluid condition, and the parking brake. Then we tell you straight what we found and what, if anything, needs doing — with no pressure to buy work you do not need. If your brakes are fine, we will tell you that. If something is worn or unsafe, we show you the part and explain your options. It is the honest first step when you are not sure what is wrong.',
    sections: [
      {
        h: 'A full look at the whole brake system',
        body: 'A real inspection is more than a glance through the wheel. We pull the wheels and measure pad thickness front and rear, check the rotors for warping, scoring, and minimum thickness, look at the calipers and slide pins for sticking or leaks, inspect the brake hoses and lines for cracks or corrosion, check the fluid level and condition, and test the parking brake. You get a clear picture of what is good, what is getting close, and what needs attention now.',
      },
      {
        h: 'An honest answer, not a sales pitch',
        body: 'Plenty of people have been told they need a full brake job when they really needed pads, or nothing at all. Because we are mobile and quote up front, we have no counter to fill or bay time to sell. We show you what we find — a worn pad, a scored rotor, a leaking caliper — and explain what is safe to wait on and what is not. If everything checks out, that is a perfectly good result and we will say so.',
      },
    ],
    points: [
      'Full brake-system inspection at your home or work',
      'Pad and rotor thickness measured, not eyeballed',
      'Calipers, hoses, fluid, and parking brake all checked',
      'Plain-language report of what is good and what is not',
      'No-pressure recommendations — we tell you if the brakes are fine',
    ],
    faqs: [
      {
        q: 'What does a brake inspection include?',
        a: 'We pull the wheels and check pad thickness, rotor condition and thickness, calipers and slide pins, brake hoses and lines, fluid condition, and the parking brake. Then we give you a plain-language rundown of what is good and what needs attention.',
      },
      {
        q: 'I hear a noise but I am not sure it is the brakes — can you help?',
        a: 'Yes, that is exactly what an inspection is for. Tell us what you are hearing and when, and we will come out, check the whole system, and tell you whether it is the brakes or something else, and how urgent it is.',
      },
      {
        q: 'Will you try to sell me brakes I do not need?',
        a: 'No. We quote up front and have no shop counter to fill. If your brakes are fine, we tell you. If something is worn, we show you the actual part and explain what is safe to wait on. The point of the inspection is an honest answer.',
      },
    ],
    image: brakeInspectionImg,
    imageAlt: 'Technician inspecting a vehicle brake system during a mobile visit in San Antonio',
  },
  {
    slug: 'emergency-brake-repair',
    name: 'Emergency Brake Repair',
    short: 'Emergency Service',
    blurb: 'Grinding, a pedal to the floor, or a brake warning light? Fast mobile help to get you stopping safely.',
    description:
      'Brakes are not something to gamble on. If your pedal sinks to the floor, the brakes are grinding metal-on-metal, a brake warning light is on, you see fluid leaking near a wheel, or the car barely wants to stop, that is not a "next week" problem — it is a safety issue today. We provide fast mobile help for urgent brake problems anywhere in San Antonio. We come to wherever the vehicle is — your home, a parking lot, or the side of the road if it is safe to reach — figure out what failed, and get you stopping safely again. The priority is getting the vehicle safe to drive, not selling you the biggest job. If it is not safe to drive at all, we will tell you straight rather than putting you back on Loop 1604 with brakes that cannot stop you.',
    sections: [
      {
        h: 'When a brake problem can\'t wait',
        body: 'Some brake symptoms are urgent. A pedal that goes to the floor or feels like there is nothing there points to a fluid leak or a failed master cylinder. Loud grinding means the pads are gone and metal is cutting metal. A burning smell and a wheel that will not roll freely means a seized caliper. A brake light plus a soft pedal can mean you are losing fluid. Any of those, stop driving and call — every mile makes it worse and less safe.',
      },
      {
        h: 'We get you safe first, then fix it right',
        body: 'When you call with an urgent brake problem, the first job is to figure out whether the vehicle is safe to drive at all. We come to where it is parked, diagnose what failed, and get the brakes working again — pads, a caliper, a hose, a fluid leak, whatever it turns out to be. If the safe move is not to drive it until a part comes, we will tell you that honestly instead of patching it just to get you down the road.',
      },
    ],
    points: [
      'Fast mobile response for urgent brake problems',
      'Pedal to the floor, grinding, leaks, and warning lights',
      'We come to your home, a lot, or a safe roadside spot',
      'Safety first — we tell you straight if it should not be driven',
      'Pads, calipers, hoses, and fluid leaks addressed on-site',
      'Ask about same-day availability when you call',
    ],
    faqs: [
      {
        q: 'My brake pedal goes to the floor — what do I do?',
        a: 'Stop driving as soon as it is safe and call us. A pedal that sinks to the floor usually means a fluid leak or a failed master cylinder, and the brakes can fail completely. Tell us where the vehicle is and what happened and we will come to you.',
      },
      {
        q: 'Is it safe to drive with my brakes grinding?',
        a: 'No, not really. Grinding means the pads are gone and metal is cutting into the rotor, so stopping distances are longer and the rotors are being damaged every mile. Get it looked at right away — it is cheaper and far safer than driving on it.',
      },
      {
        q: 'How fast can you get to me?',
        a: 'Call with your location and what the brakes are doing and we will give you a real time, not a runaround. Urgent brake problems get priority because they are a safety issue. Same-day service is often available — ask when you call.',
      },
      {
        q: 'Can you come to me on the side of the road?',
        a: 'If the vehicle is somewhere we can reach and work safely, often yes. If it is in an unsafe spot, the right move may be a tow to a safe location where we can fix it. Call us and we will tell you the safest option for your situation.',
      },
    ],
    image: emergencyBrakeImg,
    imageAlt: 'Mobile technician responding to an urgent brake problem in San Antonio',
    emergency: true,
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const MATRIX_SERVICES: Service[] = SERVICES.filter((s) => !s.hubOnly);
