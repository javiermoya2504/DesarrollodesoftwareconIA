import { defineMermaidSetup } from '@slidev/types'
export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    darkMode: false,
    background: '#ffffff',
    primaryColor: '#eef7fb',
    primaryTextColor: '#26343d',
    primaryBorderColor: '#2b90b6',
    lineColor: '#7c65a8',
    secondaryColor: '#f5f1fa',
    tertiaryColor: '#f3f8f7',
    fontFamily: 'Avenir Next, Segoe UI, sans-serif',
    fontSize: '24px',
  },
  flowchart: { htmlLabels: false, curve: 'linear', padding: 8, nodeSpacing: 24, rankSpacing: 12, wrappingWidth: 400 },
}))
