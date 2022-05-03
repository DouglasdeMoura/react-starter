module.exports = function (plop) {
  plop.setGenerator('atom', {
    description: 'Create an atom',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your atom?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/atoms/{{kebabCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/atoms/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/atoms/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/atoms/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: 'templates/spec.tsx.hbs',
      },
    ],
  })

  plop.setGenerator('component', {
    description: 'Create an component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: 'templates/spec.tsx.hbs',
      },
    ],
  })
}
