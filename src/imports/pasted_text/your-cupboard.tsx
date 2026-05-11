Design a mobile sub-screen for Keep Pace called "Your cupboard." This
is reached from the Planning screen's "+ Add food" button. Single
purpose: select food items from a familiar library.

Background: deep near-black/teal #0B1D20. Cards #16242C. Primary
green #3FCB7E. Amber #F2A83B (not used on this screen). Never use
red. White primary text, 60% white secondary, 40% white tertiary.
Sentence case. Card radius 16, chip pill, button radius 14.

Header (sticky): left back chevron, center title "Your cupboard,"
right pill count "3 selected" (hidden when zero).

Below header: a single search input with placeholder "Search your
cupboard."

Then, ONLY when the rider arrived from a Planning-screen
recommendation (e.g., tapped "Browse Quick fuel"), a single line of
quiet context text — 13 / 500, 60% white, no background, no icon,
no card. Example: "Add 1 Quick fuel item for the harder second
half." This line carries both WHAT was recommended and WHY into the
selection surface, so the pre-selected filter doesn't read as
arbitrary. The line auto-dismisses (fades out) the moment the rider
switches filters, returns to "All," or types into search. NO close
button.
On free browse entry (no recommendation), this line does NOT render
— the screen goes straight from search to chip row.

Then a horizontally scrollable row of pill filter chips holding
TWO KINDS of filters in one row:

  Order, left to right:
    1. "All" (selected by default)
    2. Grocery-style categories — "Bars & Bites," "Gels & Chews,"
       "Fruit," "Real Food," "Snacks," "Drinks"
    3. ~16pt extra horizontal gap (subtle breather, NO divider line,
       NO section label)
    4. Role-style categories — "Quick fuel," "Steady fuel,"
       "Long fuel"
       (NO "Hydration" chip — Drinks and Hydration are 1:1 in this
        product, so a Hydration chip would be redundant with Drinks.
        The Drinks grocery chip handles hydration browsing.)

All chips share the same pill style — surface-card fill when
unselected, green fill with dark text when selected. The grocery
chips serve the default browsing experience (riders think in kitchen
terms). The role chips at the far right share vocabulary with the
Planning screen recommendations and get pre-selected when the rider
arrives from one. The row auto-scrolls to bring a pre-selected role
chip into view on entry.

Body: 2-column grid of food cards. The catalog is LOCKED to the 30
items below — DO NOT invent additional items, DO NOT pull stock
photography, DO NOT show branded products like "think!" Bar or
specific Sour Patch Kids packaging. Use the file path provided for
each item. Soft-white photo backdrop PRESERVED on every photo (do
not knock out onto the teal surface — the product + backdrop
together carry the recognition).

CATALOG (30 items — fixed list, display names in SENTENCE CASE):

  Bars & Bites:
    "Granola bar"        /media/food-library/00_All_Items/granola_bar.png
    "Energy bar"         /media/food-library/00_All_Items/energy_bar_wrapper.png
    "Oat bar"            /media/food-library/00_All_Items/oat_energy_bar.png

  Gels & Chews:
    "Energy gel"         /media/food-library/00_All_Items/energy_gel_packet.png
    "Energy chews"       /media/food-library/00_All_Items/energy_chews_packet.png
    "Gummy candy"        /media/food-library/00_All_Items/gummy_candy_packet.png
    "Maple syrup"        /media/food-library/00_All_Items/maple_syrup_packet.png
    "Honey"              /media/food-library/00_All_Items/honey_packet.png

  Fruit:
    "Banana"             /media/food-library/00_All_Items/banana.png
    "Banana chips"       /media/food-library/00_All_Items/banana_chips.png
    "Dates"              /media/food-library/00_All_Items/dates.png
    "Dried apricots"     /media/food-library/00_All_Items/dried_apricots.png
    "Dried mango"        /media/food-library/00_All_Items/dried_mango.png
    "Dried cherries"     /media/food-library/00_All_Items/dried_cherries.png
    "Raisins"            /media/food-library/00_All_Items/raisins.png

  Real Food:
    "PB&J"               /media/food-library/00_All_Items/pbj_sandwich.png
    "Rice cakes"         /media/food-library/00_All_Items/rice_cakes.png
    "Sweet potato"       /media/food-library/00_All_Items/sweet_potato.png
    "Oats"               /media/food-library/00_All_Items/oats_bowl.png
    "Whole grain bread"  /media/food-library/00_All_Items/whole_grain_bread.png
    "Greek yogurt"       /media/food-library/00_All_Items/greek_yogurt_with_berries.png
    "Eggs"               /media/food-library/00_All_Items/eggs.png

  Snacks:
    "Pretzels"           /media/food-library/00_All_Items/pretzels.png
    "Crackers"           /media/food-library/00_All_Items/crackers.png
    "Trail mix"          /media/food-library/00_All_Items/trail_mix_pouch.png
    "Nut butter"         /media/food-library/00_All_Items/nut_butter_packet.png

  Drinks:
    "Water"              /media/food-library/00_All_Items/water_bottle.png
    "Sports drink"       /media/food-library/00_All_Items/sports_drink_bottle.png
    "Drink mix"          /media/food-library/00_All_Items/electrolyte_drink_mix_bottle.png
    "Protein shake"      /media/food-library/00_All_Items/protein_shake_bottle.png

CARD COMPOSITION (the photo BLEEDS to the top of the card):
  - 4:5 portrait card, surface-card teal background (#16242C),
    16pt corner radius.
  - TOP ~65-70% of card height: full-width photo area. The product
    photo's WHITE BACKDROP fills this region edge to edge — left,
    right, AND top edges of the card. Top corners rounded to match
    the card. The photo is NOT a smaller floating square inside
    teal padding — that "card-within-a-card" composition is wrong.
    Reference: a product card on Walmart, Amazon, or the Apple
    Store where the product image fills the top section without
    extra padding.
  - Clean horizontal seam where the white photo area meets the
    teal info zone.
  - BOTTOM ~30-35% of card height: teal surface-card info zone,
    contains:
      • Display name (14-15 / 600 white, single line)
      • Optional unit subtext (12 / 500, 60% white) — show ONLY for
        items measured in handful or bottles. NEVER show grams.
        Items where 1 unit is obvious (banana, bar, packet,
        sandwich) carry NO subtext. Items needing subtext:
          "1 bottle"      for Water, Sports drink, Drink mix,
                          Protein shake
          "small handful" for Dates, Raisins, Dried apricots,
                          Dried mango, Dried cherries, Banana chips,
                          Pretzels, Crackers
          "1 pouch"       for Trail mix
        Reserve the vertical slot even when empty so card heights
        stay consistent across the grid.
      • Add button OR quantity bar at the bottom (see below).

ADD / QUANTITY MODEL (Walmart-pattern):
  - Each card has ONE persistent action element at the bottom of
    its info zone. It is either:
      A) An "Add" BUTTON when the item is not yet selected, OR
      B) A [−] count [+] QUANTITY BAR when count ≥ 1.
    SAME position, SAME dimensions, SAME shape — only internal
    content changes between the two states.

  - Add button (state A):
      • Full-width strip, ~36pt tall, 14pt radius
      • surface-card fill, 1px white-at-20% border
      • Label "+ Add" (white, 14 / 600, centered)
      • Single tap target spanning the strip

  - Quantity bar (state B):
      • Same outer dimensions and radius as the Add button
      • Three visually-segmented hit zones in one bar:
        [−] on left, count number center, [+] on right
      • Each segment min 44pt × 44pt active hit area (finger-
        friendly; do NOT make the +/- glyphs tiny)
      • +/- glyphs and count number: 18 / 600 white
      • Subtle 1px white-at-10% vertical dividers between segments

  - Behavior:
      • Tap Add → item enters plan with count=1; bar replaces Add
        button; card gains green border + check badge top-right of
        photo area + faint 6% green wash on photo
      • Tap + → count++  (cap at 12; + dims to 40% at 12)
      • Tap − while count ≥ 2 → count−−
      • Tap − while count = 1 → item leaves plan; bar reverts back
        to Add button; card border returns to neutral; check badge
        and wash disappear
      • The PHOTO and NAME are NEVER tap targets. There is no
        "tap photo to deselect" gesture. Removal happens ONLY by
        decrementing to 0 via −.

  - Header count chip "3 selected" counts DISTINCT ITEMS, not units.

GROUPING in the grid follows the selected filter's vocabulary:
  • When "All" is selected — group by GROCERY categories with section
    headings: Bars & Bites, Gels & Chews, Fruit, Real Food, Snacks,
    Drinks.
  • When a grocery chip is selected (e.g., "Gels & Chews") — just
    show that category's items, flat, no section headers.
  • When a role chip is selected (e.g., "Quick fuel") — just show
    that role's items, flat, no section headers.

NEVER mix both axes in the same grid (e.g., do not show grocery
section headers when a role filter is active, or vice versa). The
selected filter's vocabulary determines the grouping.

Selection state on a card: 2px green inset border, small green circle
check badge top-right (16pt, white check inside), faint 6% green
wash over the card. Tap toggles selection with a 180ms ease-out
animation; the header count updates instantly.

Last tile in the grid: a "+ Add custom item" tile with a dashed
border instead of a photo, plus icon and label.

Sticky bottom CTA: "Done" when nothing is selected (secondary tone),
"Done · 3 items" when items are selected (primary green tone).

Continuity with the Planning screen: same color tokens, same
typography, same calm motion. Real food photography only — no
abstract icons.