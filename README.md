# Styled Dictionary POC

This POC intends to show the mechanism of design tokes using the [Amazons Styled Dictionary package](https://github.com/amzn/style-dictionary).

## How to run

Clone this project. In the project directory, you can run `yarn` to install all the project dependencies.

`yarn start` Runs ths project. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to add, edit or delete tokens.

The config file of the Styled Dictionary package is located in: `src/style-dictionary/config.json` In this file you can specify all the settings needed to generate variables from the tokens you specify.
For This use-case the specified transformers are for **sass** and **javascript**.

You can add, change or delete tokens specified in the json files in the `tokens` directory.

### Generating Variables

When need to generate new variables you can run `yarn build:tokens`. This will generate variable files for every technology specified in the `config.json`.

The output directories specified are:

- scss: `src/theme/common/_variables.scss`
- javascript: `src/consts/variables.ts`

There are 2 components created, one uses the generated sass variables the other one uses the javascript variables. Both using the same single source of truth.
