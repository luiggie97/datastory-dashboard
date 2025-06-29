# Datastory Dashboard

---

## Tech Stack

* **Next.js** 13+
* **React** 18+
* **Ant Design** 5
* **GraphQL**
* **GraphQL Code Generator**
* **SWR** 
* **TypeScript**
* **Recharts** 

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/luiggie97/datastory-dashboard.git
cd datastory-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://datastory-cloud-v2.stellate.sh
```

---

### 4. Run the development server

```bash
npm run dev
```

The app will be available at: [http://localhost:3000](http://localhost:3000)

---

## GraphQL Codegen

To regenerate typed queries from GraphQL:

```bash
npm run codegen
```

Output: `graphql/generated/graphql.ts`

Make sure your queries live inside `graphql/queries/`.

---

## Features

* Country and measure selection via dropdowns
* Line chart for data trends
* Animated counter for key figures
* Responsive layout and consistent theme with custom colors