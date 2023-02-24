#!/usr/bin/env node
import { Card } from "./card.js";
import { DeveloperProfile } from "./developer-profile.js";
import { PromptMenu } from "./prompt-menu.js";

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

new Card(profile).print("👋 Hello world");
new PromptMenu(profile).show();
