import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // // insert
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //   },
  // })
  // console.log(user)

  // // fetch
  // const users = await prisma.user.findMany()
  // console.log(users)

  // // insert2
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Bob',
  //     email: 'bob@prisma.io',
  //     posts: {
  //       create: [
  //         {
  //           title: 'Hello World',
  //           published: true
  //         },
  //         {
  //           title: 'My second post',
  //           content: 'This is still a draft'
  //         }
  //       ],
  //     },
  //   },
  // })
  // console.log(user)

  // fetch2
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })