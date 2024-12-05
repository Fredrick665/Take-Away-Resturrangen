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
   - Läsa menyn: Kunden kan navigera till sidan /menu för att se tillgängliga rätter och drycker.
   - Göra en beställning:
      1. Välj en rätt från menyn och lägg till i varukorgen.
      2. Gå till /cart för att granska din beställning.
      3. Slutför beställningen genom att fylla i nödvändiga uppgifter.
   - Orderstatus: Kunden kan se statusen för sin beställning på sidan /orderhistory.

 **Personal (Administratörer)**
      - Hantera beställningar: Personal kan använda sidan /admin/orders för att:
         - Se alla inkommande beställningar.
         - Låsa en beställning när den behandlas.
         - Läsa kommentarer från kunder (t.ex. "Ingen lök, tack").
      - Lägga till och redigera rätter: Gå till /additem för att lägga till en ny rätt eller /edititems för att ändra befintliga menyer.
      - Kommentarer till kockar: Lägg till instruktioner till specifika beställningar via /admin/orders/:id/comment.

 **Instruktioner för nya användare**      


---

### Arkitektur

**Design och Prototyp**:
 Prototyper och design hanteras i Figma.
 Du kan se den aktuella versionen av prototypen här: [Länk till Figma-prototypen](Link URL???)  

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
*Anpassningsbara teman*:
   En ThemeSwitcher-komponent för att växla mellan olika visuella teman.

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
- Hantera beställningar: `/admin/orders`
- Lås en beställning: `/admin/lock-order`
- Lägg till kommentarer: `/admin/orders/:id/comment`

---

### Agilt arbetssätt

- Sprint planning varje vecka
- Dagliga stand-ups
- Sprint review varje fredag
- Retrospective för att reflektera över processen

---

### Teknologi
Lista alla verktyg och ramverk som används, t.ex.:

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

 3. **Inne narzędzia i technologie**:
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

