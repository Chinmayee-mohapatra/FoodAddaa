# FoodAddaa - PROJECT

## UNIT TESTING

## SETUP TESTING IN OUR APP:

- 1. Install React testing library: npm i -D @testing-library/react
- 2. Install Jest: npm i -D jest
- 3. Install Bebel dependencies: npm install --save-dev babel-jest @babel/core @babel/preset-env
- 4. Configure babel inside new "babel.config.js" file.

---

Parcel already uses Babel, and now we are again configuring babel. So parcel will be confused on which configuration to use. So we will have to change in parcel of our application to accomodate babel along with jest.

Changes:
-> Go to Parcel official doc. -> Language: JavaScript -> Babel -> usage with other tools.

- 5. Now copy paste the configuration in a new ".parcelrc" file:

{
"extends": "@parcel/config-default",
"transformers": {
"\*.{js,mjs,jsx,cjs,ts,tsx}": [
"@parcel/transformer-js",
"@parcel/transformer-react-refresh-wrap"
]
}
}

- Now babel.config.js will not have a conflict. This file will be used.

---

- 6. Jest Configuration: npx jest --init
     - Few questions :
       -- Using typescript: No
       -- Choose test environment that will be used for testing: jsdom(browser-like)
       -- Do you want Jest to add coverage report: Yes
       -- Which provider should be used to instrument code for coverage? » babel
       -- Automatically clear mock calls, instances, contexts and results before every test? ... yes

- 7. install jsdom library: npm install --save-dev jest-environment-jsdom

### Now we are ready to start writing test cases.

- For writing test cases we need to create a folder as "\_\_test\_\_" anywhere in our project diectory and write the test files in it.
- OR we can even write the test files and save it in the format as : <ComponentFileName>.test.js / <ComponentFileName>.spec.js / <ComponentFileName>.test.ts / <ComponentFileName>.spec.ts

- 8. Install @babel/preset-react : to make jsx work in test cases.
- 9. Include @babel/preset-react in babel.config.js file.

## Why ADDING @babel/preset-react

Babel is a transpiler, it converts our code from one form to another. This @babel/preset-react is helping our testing library to convert our JSX code to html so that it can read properly.

## .toBeInTheDocument() is imported from @testing-library/jest-dom library.

to check if an element has loaded or not we use this funtion. toBeInTheDocument()

- 10. Install : @testing-library/jest-dom

## INTEGRATION TESTING

### SEARCH FLOW
