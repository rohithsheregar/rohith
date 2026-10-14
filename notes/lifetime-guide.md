# Full-Stack and Backend Lifetime Guide

Oct 12, 2026 · @Rohith

A stage-by-stage path from web basics to deployed, scalable full-stack systems, backend first, with one primary free resource per stage and a project that proves it.

## How to use this guide

Work the stages in order, build the project at the end of each one, and move on only when every box in its "Done when" list is ticked. At about 1.5 hours a day alongside DSA, the full path takes 12 to 14 months; skim any stage you already know, but still build its project.

1. Learn from one primary resource per stage. Extra videos and blogs are optional and never replace building.
2. Type every example yourself, then rebuild it without looking.
3. Push every project to GitHub with a README: what it does, how to run it, one diagram, and what you would change.
4. Keep a short notes file per stage: three things that broke, and how you fixed them.
5. Revisit the stage map every month and tick progress.

| Stage | Topic | Weeks | Primary resource | Proof project |
| --- | --- | --- | --- | --- |
| 0-1 | Tools and web basics | 1-4 | CS50x, Missing Semester, Odin Foundations | Static personal page on GitHub Pages |
| 2 | JavaScript, TypeScript, Node | 5-8 | Node.js Learn, Total TypeScript tutorials | CLI tool in TypeScript |
| 3 | Frontend | 9-14 | React docs, Next.js Learn | Dashboard app in Next.js |
| 4 | Backend core | 15-18 | Full Stack Open Part 3, Node Best Practices | REST API with validation |
| 5 | Databases | 19-24 | PostgreSQL docs, Use The Index Luke, Drizzle or Prisma | Same API on PostgreSQL |
| 6 | Auth and security | 25-27 | OWASP cheat sheets, Full Stack Open Part 4 | Login with JWT and roles |
| 7 | Architecture and testing | 28-31 | Full Stack Open Part 5, Vitest | Tested layered API |
| 8 | Docker, CI/CD, deploy | 32-35 | Docker Get Started, GitHub Actions docs | Deployed app with CI |
| 9 | Scale and system design | 36-42 | System Design Primer, Hussein Nasser | Cached and queued service |
| Parallel | DSA and placements | all along | NeetCode 150 | 3 problems a day, 5 days a week |

## Stage 0-1: Tools and web basics (weeks 1-4)

Become fluent in the terminal, Git and the browser before touching any framework; everything later assumes this.

| Resource | Use it for | Cost |
| --- | --- | --- |
| [CS50x](https://cs50.harvard.edu/x/) | Weeks 6-9 (Python, SQL, HTML/CSS/JS, Flask) as a refresher; skim the rest | Free |
| [The Missing Semester](https://missing.csail.mit.edu/) | Shell, editor, Git, debugging, packaging code | Free |
| [The Odin Project: Foundations](https://www.theodinproject.com/paths/foundations) | Hands-on HTML, CSS, JavaScript and Git projects | Free |
| [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development) | Reference for HTML, CSS and JS whenever you are unsure | Free |
| [Pro Git](https://git-scm.com/book/en/v2) | Branching, rebase, resolving conflicts | Free |

**Build:** a static personal page with a responsive layout, deployed on GitHub Pages, with at least ten meaningful commits across three branches.

**Done when**

- [ ] I can navigate, search and script in the terminal without a mouse
- [ ] I can branch, merge, rebase and resolve a conflict in Git
- [ ] I can lay out a responsive page with Flexbox and Grid
- [ ] I can explain what happens between typing a URL and seeing a page

## Stage 2: JavaScript, TypeScript and Node.js (weeks 5-8)

Learn the language deeply first, then add types, then the runtime. Node's official Learn section now covers the event loop, streams, the built-in test runner and running TypeScript directly.

| Resource | Use it for | Cost |
| --- | --- | --- |
| [javascript.info](https://javascript.info/) | Closures, promises, async/await, modules, prototypes | Free |
| [Beginner's TypeScript](https://www.totaltypescript.com/tutorials/beginners-typescript) | Types, interfaces, generics through exercises | Free |
| [Zod tutorial](https://www.totaltypescript.com/tutorials/zod) | Runtime validation that infers TypeScript types | Free |
| [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) | Reference for narrowing, utility types, config | Free |
| [Node.js Learn](https://nodejs.org/learn) | Event loop, streams, files, HTTP, test runner, diagnostics | Free |
| [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) | Read sections 1-3 now (structure, errors, style); the rest comes later | Free |

**Build:** a TypeScript command-line tool (for example a log analyser or a markdown-to-HTML converter) that streams large files, validates its arguments with Zod and has tests using the Node test runner.

**Done when**

- [ ] I can explain the event loop, microtasks and why blocking it is dangerous
- [ ] I can write async code with try/catch and no callback nesting
- [ ] I can type functions, generics and API shapes without using `any`
- [ ] I can process a file larger than memory with streams

## Stage 3: Frontend with React and Next.js (weeks 9-14)

A backend developer who can ship a real interface is a full-stack developer. Learn React first, then Next.js, which covers routing, server rendering, server actions and a database in one framework.

| Resource | Use it for | Cost |
| --- | --- | --- |
| [React: Learn](https://react.dev/learn) | Components, state, effects, thinking in React | Free |
| [Learn Next.js](https://nextjs.org/learn) | 16 chapters building a dashboard: data fetching, streaming, forms, auth | Free |
| [React with TypeScript](https://www.totaltypescript.com/tutorials/react-with-typescript) | Typing props, hooks and refs | Free |
| [Tailwind CSS docs](https://tailwindcss.com/docs) | Utility-first styling | Free |
| [web.dev Learn](https://web.dev/learn) | Accessibility, performance, responsive design | Free |
| [Full Stack Open](https://fullstackopen.com/en/) | Parts 1, 2, 5 and 6 as a second pass on React, routing and state | Free |

**Build:** a dashboard app in Next.js with login, a list with search and pagination, a create/edit form with validation and a deployed preview.

**Done when**

- [ ] I can explain props, state, effects and when a component re-renders
- [ ] I can fetch data on the server and on the client and know the trade-off
- [ ] I can build and validate a form that talks to the server
- [ ] My app scores well on accessibility and performance in browser audits

## Stage 4: Backend core (weeks 15-18)

Understand HTTP properly, then build a clean API with validation, centralised error handling and logging. Pick one framework and stay with it for the whole stage.

| Resource | Use it for | Cost |
| --- | --- | --- |
| [Full Stack Open, Part 3](https://fullstackopen.com/en/part3) | Programming a server with Node and Express | Free |
| [MDN: HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) | Methods, status codes, headers, caching, CORS | Free |
| [Express docs](https://expressjs.com/) | Routing, middleware, error handling | Free |
| [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) | Sections 1, 2 and 4: structure, error handling, testing | Free |
| [roadmap.sh: Backend](https://roadmap.sh/backend) | Use as a checklist of everything a backend developer should have seen | Free |
| [Fundamentals of Backend Engineering](https://www.udemy.com/course/fundamentals-of-backend-communications-and-protocols/) | TCP, HTTP/2, proxies, connection handling; the Hussein Nasser videos on YouTube cover the same ground free | Paid |

Framework choice: Express is the baseline everyone reads. After it, the Node Best Practices guide suggests Fastify for service-sized apps and NestJS for large, object-oriented codebases ([Fastify](https://fastify.dev/), [NestJS](https://docs.nestjs.com/)). Learn Express first, add one of the others later.

**Build:** a REST API (notes, bookmarks or expenses) with Zod validation, a central error handler, structured logging with Pino, pagination and an OpenAPI description.

**Done when**

- [ ] I can pick the right method and status code for any operation
- [ ] Every request body, query and param is validated before use
- [ ] Errors come from one central handler and never leak stack traces
- [ ] The API reads its config from validated environment variables

## Stage 5: Databases (weeks 19-24)

Learn SQL before any ORM. Interviews ask about joins, indexes and transactions, and ORMs only hide them. PostgreSQL is the default choice.

| Resource | Use it for | Cost |
| --- | --- | --- |
| [SQLBolt](https://sqlbolt.com/) | Interactive SQL lessons for the basics | Free |
| [CS50 SQL](https://cs50.harvard.edu/sql) | Schema design, joins, indexes, views, transactions | Free |
| [PostgreSQL tutorial](https://www.postgresql.org/docs/current/tutorial.html) | Official introduction and reference | Free |
| [Use The Index, Luke](https://use-the-index-luke.com/) | How indexes work, joins, sorting, efficient paging, execution plans | Free |
| [Drizzle ORM docs](https://orm.drizzle.team/docs/overview) | SQL-like TypeScript ORM with migrations; pick this if you are comfortable with SQL | Free |
| [Prisma docs](https://www.prisma.io/docs) | The other common choice, with a schema file and generated client | Free |
| [Full Stack Open, Part 13](https://fullstackopen.com/en/part13) | Using relational databases from a Node app | Free |
| [Redis docs](https://redis.io/docs/latest/) | Caching, counters, rate limits, sessions | Free |

Pick one ORM, not both. Learn MongoDB only if a job or project needs it; the [MongoDB docs](https://www.mongodb.com/docs/) are enough for that.

**Build:** move your Stage 4 API to PostgreSQL with migrations, seed data, proper foreign keys and indexes, one multi-step transaction, and a before/after `EXPLAIN` result for a slow query you fixed with an index.

**Done when**

- [ ] I can design a normalised schema and say when to denormalise
- [ ] I can write joins, aggregates and window functions without help
- [ ] I can read an `EXPLAIN` plan and add the right index
- [ ] I can explain ACID, isolation levels and the N+1 query problem

## Stage 6: Authentication and security (weeks 25-27)

Most real vulnerabilities are authentication and input-handling mistakes. Learn the standard patterns and the common ways they go wrong.

| Resource | Use it for | Cost |
| --- | --- | --- |
| [Full Stack Open, Part 4](https://fullstackopen.com/en/part4) | User administration and token authentication in Express | Free |
| [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) | Password storage, sessions, JWT, authentication, input validation | Free |
| [OWASP API Security Project](https://owasp.org/API-Security/) | The top API risks: broken authorisation, excessive data exposure, and more | Free |
| [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) | Section 6: 25 security practices (hashing, rate limits, headers, secrets) | Free |
| [Node.js security best practices](https://nodejs.org/learn/getting-started/security-best-practices) | Official threat list for Node apps | Free |
| [OAuth 2.0](https://oauth.net/2/) | Authorisation code flow, scopes, tokens | Free |

**Build:** add registration and login to your API with hashed passwords, short-lived access tokens plus refresh tokens, role-based access control, rate limiting, secure headers with Helmet and secrets kept out of the repo.

**Done when**

- [ ] I store passwords with bcrypt or scrypt, never plain or fast hashes
- [ ] I can explain access versus refresh tokens and how to revoke them
- [ ] Every route checks both who the caller is and what they may do
- [ ] I can walk through the OWASP API Top 10 and show one defence per item in my API

## Stage 7: Architecture and testing (weeks 28-31)

Separate HTTP handling, business logic and data access so each can change and be tested alone, then protect the behaviour with tests. Node Best Practices recommends starting with API-level tests because they give the most coverage for the least effort.

| Resource | Use it for | Cost |
| --- | --- | --- |
| [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) | Section 1 (components and layers) and section 4 (testing) | Free |
| [Full Stack Open, Part 4](https://fullstackopen.com/en/part4) | Testing Express servers end to end | Free |
| [Full Stack Open, Part 5](https://fullstackopen.com/en/part5) | Testing React apps | Free |
| [Node.js test runner](https://nodejs.org/learn/test-runner/introduction) | Built-in tests, mocking, coverage | Free |
| [Vitest](https://vitest.dev/) | Fast test runner with TypeScript support | Free |
| [Supertest](https://github.com/ladjs/supertest) | HTTP assertions against your app | Free |
| [Playwright](https://playwright.dev/) | Browser end-to-end tests | Free |
| [Node.js integration tests best practices](https://github.com/testjavascript/nodejs-integration-tests-best-practices) | Testing with a real database, mocking external services | Free |

**Layers to use:** entry points (routes and controllers) call domain services, which call a data-access layer; no request or response objects pass beyond the entry point.

**Build:** refactor your API into those layers, then add API tests for every route, tests for failure paths (bad input, missing token, wrong role) and an end-to-end browser test for one key flow of your frontend.

**Done when**

- [ ] No business logic lives inside a route handler
- [ ] Each test creates its own data and can run in any order
- [ ] I test five outcomes of a flow: response, stored state, outgoing call, queue message, log or metric
- [ ] The test suite runs on every pull request

## Stage 8: Docker, CI/CD and deployment (weeks 32-35)

A project is only real once someone else can open it. Package it, automate checks, and deploy it with secrets handled properly.

| Resource | Use it for | Cost |
| --- | --- | --- |
| [Docker: Get started](https://docs.docker.com/get-started/) | Images, containers, volumes, networks | Free |
| [Docker Compose](https://docs.docker.com/compose/) | Running API, database and cache together | Free |
| [Full Stack Open, Part 11](https://fullstackopen.com/en/part11) | CI/CD with GitHub Actions | Free |
| [Full Stack Open, Part 12](https://fullstackopen.com/en/part12) | Containers in development and production | Free |
| [GitHub Actions docs](https://docs.github.com/en/actions) | Workflows, secrets, caching, deployment | Free |
| [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) | Section 5 (going to production) and section 8 (Docker) | Free |
| [Render docs](https://render.com/docs), [Railway docs](https://docs.railway.com/), [Vercel docs](https://vercel.com/docs) | Deploying the API, database and Next.js app; free tiers change, so check current limits | Free tiers |

**Production habits worth copying:** multi-stage Docker builds, a `.dockerignore`, running as a non-root user, pinned image versions, `npm ci`, logging to stdout, graceful shutdown and a health endpoint.

**Build:** a multi-stage Dockerfile, a Compose file with API, PostgreSQL and Redis, a GitHub Actions workflow that lints, tests and builds on every pull request, and a live deployment with its environment variables and secrets set outside the code.

**Done when**

- [ ] `docker compose up` starts the whole system on a clean machine
- [ ] A failing test blocks merging
- [ ] No secret exists in the repository or in an image layer
- [ ] I can roll back a bad deployment

## Stage 9: Scaling and system design (weeks 36-42)

Add each scaling tool because a measured problem needs it, not because it looks impressive. The System Design Primer covers the full vocabulary: scalability, load balancers, caching, queues, replication, sharding, CAP and consistency.

| Resource | Use it for | Cost |
| --- | --- | --- |
| [System Design Primer](https://github.com/donnemartin/system-design-primer) | Topic index, worked interview questions with solutions, Anki decks | Free |
| [Hussein Nasser's courses](https://husseinnasser.com/courses) | Backend, database and network engineering depth | Mostly paid |
| [Designing Data-Intensive Applications](https://dataintensive.net/) | The long-term reference for storage, replication and distributed systems | Book |
| [BullMQ](https://docs.bullmq.io/) | Job queues on Redis | Free |
| [Socket.IO docs](https://socket.io/docs/v4/) | Real-time messaging | Free |
| [OpenTelemetry docs](https://opentelemetry.io/docs/) | Traces, metrics, logs | Free |
| [autocannon](https://github.com/mcollina/autocannon) | Load-test your API from the command line | Free |

| Concept | Add it when | First exercise |
| --- | --- | --- |
| Caching (cache-aside with Redis) | A read endpoint is slow or hit constantly | Cache one hot endpoint and measure the speed-up |
| Job queue | Work takes seconds, such as email or reports | Move one slow task to a worker |
| WebSockets | Users need live updates | Push notifications to connected clients |
| Rate limiting | Anyone can call you repeatedly | Limit by IP and by user in Redis |
| Load balancing and reverse proxy | More than one app instance | Put nginx in front of two containers |
| Read replicas | Reads far outnumber writes | Read the architecture, simulate in Compose |
| Idempotency keys | Retries can duplicate payments or orders | Make order creation safe to retry |
| Observability | You cannot tell why it is slow | Add request IDs and traces, then find a bottleneck |

**Build:** take your deployed API, load-test it before and after adding caching and a queue, and write a one-page note with the numbers.

**Done when**

- [ ] I can design a URL shortener and a chat system on a whiteboard in 45 minutes
- [ ] I can estimate requests per second, storage and bandwidth on paper
- [ ] I can explain CAP, eventual consistency and when to pick each
- [ ] I can show measured evidence for every scaling tool I added

## Parallel track: DSA and placement prep (all stages)

Run this alongside every stage, five days a week, for about 45 minutes. Pick one language for DSA and keep it. If GATE is also on your plate, give it fixed blocks first; this track and the stages above can flex around those.

| Resource | Use it for | Cost |
| --- | --- | --- |
| [NeetCode](https://neetcode.io/) | Free 150-problem roadmap grouped by pattern, with video walkthroughs | Free, with paid extras |
| [CS50x](https://cs50.harvard.edu/x/) | Weeks 3-5 for algorithms, memory and data structures if the basics feel shaky | Free |
| [LeetCode](https://leetcode.com/) | Practice platform, contests and company-tagged questions | Free tier |
| [System Design Primer](https://github.com/donnemartin/system-design-primer) | The same material doubles as interview preparation, including object-oriented design questions | Free |

**Weekly routine**

1. Three new problems on one pattern (arrays and hashing, two pointers, sliding window, stack, binary search, linked list, trees, heap, graphs, backtracking, dynamic programming).
2. One revisit of a problem you failed last week, solved from a blank page.
3. One mock interview or timed set at the weekend.
4. A running log: pattern, mistake, fix.

**Done when**

- [ ] I can recognise the pattern of a new problem in under five minutes
- [ ] I can solve most medium problems in 30 minutes and explain the complexity
- [ ] I have finished the NeetCode 150 list once and revised the problems I missed

## Portfolio projects that prove each stage

Three deep projects beat ten shallow ones. Each must be deployed, tested, documented, and something you can discuss for ten minutes.

| Project | Stages used | Core stack | What it proves |
| --- | --- | --- | --- |
| Multi-tenant task manager (organisations, roles, audit log) | 2-8 | TypeScript, Express or Fastify, PostgreSQL with Drizzle or Prisma, Zod, JWT, Next.js frontend, Docker, GitHub Actions | You can build, secure, test and ship a complete product |
| Booking or ticketing service (no double-booking) | 5-9 | Same stack plus Redis and BullMQ | Transactions, concurrency, idempotency, queues |
| Real-time notification or chat hub | 3, 9 | Socket.IO, Redis pub/sub, PostgreSQL, Next.js | Live updates and scaling across several app instances |
| One project from your own interest | any | Your choice | Taste, initiative and domain knowledge |

**Every repository needs**

- [ ] A README with a one-line pitch, live link, screenshot, setup steps and an architecture diagram
- [ ] A section titled "Decisions": why this database, why this framework, what you would change
- [ ] Tests running in CI with a visible badge
- [ ] A seeded demo account so reviewers can click around
- [ ] A short list of known limitations

Add only the technology a project can justify. If you cannot answer "why did you need Redis here?", remove it.

## Lifetime habits and what to specialise in next

Finishing the stages makes you employable; the habits below keep you current for decades.

1. Build one small thing every month in a technology you do not know yet.
2. Read the source or the official docs before a tutorial.
3. Read one engineering write-up a week and ask what trade-off it made.
4. Every quarter, redo the [roadmap.sh backend roadmap](https://roadmap.sh/backend) as a gap check and update this guide.
5. Keep a public record: commits, short posts, a changelog of what you learned.
6. Revisit this guide's links twice a year; resources move, and the lists above change.

After the core path, choose a direction and go deep:

| Direction | Next step |
| --- | --- |
| Typed APIs and GraphQL | [Full Stack Open, Part 8: GraphQL](https://fullstackopen.com/en/part8) and [Part 9: TypeScript](https://fullstackopen.com/en/part9) |
| Mobile | [Full Stack Open, Part 10: React Native](https://fullstackopen.com/en/part10) |
| AI engineering | Build with an LLM API using the [Claude API docs](https://docs.claude.com), then retrieval, evaluation and agents |
| Cloud and DevOps | [Kubernetes tutorials](https://kubernetes.io/docs/tutorials/), infrastructure as code and observability |
| Distributed systems | Designing Data-Intensive Applications, then build a small replicated store |
| Second backend language | Go, Java or Python, to learn a different concurrency model |
| Other roadmaps | [roadmap.sh](https://roadmap.sh/roadmaps) for DevOps, system design, Postgres and more |

Come back to this chat whenever you want a stage turned into a week-by-week schedule, a project spec, a quiz, or a refreshed set of links.

## Sources

Checked 12 Oct 2026 by opening the page:

- [Full Stack Open](https://fullstackopen.com/en/)
- [roadmap.sh: Backend](https://roadmap.sh/backend)
- [Total TypeScript free tutorials](https://www.totaltypescript.com/tutorials)
- [Node.js Learn](https://nodejs.org/learn/getting-started/introduction-to-nodejs)
- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Use The Index, Luke](https://use-the-index-luke.com/)
- [The Missing Semester](https://missing.csail.mit.edu/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [The Odin Project paths](https://www.theodinproject.com/paths)
- [Learn Next.js](https://nextjs.org/learn)
- [CS50x](https://cs50.harvard.edu/x/)
- [Drizzle ORM docs](https://orm.drizzle.team/docs/overview)

Seen in search results but not opened: the [Fundamentals of Backend Engineering course](https://www.udemy.com/course/fundamentals-of-backend-communications-and-protocols/), [Hussein Nasser's courses](https://husseinnasser.com/courses) and [NeetCode](https://neetcode.io/).

Standard official addresses, not individually opened, so check any that fail: MDN, javascript.info, React, TypeScript Handbook, Tailwind, web.dev, Express, Fastify, NestJS, SQLBolt, CS50 SQL, PostgreSQL, Prisma, Redis, MongoDB, OWASP, OAuth.net, Vitest, Supertest, Playwright, Docker, GitHub Actions, Render, Railway, Vercel, BullMQ, Socket.IO, OpenTelemetry, autocannon, Kubernetes, Pro Git, Designing Data-Intensive Applications and the Claude API docs.
