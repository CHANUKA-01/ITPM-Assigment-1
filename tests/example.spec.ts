import { test, expect, Page } from '@playwright/test';

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer:
      'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Types
type TestCase = {
  tcId: string;
  name: string;
  input: string;
  expected: string;
  category: string;
  grammar: string;
  length: string;
};

type UITestCase = {
  tcId: string;
  name: string;
  input: string;
  partialInput: string;
  expectedFull: string;
  category: string;
  grammar: string;
  length: string;
};

// Test Data
const TEST_DATA: {
  positive: TestCase[];
  negative: TestCase[];
  ui: UITestCase;
} = {

  // Below have 10 Negative Sentence
  positive: [
    {
      tcId: 'Pos_Fun_001',
      name: 'Convert a short daily greeting phrase',
      input: 'aayuboovan!',
      expected: 'ආයුබෝවන්!',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Convert simple statement about location',
      input: 'heta mama office yanna inne nisaa, dhaen gedhara idhala vaeda tika karanavaa.',
      expected: 'හෙට මම office යන්න ඉන්නේ නිසා, දැන් ගෙදර ඉදල වැඩ ටික කරනවා.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Convert simple statement about location',
      input: 'api gedhara inne.',
      expected: 'අපි ගෙදර ඉන්නේ.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: 'Convert present tense daily activity',
      input: 'api dhaen lunch ganna yanavaa. oyaalath enavadha?',
      expected: 'අපි දැන් lunch ගන්න යනවා. ඔයාලත් එනවද?',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Convert complex conditional sentence',
      input: 'adha vaessa unoth, mama gedhara innavaa saha api heta passe meet venna  kiyala hithan inne.',
      expected: 'අද වැස්ස උනොත්, මම ගෙදර ඉන්නවා සහ අපි හෙට පස්සෙ මේට් වෙන්න  කියල හිතන් ඉන්නේ.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: 'Convert negative sentence',
      input: 'mama adha ennee naehae.',
      expected: 'මම අද එන්නේ නැහැ.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0007',
      name: 'Convert negative plural sentence',
      input: 'eyalaa ekka meeka karanna baehae',
      expected: 'එයලා එක්ක මේක කරන්න බැහැ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Convert interrogative question',
      input: 'oyaa kohedha yanne?',
      expected: 'ඔයා කොහෙද යන්නෙ?',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Convert interrogative complex',
      input: 'oyaa dhannavadha adha rae kaema kanna api kohetadha yanne kiyala?',
      expected: 'ඔයා දන්නවද අද රැ කැම කන්න අපි කොහෙටද යන්නෙ කියල?',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: 'Convert imperative command',
      input: 'issarahata yanna',
      expected: 'ඉස්සරහට යන්න',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Convert imperative instruction',
      input: 'paara dhige yanna',
      expected: 'පාර දිගෙ යන්න',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0012',
      name: 'Convert embedded English brand term',
      input: 'dhora vahanna epaa',
      expected: 'දොර වහන්න එපා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Convert day-to-day expression',
      input: 'suBha dhavasak veevaa',
      expected: 'සුභ දවසක් වේවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0014',
      name: 'Convert greeting',
      input: 'kohomadha saepasaniipa?',
      expected: 'කොහොමද සැපසනීප?',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Polite request phrase',
      input: 'karuNaakaralaa mata potha kiyavanna dhenna puLuvandha?',
      expected: 'කරුණාකරලා මට පොත කියවන්න දෙන්න පුළුවන්ද?',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0016',
      name: 'Convert date format',
      input: '21/05/2026',
      expected: '21/05/2026',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Convert polite request',
      input: 'karuNaakaralaa mata meeka karalaa dhenna puLuvandha?',
      expected: 'කරුණාකරලා මට මේක කරලා දෙන්න පුළුවන්ද?',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0018',
      name: 'Convert response phrase',
      input: 'bohoma sthuuthiyi',
      expected: 'බොහොම ස්තූතියි',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: 'Convert repeated emphasis',
      input: 'hari hari mama ennam',
      expected: 'හරි හරි මම එන්නම්',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0020',
      name: 'Convert collocations',
      input: 'kaeema biima',
      expected: 'කෑම බීම',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Convert past tense sentence',
      input: 'mama iiyee giyaa',
      expected: 'මම ඊයේ ගියා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: 'Convert present tense sentence',
      input: 'mama dhaen kaeema kanavaa',
      expected: 'මම දැන් කෑම කනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0023',
      name: 'Convert currency format',
      input: 'Rs. 1500.50',
      expected: 'Rs. 1500.50',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: 'Convert future tense sentence',
      input: 'mama heta geyak hadhannam',
      expected: 'මම හෙට ගෙයක් හදන්නම්',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    }

  ],

  // Below have 10 Negative Sentence
  negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: 'Joined words cause wrong segmentation',
      input: 'mamadannava',
      expected: 'මම දන්නවා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
      
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'Missing spaces breaks phrase',
      input: 'kohoomadhoyataadha',
      expected: 'කොහොමදොයටාද',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
      
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Slang phrase inaccurate conversion',
      input: 'adha nam patta athal ekak set vuna neda machan?',
      expected: 'අද නම් පට්ට ආතල් එකක් සෙට් වුණා නේද මචන්?',
      category: 'Typographical error handling',
      grammar: 'Compound sentence',
      length: 'M'
      
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'Heavy slang + unusual letters',
      input: 'amooo eka nan pissu koraaa wedak mcnnnn',
      expected: 'අම්මෝ ඒක නම් පිස්සු කොර වැඩක් මචන්',
      category: 'Typographical error handling',
      grammar: 'Compound sentence',
      length: 'M'
      
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'Long paragraph causes partial conversion',
      input: 'ada kale godak aya katha karanne hariyata nikan singlish valin vage. eka nisa samahara velavata apita sinhala akuren liyana eka amuthu deyak vage penenna puluvan. eth api ape bhashava hariyata pavichchi karanna igena ganna ona. naththan ape anagatha parapurata sinhala bhashava nathi vela yanna puluvan kamak thiyenava neda? eka nisa hamoma sinhala akurenma liyanna purudu venna ona kiyala mama hithanava. meka thama mage adahasa.',
      expected: 'අඩ කාලෙ ගොඩක් අය කත කරන්නේ හරියට නිකන් සින්ග්ලිශ් වලින් වගෙ. එක නිස සමහර වෙලවට අපිට sinhala අකුරෙන් ලියන එක අමුතු ඩෙයක් වගෙ පෙනෙන්න පුලුවන්. එත් අපි ape බ්හශව හරියට පවිච්චි කරන්න ඉගෙන ගන්න ඔන. නත්තන් ape අනගත පරපුරට sinhala බ්හශව නති වෙල යන්න පුලුවන් කමක් තියෙනව නෙඩ? එක නිස හමොම sinhala අකුරෙන්ම ලියන්න පුරුඩු වෙන්න ඔන කියල මම හිතනව. මෙක තම mage අඩහස.',
      category: 'Typographical error handling',
      grammar: 'Complex sentence',
      length: 'L'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Line breaks not handled properly',
      input: 'oya kohedha inne?mama dhen gedhara inne.oya kohedha inne?',
      expected: 'ඔයා කොහෙද ඉන්නේ?මම දැන් ගෙදර ඉන්නේ.හෙට හම්බ වෙමු නේද?',
      category: 'Typographical error handling',
      grammar: 'Compound sentence',
      length: 'M'
      
    },
    {
      tcId: 'Neg_Fun_0007',
      name: 'Multiple spaces distort conversion',
      input: 'mama   gedhara    yanava.',
      expected: 'මම   ගෙදර    යනවා.',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
      
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Mixed English terms reduce accuracy',
      input: 'mama dhen laptop eka use karala email ekak yawanna yanawa.',
      expected: 'මම දැන් laptop එක පාවිච්චි කරලා email එකක් යවන්න යනවා.',
      category: 'Typographical error handling',
      grammar: 'Compound sentence',
      length: 'M'
      
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'Abbreviation string not supported',
      input: 'SL cricket team eka dinna',
      expected: 'SL cricket team එක දින්නා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
      
    },
    {
      tcId: 'Neg_Fun_0010',
      name: 'Quotation punctuation breaks output',
      input: 'oya "pissu" karanne',
      expected: 'ඔයා "පිස්සු" කරන්නේ',
      category: 'Typographical error handling',
      grammar: 'Compound sentence',
      length: 'M'
      
    },
  
  ],

  ui: {
    tcId: 'Pos_UI_001',
    name: 'Sinhala output updates automatically in real-time',
    input: 'adha wahinnai yanne',
    partialInput: 'adha wahi',
    expectedFull: 'අද වහින්නයි යන්නේ',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Page Object
class TranslatorPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToSite(): Promise<void> {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  getInputField() {
    return this.page.getByRole('textbox', {
      name: CONFIG.selectors.inputField
    });
  }

  getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait(): Promise<void> {
    const input = this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text: string): Promise<void> {
    const input = this.getInputField();
    await input.fill(text);
  }

  async waitForOutput(): Promise<void> {
    await this.page.waitForFunction(() => {
      const elements = Array.from(
        document.querySelectorAll(
          '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
        )
      );
      return elements.some(
        el => el.textContent && el.textContent.trim().length > 0
      );
    });
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText(): Promise<string> {
    const output = this.getOutputField();
    const text = await output.textContent();
    return text?.trim() || '';
  }

  async performTranslation(inputText: string): Promise<string> {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator: TranslatorPage;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = translator.getInputField();
      const output = translator.getOutputField();

      await translator.clearAndWait();

      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      await page.waitForTimeout(1500);

      const partialText = await output.textContent();
      expect(partialText?.trim().length).toBeGreaterThan(0);

      await input.pressSequentially(
        TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length),
        { delay: 150 }
      );

      await translator.waitForOutput();

      const finalText = await translator.getOutputText();
      expect(finalText).toBe(TEST_DATA.ui.expectedFull);

      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
