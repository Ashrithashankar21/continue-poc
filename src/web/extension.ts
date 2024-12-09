import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloworld" is now active!');

	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', async () => {
        const rootPath = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : '';
        const exampleFilePath = path.join(rootPath, 'example.txt');
        vscode.window.showInformationMessage(`Example file path: ${exampleFilePath}`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
