---
date: 2022-01-03T21:20:41.036Z
title: Power Tweaks
icon: /img/qachan.png
---
# Power Updates:
* **Mastermind:**
    * Necromancy - Lich's AOE Hold:
        * Reduce End Cost from 8.528 -> 7.528
        * Increase Recharge Time 8s -> 16s
        * Reduce Hold time from 12s -> 6s
        * Remove Damage component
        * Left the -To-Hit alone
    * Heat Mastery: Fixed prereq requirements
    * Hold Ground: Changed it to a 0.75 ActivatePeriod with a 0.5 second duration on the attributes. This should fix a source of server strain and address the -NaN% bug on the Endurance Consumption display.

* **Kinetic Melee - All Versions:**
    * Power Siphon: The base power now grants 37.5% damage for 10 seconds down from 62.75% for 60. The vanilla version did not grant any base damage.
    * The stacking temporary power now grants 25% damage per stack up to 5 stacks for 20 seconds down from 31.25% per stack for 60 seconds. 
        * The Temp power lasts 10s, Siphon Mode lasted 60s, for clarity
        * Vanilla was 20 seconds Siphon Mode and 31.25% per stack.
    * To-Hit increase has been reduced from 20% for 10 seconds down to 7.5% for 20 seconds. Vanilla was 7.5% for 20 seconds.
    * Recharge has been lowered from 180 to the vanilla 120 seconds.

* **Brute - Super Strength:** Reverted to vanilla to hopefully address objects not being damageable with certain powers, as well as fix damage values that weren't accurate (as in lower scale than vanilla). Rage retains our changes currently
* **Defender - Holy Light:** Admonish recharge and end cost increased to match other t2 blasts
* **Scrapper - Super Reflexes:** Fixed Quickness and Practiced Brawler PStrings on ShortHelpText

* **Miscellaneous:**
    * Sonic Repulsion no longer plays the On Hit SFX
    * Blind (all versions) No longer uses a pseudopet
    * Speed of Sound now has proper Dark and MinFX
    * Fixed PString on Water Control's Riptide ShortHelpText caused by a typo
    * Fixed Dual Pistols Aim (all versions) to take ToHit IOs

# Costume Updates:
* Mini Bikini (Minikini) in solid and white stripe pattern for tights with skin and skirts
* Thigh high socks with solid and white stripe pattern minikini for tights with skin and skirts
* Fix the Plasma (Combat Only) version not working on the Gloves aura selections and causing log spam.
* Fix missing Metal Skeleton Arm - Left Hand on Males

# Cathedral of Pain:
* Lowered the Aspect's max level from 54 back to 52

# Bug Fixes
* Fixed a bug from the OG devs that caused a group of Freakshow that are supposed to spawn with a destructible barrel to not appear correctly.
* Fixed Explosive Arrow to properly do Knockup. It was referencing a non-existent table for scaling and has been set to "Ones" so that it is always scale 2.0 now.
* Identify Weakness no longer ignores resistance on the Regen debuff and no longer accepts Strength on it either.
* Fix Cathedral of Pain to work through LFG
* Address Lucky Bullet and Blood Drink PStrings
* Address (part of) an error in power attribute stacking
* Presents (and other objects) will now properly reward salvage, etc.. to level 50 players
* Fixed a bug from the OG devs causing script-controlled entities to not properly deactivate in certain scenarios (This addresses the Obelisk spawns continuing when Phase 2 of CoP started)
* Fixed a few issues spamming our logs. Part of those are the above, part aren't player facing. This will help us address future issues. 
* Adjusted certain escorts from being set to Minion_Pet to being set to Boss_Signature_Pets stats. This should hopefully fix cases like Black Scorpion's story arc where Dr. Aeon could die before reaching him.