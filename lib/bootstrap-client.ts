export function bootstrap() {
  console.log(`
________________________________________________________________________________________________________
________________________________________________________________________________________________________

  //█████████   ██         {}  ████████  ████████   █████████  ███████    ██████        {}    ██████ 
  ██            ████████   ██  ██    ██  ██    ██   ██     ██  ██       ██      ██      ██  ██      ██
  ██            ██    ██   ██  ██    ██  ██    ██   ██     ██  ███████  ██      ██      ██  ██      ██
  ██            ██    ██   ██  ██    ██  ██    ██   ██     ██       ██  ██      ██      ██  ██      ██
  \\█████████   ██    ██   ██  ██    ██  ████████   ██     ██  ███████    ██████    ██  ██    ██████ 

________________________________________________________________________________________________________
________________________________________________________________________________________________________


This site is built using Notion & Next.js: https://github.com/Johnnsonkp/nextjs-notion-cms.
`)

  console.log(JSON.parse(document.getElementById("__NEXT_DATA__").textContent))
}
