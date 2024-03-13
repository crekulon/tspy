---
date: 2024-03-13T18:00:02.043Z
title: Account Progress
icon: /img/qachan.png
description: Account-wide progress is the focus of this update. We have a new
  account token system to unlock costume parts, certain badges, and possibly more
  for the whole account instead of only one character. Since a lot of our players
  use at least two accounts, we made it possible to log into the same account on
  multiple characters so they can all benefit from unlocked content.
---
Account-wide progress is the focus of this update. We have a new account token
system to unlock costume parts, certain badges, and possibly more for the whole
account instead of only one character. Since a lot of our players use at least
two accounts, we made it possible to log into the same account on multiple
characters so they can all benefit from unlocked content.

# Enemies

* Longbow Spec Ops now use the Electronics tag, rather than a hardcoded list of
  mobs affected by bonus damage from their EMP. This means MM Robots and others
  will now be appropriately affected.
* 5th Column robots (Mek Man, Wolfpack, Hoverbot) of varying ranks are now all
  correctly marked as Electronic for bonus damage from EMP attacks, such as
  Trick Arrow's EMP Arrow.

# Backend

* Replace the Cryptic string printing implementation with an industry-tested
  version
  - Inserting numbers in text should be less error-prone.
* Speedup of part of file processing, which should speedup update deployment.
  Minimal speedup on normal client loading due to pigg files.
* Remove VIP/loyalty/license requirement to use Auction House anywhere
* Removed premium requirements for content.
  - Going Rogue characters
  - Alignment shifts
  - Epic Archetypes
  - Some hard-coded costume part grants since they no longer need to be bought

## Co-op team lockouts

* Fix Villains/Rogues being unable to enter missions in Boomtown that are owned
  by a Hero teammate
* Remove requirement that all teammates be on the map when attempting to invite
  a co-op teammate
* Hopefully fixes alignment drops when entering Ouro
* Fix Mission Teleporter not working for Rogues/Villains into Ouroboros

## Multibox with one login

* Removed logic that kicked players offline when attempting to login to the
  same account
  - "Your account is currently logged in." message will still show, and
    characters online will receive a message letting you know another character
    has logged in.
  - **NOTE:** Caveats are that most things using globals (IE. emails and tells)
    will go only to the most recently logged in character.
* Make server aware of multiple online characters for one account

## Account-wide unlockable content

Accounts can now store tokens for unlockable content and other arbitrary data.
Costume parts such as the Vanguard set now unlock once for all characters on
the whole account. Unlocked costume parts should also be available when
creating new characters and do not require logging in to claim.

# Powers

* Removed unnecessary Loyalty & VIP checks on some Inspirations causing some
  log spam
* Fixed Mystic Fortune being unobtainable

## Fire Blast

* Fix bug with Flares on PhysX hardware attempting to spawn some FX that
  doesn't exist

## Radiation Emission

* Fixed Dark version of Irradiated Ground appearing to have a larger effect
  radius than the actual effect

# Story Arcs

* Added reward merits to the following contact's arcs: Provost Marchand, Shauna
  Stockwell, Eagle Eye, The Major, and Sgt. Schorr
* Completion of the final Croatoa arc mission will now grant Katie Hannon
  access to everyone that participated instead of just the mission owner
* Completion of Lars Hansen's arc at the "Speak to Ernesto Hess" stage unlocks
  Ernesto Hess as a contact for group members

# Task Forces/Strike Forces

* Fixed text from Task Force/Strike Force contacts to correctly state that they
  need only 3 players
* Fix "the Victor" badge exploit from Katie Hannon's TF, so that previous
  badges are properly revoked each time you kill Mary MacComber.

# Client

* Implemented new Performance Profiler
* Address enhancement UI memory leak related to Catalyzing
* Removed some dead code related to the old DoubleFusion ad system
* Adjust part of shadow visibility testing to cut down on unnecessary work for
  entities
* Disable a visibility test for entities that is likely unnecessary
* Implement an FX debris lifetime of 30 seconds
  - This means leaves, chunks of metal, etc. will fade after 30s to reduce
    particle count.
* Fix crash from an invalid power received when printing combat messages
  - This caused the infamous "Kinetics crash" any maybe other crashes
  - It doesn't solve the root of the problem, but it prevents crashes
* Adjustments to math functions in occlusion system
* Change temporary allocation in occlusion system from heap to stack-based
* Change clipping and culling threshold from 2x radius to 1.1x

# Map Editor

* Adjustments to control scheme to make it more intuitive
  - Zoom is now done by the scroll wheel, with Space Bar acting as a speed
    modifier
  - Plans to remap WASD to camera movement, rather than relying on the pan,
    look, zoom, and focus of the current system that can make it hard to work
    with for novices

# Costumes

* Disabled untextured Imperial Dynasty hair options

# Trivia

The code has been migrated from MSVC to CMake with Clang/GCC and can be linked
with MinGW. This enables easy integration with more libraries and goes a long
way towards native Linux support on the backend.
