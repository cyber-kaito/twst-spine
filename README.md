# twst-spine

This is a modified version of lwd-temp/blue-archive-spine for Twisted Wonderland.

## Disclaimer

**Disney Twisted-Wonderland is a registered trademark of Disney Enterprises, Inc. This repo is not affiliated with The Walt Disney Company, Aniplex, Inc., or Aniplex of America, Inc. All game resources are copyrighted to the respective owners.**

## File Name Guide

I apologize in advance for how long this section is.
The following is a guide on how to parse the model and animation names to find the model or animation you might be looking for:

### Character and Event IDs

The models associated with the characters' cards are named "common_XXXYYY0," in which "XXX" is the student's internal ID, and "YYY" is the internal ID of the event or set the card is from. Here is a list of all the non-NPC character's IDs:
- 111: Riddle
- 112: Ace
- 113: Deuce
- 114: Cater
- 115: Trey
- 121: Leona
- 122: Jack
- 123: Ruggie
- 131: Azul
- 132: Jade
- 133: Floyd
- 141: Kalim
- 142: Jamil
- 151: Vil
- 152: Epel
- 153: Rook
- 161: Idia
- 162: Ortho
- 171: Malleus
- 172: Silver
- 173: Sebek
- 174: Lilia
- 181: Grim
- 511: Rollo

And here are the event/set IDs:
- 000: Birthday Boy
- 001: School Uniform
- 002: PE Uniform
- 003: Labwear
- 004: Ceremonial Wear
- 005: Dorm Uniform
- 006: Beanfest (Beans Camo)
- 007: Fairy Gala (Gala Couture)
- 008: Phantom Bride (Suitor Suit)
- 009: Wish Upon a Star (Starsending Robes)
- 010: Camp Vargas (Outdoor Wear)
- 011: Halloween (Halloween)
- 012: Culinary Crucible (Apprentice Chef)
- 013: A Firelit Sky (Silk Adorned)
- 014: Chapter 6
- 015: Birthday Jacket
- 016: Harveston Sledathon (Applepom)
- 017: New Year's (New Year's Attire)
- 018: College Gear
- 019: Twisted Tsumderland (Tsumsitter)
- 020: Broom Birthday
- 021: Club Wear
- 022: Port Fest (Port Wear)
- 023: Glorious Masquerade (Masquerade)
- 024: Sunset Savana (Kingly Garb)
- 025: Chapter 7
- 026: Spring Festival (Rabbit Wear)
- 027: Lost in the Book with Stitch (Swim Wear)
- 028: Stage in Playful Land (Playful Dress)
- 030: Platinum Jacket

Example: The model "common_1710230" is Malleus' Masquerade outfit. "171" is his character ID, and "023" is the ID for the Masquerade cards.

### Model Names

-  [101 - 134]\_\*: Models from the Book 1-5 Twistunes and cutscenes
-  [601, 603]\_\*: Models from the Fairy Gala event Twistunes
-  [604, 606, 607]\_\*: Models from the Wish Upon a Star event Twistunes
-  608\_\*: Models from the Halloween Part 1 event Twistunes
-  609\_\*: Models from the 1st Anniversary event Twistune
-  610\_\*: Models from the A Firelit Sky event Twistunes
-  612\_\*: Models from the Halloween Part 2 event Twistunes
-  [613, 614]\_\*: Models from the Harveston Sledathon event Twistunes
-  615\_\*: Models from the 2nd Anniversary event Twistune
-  [619, 621]\_\*: Models from the Fairy Gala Remix event Twistunes
-  [622, 623]\_\*: Models from the Twisted Tsumderland Part 1 event Twistunes
-  [627, 628]\_\*: Models from the Port Fest event Twistunes
-  631\_\*: Models from the Glorious Masquerade Part 1 event Twistunes
-  632\_\*: Models from the Sunset Savanna's Tamashina-Mina event Twistunes
-  633\_\*: Models from the 3rd Anniversary event Twistune
-  [634, 635]\_\*: Models from the Twisted Tsumderland Part 2 event Twistunes
-  [637, 638]\_\*: Models from the Queendom of Roses' White Rabbit Festival event Twistunes
-  [639, 640]\_\*: Models from the Lost in the Book with Stitch event Twistunes
-  common_1\*: General animations for card-specific models
-  common\_\*: General animations for NPC models
-  cook\_\*: Models of the chefs from the Culinary Crucible events
-  drama\_\*: I'm honestly unsure of what these are for, if anyone knows please let me know!
-  judge\_\*: Models of the judges from the Culinary Crucible events
-  lesson\_\*: Models of the staff characters from lessons

### Animation Names

-  101\_\*: Animations for when the model in is history lessons
-  102\_\*: Animations for when the model is in flight lessons
-  103\_\*: Animations for when the model is in alchemy lessons
-  800\_\*: Animations for when the model is cooking during Culinary Crucible events
-  900\_\*: Animations for when the model is in battle
-  000\_\*: Animations for when the model is in the card upgrade menu
-  failure: Animation that plays when you miss a note in a Twistune
-  success: Animation that plays when you hit a note in a Twistune
-  wait: Animation that plays when there are no notes being hit in a Twistune
-  The animation names are pretty self-explanatory, for example ones with "attack" in the name are used for when the model attacks in a battle, ones named "idle" are used when the model is idling, etc.
