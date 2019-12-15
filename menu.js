const { Menu, dialog, shell } = require('electron');
const fs = require('fs');

// The menu items

const onMac = process.platform === 'darwin';
const productionBuild = process.env.NODE_ENV === 'production';

function buildMenuTemplate(app, store, mainWindow) {
    const template = [
        {
            label: '<APPLICATION>',

            submenu: [
                {
                    label: 'Quit',
                    accelerator: onMac ? 'Command+Q' : 'Ctrl+Q',

                    click() { app.quit(); }
                }
            ]
        },
        {
            label: 'File',

            submenu: [
                {
                    label: 'Open...',
                    accelerator: onMac ? 'Command+O' : 'Ctrl+O',

                    click() { selectFolder(app, store, mainWindow); }
                },
                {
                    label: 'Save',
                    accelerator: onMac ? 'Command+S' : 'Ctrl+S',

                    click() { saveItem(mainWindow); }
                },
                // {
                //     label: 'Open Recent',
                //     id: 'FileOpenRecent',
                //
                //     submenu: recentProjectItems
                // }
            ]
        },
        // {
        //     label: "Edit",
        //     submenu: [
        //         {
        //             label: "Undo",
        //             accelerator: "CmdOrCtrl+Z",
        //             selector: "undo:"
        //         },
        //         {
        //             label: "Redo",
        //             accelerator: "Shift+CmdOrCtrl+Z",
        //             selector: "redo:"
        //         },
        //         {
        //             type: "separator"
        //         },
        //         {
        //             label: "Cut",
        //             accelerator: "CmdOrCtrl+X",
        //             selector: "cut:"
        //         },
        //         {
        //             label: "Copy",
        //             accelerator: "CmdOrCtrl+C",
        //             selector: "copy:"
        //         },
        //         {
        //             label: "Paste",
        //             accelerator: "CmdOrCtrl+V",
        //             selector: "paste:"
        //         },
        //         {
        //             label: "Select All",
        //             accelerator: "CmdOrCtrl+A",
        //             selector: "selectAll:"
        //         }
        //     ]
        // },
        // {
        //     label: 'View',
        //
        //     submenu: [
        //         {
        //             label: 'Data',
        //             id: 'spec-editor',
        //             type: 'checkbox',
        //             checked: visibleViews.visible('data'),
        //
        //             click() { toggleDataEditor(); }
        //         },
        //         {
        //             label: 'Spec',
        //             id: 'transform-editor',
        //             type: 'checkbox',
        //             checked: visibleViews.visible('spec'),
        //
        //             click() { toggleSpecEditor(); }
        //         },
        //         {
        //             label: 'Transform',
        //             id: 'transform-editor',
        //             type: 'checkbox',
        //             checked: visibleViews.visible('transform'),
        //
        //             click() { toggleTransformEditor(); }
        //         }
        //     ]
        // },
        // {
        //     label: 'Help',
        //
        //     submenu: [
        //         {
        //             label: 'Writing Bollywood specs',
        //
        //             click() { showBollywoodHelpPage(); }
        //         },
        //         {
        //             label: 'Bollywood AE Projects',
        //
        //             click() { showBollywoodAEHelpPage(); }
        //         }
        //     ]
        // }
    ];

    if (!productionBuild) {
        template.push({
                label: 'Dev Tools',

                submenu: [
                    {
                        label: 'Open Dev Tools',
                        accelerator: onMac ? 'Command+Option+I' : 'Ctrl+Alt+I',

                        click() { mainWindow.openDevTools({mode: 'detach'}); }
                    }
                ]
            }
        );
    }

    function reloadMenu() {
        const menu = buildMenu(app, store, mainWindow, visibleViews);

        Menu.setApplicationMenu(menu);
    }

    function updateWindowSize(width, height) {
        mainWindow.setSize(width, height);
    }

    return template;
}

function selectFolder(app, store, mainWindow) {
    const properties = ['openDirectory'];
    const filters = [{ name: '<ITEMS>', extensions: ['js', 'html', 'scss'] }];
    const options = { properties, filters };

    dialog.showOpenDialog(options)
        .then(selectedPaths => {
            console.log('selectedPaths =', selectedPaths);

            if (selectedPaths) {
                const path = selectedPaths.filePaths[0];

                openItem(app, store, mainWindow, path);
            } else {
                console.log(`You didn't choose a file!`);
            }
        })
}

function selectFile(app, store, mainWindow) {
    const properties = ['openFile', 'openDirectory'];
    const filters = [{ name: '<ITEMS>', extensions: ['js', 'html', 'scss'] }];
    const options = { properties, filters };

    dialog.showOpenDialog(options)
        .then(selectedPaths => {
            console.log('selectedPaths =', selectedPaths);

            if (selectedPaths) {
                const path = selectedPaths.filePaths[0];

                openItem(app, store, mainWindow, path);
            } else {
                console.log(`You didn't choose a file!`);
            }
        })
}

function saveItem() {

}

function openItem(app, store, mainWindow, path) {
    const message = `Path to chosen item is ${path}`;

    console.error(message);
}

function showHelpPage() {
    const url = 'https://mathletics.atlassian.net/wiki/spaces/...';

    shell.openExternal(url)
}

function buildMenu(app, store, mainWindow, visibleViews) {
    return Menu.buildFromTemplate(buildMenuTemplate(app, store, mainWindow, visibleViews));
}

module.exports = {
    buildMenu(app, store, mainWindow, visibleViews) { return buildMenu(app, store, mainWindow, visibleViews); }
};


