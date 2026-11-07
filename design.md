# Elite Wood & Furniture --- Website Design Specification

**Document:** `design.md`\
**Project:** Elite Wood & Furniture website\
**Status:** Design baseline for implementation\
**Purpose:** Define the website structure, visual identity, shopping
experience, interaction design, and UX principles.

------------------------------------------------------------------------

## 1. Project vision

The website should present Elite Wood & Furniture as a furniture maker
and retailer offering well-crafted furniture for comfortable, beautiful,
everyday living.

The experience should feel:

-   **Approachable and welcoming:** visually polished without appearing
    exclusive, intimidating, or unnecessarily luxurious.
-   **Warm and contemporary:** natural materials, inviting interiors,
    considered typography, and generous spacing.
-   **Product-led:** real furniture photography and clear product
    information should take priority over decorative effects.
-   **Easy to shop:** visitors should be able to discover products,
    understand prices and options, and enquire or order with minimal
    friction.
-   **Personal:** WhatsApp should make it easy for customers to discuss
    product details and special requests with the business.

The guiding design idea is:

> Furniture that makes a house feel like home.

The website should create an experience, not merely display a catalogue.
Visitors should be able to imagine the furniture in their own homes
while still finding the practical information they need to make an
enquiry.

### 1.1 Core design principle

**The animations should make the furniture feel alive, not make the
website feel animated.**

Motion, transitions, cards, and visual effects must support discovery,
clarity, comfort, and conversion. They must never compete with product
photography or make shopping slower.

------------------------------------------------------------------------

## 2. Brand identity and visual direction

The existing Elite Wood & Furniture logo is the source of truth for the
brand identity. Preserve its design and original brand colours. Do not
redesign or reinterpret the logo without explicit approval.

### 2.1 Existing logo colours

  -----------------------------------------------------------------------
  Colour                  Hex                     Existing use
  ----------------------- ----------------------- -----------------------
  Bright Red              `#E51B24`               "ELITE" and the curved
                                                  swirl in the circular
                                                  emblem

  Pure White              `#FFFFFF`               "WOOD" and white
                                                  background/outline
                                                  elements

  Orange / Red-Orange     `#F26522`               "FURNITURE" and
                                                  horizontal accent lines

  Dark Charcoal / Black   `#181818`               Dark elements and
                                                  contrast
  -----------------------------------------------------------------------

### 2.2 Supporting website palette

The website should preserve the logo colours while introducing warm
neutrals that complement wood, upholstery, and interior photography.

  -----------------------------------------------------------------------
  Colour                  Hex                     Intended use
  ----------------------- ----------------------- -----------------------
  Warm Ivory              `#F7F3ED`               Main page backgrounds
                                                  and warm section
                                                  surfaces

  White                   `#FFFFFF`               Product surfaces,
                                                  navigation, forms, and
                                                  clean content areas

  Charcoal                `#181818`               Main text, footer, dark
                                                  sections, and strong
                                                  contrast

  Elite Red               `#E51B24`               Primary CTA, active
                                                  states, important
                                                  highlights

  Furniture Orange        `#F26522`               Secondary accents and
                                                  occasional decorative
                                                  details

  Wood Brown              `#75543D`               Optional supporting
                                                  accent for wood-related
                                                  details
  -----------------------------------------------------------------------

Wood Brown is a supporting colour, not a replacement for the established
brand colours. Use it sparingly.

### 2.3 Colour balance

Use the following approximate balance as a design guide, not a rigid
rule:

-   **70% neutrals:** warm ivory, white, and other quiet backgrounds.
-   **20% dark tones:** charcoal typography, navigation details, and
    selected dark sections.
-   **10% brand accents:** Elite red and occasional orange.

Do not use red and orange as large alternating section backgrounds. The
website should feel like a furniture brand, not a promotional flyer.

Use red for primary actions and selected highlights. Use orange more
selectively. Ensure text and controls have sufficient contrast,
including on coloured buttons.

### 2.4 Typography

Recommended pairing:

-   **Headings:** DM Serif Display.
-   **Body and interface:** DM Sans.

Use the serif to add editorial warmth and character to hero headlines
and important section titles. Use the sans-serif for navigation,
descriptions, prices, filters, product information, forms, and buttons.

Typography guidelines:

-   Hero headlines should be prominent but concise, ideally two or three
    lines at most.
-   Section headings should establish a clear hierarchy without becoming
    oversized.
-   Product names and prices must be easy to scan.
-   Body text should have comfortable line-height and readable line
    lengths.
-   Use a restrained set of font weights.
-   Avoid excessive uppercase text, very thin body text, and too many
    competing type styles.

------------------------------------------------------------------------

## 3. Image and media direction

**Use the most suitable real image from the Project Directory's `Media`
folder for each intended purpose.** The available images have already
been collected for this project. Inspect and select from that folder
before sourcing or generating replacement imagery.

Do not choose images merely because they look attractive. Choose the
image that best communicates the content of its specific section or
product.

### 3.1 Image selection rules

-   Use actual Elite Wood & Furniture product photographs for product
    cards, product detail pages, featured collections, and product
    galleries whenever the matching image exists.
-   Use relevant workshop, craftsmanship, materials, or process
    photographs for the Our Story and craftsmanship sections.
-   Use suitable lifestyle or interior photographs for the homepage hero
    and editorial sections when available.
-   Use images that accurately represent the product being described. Do
    not show a sofa image for a TV stand category, for example.
-   Prefer images with useful composition and enough visual space for
    text overlays where overlays are required.
-   Keep product photography consistent in crop, aspect ratio, and
    presentation.
-   Do not stretch images or distort furniture proportions.
-   Use appropriate `object-fit` and positioning so important product
    details remain visible.
-   Optimise image sizes and formats, and lazy-load below-the-fold
    imagery.
-   Avoid generic stock imagery when a suitable real company image is
    available.

If the Media folder does not contain an image suitable for a specific
section, choose the best available relevant image and flag the gap
rather than pretending it is an actual Elite product or workshop
photograph.

### 3.2 Image treatment

-   Keep product images clear and relatively neutral.
-   Use warm, natural lighting where possible.
-   Avoid heavy filters that change the actual colour of furniture,
    fabric, or wood finishes.
-   Use subtle image zooms and reveals, not exaggerated rotations or
    distortion.
-   Product image galleries should support multiple angles and detail
    shots when available.

------------------------------------------------------------------------

## 4. Website information architecture

The website should remain lean. Avoid creating unnecessary pages or
duplicating category content.

### 4.1 Main navigation

Recommended navigation:

-   Home
-   Shop
-   Our Story
-   Delivery
-   Contact

The logo should link to Home. The header should also provide access to
the shopping bag and a prominent WhatsApp enquiry action.

### 4.2 Routes and page structure

Suggested routes:

  Route                Purpose
  -------------------- -------------------------------------
  `/`                  Homepage and brand introduction
  `/shop`              Full product catalogue
  `/shop/sofas`        Sofa category
  `/shop/beds`         Bed category
  `/shop/tv-stands`    TV stand category
  `/shop/[category]`   Other confirmed product categories
  `/product/[slug]`    Individual product detail
  `/our-story`         Company story and craftsmanship
  `/delivery`          Delivery information and FAQs
  `/contact`           Contact details and enquiry options
  `/cart`              Shopping bag / selected products

Category routes should be based on the actual product categories
confirmed by Elite. Do not invent categories such as cupboards or
wardrobes until the business confirms that it makes or sells them.

The shopping bag may be implemented as a drawer initially, with a
dedicated `/cart` route available for a more complete shopping
experience.

### 4.3 Header and navigation

The header should:

-   Display the supplied logo clearly.
-   Use concise navigation labels.
-   Indicate the active page or section.
-   Provide an obvious Shop route.
-   Include a shopping bag icon with an item count.
-   Provide a visible WhatsApp enquiry route.
-   Adapt into a clean mobile navigation menu.
-   Remain usable when sticky, if a sticky header is used.

Avoid overcrowding the header with too many links or icons.

------------------------------------------------------------------------

## 5. Homepage structure

The homepage should introduce the brand, inspire visitors, guide them
into the catalogue, and make it easy to enquire.

Recommended section order:

### 5.1 Hero section

Purpose: establish the emotional direction of the brand and encourage
visitors to explore.

Content:

-   A strong, welcoming headline.
-   A short supporting statement.
-   Primary CTA leading to Shop.
-   Secondary CTA leading to Our Story.
-   A sequence of suitable furniture or interior images.

Visual direction:

-   Large, high-quality image area.
-   Slow cinematic image zoom.
-   Multiple images that change automatically after a reasonable
    interval.
-   Simple progress indicators or controls so visitors can navigate
    manually.
-   Text should remain readable and should not obscure important
    furniture details.

The standard hero should use a slow zoom and crossfade or similarly
restrained transition.

A puzzle-piece / tiled image transition is an experimental alternative.
Build and test it separately from the main implementation. It should
only be adopted if it looks polished, performs well, and remains usable
on mobile and lower-powered devices.

### 5.2 Brand introduction

A concise introduction communicating what Elite Wood & Furniture does
and the value it aims to provide.

Use a warm, uncluttered layout with an appropriate supporting image.
Avoid unverified claims about company history, manufacturing processes,
materials, or guarantees.

### 5.3 Shop by category

Present the main confirmed product categories, such as:

-   Sofas
-   Beds
-   TV Stands
-   Other confirmed furniture categories

Each category should have a relevant image, clear label, and link to the
corresponding filtered Shop route.

### 5.4 Featured products

Show a curated selection of real products.

Each product preview should include:

-   Product image.
-   Product name.
-   Confirmed displayed price.
-   Relevant availability or made-to-order information, if confirmed.
-   Link to the product detail page.

Do not invent product names, prices, availability, dimensions, or
specifications.

### 5.5 Craftsmanship / Our approach

Use appropriate real photographs of workshop activity, wood, upholstery,
finishing, or completed furniture. The section should communicate care
and quality through evidence rather than unsupported marketing claims.

A darker charcoal or warm wood-toned treatment may be used to create
contrast with the lighter sections.

### 5.6 Customisation introduction

Explain that customers can enquire about applicable product options. In
the first release, the confirmed planned customisation concept is
cushion type and colour for eligible products, subject to Elite's
confirmation.

Do not advertise fabric customisation, custom dimensions, or other
options as universally available unless the business confirms them.

### 5.7 Delivery introduction

Provide a short introduction to delivery and link to the dedicated
Delivery page. Only publish confirmed delivery areas, costs, timelines,
and conditions.

### 5.8 Final CTA and footer

Close with a clear invitation to browse or enquire.

The footer should contain:

-   Logo.
-   Main navigation links.
-   Shop/category links where useful.
-   Confirmed phone and WhatsApp contact.
-   Confirmed physical location and opening hours, if available.
-   Social media links.
-   Any relevant business information.

------------------------------------------------------------------------

## 6. Shop page

The Shop is the main catalogue and should prioritise product discovery
and clarity.

### 6.1 Shop introduction

Use a compact heading and supporting sentence. Avoid repeating the large
homepage hero. Visitors should reach the products quickly.

### 6.2 Category navigation

Provide category filters or tabs for all confirmed categories. Selecting
a category should update the product list and ideally update the URL so
the selection can be shared and revisited.

### 6.3 Product grid

Use a consistent product-card system.

Each card should display:

-   Relevant product photograph.
-   Product name.
-   Confirmed price.
-   Relevant product status, where applicable.
-   A clear route to view product details.

Suggested layout:

-   Desktop: three or four columns depending on available width and
    image proportions.
-   Tablet: two or three columns depending on available width.
-   Mobile: generally two columns where product images and text remain
    legible; use one column only where the layout or screen width
    requires it.

### 6.4 Search, sorting, and filters

First-release functionality should remain simple:

-   Search by product name.
-   Filter by category.
-   Sort by price, low to high.
-   Sort by price, high to low.
-   Featured/default sorting.

Additional filters should only be introduced when the actual catalogue
makes them useful.

### 6.5 Product states and empty states

Design clear states for:

-   Available products.
-   Made-to-order products, if confirmed.
-   Out-of-stock or unavailable products, if the business provides this
    information.
-   Search with no matching results.
-   Empty categories.
-   Loading product data.
-   Product image unavailable.

Do not show a product as available or made to order without reliable
product data.

------------------------------------------------------------------------

## 7. Product detail page

The product page should provide enough information for a customer to
understand the item and make an informed enquiry.

### 7.1 Product layout

Recommended desktop structure:

-   Product image gallery on the left.
-   Product name, price, description, options, quantity, and order
    actions on the right.
-   Product details and specifications below.
-   Related products where appropriate.

On mobile, place the gallery first, followed by product information and
options. Keep the primary order action easy to reach.

### 7.2 Product image gallery

-   Main product image with thumbnail navigation.
-   Smooth image crossfade when changing images.
-   Larger image/lightbox view when selected.
-   Clear close and navigation controls.
-   Use actual product angles and details from the Media folder where
    available.

### 7.3 Product information

Display only information supplied or verified by the business:

-   Product name.
-   Price.
-   Description.
-   Dimensions.
-   Materials.
-   Finish.
-   Availability or lead-time information.
-   Assembly or care details, where confirmed.

Do not fill gaps with invented specifications.

### 7.4 First-release customisation

Customisation must be product-specific and conditional.

The initial planned cushion customisation is:

-   Cushion type: Spring cushions or HD cushions.
-   Preferred cushion colour.
-   Additional customer requests in a free-text field.

This is intended for eligible products, expected to include sofas, but
must be confirmed by Elite before being presented as an available
option.

Important rules:

-   Do not show cushion options on products where they do not apply.
-   Allow customers to leave the colour undecided.
-   Use only actual available colours once confirmed.
-   Do not assume Spring and HD cushions have the same price.
-   If a cushion option changes the price, show the confirmed additional
    charge and update the displayed estimate accordingly.
-   Make clear when the final price or availability needs confirmation.
-   Do not include fabric customisation as a standard first-release
    feature unless Elite confirms it.
-   Do not imply that every product can be resized, refinished, or
    otherwise customised.

The free-text field should allow additional requests without implying
that every request can be fulfilled.

### 7.5 Quantity and order actions

Provide a simple quantity selector with sensible limits and immediate
visual feedback.

The product page should provide:

-   **Order via WhatsApp:** prepares an enquiry containing product name,
    product identifier or URL, displayed price, quantity, selected
    options, and additional requests.
-   **Add to bag:** adds the configured product to the shopping bag.

The direct WhatsApp action should remain available even when the
shopping bag is implemented.

------------------------------------------------------------------------

## 8. Shopping bag and future checkout

A lightweight shopping bag is part of the intended first-release
experience. It is useful now for collecting multiple products before
sending one WhatsApp enquiry and creates a sensible foundation for
future e-commerce functionality.

### 8.1 First-release shopping bag

The shopping bag should support:

-   Add product.
-   Remove product.
-   Change quantity.
-   Review selected options.
-   See product prices and line totals where pricing is known.
-   See a subtotal where it can be calculated reliably.
-   Continue shopping.
-   Send the selected items through one WhatsApp enquiry.

Each bag item should retain its own product-specific options, including
cushion type, colour, and additional requests where applicable.

The bag should not claim that an order is confirmed. It represents a
selection or enquiry until Elite confirms the order.

### 8.2 Cart feedback animation

When a product is added:

-   The bag count updates.
-   The cart/bag icon gives a small, quick bounce.
-   A subtle confirmation message appears, such as "Added to your bag".
-   Avoid disruptive modal popups unless the user chooses to open the
    bag.

The animation should be brief and should not interfere with continued
browsing.

### 8.3 WhatsApp bag enquiry

The WhatsApp message should contain a readable summary of all selected
items:

-   Product name.
-   Product identifier or product URL.
-   Quantity.
-   Displayed price.
-   Selected options.
-   Additional requests.
-   Subtotal, only where it can be calculated accurately.
-   A request for Elite to confirm availability, final pricing, and
    delivery.

Encode the WhatsApp message safely and use the business's confirmed
WhatsApp number. Never invent a contact number.

### 8.4 Future e-commerce and order tracking

The design and data model should avoid blocking future development of:

-   Customer accounts and authentication.
-   Online checkout and payment.
-   Persistent orders and order identifiers.
-   Customer order history.
-   Order tracking by an order ID or authenticated account.
-   Order status updates, for example: Pending, Confirmed, Processing,
    Delivering, Delivered, or Cancelled.

These are future capabilities, not first-release requirements.

Do not build authentication, payment processing, or customer order
tracking into the first release unless separately approved. The first
release should remain focused on product discovery, the shopping bag,
and WhatsApp enquiries.

------------------------------------------------------------------------

## 9. Our Story page

The Our Story page should communicate the business's identity, approach,
and craftsmanship.

Suggested content:

-   Introduction to Elite Wood & Furniture.
-   The company's story and background, once supplied.
-   How the business approaches furniture making.
-   Workshop and craftsmanship photographs.
-   Completed furniture examples.
-   A CTA to explore the Shop or contact the business.

Use an editorial layout with varied image and text arrangements. Avoid
generic blocks of text or unsupported claims about years of experience,
materials, guarantees, or production methods.

------------------------------------------------------------------------

## 10. Delivery page and FAQs

Delivery deserves a dedicated page because furniture purchases involve
practical questions.

Include verified information about:

-   Delivery locations and coverage.
-   Delivery charges.
-   Expected delivery timelines.
-   How delivery is arranged after an enquiry or order.
-   Any collection or pickup arrangements.
-   What customers should do if an item arrives damaged, if a policy
    exists.

A concise FAQ section can be included on this page. A separate FAQ page
is not necessary for the first release.

Do not invent delivery charges, timelines, coverage, or policies. Use
placeholders during development and replace them only with confirmed
business information.

------------------------------------------------------------------------

## 11. Contact page

The Contact page should make it easy to reach the business.

Include, where confirmed:

-   WhatsApp number.
-   Telephone number.
-   Physical address or location.
-   Opening hours.
-   Social media profiles.
-   A concise contact/enquiry prompt.

A floating WhatsApp action can also be available throughout the website.
The contact page should not be the only way to reach the business.

------------------------------------------------------------------------

## 12. Cards and reusable UI components

Create a consistent component system rather than styling every card and
button independently.

### 12.1 Product cards

Product cards must prioritise shopping information.

Default state:

-   Product image.
-   Product name.
-   Price.
-   Optional status label.
-   Clear product link or action.

Hover state on devices that support hover:

-   Image zoom of approximately 1.03--1.05.
-   Optional secondary product image, when available.
-   Subtle lift of approximately 3--5px.
-   Slight shadow adjustment.
-   Clear indication that the card or its action is interactive.

Do not hide product names, prices, or essential details behind hover.

### 12.2 Category cards

Category cards may use a more expressive image-reveal interaction.

Default state:

-   Relevant category photograph.
-   Category title.
-   Simple visual cue that the category can be explored.

Hover state:

-   Slight image zoom.
-   Subtle dark overlay.
-   Short descriptive line fades in.
-   Arrow appears or moves into position.
-   Entire card remains a clear navigation target.

On touch devices, show the description and action cue by default. Do not
require hover to reveal essential content.

Use this treatment selectively for homepage category tiles and suitable
editorial cards. Do not apply it to every product card.

### 12.3 Editorial and feature cards

Use cards for selected craftsmanship, delivery, or brand-value content
when they improve the layout. Prefer varied editorial compositions over
wrapping every section in a rounded rectangle.

### 12.4 Buttons

Use a small, consistent button system:

-   **Primary:** Elite red background with sufficiently contrasting
    text.
-   **Secondary:** charcoal outline or restrained charcoal fill.
-   **Text link:** minimal treatment with an animated underline or
    arrow.

CTA interaction:

-   Arrow moves slightly on hover.
-   Button colour changes subtly.
-   Arrow can appear on hover when appropriate, but the action must
    remain clear without hover.
-   Press state gives brief tactile feedback, such as a very small scale
    reduction.
-   On mobile, use clear default affordances and touch feedback rather
    than simulated hover.

------------------------------------------------------------------------

## 13. UX and motion design

Motion should be purposeful, subtle, consistent, and performant.

### 13.1 Hero motion

Main implementation:

-   Slow cinematic image zoom, approximately 100% to 106%.
-   Multiple relevant images that rotate after a reasonable interval,
    approximately 5--7 seconds as an initial design target.
-   Gentle crossfade or restrained transition.
-   Manual slide controls and progress indicators.
-   Preload the next image where practical.

Experimental implementation:

-   Puzzle-piece / tiled transition between hero images.
-   Develop on a separate branch.
-   Start with a CSS Grid tile approach; use GSAP only if it makes
    orchestration clearer.
-   Compare visual quality and performance against the standard
    transition before adopting it.
-   Keep the standard transition available as a fallback.

### 13.2 Image interactions

Approved interaction ideas:

-   Gentle image zoom for product and category images.
-   Image reveal masks for selected editorial sections.
-   Subtle image lift for selected interactive cards.
-   Secondary-image swap on product cards when another suitable
    photograph exists.
-   Occasional parallax for large editorial images only.

Avoid exaggerated tilt, constant movement, or effects that distort the
apparent shape or proportions of furniture.

### 13.3 Text and scroll reveals

Use:

-   Line-by-line reveal for important headings.
-   Word-by-word reveal sparingly, mainly for hero or major editorial
    statements.
-   Staggered entry for lists, benefits, and selected groups of cards.
-   Subtle opacity and vertical movement for section entrances.

Do not animate every paragraph or every element. Text must remain
readable and should not be delayed unnecessarily.

### 13.4 Cushion page transition experiment

A furniture-inspired cushion transition is a signature experiment, not a
mandatory navigation effect.

Concept:

-   A cushion graphic or image travels from left to right.
-   Its movement helps reveal the next page.
-   The transition is quick and should not make navigation feel slow.

Implementation:

-   Prototype as a fixed-position overlay using a suitable transparent
    asset or SVG.
-   Use CSS or Motion for basic movement; use GSAP only if necessary.
-   Test on real devices.
-   Do not trigger it for every product click or repeated navigation
    action.
-   Use it only for selected major navigation transitions if it remains
    enjoyable.
-   Provide a simple transition fallback.

### 13.5 Additional interaction details

-   Fabric/finish swatches, when applicable, should have a clear
    selected state.
-   Product gallery changes should use a smooth crossfade.
-   Image lightboxes should have clear controls and keyboard support.
-   Shopping bag count should update immediately.
-   Adding to bag should trigger a brief cart bounce and subtle
    confirmation.
-   A thin brand-red scroll progress indicator may be used on longer
    pages.
-   A floating WhatsApp action should remain accessible without covering
    important content.

------------------------------------------------------------------------

## 14. Responsive design

Responsive behaviour is part of the design, not a later cosmetic
adjustment.

### Desktop

-   Spacious layouts with strong image presentation.
-   Multi-column product grids.
-   Side-by-side product gallery and information.
-   Full navigation where space permits.
-   Hover interactions where appropriate.

### Tablet

-   Reduce grid columns as needed.
-   Preserve comfortable spacing and readable text.
-   Adapt side-by-side layouts before they become cramped.
-   Keep product actions accessible.

### Mobile

-   Compact navigation with a clear menu.
-   Product photography and information stacked vertically.
-   Generally two-column product grids where cards remain readable.
-   Touch-friendly controls and adequate spacing.
-   No essential content hidden behind hover.
-   Avoid large animations that block interaction.
-   Keep WhatsApp and shopping bag access convenient.
-   Consider a visible or sticky product-order action only if it does
    not obstruct content.

Test common narrow and wide mobile viewports, tablets, laptops, and
large desktop screens.

------------------------------------------------------------------------

## 15. Accessibility and performance

These are requirements, not optional refinements.

### Accessibility

-   Maintain sufficient text and control contrast.
-   Use semantic headings, buttons, links, forms, and navigation.
-   Provide useful alternative text for meaningful images.
-   Ensure keyboard access and visible focus states.
-   Give product controls accessible labels.
-   Do not communicate product availability or selection using colour
    alone.
-   Respect `prefers-reduced-motion`.
-   Provide usable touch targets.
-   Ensure image galleries, menus, dialogs, and shopping bag
    interactions can be operated accessibly.

### Performance

-   Optimise images and use appropriate modern formats.
-   Lazy-load below-the-fold images.
-   Prioritise and preload the main hero image.
-   Preload the next hero image before a transition where practical.
-   Animate `transform` and `opacity` wherever possible.
-   Avoid unnecessary layout-triggering animations.
-   Avoid running multiple heavy effects simultaneously.
-   Keep animation libraries limited to what the project actually needs.
-   Test performance on realistic mobile connections and devices.

------------------------------------------------------------------------

## 16. Suggested implementation approach

The exact stack can be confirmed during implementation, but the design
is compatible with a Next.js frontend.

Suggested responsibilities:

  -----------------------------------------------------------------------
  Technology                          Responsibility
  ----------------------------------- -----------------------------------
  Next.js                             Routing, page composition, and
                                      application structure

  Tailwind CSS / CSS                  Layout, responsive styling, and
                                      basic interactions

  Motion for React                    Component transitions, scroll
                                      reveals, and interface feedback

  GSAP                                Optional advanced puzzle or cushion
                                      transition experiments
  -----------------------------------------------------------------------

Do not introduce GSAP simply because it is available. Most interactions
should be achievable with CSS and Motion. Keep advanced experiments
isolated so they can be removed without affecting the main experience.

Build reusable components for:

-   Header and mobile navigation.
-   Footer.
-   Primary, secondary, and text-link buttons.
-   Product cards.
-   Category cards.
-   Product image gallery.
-   Product option selectors.
-   Quantity selector.
-   Shopping bag and bag drawer.
-   WhatsApp enquiry action.
-   Section reveal wrappers.
-   Loading, empty, and unavailable states.

------------------------------------------------------------------------

## 17. Product data and pricing

Product names, images, prices, descriptions, specifications,
availability, and options must come from project data or information
explicitly supplied by the business.

The project owner will provide pricing guidance separately, either
through a file or another structured source.

Until that information is supplied:

-   Use clearly identified placeholder values only in prototypes.
-   Do not treat illustrative prices as confirmed prices.
-   Do not invent product names or specifications.
-   Do not invent stock status, lead times, delivery charges, or
    customisation surcharges.
-   Keep pricing data separate from presentation components so it can be
    updated easily.
-   Ensure the same product price is presented consistently across
    product cards, product detail pages, and the shopping bag.

The `Media` folder in the Project Directory is the primary source for
product and brand imagery.

------------------------------------------------------------------------

## 18. First-release scope versus future scope

### First release

-   Homepage and brand introduction.
-   Shop catalogue and confirmed categories.
-   Product detail pages.
-   Product image galleries.
-   Confirmed product prices and descriptions.
-   Product-specific cushion options where Elite confirms they apply.
-   Additional requests field.
-   Direct WhatsApp product enquiry.
-   Lightweight shopping bag.
-   WhatsApp enquiry for multiple selected products.
-   Our Story page.
-   Delivery and FAQs page.
-   Contact page.
-   Responsive design and core UX animations.
-   Accessible and performant interactions.

### Future enhancements

-   Customer registration and authentication.
-   Online checkout and payment processing.
-   Persistent customer orders.
-   Unique order IDs.
-   Customer order history.
-   Order tracking and statuses such as Pending, Confirmed, Processing,
    Delivering, Delivered, and Cancelled.
-   Admin tools for managing products, prices, images, and availability.
-   More advanced product customisation if the business confirms it is
    supported.

Do not allow future features to complicate the first release. However,
keep product identifiers, cart item structure, and order-enquiry data
organised so the application can evolve without needing to redesign the
entire shopping experience.

------------------------------------------------------------------------

## 19. Design acceptance checklist

Before considering the design ready for implementation, confirm that:

-   [ ] The existing logo is used without unauthorised redesign.
-   [ ] The established red, orange, white, and charcoal colours are
    preserved.
-   [ ] Warm neutral surfaces balance the stronger brand colours.
-   [ ] DM Serif Display and DM Sans are applied consistently.
-   [ ] Images are selected from the Project `Media` folder according to
    their intended purpose.
-   [ ] The homepage communicates comfort, craftsmanship, and
    approachable quality.
-   [ ] The Shop is easy to browse, search, filter, and sort.
-   [ ] Product cards show essential shopping information without
    requiring hover.
-   [ ] Product details use verified information and prices.
-   [ ] Cushion options only appear on eligible, confirmed products.
-   [ ] Direct WhatsApp enquiry works for individual products.
-   [ ] The shopping bag supports multiple configured products.
-   [ ] Adding an item gives clear feedback, including the subtle cart
    bounce.
-   [ ] A multi-item WhatsApp enquiry is readable and contains the
    selected options.
-   [ ] Our Story, Delivery, and Contact pages are included.
-   [ ] Experimental puzzle and cushion transitions are isolated from
    the core experience.
-   [ ] Mobile, tablet, and desktop layouts are usable.
-   [ ] Reduced-motion preferences and accessibility are respected.
-   [ ] Animations do not obstruct shopping or delay important
    information.
-   [ ] No unverified business claims, product details, prices, or
    delivery terms are published.

------------------------------------------------------------------------

## 20. Final design direction

Elite Wood & Furniture should feel like a welcoming, thoughtfully
designed furniture showroom brought online.

Its identity comes from the existing logo, the real furniture it makes
and sells, warm photography, and a restrained use of motion. The
catalogue should be practical and clear. Product pages should make
relevant options easy to understand. WhatsApp should make enquiries
personal and convenient. The shopping bag should support customers who
want to enquire about several pieces together while leaving a path open
for future online checkout and order tracking.

The result should be visually memorable, but always grounded in the
product and the customer's experience.

**Design north star: approachable elegance, real craftsmanship, and
comfort made for everyday living.**
