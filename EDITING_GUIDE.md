# Oompy Code Work — Editing Guide

The website text is intentionally kept in one file:

app/site-content.ts

For most content updates, you should not need to edit page.tsx or globals.css.

## Quick editing workflow

1. Open app/site-content.ts.
2. Change only the words inside quotation marks.
3. Save the file.
4. Preview the site locally with:

       pnpm run dev

5. Open the local address shown in the terminal.
6. Stop the preview with Ctrl+C.
7. Confirm the finished site can be exported with:

       pnpm run build

## Where each part of the page lives

| Website area | Content key |
| --- | --- |
| Top-left name | brand |
| Navigation labels | nav |
| Top-right system message | header |
| Main headline and introduction | hero |
| Thin status strip below the hero | systemStrip |
| Work-section introduction | workIntroduction |
| Ridenet and MYLAPS project details | projects |
| Problem-solving explanation | approach |
| Privacy and public-information notes | notes |
| Bottom statement and disclaimer | footer |

## Editing ordinary text

Change this:

    lineOne: "Small tools.",

to something like this:

    lineOne: "Race-day tools.",

Keep:

- the property name, such as lineOne
- the colon after the property name
- quotation marks around the text
- the comma at the end

## Editing a project

Each project inside projects contains:

- number: displayed project number
- label: short technical category
- title: project name
- headline: main benefit
- description: longer explanation
- points: three practical capabilities
- status: label at the top of the instrument panel
- readouts: three input/process/output values
- flow: four workflow stages along the bottom

Example:

    {
      number: "01",
      label: "ENTRY / SCHEDULING",
      title: "Ridenet Data Processor",
      headline: "From export to an organised event in minutes.",
      description: "Your longer project explanation goes here.",
      points: [
        "First capability",
        "Second capability",
        "Third capability",
      ],
      status: "PROCESS / READY",
      readouts: [
        { label: "INPUT", value: "RIDENET EXPORT" },
        { label: "PROCESS", value: "LOCAL WORKSPACE" },
        { label: "OUTPUT", value: "ENTRIES + SCHEDULE" },
      ],
      flow: ["EXPORT", "CHECK", "ORGANISE", "SCHEDULE"],
    },

You can change any quoted text in this block. Keeping three points, three
readouts, and four flow stages will preserve the intended layout.

## Adding or removing a bullet

The points section is a list:

    points: [
      "First point",
      "Second point",
      "Third point",
    ],

Add another quoted line followed by a comma to add a point. Delete the complete
quoted line to remove one.

## Recommended text lengths

These are guidelines rather than hard limits:

- Hero headline: 2–4 words per line
- Project title: 2–5 words
- Project headline: one short sentence
- Project description: 25–45 words
- Capability point: 4–12 words
- Readout value: 1–3 words
- Flow stage: 1–2 words

Shorter labels are easier to read on phones and trackside displays.

## Privacy checklist

Before publishing, check that the text contains no:

- customer names
- rider names
- entry lists
- email addresses or phone numbers
- event exports or screenshots containing real data
- personal addresses or identifying profile details

Ridenet, MYLAPS, and Speedhive may be named when explaining which workflows the
projects are designed around.

## Typography

The website now bundles its own font files:

- Barlow Condensed for large headings
- Barlow for normal text
- IBM Plex Mono for technical labels

These are installed through the project dependencies and are included in the
GitHub Pages build. Do not replace them with Windows-only fonts if you want the
layout to remain consistent across modern browsers and operating systems.

## Publishing an update

After pnpm run build succeeds:

    git add app/site-content.ts
    git commit -m "Update website content"
    git push origin main

GitHub Pages will rebuild the public site automatically after the push.

If you also changed the design or another file, stage those named files as well
instead of using git add -A.

## Files to avoid changing for content-only updates

- app/page.tsx controls page structure and interactions.
- app/globals.css controls the complete Pit Wall design and responsive layout.
- app/layout.tsx controls metadata and bundled font loading.
- .github/workflows/deploy-pages.yml controls GitHub Pages publishing.

Edit these only when you intend to change how the site works or looks.
