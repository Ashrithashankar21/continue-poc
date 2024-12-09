import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloworld" is now active!');

	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', async () => {
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}