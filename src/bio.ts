import boxen from "boxen";
import chalk from "chalk";
const text = [
  chalk.bold.green("Antonio Manuel Díaz Moreno"),
  `${chalk.white.bold("       Work:")}`,
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
