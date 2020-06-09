# Apollo GraphQL and github

Project is using
-   React
-  [Apollo](https://www.apollographql.com/)
-   React Hooks
-   Docker
-   Jest for running unit test
-   CircleCI for CI

As per requirement all 3 scenarios has been implemented.

Before running project please created `.env` file in a main dir and put
value of secret. Instruction how to: [Create a personal access token for the command line](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
```$xslt
GITHUB_TOKEN={{value}}
```

To run project:
```$xslt
yarn start
```

#### What can be improved

- use typescript
- add debounce for github calls API calls when user is typing
- update design
- do pagination for results












