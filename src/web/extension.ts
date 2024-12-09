import * as vscode from 'vscode';
import { promisify } from 'util';

// Dummy callback-based function
function dummyCallbackFunction(value: string, callback: (err: Error | null, result: string) => void) {
    if (!value) {
        return callback(new Error('Invalid value'), '');
    }
    callback(null, `Processed: ${value}`);
}

// Convert the callback-based function to a promise-based one using util.promisify
const dummyPromiseFunction = promisify(dummyCallbackFunction);

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloworld" is now active!');

	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', async () => {
        try {
            const result = await dummyPromiseFunction('util.promisify is cool');
            vscode.window.showInformationMessage(result);
        } catch (error) {
            vscode.window.showErrorMessage((error as Error).message);
        }
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}