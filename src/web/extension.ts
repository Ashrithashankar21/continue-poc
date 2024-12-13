import * as vscode from 'vscode';
import * as process from 'process';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloworld" is now active!');

	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', async () => {
        const platform = process.platform;
        const architecture = process.arch;
        vscode.window.showInformationMessage(`Platform: ${platform}, Architecture: ${architecture}`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
