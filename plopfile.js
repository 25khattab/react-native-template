const screenTypes = {
  auth: 'Authentication Screen',
  app: 'App Screen',
  appTab: 'App Bottom Tab Screen',
};
export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
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
    ],
  actions:[
    {
      when(context) {
        return context.screenType.includes(screenTypes.auth);
      },
        type: 'add',
        path: 'src/screens/auth-screens/{{camelCase name}}/index.tsx',
        templateFile: 'templates/Screen.tsx.hbs',
    },
    {
      when(context) {
        return context.screenType.includes(screenTypes.auth);
      },
        type: 'append',
        path: 'src/screens/auth-screens/index.ts',
        template: "export * from './{{camelCase name}}';",
    },
  ]
  });
}
