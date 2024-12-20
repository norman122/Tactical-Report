##Next.JS

  Setup: npx create-next-app@latest
  To run: npm run dev
  To use the Spring Boot API: Axios was used

##Docker
  1- For Next.js
      Created Dockerfile
      Build: docker build -t nextjs .
      Run: docker run -p 3000:3000 nextjs

  2- To run the Next.js Docker container alongside the Spring Boot application
      Create a docker-compose.yml
      Run: docker-compose up

