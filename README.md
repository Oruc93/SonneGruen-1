# Website Sonne und Grün
Visit the demo Website at: https://benjischlotter.github.io/SonneGruen/

## Development Setup
Install nodejs and npm for your operating system. More infos at: https://www.gatsbyjs.com/tutorial/part-zero/  
Install the yarn package manager: `npm install -g yarn`  
Install gatsby: `yarn global add gatsby-cli`  

Install all development dependencies by running `yarn install`. If you introduce new dependencies do it by running `yarn add <new_dep>`

Run the development server `gatsby develop`. The website is then accessible at `http://localhost:8000/`. After each change the website will be recompiled in the background.

## Development Notes
- Color scheme: https://coolors.co/287b65-a0e8af-86baa1-edead0-ffcf56

## Development Error handling:
`fatal: A branch named 'gh-pages' already exists.`

remove node_modules/.cache/gh-pages

----------------------------------

## Setup deploy
This must be done once.
### Setup github pages
For now the Website is deployed to github pages. The setup was done like this:
- create and push new branch `gh-pages`
- In gitlab got to repo settings and select the `gh-pages` branch as source for the github pages feature.

### Setup Travis CI
Travis CI is used to compile the website and push the result it in the correct branch.

The repo must be public!
- got to https://github.com/marketplace/travis-ci
- select Open Source and the repository you want to set it up with
- login to https://travis-ci.com with your github account
- go to the travis ci settings for the repo
- add a github personal access token as environment variable. Call the variable: CI_TOKEN
- this variable will be used by travis ci to access the repository

The travis ci integration can be deleted by removing it in the Github Settings: https://github.com/settings/installations/

----------------------------------

## How to deploy
The deployment is setup according to the guide found at https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages

For now the deployment happens after each push to the develop branch. If you wish to develop and push your changes to a different branch.

> NOTE: DO NOT MODIFIY THE gh-pages BRANCH!!!

## How to add content
Content is created in markdown pages. For example the different services are described in separate markdown files inside the content/services subdirectory.
The part between the tripple dashes is called frontmatter and is the meta data of this content. For example in `services.js` the date field from the frontmatter is used to sort the content.

More infos about the frontmatter in markdown files: https://www.gatsbyjs.com/docs/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files

The rest of the markdown file is rendered as html.

Querying the data is done via graphql. More on that: https://www.gatsbyjs.com/docs/page-query/