# ci_cd_workflow
Node.js Project to make a CI-CD Workflow using GitHub.

```mermaid
graph LR;
    subgraph CI
        Build --> Test;
    end
    subgraph CD
        Test --> Deploy;
    end
```