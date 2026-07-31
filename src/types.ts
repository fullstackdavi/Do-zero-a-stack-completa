export interface ExampleHighlight {
  title: string;
  description: string;
  codeSnippet?: string;
  language?: string;
  promptTemplate?: string;
  badgeText?: string;
  tips?: string[];
}

export interface ModuleItem {
  id: string; // e.g., 'modulo-0'
  number: number; // 0 to 10
  badge: string; // e.g., 'GUIA 01 DE 11 · MÓDULO 0 DE 10'
  title: string;
  subtitle: string;
  readTime: string;
  isOfferStyle?: boolean; // For Module 10 (Purple theme)
  accentColor?: 'blue' | 'cyan' | 'purple';
  summary: string;
  sections: {
    heading: string;
    content: string[];
    bulletPoints?: string[];
    codeBlock?: {
      title: string;
      code: string;
      language: string;
    };
    promptBox?: {
      title: string;
      prompt: string;
      note?: string;
    };
  }[];
  exampleHighlight?: ExampleHighlight;
  interactiveChecklist?: string[];
}

export interface NavSection {
  id: string;
  number: number;
  title: string;
  badge: string;
  accentColor?: 'blue' | 'cyan' | 'purple';
}
