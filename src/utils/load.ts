import fs from 'node:fs/promises';

import { getFilePath } from '@/utils/path.js';

export type Value = string | number | boolean;
export interface JsonData {
  [key: string]: Value;
}

export const load = async (): Promise<JsonData | null> => {
  try {
    const filePath = await getFilePath();
    const jsonData = await fs.readFile(filePath, 'utf-8');

    return JSON.parse(jsonData) as JsonData;
  } catch {
    return null;
  }
};
