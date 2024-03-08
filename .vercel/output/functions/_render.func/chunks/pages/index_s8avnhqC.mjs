/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot } from '../astro_buI0xrVj.mjs';

const $$Astro$c = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row gap-8 justify-center items-center text-neutral-300 "> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-400 [&>p>strong]:font-semibold text-pretty order-2 md:order-1"> <p>
Me llamo Ariel. Estudie Derecho y me especialice en la Abogacía. Mientras preparaba el examen del Ministerio de Justicia empece a estudiar 
        FP de Desarrollo de Aplicaciones Multiplataforma (DAM).
</p> <p>
Y tras finalizar los estudios estoy enfocado en el mundo de la programación. Disfruto de la parte Front-end, donde puedo tener más creatividad y crear buena experiencia del usuario.
</p> </div> </section>`;
}, "C:/dev/Astro/Portfolio/src/components/About.astro", void 0);

const $$Astro$b = createAstro();
const $$GitHub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="98" height="96" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 98 96"> <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#EEEEEE"></path></svg>`;
}, "C:/dev/Astro/Portfolio/src/icons/GitHub.astro", void 0);

const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`
    sticky top-0
    z-10
    pt-5
    bg-[#212f3b]
    
    
  `, "class")}> <nav${addAttribute(`
    
     max-w-[700px]
     flex justify-between
     mx-auto
     text-lg
     px-4
     pb-2
     shadow-md shadow-zinc-950
     
     
     
    `, "class")}> <a class="font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent hover:from-amber-200 hover:to-yellow-600" href="#experiencia">Experiencia</a> <a class="font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent hover:from-amber-200 hover:to-yellow-600" href="#proyectos">Proyectos</a> <a class="font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent hover:from-amber-200 hover:to-yellow-600" href="#about">Sobre mí</a> <a class="font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent hover:from-amber-200 hover:to-yellow-600" href="#contacto">Contacto</a> </nav> </header>`;
}, "C:/dev/Astro/Portfolio/src/components/Header.astro", void 0);

const $$Astro$9 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="max-w-[700px] flex mx-auto justify-center w-full rounded-none shadow m-4 bg-black/20 mb-10"> <div class="w-full mx-auto max-w-screen-xl p-4 justify-center"> <span class="text-sm sm:text-center justify-center text-yellow-200/80">© ${currentYear} Creado por mí con cariño ❤️
</span> </div> </footer>`;
}, "C:/dev/Astro/Portfolio/src/components/Footer.astro", void 0);

const $$Astro$8 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/a.webp"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/dev/Astro/Portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$7 = createAstro();
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#EEEEEE"></path></svg>`;
}, "C:/dev/Astro/Portfolio/src/icons/LinkedIn.astro", void 0);

const $$Astro$6 = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)}> <svg class="icon icon-tabler icon-tabler-send" width="15" viewBox="0 0 24 24" stroke-width="2" stroke="#EEE" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 14l11 -11"></path><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path></svg></svg>`;
}, "C:/dev/Astro/Portfolio/src/icons/Mail.astro", void 0);

const $$Astro$5 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Projects;
  const TAGS = {
    REACT: {
      name: "React",
      class: ""
    },
    MATERIALUI: {
      name: "Material UI",
      class: ""
    },
    Zustand: {
      name: "Zustand",
      class: ""
    },
    TS: {
      name: "TypeScript",
      class: ""
    }
  };
  const PROJECTS = [
    {
      title: "JS Quiz - test sobre JavaScript",
      description: "Hecho con React y Material UI. Optimizado para m\xF3vil y con persistencia de datos. Una serie de test para evaluar tus conocimientos de JavaScript.",
      link: "https://jstipotest.vercel.app/",
      github: "https://github.com/arielnh/quiz",
      image: "",
      tags: [TAGS.REACT, TAGS.MATERIALUI, TAGS.TS, TAGS.Zustand]
    }
  ];
  return renderTemplate`${PROJECTS.map(({ image, title, description, tags, link }) => renderTemplate`${maybeRenderHead()}<article><div class="max-w-[700px] rounded  shadow-lg"><img class="w-full"${addAttribute(image, "src")} alt="Foto del proyecto"><div class="px-6 py-4"><div class="font-bold text-xl mb-2 bg-gradient-to-r from-slate-200 to-slate-600 bg-clip-text text-transparent">${title}</div><p class="text-neutral-300 text-base text-pretty">${description}</p></div><div class="px-6 pt-4 pb-2"><ul class="flex gap-2 flex-row mb-2"><a target="_blank"${addAttribute(link, "href")} class="
    ring-2 ring-amber-100/60 border-gray-300 rounded-nose bg-[#364d61]/40 shadow-md shadow-zinc-900 transition duration-0 hover:ring-amber-100 hover:scale-110 flex gap-x-2 -center py-1 px-2 text-neutral-300 mr-4">Visitar el sitio</a>${tags.map((tag) => renderTemplate`<li><span${addAttribute(`flex sm:ga-2 rounded-none text-xs ${tag.class} py-1 px-2 `, "class")}>
#${tag.name}</span></li>`)}</ul></div></div></article>`)}`;
}, "C:/dev/Astro/Portfolio/src/components/Projects.astro", void 0);

const $$Astro$4 = createAstro();
const $$SecctionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SecctionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} px-4 mx-auto container max-w-[700px] py-4`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/dev/Astro/Portfolio/src/components/SecctionContainer.astro", void 0);

const $$Astro$3 = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`
    ring-2 ring-amber-100/60 border-gray-300 rounded-nose
    bg-[#364d61]/40
    shadow-md
    shadow-zinc-900
    transition duration-0
    hover:ring-amber-100
    hover:scale-110
    flex
    gap-x-2 items-center
    py-1 px-2
    text-neutral-300
    
  `, "class")}${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/dev/Astro/Portfolio/src/components/Social.astro", void 0);

const $$Astro$2 = createAstro();
const $$ExperienceItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, description, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time class="mb-1 text-sm leading-none font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">${date}</time> <h3 class="text-lg font-semibold text-amber-200 mt-2"> ${title} </h3> <p class="mb-4 text-base font-normal text-neutral-300 text-pretty"> ${description} </p>`;
}, "C:/dev/Astro/Portfolio/src/components/ExperienceItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCIE = [
    {
      date: "Actualmente...",
      title: "Especializandome en Front-end",
      description: "Finalice mis estudios de DAM y actualmente estoy mejorando mis habilidades en Front-end y desarrollando mis proyectos."
    },
    {
      date: "Octubre 2023",
      title: "Pr\xE1cticas en Indra",
      description: "Desarrollo en Microsoft Dynamics AX 2012. Realice las practicas en equipo con otros compa\xF1eros. Usamos Azure DevOps y trabajamos en un proyecto para DHL."
    },
    {
      date: "Septiembre 2021",
      title: "Desarollo de Aplicaciones Multiplataforma",
      description: "Empece los estudios de desarrollo con la formaci\xF3n profesional."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol> ${EXPERIENCIE.map((experiencie) => renderTemplate`<li class="mb-10 text-neutral-300"> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experiencie })} </li>`)} </ol>`;
}, "C:/dev/Astro/Portfolio/src/components/Experience.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio de Ariel. Desarollador y Programador Full-Stack", "description": "Desarollo aplicaciones accesibles y eficientes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 "> ${renderComponent($$result2, "SectionContainer", $$SecctionContainer, { "id": "contacto", "class": "py-24 pb-16 " }, { "default": ($$result3) => renderTemplate` <div class="flex gap-4 items-end"> <img class="w-1/6 my-8 rounded-none shadow-md shadow-zinc-950 order-1" src="https://avatars.githubusercontent.com/u/82770975?v=4" alt="ariel retrato"> <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold pb-6 lg:pb-8 bg-gradient-to-r from-slate-200 to-slate-600 bg-clip-text text-transparent order-2">
Hey, soy Ariel.
</h1> </div> <h2 class="text-xl md:text-2xl lg:text-4xl text-balance text-slate-300 ">
Desarrollador <strong class="bg-gradient-to-r from-amber-200 to-yellow-600 bg-clip-text text-transparent ">Full Stack</strong>. De Valencia, España. Creo herramientas eficientes y accesibles.
</h2> <nav class="flex flex-wrap space-x-4 text-xs mt-6 "> ${renderComponent($$result3, "Social", $$Social, { "href": "https://www.linkedin.com/in/arielnh/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedIn", $$LinkedIn, { "class": "size-4 ", "alt": "Linkedin" })}
Linkedin
` })} ${renderComponent($$result3, "Social", $$Social, { "href": "https://github.com/arielnh" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GitHub", $$GitHub, { "class": "size-4", "alt": "GitHub" })}
GitHub
` })} ${renderComponent($$result3, "Social", $$Social, { "href": "mailto:legalnh@outlook.es" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Mail", $$Mail, { "class": "size-4", "alt": "Correo" })}
legalnh@outlook.es
` })} </nav> ` })} ${renderComponent($$result2, "SectionContainer", $$SecctionContainer, { "id": "proyectos", "class": "py-16 pb-16" }, { "default": ($$result3) => renderTemplate` <h2 class="text-xl md:text-4xl lg:text-3xl font-bold pb-6 lg:pb-12 bg-gradient-to-r from-slate-200 to-slate-600 bg-clip-text text-transparent">
Mis proyectos.
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SecctionContainer, { "id": "experiencia", "class": "py-16 pb-16" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-white/80">
Experiencia
</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SecctionContainer, { "id": "about", "class": "py-16 pb-16" }, { "default": ($$result3) => renderTemplate` <h2 class="text-xl md:text-4xl lg:text-3xl font-bold mb-6 flex gap-x-3 items-center bg-gradient-to-r from-slate-200 to-slate-600 bg-clip-text text-transparent">
Sobre mí
</h2> ${renderComponent($$result3, "About", $$About, {})} ` })} </main> ` })}`;
}, "C:/dev/Astro/Portfolio/src/pages/index.astro", void 0);

const $$file = "C:/dev/Astro/Portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
