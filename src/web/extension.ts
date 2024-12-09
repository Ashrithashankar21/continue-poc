//Solution 1

// import * as vscode from 'vscode';
// import axios from 'axios';

// export function activate(context: vscode.ExtensionContext) {
// 	console.log('Congratulations, your extension "helloworld" is now active!');

// 	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', async () => {
// 		const data = axios.get("http://localhost:3000/search");
//         vscode.window.showInformationMessage(`Found matches in: ${data}`);
// 	});

// 	context.subscriptions.push(disposable);
// }

// export function deactivate() {}


//Solution 2
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "helloworld" is now active!');

    const disposable = vscode.commands.registerCommand('helloworld.helloWorld', async () => {
        const pattern = "**/*";
        const searchTerm = "abc";
        const files = await vscode.workspace.findFiles(pattern);
        let matchedFiles: string[] = [];
        
        for (const file of files) {
            try {
            const document = await vscode.workspace.openTextDocument(file);
            const text = document.getText();
            if (text.includes(searchTerm)) {
                matchedFiles.push(file.fsPath);
            }
            } catch (error) {
                continue;
        }
        }

        if (matchedFiles.length > 0) {
            vscode.window.showInformationMessage(`Found matches in: ${matchedFiles.join(', ')}`);
        } else {
            vscode.window.showInformationMessage("No matches found");
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}


