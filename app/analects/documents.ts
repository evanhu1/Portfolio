export interface Document {
  "English": { title: string; text: string },
  [language: string]: { title: string; text: string }
}

export const documentLanguageTitleMap = {
  'StartupAnalysis': { 'English': 'Lessons Learned from Studying 4,000+ YC Companies' },
  'TheFigTree': { 'English': 'The Fig Tree', 'Chinese': '无花果树' },
  'HowToDoGreatWork': { 'English': 'How To Do Great Work', 'Chinese': '如何做出伟大工作' },
  'StartupAdvice': { 'English': 'Startup Advice', 'Chinese': '创业建议' },
  'Desiderata': { 'English': 'Desiderata', 'Chinese': '渴望' },
  'CollectedQuotes': { 'English': 'Collected Quotes', 'Chinese': '收集的名言' },
  'LogicalMathRiddles': { 'English': 'Logical Math Riddles', 'Chinese': '逻辑数学谜题' },
};

export const metadata = {
  'Lessons Learned from Studying 4,000+ YC Companies': { author: "Founder's Library", source: "https://amvizion.org/blog/lessons-learned-from-yc.html" },
  'How To Do Great Work': { author: "Paul Graham", source: "https://paulgraham.com/greatwork.html" },
  'The Fig Tree': { author: "Sylvia Plath", source: "https://www.goodreads.com/quotes/7511-i-saw-my-life-branching-out-before-me-like-the" },
  'Startup Advice': { author: "Evan Hu", source: "" },
  'Collected Quotes': { author: "Various", source: "" },
  'Desiderata': { author: "Max Ehrmann", source: "https://www.desiderata.com/desiderata.html" },
  'Logical Math Riddles': { author: "Various", source: "" },
}

export const getDocuments = async (): Promise<Document[]> => {
  return fetch('/api/documents').then(res => res.json());
};
