# prisma-apollo-nexus
## Set up
- Prisma Client
  > `git https://github.com/sho-zy/prisma-apollo-nexus.git`  
  > `npm install`  
  > `docker-compose up -d`  
  > `prisma deploy`  

- Apollo App
  > `npm run start`  

## URLs
- Prisma Admin  
  http://localhost:4466/

- Apollo Admin  
  http://localhost:4000/

## Commands
- Update and deploy the Prisma Client & the Nexus Prisma.  
  ( execute when you changed `./prisma/datamodel.prisma` )  
  > `prisma deploy`

  after, you can use the Prisma Admin.

- Start the Apollo server. 
  > `npm run start`  

  after, you can use the Apollo Admin.

## Cases
- Case when you add tables.
  1. Add table definition to the following modules.  
   `./prisma/datamodel.prisma`  
  2. execute the following commands.  
        > `prisma deploy`  
  3. edit the resolver ( `./src/index.ts` ).  
  4. execute the following commands.  
        > `npm run start`  
