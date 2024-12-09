import * as vscode from 'vscode';
import * as os from 'os';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloworld" is now active!');

	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', async () => {
		const homeDir = os.homedir();
		const targetDir = path.join(homeDir, 'poc-fs');
		try {
			await vscode.workspace.fs.createDirectory(vscode.Uri.file(path.join(targetDir, 'data')));
			await vscode.workspace.fs.writeFile(
				vscode.Uri.file(path.join(targetDir, 'data.json')),
				new TextEncoder().encode(JSON.stringify(
				{
					name: "binary",
					version: "1.0.0",
					author: "Continue Dev, Inc",
					license: "Apache-2.0",
				}),
				),
		  	);
			vscode.window.showInformationMessage('File created successfully.');
		} catch (error) {
			vscode.window.showErrorMessage(`Error: ${(error as Error).message}`);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
