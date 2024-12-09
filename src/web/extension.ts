import * as vscode from 'vscode';
import * as os from 'os';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloworld" is now active!');

	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', async () => {
        const platform = os.platform();
        const architecture = os.arch();
        vscode.window.showInformationMessage(`Platform: ${platform}, Architecture: ${architecture}`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
