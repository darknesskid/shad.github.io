// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

export const joke = async (args: string[]): Promise<string> => {
  const arrayOfJokes: string[] = [
    `Q. How did the programmer die in the shower?
     A. He read the shampoo bottle instructions: Lather. Rinse. Repeat.`,
    `How many programmers does it take to change a light bulb?
     None – It’s a hardware problem`,
     `There are only 10 kinds of people in this world: those who know binary and those who don’t.`,
     `A programmer walks to the butcher shop and buys a kilo of meat.  An hour later he comes back upset that the butcher shortchanged him by 24 grams.`,
     `“Knock, knock.”
     “Who’s there?”
     very long pause….
     “Java.”`,
     `Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.`,
     `There are three kinds of lies: Lies, damned lies, and benchmarks.`,
     `All programmers are playwrights, and all computers are lousy actors.`,
     `Debugging: Removing the needles from the haystack`,
  ];

  return arrayOfJokes[
    Math.floor(Math.random() * (arrayOfJokes.length - 1) - 0)
  ];
};

export const cia = async (args: string[]): Promise<string> => {
  const computerIndustryAcronyms: string[] = [
    `CD-ROM: Consumer Device, Rendered Obsolete in Months`,
    `PCMCIA: People Can’t Memorize Computer Industry Acronyms`,
    `ISDN: It Still Does Nothing`,
    `SCSI: System Can’t See It`,
    `MIPS: Meaningless Indication of Processor Speed`,
    `DOS: Defunct Operating System`,
    `WINDOWS: Will Install Needless Data On Whole System`,
    `OS/2: Obsolete Soon, Too`,
    `PnP: Plug and Pray`,
    `APPLE: Arrogance Produces Profit-Losing Entity`,
    `IBM: I Blame Microsoft`,
    `MICROSOFT: Most Intelligent Customers Realize Our Software Only Fools Teenagers`,
    `COBOL: Completely Obsolete Business Oriented Language`,
    `LISP: Lots of Insipid and Stupid Parentheses`,
    `MACINTOSH: Most Applications Crash; If Not, The Operating System Hangs`,
    `AAAAA: American Association Against Acronym Abuse.`,
    `WYSIWYMGIYRRLAAGW: What You See Is What You Might Get If You’re Really Really Lucky And All Goes Well.`,
  ];

  return computerIndustryAcronyms[
    Math.floor(Math.random() * (computerIndustryAcronyms.length - 1) - 0)
  ];
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hello, I am ${config.name}. 
I am a Sufi 📿 - Programmer - Realist - Photography - Gamer 'not that good tho ✌️'
I am from Iraq - Kurdistan 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`https://drive.google.com/file/d/1vScSm6V-m08HbiFrU2Cc0r86-dqFAUM2/view?usp=sharing`);
  return 'Opening resume...';
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact

export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/darknesskid`);

  return 'Opening github...';
};

export const freecodecamp = async (args: string[]): Promise<string> => {
  window.open(`https://www.freecodecamp.org/fcc1104f09f-8e88-4bc3-8a08-c1a7cc6c1e88`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/shadsabah/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// export const duckduckgo = async (args: string[]): Promise<string> => {
//   window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
//   return `Searching duckduckgo for ${args.join(' ')}...`;
// };

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  █████████  █████   █████   █████████   ██████████    ██                                                         
 ███░░░░░███░░███   ░░███   ███░░░░░███ ░░███░░░░███  ███                                                         
░███    ░░░  ░███    ░███  ░███    ░███  ░███   ░░███░░░   █████                                                  
░░█████████  ░███████████  ░███████████  ░███    ░███     ███░░                                                   
 ░░░░░░░░███ ░███░░░░░███  ░███░░░░░███  ░███    ░███    ░░█████                                                  
 ███    ░███ ░███    ░███  ░███    ░███  ░███    ███      ░░░░███                                                 
░░█████████  █████   █████ █████   █████ ██████████       ██████                                                  
 ░░░░░░░░░  ░░░░░   ░░░░░ ░░░░░   ░░░░░ ░░░░░░░░░░       ░░░░░░                                                   
                                                                                                                  
                                                                                                                  
                                                                                                                  
    ███████████     ███████    ███████████   ███████████ ███████████    ███████    █████       █████    ███████   
   ░░███░░░░░███  ███░░░░░███ ░░███░░░░░███ ░█░░░███░░░█░░███░░░░░░█  ███░░░░░███ ░░███       ░░███   ███░░░░░███ 
    ░███    ░███ ███     ░░███ ░███    ░███ ░   ░███  ░  ░███   █ ░  ███     ░░███ ░███        ░███  ███     ░░███
    ░██████████ ░███      ░███ ░██████████      ░███     ░███████   ░███      ░███ ░███        ░███ ░███      ░███
    ░███░░░░░░  ░███      ░███ ░███░░░░░███     ░███     ░███░░░█   ░███      ░███ ░███        ░███ ░███      ░███
    ░███        ░░███     ███  ░███    ░███     ░███     ░███  ░    ░░███     ███  ░███      █ ░███ ░░███     ███ 
    █████        ░░░███████░   █████   █████    █████    █████       ░░░███████░   ███████████ █████ ░░░███████░  
   ░░░░░           ░░░░░░░    ░░░░░   ░░░░░    ░░░░░    ░░░░░          ░░░░░░░    ░░░░░░░░░░░ ░░░░░    ░░░░░░░    
                                                                                                                  
                                                                                                                  
                                                                                                                  

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
