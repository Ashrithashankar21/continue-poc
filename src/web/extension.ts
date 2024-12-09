import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloworld" is now active!');
	console.log(context.extensionUri,'1');
	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {

        // Use the Web Worker API to create a new worker
        const worker = new Worker('./worker.js');		
		worker.onmessage = (event) => {
			console.log("Message from worker:", event.data);
		};


		worker.postMessage("Hello from main thread");
		vscode.window.showInformationMessage('Hello Worker thread!!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
