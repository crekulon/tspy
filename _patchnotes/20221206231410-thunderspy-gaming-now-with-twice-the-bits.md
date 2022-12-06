---
date: 2022-12-06T23:11:13.397Z
title: Thunderspy Gaming (Now With Twice The Bits)
icon: /img/qachan.png
description: This update is our first 64-bit release and also comes with tons of
  graphical optimizations.
---
# 64-Bit
* 64-bit MapServer and Client are now deployed

# Backend
* Numerous code cleanups
* Fix several parts of binning relying on undefined data
  - Necessary for 64-bit, possibly resolved some weird issues with powers in 32-bit
* Removed an old system for animation changes we made

# Client
* Moved CoH cached shaders and automap to %LOCALAPPDATA%/Thunderspy Gaming/CoX/
* Small optimizations to shaders
* Adjusted Entity culling to use a faster path
* Fine tune ZOccluder to support more complex scenes
* Improve Shadow Occlusion testing, resulting in better occlusion and significantly less draw calls in many scenarios
* Fixed missing highlight texture in AE Mission Maker system
* Remove various unnecessary code eating CPU time
* Fix cutscene letterbox effect to properly scale to your window size
* Revert change causing targeting bug for some players
* Fix PhysX-associated crash
* Add menu message PStrings for the Show Chat Timestamps and Disable Audio Stacking functionality, so that they have actual help-text and proper option naming

# Server
* Update error logging for a specific error related to phasing to help us track source and resolve it
* Update Power error logging caused by Inspirations, so that they would no longer saturate our logs when you merge inspirations using the merge macro

# Apartments
* Fix UI displaying "Influence: {amount}" to be the proper amount rather than unformatted text
* Fix text upon buying/selling details to properly say, "{playerName} bought {detail} for {cost} Influence." rather than just the unformatted text

# Powers
## Inherent
* Restraint
  - Fix to not save the Boost effect to the server, so that the power forcibly reapplies as needed
## Psionic Melee
* Fix Telekinetic Blow using a different length animation with Shield
## Martial Arts
* Focus Chi
  - No longer stacks
  - No longer boosts Knockback and Knockup
## Hard Life
* Fix "It's A Hard Life" to accept ToHit IO sets
## Kinetic Assault
* Coalescence
  - Reduce ToHit scale from 4 -> 2
## Kinetic Melee
* Power Siphon
  - Increase ToHit from scale 0.75 -> 2
  - It was already 2 on Stalker
## Warshade
* Starless Step
  - Fix IO slotting
## Pool - Speed
* Flurry
  - Fix inconsistent delays on damage for Scrapper and Stalker
  - Fix Containment having the full damage scale applied as a tick

# Power Customization
* Color picker and slider are now available for fine-tuning colors
## Kheldians
* Fix transformation FX customizations
## Arachnos Widow
* Tarantula Form can now be customized between Male and Female instead of being based on the first costume slot

# Pet Customization
* Fix animation sequencer being wrong when pet's costume is first edited

# Enhancements
* Fixed level 27 DOs dropping
* Removed level expiration from all enhancements

# IOs
* Fear
  - Fix Fear set enhancements to not spam client error log and properly show the Fear duration on specific pieces that were missing

 Costumes
* Clockwork Backpack NPC costume part is now available
* Desdemona's hair is now available
* Seer costume parts are now available
* Praetorian Ghoul costume parts are now available
* Wing Blade (Godsword) Titan Weapon is now available
## Backweapons
* Fixed Main Gauche right-handed Dual Blade weapon being a greenman

# Contacts
* Veluta Lunata
  - Removed duplicate story arcs
  - Fixed the correct story arcs to no longer have the Pirate badge requirement for Flashbacks, since that was removed from her contact in i21

# Encounters
## Circle of Thorns
* Fix three CoT mobs that were misnamed by the OG devs, causing multiple static Lieutenants to be missing from a pack of CoT

# Maps
## Brickstown
* Remove reference to old GIFT Liason holiday NPC, since they're no longer used and it was causing error logging

# Zone Events
## Port Oakes Ghost Traps
* Now spawns ghosts relative to the level of the last attacking player, addressing an OG dev TODO that was exposed by our level range increases

# MapServer
* Fixed crash in certain base designs
* Fix crash occurring in certain scripts, affecting areas such as Port Oakes

# Client
* Fixed visibility test in RWZ's Vanguard Base leading to shadows being drawn relative to the sun
  - This may still occur in university buildings and possibly other locations

# Power Customization
* Fix droppers to be available for colors
* Improved color UI layout