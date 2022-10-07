---
date: 2022-07-03T15:00:00.000Z
title: Kinetics and Kinetics
icon: /img/qachan.png
description: Kinetics has been revamped to make Siphon Power buff damage with a
  chance to proc on any attack. Now Kinetic Assault set. More tweaks.
title_fr: ""
---
# Client:
* Level is once again shown on character select

# Server:
* Bug fixes and speed ups for the SQL operations across all services

# Zone Events
## iTrials
* Lambda has been switched to the fixed Lua version
* Dilemma Diabolique has been reverted from previous patch

# Powers
* Savage Melee
- Exhausted no longer triggers CHEATER logging, spamming our logs due to a bad requires left on it
## Kinetics (All versions)

Updated all powers other than fulcrum shift to no longer use Pseudo-pets

Power order of Siphon Power and repel swapped to avoid a bug with Siphon power being a passive


* Siphon Power: Is now a passive granting a global proc for the siphon power effect to happen on any damaging powers other than pets.

* Repel: Increased area from 9 to 10, decreased knock chance from 25% to 20%.

* Siphon Speed: Is now a 15ft Targeted AoE debuff.

* Increase Density: Is now an 80ft PBAoE, caster is now affected by the resistance buffs at 50% effectiveness.

* Speed boost: Is now an 80ft PBAoE, caster is now affected by the speed and recovery buffs at 50% effectiveness.

* Fulcrum Shift: Buff strength reduced from 2.5 to 2.0 (defender numbers) buff duration reduced from 45s to 30s.



## Fiery Melee (Brute, Scrapper, Tanker)

* Reset to Vanilla and adjusted from there

* Incinerate
    - DoT damage sped up from 4.6 to 2.25, total damage is the same.

* Breath of fire
    - Cone arc increased from 30 to 45


## Fiery Assault (Dominators)

* Incinerate
    - DoT damage sped up from 4.6 to 2.25.
    - Endurance cost reduced from 10.192 to 6.864 to match the Fiery Melee version.

* Combustion
    - DoT damage sped up from 7.1 to 2.25, total damage is slightly increased to match blaster version.
    - Reduced Endurance cost and recharge to match blaster version (they have the exact same damage scaling, blaster one was just cheaper)

* Consume
    - Recharge reduced from 180 to 120
    - +recovery duration increased from 15 to 30


## Fire Manipulation (Blasters)

* Combustion
    - DoT damage sped up from 7.1 to 2.25, total damage is the same.

* Consume
    - Recharge reduced from 180 to 120
    - +recovery duration increased from 15 to 30


## Fire Mastery (Controller)

* Consume
    - Recharge reduced from 180 to 120
    - +recovery duration increased from 15 to 30


## Kinetic Melee (Brute, Scrapper, Tanker, Stalker)

* Reset to vanilla values and power order, adjusted from there.

* Burst
  - AoE Area increased from 8 to 10



## Street Justice (Brute, Scrapper, Tanker, Stalker, Defender)

* Reset to vanilla values, adjusted from there

* Sweeping Cross
  - Cone Area increased from 7 to 9
  - Cone Arc increased from 50 to 60

* Spinning Strike
  - AoE Area increased from 6 to 8


## Energy Melee

* Whirling hands (stalker)
  - Reduced AoE Area from 15 to 10
  - Reduced damage, endurance, recharge costs to match brute version
  - Reduced stun from mag 3 to mag 2
  - Reduced stun chance from 100% to 30%


## Martial Arts (Stalker)

*Dragons Tail  
  - Increased AoE area from 8 to 10


## Claws (Stalker)
  
*Spin  
  - Added in missing Assassins focus grant


## Super Reflexes (All ATs)

* Dodge
    -Scaling resistances reduced from 60% at maximum to 45% at maximum

* Practiced Brawler
    - Reduced initial +regen from 150% to 100%

* Reaction time
    - Absorb value increased from 0.33 to 0.8, now only refreshes once every 10 seconds.
    - Fixed an issue with the taunt attributes being inconsistent (Brute, Scrapper, Tanker)

* Elude
    - Reduced duration from 90s to 60s


## Spectral Aura (Stalkers)

* Spectral Shroud
    - Absorb value increased from 0.33 to 0.8, now only refreshes once every 10 seconds.


## Invulnerability (All ATs)

* Unstoppable
    - Reduced duration from 180s to 90s
    - removed crash


## Energy Aura (All ATs)

* Overload 
    - reduced duration from 180 to 90s 
    - removed crash


## Ninjitsu

* Kuji-In Retsu
    - reduced duration from 180 to 90s 
    - removed crash


## Epics

* All versions of epic t9s (Surge of power, Force of nature)
  - Recharge time reduced to 540s
  - Buff durations reduced to 90s
  - Resistance strength reduced to 3.75 (4.75 for energy resist and 2.76 negative energy resist on surge of power)
  - Crash removed
