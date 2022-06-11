const core = require('@actions/core');
const github = require('@actions/github');

try {
    const payload = JSON.stringify(github.context.payload, undefined, 2);

    // Get contextual information
    const repositoryFullName = github.context.payload.repository.full_name;
    const commitHash = github.context.sha;
    const workflowIdToTrigger = core.getInput('trigger-workflow');
    const webhookUrl = core.getInput('notification-webhook-url');

    console.log(`Triggering workflow ${workflowIdToTrigger} for ${repositoryFullName} with commit hash ${commitHash}`);

    const webhookPayload = {
        text: 'Hello world!'
    }
    axios.post(webhookUrl, webhookPayload)
        .then(response => console.log(`Webhook response: ${response}`))
        .catch(error => console.error('There was an error ', error));
} catch (error) {
    core.setFailed(error.message);
}
