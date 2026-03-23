# keeprule

> 100 curated investment principles from Buffett, Munger, Graham, Lynch & more — ready to use in your code.

[![npm version](https://img.shields.io/npm/v/keeprule.svg)](https://www.npmjs.com/package/keeprule)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Curated by [KeepRule.com](https://keeprule.com) — the investment principles encyclopedia.

## Install

```bash
npm install keeprule
```

## Quick Start

```javascript
const keeprule = require('keeprule');

// Get a random principle
const principle = keeprule.getRandom();
console.log(`"${principle.text}" — ${principle.author}`);

// Get all principles by Warren Buffett
const buffett = keeprule.getByAuthor('Buffett');
console.log(`${buffett.length} principles from Buffett`);

// Search for "margin of safety"
const results = keeprule.search('margin of safety');
results.forEach(r => console.log(r.text));
```

## API Reference

### `getRandom()`

Returns a random investment principle.

```javascript
const p = keeprule.getRandom();
// {
//   id: 3,
//   text: "Price is what you pay. Value is what you get.",
//   author: "Warren Buffett",
//   category: "Value Investing",
//   source: "Berkshire Hathaway Shareholder Letter, 2008"
// }
```

### `getRandomMultiple(count)`

Returns multiple random non-repeating principles.

```javascript
const principles = keeprule.getRandomMultiple(5);
// Returns 5 random principles
```

### `getByAuthor(name)`

Filter principles by author name (case-insensitive partial match).

```javascript
keeprule.getByAuthor('Munger');    // All Charlie Munger principles
keeprule.getByAuthor('Graham');    // All Benjamin Graham principles
keeprule.getByAuthor('Lynch');     // All Peter Lynch principles
```

### `getByCategory(category)`

Filter principles by category (case-insensitive partial match).

```javascript
keeprule.getByCategory('Risk Management');
keeprule.getByCategory('Value Investing');
keeprule.getByCategory('Mental Models');
```

### `search(keyword)`

Full-text search across text, author, category, and source.

```javascript
keeprule.search('compound');       // Principles mentioning compound interest
keeprule.search('fear');           // Principles about fear/greed
keeprule.search('intelligent');    // The Intelligent Investor references
```

### `getAll()`

Returns all 100 principles.

```javascript
const all = keeprule.getAll();
console.log(`Total: ${all.length} principles`);
```

### `getAuthors()`

Returns a sorted list of all unique author names.

```javascript
keeprule.getAuthors();
// ["Albert Einstein", "Alexander Elder", "Benjamin Graham", "Charlie Munger", ...]
```

### `getCategories()`

Returns a sorted list of all unique categories.

```javascript
keeprule.getCategories();
// ["Behavioral Finance", "Business Quality", "Circle of Competence", ...]
```

### `getById(id)`

Get a specific principle by its ID (1-100).

```javascript
const p = keeprule.getById(1);
// Rule No. 1: Never lose money...
```

### `count()`

Returns the total number of principles.

```javascript
keeprule.count(); // 100
```

## Data Structure

Each principle object has:

| Field | Type | Description |
|-------|------|-------------|
| `id` | number | Unique identifier (1-100) |
| `text` | string | The investment principle or quote |
| `author` | string | Author name |
| `category` | string | Category classification |
| `source` | string | Source reference |

## Categories

- **Value Investing** — Core value investing principles
- **Risk Management** — Managing and understanding risk
- **Market Psychology** — Understanding market behavior
- **Long-term Investing** — Patience and compound growth
- **Mental Models** — Thinking frameworks
- **Behavioral Finance** — Psychology of investing
- **Circle of Competence** — Knowing your limits
- **Decision Making** — Better investment decisions
- **Business Quality** — Evaluating businesses
- **Financial Discipline** — Spending, saving, discipline
- **Portfolio Management** — Diversification and allocation
- **Research** — Due diligence and analysis

## Featured Authors

- **Warren Buffett** — The Oracle of Omaha
- **Charlie Munger** — Berkshire Hathaway Vice Chairman
- **Benjamin Graham** — Father of Value Investing
- **Peter Lynch** — Legendary Fidelity fund manager
- **John Templeton** — Global investing pioneer
- **John Bogle** — Vanguard founder, index fund advocate
- **Jesse Livermore** — Legendary stock trader
- **Philip Fisher** — Growth investing pioneer
- **George Soros** — Quantum Fund founder

## Use Cases

- **Daily principle bot** — Display a random principle every day
- **Financial apps** — Enrich your app with curated wisdom
- **CLI tools** — Show investing tips in terminal
- **Education** — Teach investment principles programmatically
- **Screensavers / wallpapers** — Dynamic investing quotes

## TypeScript Support

Full TypeScript definitions are included:

```typescript
import { getRandom, getByAuthor, Principle } from 'keeprule';

const p: Principle = getRandom();
const buffett: Principle[] = getByAuthor('Buffett');
```

## Explore More

Visit [KeepRule.com](https://keeprule.com) for:
- Interactive investment principle scenarios
- Deep-dive explanations with real-world examples
- AI-powered investment principle analysis
- Community discussions and notes

## License

MIT - see [LICENSE](LICENSE)

## Contributing

Issues and PRs welcome at [GitHub](https://github.com/henu-wang/keeprule-npm).
