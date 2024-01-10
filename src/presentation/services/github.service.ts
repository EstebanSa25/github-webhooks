import { GitHubIssuePayload, GitHubStarPayload } from '../../interfaces';

export class GitHubService {
    onStar(payload: GitHubStarPayload): string {
        const { action, sender, repository, starred_at } = payload;
        return `User ${sender.login} ${action} star on ${repository.full_name}`;
    }
    onIssue(payload: GitHubIssuePayload): string {
        const { action, issue } = payload;
        if (action === 'opened') {
            return `An issue was opened on ${issue.html_url} with title ${issue.title}`;
        }
        if (action === 'closed') {
            return `An issue was close by ${issue.user.login}`;
        }
        if (action === 'reopened') {
            return `An issue was reopened by ${issue.user.login}`;
        }
        return `Unknown action ${action}`;
    }
}
