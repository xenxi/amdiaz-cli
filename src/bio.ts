#!/usr/bin/env node
import {
  printCard,
  DeveloperProfile,
  MenuOptions,
} from "bio-dev-card/dist/bio-printer.js";
import chalk from "chalk";

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
  description:
    "I would like to become proficient in software development and ensure that I'm doing it right",
};

printCard(profile, {
  cardTitle: "👋 Hello world",
  menuOptions: new MenuOptions(
    "What's your code adventure, adventurer? Choose your destiny! 🧙‍"
  )
    .withSendMail({
      email: profile.email,
      options: {
        label: "📧 Send a digital carrier pigeon!",
        completionText:
          "All done! Your message is now speeding through the interwebs, ready to land in your inbox.",
      },
    })
    .withScheduleMeeting({
      meetingUrl: profile.meetingUrl,
      options: {
        label: "📅 Plan a coffee (or tea) talk!",
        completionText:
          "I'll see you at the meeting! Don't forget to bring your coffee (or tea)",
      },
    })
    .withCustom({
      label: "👀 Take a peek at my work wizardry!",
      completionText:
        "The elusive resume seems to have vanished, but fear not! It's a work in progress, so stay tuned and watch this space!",
      action: () => printResume(),
    })
    .withExit({
      label: "👋 Goodbye, world...",
      completionText:
        "Wishing you a debugging-free day. See you in the next coding adventure!",
    }),
});

function printResume(): void {
  console.log(
    chalk.bold("DOMINGO ALONSO GROUP") +
      chalk.italic("Desarrollador Full-Stack")
  );

  console.log("Julio 2021 - Actualidad");

  console.log(
    " - Desarrollo y mantenimiento de aplicaciones cloud con arquitectura de microservicios."
  );
  console.log(
    " - Aseguramiento de la mantenibilidad y escalabilidad del código mediante el diseño guiado por pruebas, aplicación de las distintas prácticas DDD y principios de microdiseño SOLID."
  );
  console.log(
    " - Tecnologías y metodologías: C#, TypeScript, .NET CORE, VUE, REACT, GIT, SQL Server, AZURE, CQRS, DDD, TDD, REST, SCRUM, XP."
  );

  console.log(chalk.bold("Anexia") + chalk.italic("Desarrollador Full-Stack"));
  console.log("Diciembre 2017 - Julio 2021");

  console.log("- Desarrollo y soporte de múltiples aplicaciones web.");
  console.log("- Desarrollo de aplicaciones móviles nativas multiplataforma.");
  console.log(
    "- Aseguramiento de la mantenibilidad y escalabilidad del software mediante la aplicación de principios SOLID, el uso de arquitecturas limpias (DDD, Hexagonal) y pruebas (TDD)."
  );
  console.log(
    "- Tecnologías y metodologías: C#, TypeScript, Dart, ASP.NET CORE, Flutter, Angular, GIT, TFS, SQL Server, Bloc, CQRS, DDD, TDD, REST."
  );

  console.log(
    chalk.bold("VECTOR ITC-GROUP") + chalk.italic("Analista Programador")
  );
  console.log("Mayo 2017 - Diciembre 2017");

  console.log(" - Análisis, diseño y desarrollo de soluciones web. ");
  console.log(
    " - Desarrollo de algoritmos de optimización de costes utilizando ANNs. "
  );
  console.log(
    " - Implantación de capas NoSQL y desarrollo e implantación de aplicaciones web y servicios web. "
  );
  console.log(
    " - Tecnologías y metodologías: C#, Angular, ASP.NET CORE, Python, MongoDB, GIT, REST, TDD, DDD. "
  );

  console.log(
    chalk.bold("NOKIA") +
      chalk.italic("Desarrollador de Aplicaciones Escritorio / Web")
  );
  console.log("Enero 2016 - Mayo 2017");

  console.log(
    " - Análisis, diseño y desarrollo de aplicaciones y aplicaciones web."
  );
  console.log(
    " - Colaboración en proyectos de investigación, desarrollo e innovación ID+I)."
  );
  console.log(
    " - Diseño y desarrollo de un Sistema de Información Geográfica (GIS) FTTH, junto con módulos de automatización y reconstrucción de diseños."
  );
  console.log(" - Tecnologías: VB, C#, WPF, ASP.NET, POSTGRESQL, GIT, CAD.");

  console.log(
    chalk.bold("Alcatel-Lucent") +
      chalk.italic("Desarrollador de Aplicaciones Escritorio")
  );
  console.log("Septiembre 2014 - Enero 2016");

  console.log(
    "- Desarrollo de aplicaciones para análisis de datos, generación de informes y automatización de procesos utilizando VBA, .NET y MySQL."
  );

  console.log(
    chalk.bold("Freelance") + chalk.italic("Diseñador y Desarrollador Web")
  );
  console.log("Noviembre 2013 - Octubre 2014");

  console.log(" - Diseño y desarrollo de varios proyectos web.  ");
  console.log(
    " - Optimización de SEO y estrategias de marketing en redes sociales.  "
  );
  console.log(" - Diseño de flyers, banners e imagen corporativa.  ");

  console.log(chalk.bold("LA SALLE") + chalk.italic("Técnico de Sistemas"));
  console.log("Octubre 2013 - Febrero 2014");

  console.log(
    "- Mantenimiento e instalación de sistemas basados en Windows Server (prácticas)."
  );

  console.log(chalk.bold("Freelance") + chalk.italic("Desarrollador Web"));
  console.log("Junio 2013 - Octubre 2013");

  console.log(" - Desarrollo front-end responsive utilizando HTML5 y CSS3.");
  console.log(" - Uso del framework GRUNT y las librerías JQUERY y LESS.");
  console.log(" - Proyecto destacado: desarrollo del portal www.RACE.es.");

  console.log(
    chalk.bold("Signlab") + chalk.italic("Desarrollador de Aplicaciones Web")
  );
  console.log("Enero 2013 - Abril 2013");

  console.log(
    "- Colaboración en el desarrollo de una aplicación móvil utilizando JAVA, PHP, XML y MySQL."
  );

  console.log(
    chalk.bold("XUL COMUNICATION SOCIAL") +
      chalk.italic("Desarrollador de Aplicaciones Web")
  );
  console.log("Octubre 2012 - Diciembre 2012");

  console.log(
    "- Colaboración en el desarrollo de una aplicación móvil utilizando JAVA, PHP, XML y MySQL (prácticas)."
  );
}
