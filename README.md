# invites

[![JSR](https://jsr.io/badges/@fartlabs/invites)](https://jsr.io/@fartlabs/invites)
[![JSR Score](https://jsr.io/badges/@fartlabs/invites/score)](https://jsr.io/@fartlabs/invites)

Standalone API, SDK, and web console for managing invite codes.

## Private betas

This software is intended for private beta access to SaaS.

Running a private beta with a controlled, trusted group helps you validate your
idea and surface early bug reports before going viral. By limiting access, you
can ensure a higher quality experience for your initial users and iterate
quickly based on direct feedback.

## Develop

### Prerequisites

[Install Deno](https://docs.deno.com/runtime/getting_started/installation/) on
your system.

### Tasks

Run the following commands to develop:

- `deno task start`: Start the API server and admin console.
- `deno task test`: Run the tests.

## Usage

### Admin console

The admin console is hosted directly by the API server. You can access it by
navigating to your API's root URL (e.g., `http://localhost:8000/v1/invites`) in
a web browser. The server will detect your browser's request for HTML and serve
the console.

![Invites Console Screenshot](screenshot.png)

### Deployment

This project is designed to be multi-instance. To deploy your own instance of
the invites API:

1. **Fork the repository**: Create a new repository by forking this one. Name it
   based on your project (e.g., `my-project-invites`).
2. **Create a Deno Deploy project**: Go to the
   [Deno Deploy console](https://console.deno.com/), create a new project, and
   provision a Deno KV database, and connect it to your project.
3. **Deploy**: Connect your forked repository to the new Deno Deploy project.
   Deno Deploy will automatically deploy the API for you.

> [!TIP]
> You can set an `API_KEY` environment variable in the Deno Deploy console to
> protect your API. If set, all requests must include an `X-Api-Key` header with
> the corresponding value.

### SDK

You can use the SDK to interact with your invites API.

```typescript
import { InvitesSdk } from "@fartlabs/invites/sdk";

const sdk = new InvitesSdk({
  baseUrl: "https://my-project-invites.deno.dev",
  apiKey: "optional-api-key", // Include this if API_KEY is set on the server.
});

// Create a new invite with a custom ID.
const invite = await sdk.create({
  alphabet: "1234567890abcdef",
  size: 10,
});
console.log(invite); // e.g., { code: "4f90d13a42", ... }

// List invites.
const { items } = await sdk.list();
console.log(items);
```

---

Developed with 💖 [**@FartLabs**](https://github.com/FartLabs)
