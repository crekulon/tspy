---
date: 2022-06-09T23:00:00.000Z
title: Claws, Reflexes, Whirlpools, and 300 Characters
icon: /img/qachan.png
---
# Client
## Improvements
  * NVCPL has been removed and replaced with the latest NVAPI
    - NVAPI is now used to get the number of monitors and the GPU dedicated memory available for determining system specs (and ultimately what your computer supports). If NVAPI fails, the game will determine the available memory the same way it does for AMD
  * Removed nvDXT from Game includes, since it hasn't been in use for a while
  * Removed old AlienSDK include references in a few spots, since it has been removed from our codebase for a while
  * Added new Preview system to perform specific animations for previews in Power Customization
## Occlusion
  * Adjustments to a lot of small geometry to mark it as not needing to be occluded
## Bug Fixes
  * Fix an out-of-bounds read in the Power Customization menu
  * Fix crash in the old Tutorials caused by clicking "More" after the enhancement tutorial
  * Fix crash from viewing Info on powers missing Description text
## UI
  * Removed Archetype stat bars in the character creation, since they were both bugged and not very accurate outside of that
  * Removed the double % on Power Info displays
  * Fixed Power Info Average Damage calculation to properly account for the formula of: floor(duration/period) + 1 for ticking damage
  * Add new menu message when customization fails to tell players they need to rename the pet
  * Unlocking slots and renaming characters no longer shows the "Do you want to be taken to the store?" dialog

# Server
## Improvements
  * Adjustment to pathfinding improving calculation speeds, fixed memory leak, and possibly addressed issue with flying NPCs becoming stuck
  * Character slots expanded to 300
## Bug Fixes
  * Fixed MARTY trigger bug caused by XP normalization
  * Adjustment to code behind /respec - Was incorrectly flagging that you had a respec available when that was not the case, if you had used a Trial respec before

# Backend
## Improvements
  * Adjustment to collision code to reduce some unnecessary slowdowns and an optimization for some of the math
## Bug Fixes:
  * getPhysicalMemory now returns actual RAM size values

# Enhancements
  * Can now be slotted at +3 again
  * Fix Natural/Magic and Technology/Natural DOs not having the updated values

# Costumes
## Backweapons
  * Fix Male and Huge using Female FX for Mecha Broadsword and Titan Weapons
  * Fix Legacy Broadsword missing
  * Fix Fire Broadsword missing
  * Fix Ice Broadsword missing
  * Fix Fire and Ice - Elemental Broadsword and Titan Weapon missing

## Female
  * Tights (Muscled) has been added using the Longbow Male bumpmap, the existing Longbow has been edited to use the proper bumpmap
    - This will allow for custom masks to be applied instead of just the Longbow

# Scripted Events
## Paladin
  * Fixed event in Kings Row to properly resets
## Dilemma Diabolique
  * Fixed Spines Badge Challenge to properly fail if the spines are not all destroyed within the timer

# Powers
## New KB System
  * Replaced Singularity's Repel with a Pull towards itself
  * Replaced Riptide's awful ForceMove with a rotating Pull. As a result, radius is reduced to better match graphic (40ft -> 25ft) and damage is increased from 0.15/tick -> 0.23/tick

## Defender
  * Ice Melee powers now accept Defender IOs

## Primalist
  * Changed Nature's Boon to no longer remove your Primal Energy
  * For Prowler Form, Nature's Boon now gives an additional non-hide scale Bleed on Feral Blow, Vicious Strike, and Savage Blow. These powers no longer have Stun as a result.

## Peacebringer
  * Energy Flight
    - Reduced end cost from 0.5 -> 0.182
    - Increased Fly speed scale to 1.25

## Pool
  * Removed account server check on Utility Belt and Sorcery
  * Super Jump
    - Increase leap height and speed from scale 1 -> 1.25 in PVE. 
    - Reduced endurance cost to 0.228 -> 0.182
  * Super Speed
    - Increase run speed from scale 1 to 1.25 in PVE.
    - Reduced endurance cost to 0.2275 -> 0.182
  * Speed of Sound
    - No longer provides Stealth
  * Fly
    - Reduced endurance cost from 0.2275 -> 0.182
    - Fly Speed scale increased from 1 -> 1.25 in PVE
  * Afterburner
    - Reduced endurance cost from 0.325 -> 0.2275

## Dark Blast
  * Tenebrous Tentacles
    - Fixed Radius to be 60 and match the range
    - Reduced Damage to properly account for the Radius and Arc from 0.118/tick Smashing to 0.07235/tick. Negative is the same.
  * Torrent
    - Readded Smashing damage at 0.2 scale, added 0.03 to negative
    - Increased endurance cost from 12 to 14.352
  * Blackstar
    - Increased Smashing damage from 1 -> 1.23
    - Increased Negative damage from 3 -> 3.73

## Wind Control
  * Removed the debug floating text of "I Drain Pressure!" from the powers.

## Psychokinetic Assault
  * Sword Pets now use a silent sequencer for movement, death, etc..

## Sprint Customization
  * Changes to make the Glide FX customizable

## Super Reflexes

* Removed PvP specific Psionic defense 
* Evasion's effects have been merged into Focused Senses
* Agile and lucky's effects have been merged into Dodge, which is now the t3 power in the set.

* Focused Fighting
  - Defense scale increased from 1.85 to 2.0 
  - Defense debuff resistance increased from 0.4 to 0.6
  - Added tohit debuff resistance

* Focused Senses 
  - Defense scale increased from 1.85 to 2.0, 
  - Defense debuff resistance increased from 0.4 to 0.6

* Agile (Renamed to Dodge) 
  - Now has Melee, Ranged, and AoE defense 
  - Defense debuff value increased from 0.2 to 0.6 
  - Scaling resistance value increased from 0.2 to 0.6

* Practiced Brawler 
  - Can now be activated while mezzed 
  - Absorb removed
  - Added +regen to be 150%(non-stacking, non-ehancable) and 25%(enhancable, stacks) 

* Dodge 
  - Replaced with Reaction Time from Blasters Martial Combat, near 1:1 other than having an end cost and not granting +recovery

* Quickness
  - Removed +regen effect

* Lucky 
  - Replaced with Block, a passive power with resistance to all damage other than psionic.

* Evasion
  - Replaced with Quick Recovery

* Elude (reworked to what appears to be an i25 beta change from paragon studios)
  - Added large absorb shield
  - Reduced duration from 180 to 90
  - Removed crash 


## Claws

There was a previous reduction of endurance costs and recharge times, this has been undone which results in most powers costing 1 more end and recharging 1s slower.

* Swipe 
  - Now has the damage, recharge, and endurance costs of Strike.

* Strike 
  - Moved to the t1 slot 
  - now has follow ups animation

* Follow up
  - Reworked into an auto power that grants a global proc that triggers off of any power that can take damage slotting, works similar to martial combat blaster's Reach for the limit, also adds fire damage to attacks.

* Spin
  - Area increased from 8 to 10

* Eviscerate
  - Cone widened from 90 to 120 
  - radius increased from 7 to 9

* Shockwave
  - Now does knock down instead of knock back 
  - Range increased from 30 to 40

## Claws (Stalkers)

* Re-ordered powers to fit in Spin

* Strike 
  - Replaced with Spin

* Follow up
  - reworked to be a permanently active +additional fire damage global Proc, gained automatically when selecting build up.


## Psychokinetic Assault

* Lash
  - Endurance cost reduced from 6.5 to 5.2

* Thrash 
  - Arc reduced from 145 to 120

* Slam 
  - Damage scale reduced from 2.5 to 1.8.

* Psychokinetic swords: the energy damage half of their damage no longer benefits from damage boosts.


## Energy Aura

Revamp goals: Move active defensive powers to earlier in the set and equalize differences between the different versions.
 

* Kinetic Shield
  - Increased defense scale of smash/lethal from 1.75 to 2.0 for scrappers and brutes (Stalkers were already at 2.2)

* Dampening Field 
  - Switched to Kinetic Dampening for scrappers and brutes which combines the effects of Dampening Field and Energy protection. (stalkers already had this)

* Power shield
  - Unchanged

* Entropy Shield (stalker): 
  - Switched to Entropic Aura, will suppress when hidden.

* Entropic Aura 
  - Unchanged

* Disrupt (stalker) 
  - Moved to t8 slot

* Energy protection (scrapper, brute) 
  - reworked to Disrupt, moved to t7 slot.

* Energy Cloak (scrapper, brute) 
  - Moved to t8 slot.

* Energy drain (scrapper, brute) 
  - moved to t6 slot.

* Disrupt 
  - additional on hit end drain reduced from 1 to 0.25 
  - Added movement slow 
  - Target cap increased from 5 to 10
  - Additional on hit end drain only applies if a target is successfully stunned

* Energize 
  - Moved to t5 slot for scrappers and brutes, t6 for stalkers.

* Overload: 
  - reduced duration from 180 to 120 
  - added in -25 Max end crash for 30s after expiration

## Dominator Soul Mastery

* Soul Tentacles
  - Added Domination attributes
  - Fixed to accept Immobilize and dominator ATO sets

## Stalker Martial Arts

* Cobra Strike replaced with Dragons Tail

## Stalker Energy Melee

* Stun replaced with Whirling Hands

## Darkness Control

* Spirit Host
  - Pet count reduced from 5 to 3

## Super Speed Power Pool

Flurry had been set to have straight up nonsense numbers along with a few strange bugs and misplaced data, this has all been cleaned up.

* Flurry
  - Endurance cost increased from 8.528 to 11.856 
  - Recharge time increased from 8 to 12 
  - Radius increased from 7 to 9, arc increased from 45 to 90 
  - fixed missing max target data (set to 5) 
  - damage reduced from .539 per tick to 0.21 per tick 
  - bonus damage values (crit, containment) set to 1.68


## Fiery Aura (all ATs)

* Fire shield 
  - removed fear protection
  - added immobilize protection

* Healing Flames 
  - reduced heal from 3 to 2.5 (vanilla values)

* Temperature protection
  - removed confuse protection
  - removed +recharge
  - removed immobilize protection

* Plasma Shield
  - Removed confuse protection

* Consume
  - Increased recharge from 60 to 120 (Vanilla is 180), 
  - removed fire resistance debuff
  - increased recovery buff duration from 15 to 30

* Fiery Embrace
  - Reverted to vanilla version

* Rise of the Phoenix (This is sort of experimental and may be changed at a later date) 
  - can now be cast while alive
  - knock back changed to knock up. 
  - reduced from 40 targets hit to 16 (vanilla)