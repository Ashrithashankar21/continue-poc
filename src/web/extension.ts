import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloworld" is now active!');

	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', async () => {
        const start = Date.now();
        const userAgent = navigator.userAgent;
        vscode.window.showInformationMessage(`User Agent: ${userAgent}`);
        const end = Date.now();
        console.log(`Command execution time: ${end - start} milliseconds`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
