# 🧪 Automation Suite – SwiftTranslator  
_End-to-End Testing using Playwright_

This repository contains **Playwright end-to-end automated tests** for the **SwiftTranslator** web application, which converts **Singlish / Romanized Sinhala** input into **Sinhala script** output.

🔗 **Website under test:**  
https://www.swifttranslator.com/

---

## ✅ Test Coverage

This automation suite includes:

- ✅ **Positive Functional Test Cases**
- ❌ **Negative Functional Test Cases**
- 🖥️ **UI Test Cases** (real-time Sinhala output update)

📊 **Total Automated Test Cases:** **35**

---

## 🧰 Prerequisites

Make sure the following are installed on your system:

- **Node.js** (v18 or above – recommended)
- **npm** (comes with Node.js)
- **Playwright**

### 🔍 Check versions
```bash
node -v
npm -v


📁 Project Structure
ITPM-Assigment-1
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tests/
│   └── example.spec.ts
├── test-results/
└── README.md


1️⃣ Clone the Repository
First, clone the project from GitHub and navigate into the project directory:
git clone https://github.com/CHANUKA-01/ITPM-Assigment-1.git
cd ITPM-Assigment-1

2️⃣ Install Project Dependencies
Install all required Node.js dependencies using npm:
npm install

3️⃣ Install Playwright Browsers
Playwright requires browser binaries to run tests. Install them using:
npx playwright install

5️⃣ Run the Automation Tests
Run all test cases in headed mode (recommended):
npx playwright test --headed --workers=1

Run all test cases in headed mode with 6 workers(there opening 6 tabs per time):
npx playwright test --headed

✅ After completing these steps, the automation suite will execute successfully on your local machine. 

Name: Jayawardhana O K T C
Module: ITPM
