export interface Principle {
  /** Unique identifier */
  id: number;
  /** The investment principle or quote text */
  text: string;
  /** Author name (e.g., "Warren Buffett") */
  author: string;
  /** Category (e.g., "Value Investing", "Risk Management") */
  category: string;
  /** Source reference (e.g., book title, speech) */
  source: string;
}

/** Get a random investment principle */
export function getRandom(): Principle;

/** Get multiple random principles (non-repeating) */
export function getRandomMultiple(count: number): Principle[];

/** Get principles by author name (case-insensitive partial match) */
export function getByAuthor(name: string): Principle[];

/** Get principles by category (case-insensitive partial match) */
export function getByCategory(category: string): Principle[];

/** Search principles by keyword across all fields */
export function search(keyword: string): Principle[];

/** Get all investment principles */
export function getAll(): Principle[];

/** Get a list of all unique author names */
export function getAuthors(): string[];

/** Get a list of all unique category names */
export function getCategories(): string[];

/** Get a principle by its ID */
export function getById(id: number): Principle | undefined;

/** Get the total count of principles */
export function count(): number;
