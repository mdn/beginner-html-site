name: Claude with Custom App
on:
  issue_comment:
    types: [created]
  # ... other triggers

jobs:
  claude-response:
    runs-on: ubuntu-latest
    steps:
      # Generate a token from your custom app
      - name: Generate GitHub App token
        id: app-token
        uses: actions/create-github-app-token@v1
        with:
          app-id: ${{ secrets.APP_ID }}
          private-key: ${{ secrets.APP_PRIVATE_KEY }}

      # Use Claude with your custom app's token
      - uses: anthropics/claude-code-action@beta
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          github_token: ${{ steps.app-token.outputs.token }}
          # ... other configuration
