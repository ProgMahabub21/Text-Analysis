
# OpenAI Chatbot Script

This script allows you to interact with OpenAI's GPT-3.5 Turbo model to generate responses to user messages. You can provide an initial user message; the script will use the OpenAI API to generate a response. Go to the repository <a href="https://github.com/sheikhmahmudulhasanshium/BCT_Trust_Factor_Evaluation_PsudoCode/tree/master">link</a> to understand the basic work process of the BCT-IATI framework in detail.

## Prerequisites

Before running the script, ensure you have the following installed on your system:

- Node.js
- npm

## Installation

1. Clone or download this repository to your local machine.

2. Navigate to the project directory in your terminal.

3. Install the required dependencies:
```
npm install
```

## Usage

To run the OpenAI chatbot script, follow these steps:

1. Create an `input.txt` file in the project directory and enter your initial user message in this file.

2. Replace the placeholder API key in `openai_script.ts` with your actual OpenAI API key.

3. Execute the script using the following command:
```
npm start -- --input input.txt
```
Replace `input.txt` with the path to your input file if it's located in a different directory.

The script will read the user message from the `input.txt` file, send it to the OpenAI API, and display the generated response.

## Configuration

You can modify the script's behavior by editing the `openai_script.ts` file. You can change the OpenAI model used, add additional messages, or customize the chatbot's behavior.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to reach out if you have any questions or encounter any issues.

Happy chatting with the OpenAI chatbot!
