const core = require('@actions/core');
const github = require('@actions/github');

try {
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    const repositoryFullName = github.context.payload.repositoryFullName;
    const commitHash = github.context.sha;
    console.log(`The event payload for ${repositoryFullName} @ commit ${commitHash}: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}
