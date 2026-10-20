# TypeScript for QA Automation (Playwright)

Short, fully commented TypeScript programs covering the fundamentals needed for test automation.

## Highlights
- Every `src` file is small, runnable and explains each line.
- Concepts are shown with examples and QA-style names (pages, tests, browsers).
- `tests/` shows the same concepts in a real Playwright Page Object Model.

## Topics Covered
| File | Concept |
|------|---------|
| `01-basics-and-types.ts` | Types, inference, functions, arrow functions |
| `02-strings.ts` | String methods, template literals, regex |
| `03-arrays.ts` | map, filter, find, reduce, tuples, spread |
| `04-loops.ts` | for, for...of, for...in, while, do...while |
| `05-collections.ts` | Map, Set, Record |
| `06-type-aliases-and-enums.ts` | Type aliases, union types, enums |
| `07-interfaces.ts` | Interfaces, `implements`, `extends` |
| `08-classes-constructors-access-modifiers.ts` | OOP, constructors, public/private/protected |
| `09-static-keyword.ts` | Static properties and methods |
| `10-abstract-classes.ts` | Abstract classes and methods |
| `11-import-export.ts` | Named and default import/export |
| `12-exception-handling.ts` | try/catch/finally, custom errors |
| `13-async-await.ts` | Promises, async/await, `Promise.all` |

## Run It
```bash
npm install
npm start                      # compile and run all programs
npx tsc && node dist/04-loops.js   # run a single program
npx playwright install chromium    # one-time browser download
npm test                       # run the Playwright tests
```

## Structure
```
src/      -> TypeScript fundamentals (one concept per file)
tests/    -> Playwright spec + Page Object
```
