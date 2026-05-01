# Test Automation with Playwright & Page Object Model

This project implements a robust test automation framework using **Playwright** and the **Page Object Model (POM)** pattern. It provides a scalable foundation for testing web applications across multiple browsers with comprehensive reporting.

## 🚀 Features

- **Multi-Browser Support**: Run tests on Chrome, Firefox, and WebKit.
- **Page Object Model**: Reusable page objects for maintainable test code.
- **Test Runners**: Integrated with `@playwright/test` for execution and reporting.
- **Parallel Execution**: Run multiple tests in parallel for faster feedback.
- **HTML Reports**: Detailed HTML test reports generated after each run.

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pranavkakde/playwright-automation.git
    cd playwright-automation
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## 🏃 Running Tests

### Default Run (All Browsers)
To run all tests across all browsers (Chrome, Firefox, WebKit):

```bash
npm test
```

### Specific Browser
To run tests on a specific browser:

```bash
npm run test:chrome      # Chrome only
npm run test:firefox     # Firefox only
npm run test:webkit      # WebKit only
```

### Headed Mode (Visible Browser)
To run tests with the browser UI visible:

```bash
npm run test -- --headed
# or
npm run test:chrome -- --headed
```

### Watching for Changes
To run tests in watch mode, which automatically re-runs tests when you save code changes:

```bash
npm run test:ui
```

## 📁 Project Structure

```
playwright-automation/
├── test/                      # Test files
│   ├── home.spec.ts           # Example test file
│   └── ...
├── page/                      # Page Object Models
│   ├── home.page.ts           # Home page objects
│   └── ...
├── data/                      # Test data
├── config/                    # Configuration
└── playwright-report/        # Generated HTML reports
```

## 📋 Creating New Page Objects

Follow these steps to create a new page object:

1.  Create a new file in the `page/` directory (e.g., `page/login.page.ts`).
2.  Define the page class and import `Page` from `@playwright/test`.
3.  Add locators and methods for the page elements.
4.  Use the page object in your test files.

**Example:**
```typescript
// page/login.page.ts
import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
  }

  async goto() {
    await this.page.goto('https://example.com/login');
  }

  async login(username: string) {
    await this.usernameInput.fill(username);
    await this.page.click('#login-button');
  }
}
```

## 📊 HTML Reports

After running tests, detailed HTML reports are generated in the `playwright-report/` directory.

To open the latest report in your browser:

```bash
npx playwright show-report
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests on all browsers |
| `npm run test:chrome` | Run tests on Chrome |
| `npm run test:firefox` | Run tests on Firefox |
| `npm run test:webkit` | Run tests on WebKit |
| `npm run test:ui` | Run tests in watch mode |
| `npx playwright show-report` | Open HTML test report |

## 🤝 Contributing

1.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
2.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
3.  Push to the branch (`git push origin feature/AmazingFeature`).
4.  Open a Pull Request.

## 📄 License

ISC

## 📧 Contact

- **Author**: Pranav Kakde
- **Email**: [pranavkakde@gmail.com]
