const core = require('@actions/core');
const github = require('@actions/github');

try {
    const payload = JSON.stringify(github.context.payload, undefined, 2);

    // Get contextual information
    const repositoryFullName = github.context.payload.repository.full_name;
    const commitHash = github.context.sha;
    const workflowIdToTrigger = core.getInput('trigger-workflow');
    console.log(`Trugger workflow ${workflowIdToTrigger} for ${repositoryFullName} with commit hash ${commitHash}`);
} catch (error) {
    core.setFailed(error.message);
}
