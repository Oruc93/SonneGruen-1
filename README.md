# Website Sonne und Grün

## Development Setup
run `yarn install`

Install dependencies:
- gatsby-plugin-offline
gatsby-plugin-react-helmet react-helmet
gh-pages

run `gatsby develop`

## Setup deploy (one time only)
### Setup github pages (maybe not need later)
- create and push new branch `gh-pages`
- got to repo settings and select the `gh-pages` branch as source

### Setup Travis CI
The repo must be public.
- got to https://github.com/marketplace/travis-ci
- select Open Source and the repository you want to set it up with
- login to https://travis-ci.com with your github account
- go to the travis ci settings for the repo
- add a github personal access token as environment variable
- add the environment variable to package.json in the deploy call

The travis ci integration can be deleted by removing it in the Github Settings: https://github.com/settings/installations/

## How to deploy
run `gatsby build`
https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages
deploy to github pages like described here: https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages

## How to add content

## Error handling:
`fatal: A branch named 'gh-pages' already exists.`

remove node_modules/.cache/gh-pages