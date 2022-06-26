# GitHub Actions Approval Request

Request manual approval for triggering a workflow via Microsoft Teams.

This action works with a lightweight API hosted as an Azure Function: [github-actions-approval-api](https://github.com/jamesridgway/github-actions-approval-api).

![](https://www.jamesridgway.co.uk/content/images/2022/06/microsoft-teams-adaptive-card-requesting-deploy-approval-1.jpg)

## Example Usage & Configuration

Add the step as follows to your workflow

```
- uses: jamesridgway/github-actions-approval-request@main
  with:
    trigger-workflow: 112233445566
    notification-webhook-url: ${{ secrets.WEBHOOK_URL }}
    github-actions-approval-api-url: ${{secrets.ACTIONS_APPROVAL_API_URL}} 
    github-actions-approval-api-key: ${{secrets.ACTIONS_APPROVAL_API_KEY}} 
```

| Input                             | Description                                                                |
| --------------------------------- | -------------------------------------------------------------------------- |
| `trigger-workflow`                | The ID of the workflow to trigger (the workflow that needs to be approved) |
| `notification-webhook-url`        | Notification Webhook URL for Microsoft Teams                               |
| `github-actions-approval-api-url` | URL for you instance of [github-actions-approval-api](https://github.com/jamesridgway/github-actions-approval-api) |
| `github-actions-approval-api-key` | API key for your approval API instance |



## How does this work?
For a detailed explanation of how this works checkout this blog post:

* Approving Builds and Workflows with GitHub Actions and Microsoft Teams

Alternatively, see the diagram below for a summary:

![](https://www.jamesridgway.co.uk/content/images/2022/06/manual-approval-workflow-using-github-actions-microsoft-teams-and-azure-functions-5.jpg)
