---
date: 2023-05-31T13:00:05.995Z
title: Grossly Incandescent
icon: /img/qachan.png
description: We've added a Praise The Sun emote as our first custom animation
  EVER! We also added a new grilling emote. Titan Weapons new builds momentum
  even if it misses, but has lower damage and endurance cost. Romulus no longer
  runs like a coward. More!
---
# MapServer

* Removed some OG dev code that was running 20 times per tick per character. Should make the MapServer less resource intensive in general.

# Emotes

![](/img/uploads/grill.png "I just wanna grill!")

* Added new `/e praisethesun` emote
* Added new `/e grill` emote

# Power System

* New system for powers to have effects that activate regardless of hit or miss of the base power

# Powers

* Titan Weapon

  * Uses the new power system for Momentum activation, so you now gain Momentum regardless of hit or miss
  * Defensive Sweep

    * Damage Scale lowered from 0.729 -> 0.679
    * End cost lowered from 5.536 -> 5.2
  * Crushing Blow

    * Damage scale lowered from 1.804 -> 1.7548
    * End cost lowered from 8.78384 -> 8.528
  * Sweeping Strike

    * Damage Scale lowered from 1.428 -> 1.3309
    * End Cost lowered from 10.49776 -> 10.192
  * Arc of Destruction

    * Damage Scale lowered from 2.596 -> 2.41728
    * End cost lowered from 19.06736 -> 18.512
  * Whirling Smash

    * No longer has DoT (Loss of effective 0.3 scale * 0.85 chance)
    * End cost lowered from 13.9256 -> 13.52
* Ice Manipulation (Mastermind)

  * Glacial Shield's missing Energy Resistance has been fixed
* Energy Aura (Stalker)

  * Recharge bonus should function the same as other sets now
* Ninjitsu

  * Kuji-In Retsu now has Absorb
* Fighting Pool

  * Various power name references in descriptions have been fixed

# Backend

* Cleaned up some code to help optimizer

# Client

* Fixed bug causing chat bubbles from players to show above NPCs

# Custom Pets

* Fix error that occurred on reload/map change that may have been causing issues with pet bodies and our other custom pet logic

# Task Forces

* Dr. Quaterfield's TF now gives 68 merits instead of 122 due to the revamp significantly reducing the time investment 

# Incarnate - Lore

* KoV support pet no longer grants Teleport Protection, which would block self and ally teleports

# Enemies

* Romulus (Nictus)

  * AI no longer has Fear causing it to run away periodically

# Maps

* Kallisti Wharf

  * First Ward Citizens are no longer on the East side and have been replaced