const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

try {
    const payload = JSON.stringify(github.context.payload, undefined, 2);

    // Get contextual information
    const repositoryFullName = github.context.payload.repository.full_name;
    const commitHash = github.context.sha;
    const workflowIdToTrigger = core.getInput('trigger-workflow');
    const webhookUrl = core.getInput('notification-webhook-url');
    const gitHubActionsApprovalApiUrl = core.getInput('github-actions-approval-api-url');

    console.log(`Triggering workflow ${workflowIdToTrigger} for ${repositoryFullName} with commit hash ${commitHash}`);

    const webhookPayload = {
        repositoryFullName,
        commitHash,
        workflowIdToTrigger,
        webhookUrl
    }
    axios.post(`${gitHubActionsApprovalApiUrl}/api/approval`, webhookPayload)
        .then(response => console.log(`Webhook responded with a ${response.status} response`))
        .catch(error => console.error('There was an error ', error));
} catch (error) {
    core.setFailed(error.message);
}
