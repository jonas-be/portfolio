# Portfolio

In this repository you can find the source code of [my portfolio website](https://jonasbe.de/).

## Technologies used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

## Deployment

The webiste runs in a Docker container.
The image is built and pushed to [Docker Hub](https://hub.docker.com/r/jonasbe25/portfolio) by a GitHub Action, when someone pushes to the `main` branch.

The images is then used to run the portolio in my kubernetes cluster.
