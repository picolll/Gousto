# Gousto Categories and Product

This simple React project consumes Gousto API and display a set of categories and corresponding products.

## Instalation

Project is using webpack as a resource bundler.

Clone this repo and then run:

    npm install
    npm start
    open index.html in browser


## How to use

Clicking on any category will bring a list of products for this category and made a selected category bold.

When clicked on product, it will become bold and show it's description.
That can be toggle ON and OFF.

Input box is the filter for a given product list.
It is case insensitive and it will filter currently shown products in selected category.
If we switch to another category, the same filter will apply.

## Styling

Basic styling is done wih bootstrap library.

## Components

For a small project I use React and some local state.
For more complex I would consider using Redux as a state manager.

* Main Component
    * Is a point of entry for webpack
    * Is calling APIs to get data
    * Renders CategoryList and ProductList

* CategoryList
    * Renders a list of Categories
* Category
    * Display on Category
    * When selected, makes a category bold (strong)
* ProductList
    * Renders a list of products of selected category
    * Holds a filter text in state
* Product
    * Display single product
    * Shows description when selected
    * Use a local toggle state
* SearchInput
    * Renders input box for filtering products




