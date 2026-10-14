// One-time generator: builds progress.json from the roadmap topics.
// Run: node scripts/gen-progress.mjs   (refuses to overwrite an existing progress.json unless --force)
import { writeFileSync, existsSync } from 'node:fs';

const stages = [
  ['s01', '0-1', 'Tools and web basics', [
    'Shell navigation, pipes, grep, find', 'Shell scripting and environment variables', 'Git: commit, branch, merge',
    'Git: rebase, resolving conflicts, pull requests', 'Editor shortcuts and the debugger', 'What happens when you type a URL',
    'HTML semantics and forms', 'CSS box model, selectors, cascade', 'Flexbox', 'Grid and responsive design',
    'JavaScript basics: types, functions, scope', 'DOM manipulation and events', 'Fetch and JSON', 'Deploy a static site to GitHub Pages']],
  ['s02', '2', 'JavaScript, TypeScript, Node.js', [
    'Closures and scope', '`this`, prototypes and classes', 'Array and object methods: map, filter, reduce',
    'Destructuring, spread, modules (ESM and CommonJS)', 'Promises', 'async/await and error handling', 'The event loop and microtasks',
    'TypeScript: types, interfaces, unions, narrowing', 'TypeScript: generics and utility types', 'tsconfig and running TypeScript',
    'Node: fs, path, process', 'Node: streams and buffers', 'Node: EventEmitter and the http module', 'npm, package.json and lockfiles',
    'Zod validation', 'Node built-in test runner']],
  ['s03', '3', 'Frontend: React and Next.js', [
    'Components, JSX and props', 'State and re-rendering', 'Effects and cleanup', 'Lists, keys and conditional rendering',
    'Controlled forms', 'Context and custom hooks', 'Client-side routing', 'React with TypeScript', 'Tailwind styling',
    'Next.js: layouts, pages and navigation', 'Next.js: server components and data fetching', 'Next.js: server actions and mutating data',
    'Next.js: loading, errors and streaming', 'Next.js: authentication', 'Accessibility basics', 'Deploy to Vercel']],
  ['s04', '4', 'Backend core', [
    'HTTP methods, status codes, headers', 'REST resource design and naming', 'Express routing and middleware',
    'Async error handling in Express', 'A central error handler and custom error classes', 'Request validation with Zod',
    'Environment configuration and validation', 'Structured logging with Pino', 'Pagination, filtering and sorting',
    'CORS and why it exists', 'OpenAPI description of the API', 'Project structure by component']],
  ['s05', '5', 'Databases', [
    'SELECT, WHERE, ORDER BY, LIMIT', 'Joins: inner, left, many-to-many', 'GROUP BY and aggregates', 'Subqueries and CTEs',
    'Window functions', 'Schema design and normalisation', 'Constraints and foreign keys', 'Indexes and how B-trees work',
    'Reading `EXPLAIN`', 'Transactions and ACID', 'Isolation levels', 'Migrations', 'An ORM: schema, queries, relations',
    'The N+1 problem', 'Offset versus seek pagination', 'Redis basics and cache-aside']],
  ['s06', '6', 'Auth and security', [
    'Password hashing with bcrypt or scrypt', 'Sessions versus JWT', 'Access and refresh tokens, revocation', 'Role-based access control',
    'Object-level authorisation (stopping IDOR)', 'Rate limiting and brute-force protection', 'Secure headers with Helmet',
    'SQL injection and XSS defences', 'Secrets management', 'OAuth2 authorisation code flow', 'OWASP API Top 10 walkthrough', 'Dependency auditing']],
  ['s07', '7', 'Architecture and testing', [
    'Layers: entry point, domain, data access', 'Services and repositories', 'Dependency injection basics', 'API tests with Supertest',
    'Test database and per-test data', 'Unit tests and mocking', 'Mocking external HTTP services', 'The five outcomes of a flow',
    'Coverage as a signal, not a goal', 'End-to-end tests with Playwright', 'Refactoring under green tests']],
  ['s08', '8', 'Docker, CI/CD, deployment', [
    'Images versus containers', 'Writing a Dockerfile', 'Multi-stage builds and small images', 'Compose with API, database and cache',
    'Volumes, networks, environment variables', 'Secrets outside images and repos', 'GitHub Actions: lint, test, build',
    'Caching and matrix builds', 'Deploying the API and database', 'Health checks and graceful shutdown', 'Logs and basic monitoring', 'Rolling back a bad release']],
  ['s09', '9', 'Scale and system design', [
    'Latency, throughput, scalability', 'Load balancers and reverse proxies', 'Caching strategies and invalidation', 'CDNs',
    'Message queues and background jobs', 'WebSockets and real-time updates', 'Replication and read replicas', 'Sharding concepts',
    'CAP theorem and consistency models', 'Idempotency and retries', 'Observability: logs, metrics, traces', 'Load testing and reading results',
    'Back-of-envelope estimates', 'Design: URL shortener', 'Design: chat system', 'Design: news feed', 'Design: rate limiter']],
];

const dsa = ['Arrays and hashing', 'Two pointers', 'Sliding window', 'Stack', 'Binary search', 'Linked list', 'Trees', 'Tries',
  'Heap and priority queue', 'Backtracking', 'Graphs', '1-D dynamic programming', '2-D dynamic programming', 'Greedy', 'Intervals', 'Bit manipulation'];

const blank = { status: 'new', learnedOn: null, lastReviewed: null, revisionStage: 0, nextDue: null, scores: [], failCount: 0, note: '' };
const topics = [];
for (const [sid, stage, stageName, list] of stages)
  list.forEach((title, i) => topics.push({ id: `${sid}-${String(i + 1).padStart(2, '0')}`, track: 'stage', stage, stageName, title, ...blank }));
const dsaTopics = dsa.map((title, i) => ({ id: `dsa-${String(i + 1).padStart(2, '0')}`, track: 'dsa', stage: 'DSA', stageName: 'DSA patterns', title, problemsSolved: 0, ...blank }));

const out = {
  meta: {
    startDate: null, currentStage: '0-1', lastSession: null, streak: 0, longestStreak: 0,
    // status values: new | learning | known | weak
    // revisionStage: number of spaced revisions passed (0-5). Gaps after learnedOn: +1, +3, +7, +21, +60 days.
  },
  weakAreas: [],
  history: [],
  topics: [...topics, ...dsaTopics],
};

if (existsSync('progress.json') && !process.argv.includes('--force')) {
  console.error('progress.json already exists; use --force to overwrite (this erases progress).');
  process.exit(1);
}
writeFileSync('progress.json', JSON.stringify(out, null, 2) + '\n');
console.log(`progress.json written: ${topics.length} stage topics + ${dsaTopics.length} DSA patterns`);
