import express from 'express';
import { envs } from './config';
import { GithubController } from './presentation/github/controller';
(() => {
    main();
})();
async function main() {
    const app = express();
    // const service= new GithubService()
    const controller = new GithubController();
    app.use(express.json());
    app.post('/api/github', controller.webhookHandler);
    app.listen(envs.PORT, () => {
        console.log(`Server listening on port ${envs.PORT}`);
    });
}
