import boxen from "boxen";
import chalk from "chalk";

const contactInformation = {
  name: chalk.bold.green("             Antonio Manuel Díaz Moreno"),
  work: `${chalk.white('Software developer at')} ${chalk
    .hex('#2b82b2')
    .bold('AIDA')}`,
  github: chalk.gray('https://github.com/') + chalk.green('xenxi'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') + chalk.blue('antonio-manuel-díaz-moreno'),
  web: chalk.cyan('https://antoniomdm.dev/'),
  npx: `${chalk.red('npx')} ${chalk.white('amdiaz')}`,

  labelWork: chalk.white.bold('       Work:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
}

const text = [
  `${contactInformation.name}\n`,
  `${contactInformation.labelWork}  ${contactInformation.work}\n`,
  `${contactInformation.labelGitHub}  ${contactInformation.github}`,
  `${contactInformation.labelLinkedIn}  ${contactInformation.linkedin}`,
  `${contactInformation.labelWeb}  ${contactInformation.web}\n`,
  `${contactInformation.labelCard}  ${contactInformation.npx}\n`,
  `${chalk.italic(
    'I would like to become proficient in software development and ensure that I\'m doing it right'
  )}`,
].join("\n");

printWithBoder({ text: text, title: "xenxi" });

function printWithBoder(params: { text: string; title: string }): void {
  console.log(
    boxen(params.text, {
      title: params.title,
      titleAlignment: "center",
      padding: 1,
      borderColor: "green",
      borderStyle: "single",
    })
  );
}
