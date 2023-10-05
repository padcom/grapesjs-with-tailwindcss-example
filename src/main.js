import './main.css'

import grapesjs from 'grapesjs'

/**
 * @param {import("grapesjs").Editor} editor
 */
function example(editor) {
  editor.Blocks.add('example', {
    label: 'Example',
    activate: true,
    content: '<h1>Hello, world!</h1>',
  })
}

/**
 * @param {import("grapesjs").Editor} editor
 */
function openBlocksByDefault(editor) {
  editor.on('load', () => {
    editor.Panels.getButton('views', 'open-blocks').set('active', true)
  })
}

/**
 * @param {import("grapesjs").Editor} editor
 */
function showProjectData(editor) {
  // console.log(editor.Panels.getPanels().map(panel => panel.id))
  editor.Panels.addButton('options', {
    label: '!',
    command: () => {
      editor.Modal.open({
        title: 'Project data',
        content: `
          <pre style="max-height: 50vh; overflow: auto; color: #eee;">${
            JSON.stringify(editor.getProjectData(), null, 2)
          }</pre>
        `,
      })
    }
  })
}

grapesjs.init({
  container: '#gjs',
  height: '100vh',
  storageManager: false,
  plugins: [
    example,
    openBlocksByDefault,
    showProjectData
  ],
})
