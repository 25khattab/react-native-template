const screenTypes = {
  auth: 'Authentication Screen',
  app: 'App Screen',
  appTab: 'App Bottom Tab Screen',
};
export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.load('plop-pack-json-modify');
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What is this component's name?",
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{camelCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('screen', {
    description: 'Create a screen',
    prompts: [
      {
        type: 'list',
        name: 'screenType',
        message: 'Choose related screen folder',
        choices: Object.values(screenTypes),
      },
      {
        type: 'input',
        name: 'name',
        message: "What is this screen's name?",
      },
      {
        type: 'input',
        name: 'screenTitleEn',
        message: 'What is title of this screen in English?',
      },
      {
        type: 'input',
        name: 'screenTitleAr',
        message: 'What is title of this screen in Arabic?',
      },
    ],
    actions: function (data) {
      const actions = [];
      if (data.screenType === screenTypes.auth) {
        actions.push({
          type: 'add',
          path: 'src/screens/auth-screens/{{camelCase name}}/index.tsx',
          templateFile: 'templates/AuthScreen.tsx.hbs',
        });
        actions.push({
          type: 'append',
          path: 'src/screens/auth-screens/index.ts',
          template: "export * from './{{camelCase name}}';",
        });
        actions.push({
          type: 'append',
          path: 'src/navigation/auth-navigator.tsx',
          pattern: "// don't remove for generator",
          template: '\t{{pascalCase name}}: undefined;',
        });
        actions.push({
          type: 'append',
          path: 'src/navigation/auth-navigator.tsx',
          pattern: "// don't remove for generator (route)",
          template:
            "\t{name: '{{pascalCase name}}', component: {{pascalCase name}}, title: '{{screenTitleEn}}' },",
        });
      } else if (data.screenType === screenTypes.app) {
        actions.push({
          type: 'add',
          path: 'src/screens/app-screens/{{camelCase name}}/index.tsx',
          templateFile: 'templates/Screen.tsx.hbs',
        });
        actions.push({
          type: 'append',
          path: 'src/screens/app-screens/index.ts',
          template: "export * from './{{camelCase name}}';",
        });
        actions.push({
          type: 'append',
          path: 'src/navigation/app-navigator.tsx',
          pattern: "// don't remove for generator (list)",
          template: '\t{{pascalCase name}}: undefined;',
        });
        actions.push({
          type: 'append',
          path: 'src/navigation/app-navigator.tsx',
          pattern: "// don't remove for generator (route)",
          template:
            "\t{name: '{{pascalCase name}}', component: {{pascalCase name}}, title: '{{screenTitleEn}}' },",
          data: {hello: 'omar'},
        });
      }
      actions.push({
        // Test Objects
        type: 'json-modify-file', // Strategy to use
        force: true,
        JSONFile: './locales/en/translation.json', // The file to modify
        JSONKey: 'routes', // Where in the json file we add ourselves? - Can do root?
        JSONEntryKey: '{{pascalCase name}}', // if missing use array
        JSONEntryValue: '{{screenTitleEn}}',
      });
      actions.push({
        // Test Objects
        type: 'json-modify-file', // Strategy to use
        force: true,
        JSONFile: './locales/ar/translation.json', // The file to modify
        JSONKey: 'routes', // Where in the json file we add ourselves? - Can do root?
        JSONEntryKey: '{{pascalCase name}}', // if missing use array
        JSONEntryValue: '{{screenTitleAr}}',
      });
      return actions;
    },
  });
}
