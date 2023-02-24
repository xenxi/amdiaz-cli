#!/usr/bin/env node
import { CardPrinter } from "./card-printer.js";
import { DeveloperProfile } from "./developer-profile.js";
import { PromptMenuPrinter } from "./prompt-menu-printer.js";

const profile: DeveloperProfile = {
  name: "Antonio Manuel Díaz Moreno",
  profession: "Software developer",
  currentEmployer: "AIDA",
  githubName: "xenxi",
  linkedinName: "antonio-manuel-díaz-moreno",
  websiteUrl: "https://antoniomdm.dev/",
  consoleCommand: "amdiaz",
  email: "antoniom.diaz.moreno@gmail.com",
  meetingUrl: "https://calendly.com/antoniom-diaz-moreno/30min",
};

new CardPrinter(profile).print("👋 Hello world");
new PromptMenuPrinter(profile).show();
