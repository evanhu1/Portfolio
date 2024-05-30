import fs from 'fs';
import path from 'path';
import util from 'util';
import { NextResponse, NextRequest } from 'next/server';
import { documentLanguageTitleMap } from '@/app/analects/documents';

const readFile = util.promisify(fs.readFile);

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const textsUrl = path.join(process.cwd(), 'public/texts');
    

    const documents = await Promise.all(Object.entries(documentLanguageTitleMap).map(async ([doc, languageTitle]) => {
      const documentTranslations = await Promise.all(Object.entries(languageTitle).map(async ([language, languageTitle]) => {
        const filePath = path.join(textsUrl, doc, `${language}.txt`);
        const text = await readFile(filePath, 'utf8');

        return {
          language: language,
          title: languageTitle,
          text
        };
      }));

      return {
        ...Object.fromEntries(documentTranslations.map(translation => [translation.language, translation]))
      };
    }));

    return NextResponse.json(documents);
  } catch (error) {
    console.error('Failed to get documents:', error);
    return NextResponse.json({ error: 'Failed to get documents' }, { status: 500 });
  }
}
