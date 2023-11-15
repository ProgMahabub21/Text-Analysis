import OpenAI from 'openai';
import fs from 'fs';
import yargs from 'yargs';
import { algorithmToCalculate } from './algo';

const apiKey = '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'; // Replace with your OpenAI API key

const openai = new OpenAI({
  apiKey,
});

async function generateOutput(messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]): Promise<string | null> {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo-16k',
    });

    if (chatCompletion.choices && chatCompletion.choices[0]) {
      return chatCompletion.choices[0].message.content;
    } else {
      console.error('Error while making the OpenAI chat API request:', chatCompletion);
      return null;
    }
  } catch (error) {
    console.error('Error while making the OpenAI chat API request:', error);
    return null;
  }
}

async function main() {
  const argv = yargs(process.argv.slice(2))
    .option('input', {
      alias: 'i',
      describe: 'Initial user message',
      demandOption: true,
      type: 'string',
    })
    .help()
    .alias('help', 'h')
    .argv;

  const inputFilePath = (argv as any).input as string;

  // Read the input from the 'input.txt' file
  const initialUserMessage = fs.readFileSync(inputFilePath, 'utf8');

  const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: algorithmToCalculate,
     //content: 'assume you are Albert Einestine. Answer as if you are still alive.'
    },
    { role: 'user', content: initialUserMessage },
  ];

  const output = await generateOutput(messages);

  if (output) {
    console.log('Generated Output:');
    console.log(output);
  } else {
    console.log('Failed to generate output.');
  }
}

main();
