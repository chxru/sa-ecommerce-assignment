# SAECOM - Software Architecture module E-COMmerce Assignment

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Nest.js](https://nestjs.com)
- [MongoDB](https://mongodb.com/)
- [Storybook](https://storybook.js.org/)

## Getting Started

1. Make sure you have [Node.js](https://nodejs.org/en/) installed.
2. Clone the repository.
3. Install dependencies.

```bash
npm i -g yarn # requires
yarn
```

4. Start the development server.

```bash
yarn dev:fe
yarn dev:be
```

5. Start the storybook server.

```bash
yarn sb
```

### Directory Structure

Project is configured using yarn v1 workspaces.

```bash
.
├── be
│   ├── package.json
│   ├── backend related nest.js files
│__ fe
|   ├── .storybook # storybook config
|   ├── app # next.js app directory
|   ├── components # shared components
|   ├── public # public files
|   ├── stories # generated while configuring storybook, can be deleted
|   |__ utils # shared utils
│   ├── package.json
│   ├── frontend related next.js files
|__ types
│   ├── package.json
│   ├── shared types
├── package.json
├── yarn.lock
└── README.md
```

## Team Members

1. Charuka Samarakoon [@chxru](https://github.com/chxru)
2. Geeth Wikramasinghe [@wickx98 ](https://github.com/wickx98)
3. Sahan Ediriweera [@sahanediriweera](https://github.com/sahanediriweera)
