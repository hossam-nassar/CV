# Knowledge Blog Publishing Standard

This site publishes practical, evidence-led knowledge about HR operations, automation, workforce analytics and internal system design.

## Content pillars

1. **HR systems and operations** — employee records, attendance, leave, payroll inputs, document expiry, approvals and controls.
2. **Automation reliability** — workflow design, notifications, APIs, retries, audit trails, access control and failure handling.
3. **Workforce analytics** — data quality, KPI design, Power BI, Excel, reconciliation and decision-oriented dashboards.
4. **Tool selection** — reasoned comparisons based on architecture, governance, maintenance and operating context.
5. **Case lessons** — anonymized lessons from real systems without confidential employee or company data.

## Required article structure

Every substantial article should include:

- a narrowly defined operational problem;
- the conclusion or recommended model near the beginning;
- assumptions and scope;
- process and data design;
- implementation sequence;
- failure modes and exceptions;
- controls, permissions and audit evidence;
- measurable success indicators;
- authoritative sources where factual claims depend on external documentation;
- publication and last-updated dates;
- three genuinely related internal links.

## Evidence rules

- Separate documented facts, design recommendations and personal experience.
- Prefer official documentation, legislation, standards and primary research.
- Do not cite a source that does not directly support the adjacent statement.
- Legal or regulatory content must show the jurisdiction and review date.
- Never publish real employee records, credentials, internal URLs or confidential company data.

## Article metadata

Each page should define:

- unique title and meta description;
- canonical URL;
- Arabic and English `hreflang` links when both versions exist;
- Open Graph and Twitter metadata;
- `TechArticle` or `Article` JSON-LD;
- `datePublished`, `dateModified`, author and keywords;
- RSS item and sitemap entry.

## Publishing workflow

1. Add the article in both language folders when a full translation exists.
2. Add cards to both insights index pages with category and keyword data attributes.
3. Add the article to `feed.xml`.
4. Add paired URLs to `sitemap.xml`.
5. Verify internal links, headings, language direction and structured data.
6. Review the article for confidential information and unsupported claims.
7. Publish through a pull request rather than editing the default branch directly.

## Quality threshold

Do not publish an article merely to target a keyword. Publish only when it contributes at least one of the following:

- a reusable framework;
- a detailed implementation pattern;
- a source-backed operational explanation;
- an anonymized case lesson;
- a decision model with explicit trade-offs;
- a checklist, data model, formula or control design that a practitioner can apply.
