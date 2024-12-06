# Dokumentation för "Vårt kreativa kök"

## Innehållsförteckning
1. [Introduktion](#introduktion)
2. [Användning av applikationen](#instruktion)
3. [Arkitektur](#arkitektur)
4. [Installation och uppsättning](#installation-och-uppsättning)
5. [Funktioner](#funktioner)
   - [Kund](#kund)
   - [Personal](#personal)
6. [Agilt arbetssätt](#agilt-arbetssätt)
7. [Teknologi](#teknologi)
8. [Utvecklingsprocess](#utvecklingsprocess)
9. [Deployment](#deployment)
 
---

### Introduktion
En komplett take away-lösning som kombinerar innovativ design, effektiv backend och responsiv frontend för att leverera en unik användarupplevelse.


---

### Användning av applikationen
   Här är en länk till vår applikation:
[Länk till aplikation](http://swift-deluxe.s3-website.eu-north-1.amazonaws.com/)

 **Kund (Köpare)**
   - Startsida och navigering: På startsidan hittar du en hamburgermeny i det övre vänstra hörnet.
    Härifrån kan du navigera till följande sidor:
      - Registrering: För att skapa ett nytt användarkonto.
      - Inloggning: För att logga in på ditt konto och få tillgång till personliga funktioner.
      - Om oss (About): För att läsa mer om restaurangen och vår verksamhet.
      - Profilsida: För att hantera ditt konto och se din beställningshistorik.
      - Obs! För att återgå till startsidan kan du klicka på logotypen.
   - Läsa menyn: Kunden kan navigera till sidan /homepage för att se tillgängliga rätter.
   - Göra en beställning:
      - Välj en rätt från menyn (eller klicka så många gånger behöver man) och lägg till i varukorgen.
      - Gå till /cart (klicka på korgen) för att se och vid behov ändra din beställning. Du kan även lägga till en anteckning om du har några önskemål (t.ex. "Ingen lök, tack"). Om man är klar bekräftar.
      - Man får bekreftälse och där man kan ändra order innan den blir låst samt gå tillbaka till /homepage (klicka på knappen eller icon).
   - Orderstatus: Kunden kan se statusen för sin beställning på /profilsida.
   

 **Personal (Administratörer)**
   - För att opna Adminsida öppna hamburgermeny och välj alternativet **'*Adminsida*'**.
   - Hantera beställningar: 
      - På sidan Alla Beställningar kan personalen:
         - Se en lista över alla inkommande beställningar, inklusive: beställnings-ID, status (t.ex. Pending, Locked, Cancelled), beställningsvaror med kvantiteter och meddelanden från kunder.
      - Redigera beställningar:
         - För att redigera en beställning, klicka på knappen Redigera bredvid den valda beställningen.
         - I redigeringsformuläret kan du:
            - Ändra status på beställningen (Pending, Locked, Cancelled).
            - Uppdatera kundens meddelande.
            - Justera kvantiteter för varje produkt i beställningen.
         - För att spara ändringarna, klicka på Spara Ändringar.
         - Om du vill avbryta redigeringen, klicka på Avbryt.
      - Låsa beställningar: 
         - När en beställning är färdig att levereras eller hanteras klart, markera den som "Locked" genom att ändra status och spara ändringarna. Alla låsta beställningar kan visas genom att klicka på knappen Låsta Beställningar.
   - Lägga till och redigera rätter:
      - Gå till sidan Uppdatera menyn och priser för att:
      - Lägga till nya rätter eller drycker i menyn.
      - Uppdatera befintliga rätter, inklusive namn, priser och beskrivningar.    

 **Instruktioner för nya användare**      
   - Registrera dig och logga in. Öppna en *hamburgermeny* i det övre vänstra hörnet. Obs! Lösenordet måste innehålla minst 8 tecken.

---

### Arkitektur

**Design och Prototyp**:
 Prototyper och design hanteras i Figma.
 Du kan se den aktuella versionen av prototypen här: [Länk till Figma-prototypen](https://www.figma.com/design/JSMkmFt9stEp3XJ8UmVHFn/Take-Away?node-id=0-1&node-type=canvas&t=2KAynQgQHxfe4sWe-0)  

**Frontend**: 
   Frontend-applikationen är byggd med React i kombination med Vite för snabb utveckling och TypeScript för typkontroll. Applikationen är designad för att vara responsiv och användarvänlig med stöd för moderna webbläsare.

#### *Struktur*.
   Projektet är organiserat enligt följande struktur:

- Routers: Innehåller logik för att hantera navigering i applikationen (t.ex. Router.tsx och AdminRouter.tsx).
- assets: Bilder och ikoner som används i projektet, inklusive logotyper och andra grafiska element.
- components: Återanvändbara UI-komponenter som t.ex. Header, Footer, Menu, och CartList.
- pages: Alla sidor i applikationen, som HomePage, LoginPage, och AdminPage.
- stores: Hantering av globalt tillstånd med hjälp av Zustand, t.ex. cartStore.ts för att hantera kundens varukorg.
- types: Typdefinitioner för TypeScript, inklusive gränssnitt (interface.ts) för att definiera datamodeller.
- Använda bibliotek och verktyg

#### *Projektet använder följande bibliotek och verktyg*:

**React**: För att bygga komponentbaserade användargränssnitt.
**Vite**: För snabb utveckling och byggprocess.
**TypeScript**: För stark typning och bättre kodunderhåll.
**Zustand**: För att hantera applikationens tillstånd, som t.ex. varukorg och användarinformation.
**React Router**: För att hantera navigering och routing mellan sidor.
**Axios**: För att göra HTTP-anrop till backend.
**CSS**: För styling av komponenter och responsiv design.
**Framer Motion**: För att skapa animationer och övergångar i användargränssnittet, vilket förbättrade användarupplevelsen genom smidiga och moderna visuella effekter.
**uuid**: För att generera unika identifierare för olika objekt, vilket säkerställde att varje resurs fick en unik och säker identitet.(backend)

#### *Funktionalitet*

**Responsiv design**: Applikationen fungerar på både datorer och mobila enheter.

**Globalt tillstånd**: Zustand används för att hantera delade tillstånd, som t.ex.:
*cartStore* för att hålla koll på produkter i varukorgen.

**Routing**: Navigeringen hanteras via Router.tsx och AdminRouter.tsx, som definierar tillgång till olika sidor baserat på användarroll.

**Exempel på nyckelfunktioner**
 *Varukorgslogik*:
   Produkter kan läggas till eller tas bort från varukorgen via cartStore.
   Visar en räknare (CartCounter) för att indikera antalet produkter i varukorgen.
*Användarautentisering*:
   Sidor som LoginPage och RegisterPage hanterar användarinloggning och registrering.
*Användarvänlig navigering*:
   Dynamiska menyer (Navbar, HamburgerIcon) för enkel navigering.
 
**Installation och utveckling**
   För att starta frontend-applikationen:

Klona projektet: git clone [repo-url].
Navigera till frontend-mappen: cd vite-project.
Installera beroenden: npm install.
Starta utvecklingsservern: npm run dev.


- **Backend**: REST API utvecklat i AWS
- **Databas**: DynamoDB
- **Hosting**: AWS S3 (frontend)

---

### Funktioner

1. **Kund**
- Läs menyn: `/menu-items`
- Skapa beställning: `/order`
- Hantera beställning: `/order/:id`
- Registera: `/register`
- Logga in: `/login`

2. **Personal**
- Hantera beställningar: ``
- Lås en beställning: ``
- Lägg till kommentarer: ``

---

### Agilt arbetssätt

- Sprint planning varje vecka
- Dagliga stand-ups
- Sprint review varje fredag
- Retrospective för att reflektera över processen

---

### Teknologi

1. **Frontend** (Teknologier som används för att bygga användargränssnitt):
   - React (bibliotek för att bygga UI)
   - Vite (verktyg för att bygga frontend-applikationer)
   - TypeScript (statiskt typande för JavaScript)
   - Zustand (state management)
   - React Router (för navigering i applikationen)
   - Axios (hantering av HTTP-förfrågningar)
   - CSS

2. **Backend** (Teknologier för att hantera affärslogik och serverfunktioner):
   - AWS Lambda (serverless computing)
   - Node.js (JavaScript runtime-miljö)
   - DynamoDB (NoSQL-databas som används med AWS)
   - Joi (datavalidering)
   - Middy (middleware för AWS Lambda)
   - bcryptjs (hashning av lösenord)
   - dotenv (hantering av miljövariabler)

 3. **Andra verktyg och tekniker**:
   - Git / GitHub (versionskontroll)
   - Insomnia (testning av API-endpoints)  eller Postman
   - ESLint (kodstandard och linting)     

---

### Utvecklingsprocess
1. Design i Figma
2. Implementering av frontend
3. Backendutveckling och API-integration
4. Testning (manuell och automatiserad i Insomnia för backend, samt kontroll av potentiella fel och localStorage via webbläsarens utvecklarverktyg för frontend)
5. Deployment

---

### Deployment
1. **Frontend**: Publiceras via AWS S3
2. **Backend**: AWS Lambda (deployes med Serverless Framework eller annan lösning)
   -  AWS S3 (hosting av frontend-applikation)
   - AWS Lambda (hosting av backend)
   - API Gateway (hantering av API-endpoints)

