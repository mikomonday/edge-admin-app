export default [
  {
    name: 'Home',
    link: '/',
    icon: 'home',
  },
  {
    name: 'Processing',
    icon: 'sync',
    items: [
      {
        name: 'Organizations',
        link: '/processing/organizations',
        icon: 'team',
      },
      {
        name: 'Jobs',
        link: '/processing/jobs',
        icon: 'schedule',
      },
      {
        name: 'Tasks',
        link: '/processing/tasks',
        icon: 'profile',
      },
      {
        name: 'Priority',
        link: '/processing/priority',
        icon: 'exclamation-circle',
      },
    ],
  },
  {
    name: 'Services',
    icon: 'build',
    items: [
      {
        name: 'Unassigned',
        link: '/services/unassigned',
        icon: 'question-circle',
      },
      {
        name: 'Controller',
        link: '/services/controller',
        icon: 'apartment',
      },
      {
        name: 'DB',
        link: '/services/db',
        icon: 'hdd',
      },
      {
        name: 'Engine',
        link: '/services/Engine',
        icon: 'cluster',
      },
      {
        name: 'Repository',
        link: '/services/repository',
        icon: 'cloud-server',
      },
      {
        name: 'Agent',
        link: '/services/agent',
        icon: 'laptop',
      },
    ],
  },
  {
    name: 'Logs',
    link: '/logs',
    icon: 'file-done',
  },
  {
    name: 'Configuration',
    icon: 'setting',
    items: [
      {
        name: 'Deployment',
        link: '/configuration/deployment',
        icon: 'deployment-unit',
      },
      {
        name: 'AI Engines',
        link: '/configuration/ai-engines',
        icon: 'smile',
      },
      {
        name: 'Service',
        link: '/configuration/service',
      },
      {
        name: 'Admin UI',
        link: '/configuration/admin-ui',
      },
      {
        name: 'Syslog',
        link: '/configuration/syslog',
      },
    ],
  },
];
