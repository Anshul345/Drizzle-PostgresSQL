import { db } from "./src/db.js";
import { users } from "./src/schema.js";
import {
  eq,
  and,
  or,
  like,
  inArray,
  between,
  desc,
  asc,
  count,
  sum,
  avg,
  min,
  max,
  gt
} from "drizzle-orm";

async function main() {

  //  // INSERT
  //   await db.insert(users).values(
  //   { name: "Anshul", email: "anshul@gmail.com", salary: 3500 },
  //   { name: "Rohit",  email: "rohit@gmail.com",  salary: 4000 },
  //   { name: "Amit",   email: "amit@gmail.com",   salary: 2800 },
  //   { name: "Neha",   email: "neha@gmail.com",   salary: 3200 },
  //   { name: "Priya",  email: "priya@gmail.com",  salary: 4500 },
  //   { name: "Suresh", email: "suresh@gmail.com", salary: 5000 },
  //   { name: "Kiran",  email: "kiran@gmail.com",  salary: 2600 },
  //   { name: "Pooja",  email: "pooja@gmail.com",  salary: 3900 },
  //   { name: "Vikas",  email: "vikas@gmail.com",  salary: 3100 },
  //   );

  // console.log("✅ 10 users inserted successfully");

  // // SELECT
  // const result = await db.select().from(users);
  // console.log(result);

  /* ============================
     UPDATE
     ============================ */
  // await db
  //   .update(users)
  //   .set({ name: 'Rohit Sharma' })
  //   .where(eq(users.id, 1));

  // console.log('UPDATE: Name updated for id = 1');

  // /* ============================
  //    DELETE
  //    ============================ */
  // await db
  //   .delete(users)
  //   .where(eq(users.id, 2));

  // console.log('DELETE: Record deleted for id = 2');

  // /* ============================
  //    WHERE
  //    ============================ */
  // const userById = await db
  //   .select()
  //   .from(users)
  //   .where(eq(users.id, 1));

  // console.log('WHERE id = 1:', userById);

  // /* ============================
  //    AND
  //    ============================ */
  // const andCondition = await db
  //   .select()
  //   .from(users)
  //   .where(
  //     and(
  //       eq(users.name, 'Rohit'),
  //       eq(users.id, 1)
  //     )
  //   );

  // console.log('AND condition:', andCondition);

  // /* ============================
  //    OR
  //    ============================ */
  // const orCondition = await db
  //   .select()
  //   .from(users)
  //   .where(
  //     or(
  //       eq(users.id, 1),
  //       eq(users.id, 2)
  //     )
  //   );

  // console.log('OR condition:', orCondition);

  // /* ============================
  //    LIKE
  //    ============================ */
  // const likeQuery = await db
  //   .select()
  //   .from(users)
  //   .where(like(users.name, '%hit%'));

  // console.log('LIKE query:', likeQuery);

  // /* ============================
  //    IN
  //    ============================ */
  // const inQuery = await db
  //   .select()
  //   .from(users)
  //   .where(inArray(users.id, [1, 2, 3]));

  // console.log('IN query:', inQuery);

  // /* ============================
  //    BETWEEN
  //    ============================ */
  // const betweenQuery = await db
  //   .select()
  //   .from(users)
  //   .where(between(users.id, 1, 5));

  // console.log('BETWEEN query:', betweenQuery);

  // /* ============================
  //    ORDER BY ASC
  //    ============================ */
  // const orderAsc = await db
  //   .select()
  //   .from(users)
  //   .orderBy(asc(users.id));

  // console.log('ORDER BY ASC:', orderAsc);

  // /* ============================
  //    ORDER BY DESC
  //    ============================ */
  // const orderDesc = await db
  //   .select()
  //   .from(users)
  //   .orderBy(desc(users.id));

  // console.log('ORDER BY DESC:', orderDesc);

  // /* ============================
  //    LIMIT
  //    ============================ */
  // const limitedUsers = await db
  //   .select()
  //   .from(users)
  //   .limit(2);

  // console.log('LIMIT 2:', limitedUsers);

  // /* ============================
  //    DISTINCT
  //    ============================ */
  // const distinctEmails = await db
  //   .selectDistinct({ email: users.email })
  //   .from(users);

  // console.log('DISTINCT emails:', distinctEmails);

  // /* ============================
  //    INNER JOIN (Users + Posts)
  //    ============================ */
  // const innerJoinData = await db
  //   .select({
  //     userName: users.name,
  //     postTitle: posts.title,
  //   })
  //   .from(users)
  //   .innerJoin(posts, eq(users.id, posts.userId));

  // console.log('INNER JOIN:', innerJoinData);

  //  /* ============================
  //    LEFT JOIN
  //    ============================ */
  // const leftJoinData = await db
  //   .select({
  //     userName: users.name,
  //     postTitle: posts.title,
  //   })
  //   .from(users)
  //   .leftJoin(posts, eq(users.id, posts.userId));

  // console.log('LEFT JOIN:', leftJoinData);

  // /* ============================
  //    RIGHT JOIN
  //    ============================ */
  // const rightJoinData = await db
  //   .select({
  //     userName: users.name,
  //     postTitle: posts.title,
  //   })
  //   .from(users)
  //   .rightJoin(posts, eq(users.id, posts.userId));

  // console.log('RIGHT JOIN:', rightJoinData);

   /** SUM  */

// const totalUsers = await db
//   .select({ total: count() })
//   .from(users);

// console.log("COUNT (total users):", totalUsers);

  /** AVG  */  

  const avgUserId = await db
  .select({ averageId: avg(users.id)})
  .from(users);

 console.log("AVG (average user id", avgUserId);

 /** MIN/MAX */

  const minmaxUserId = await db
    .select({
     minAge: min(users.id),
     maxAge: max(users.id),
   })
    .from(users);

  console.log("MIN/MAX (minimum/maximum user id", minmaxUserId);

 /** GROUP BY Name */ 

 const groupByName = await db
   .select({
    name: users.name,
     totalUsers: count(),
   })
   .from(users)
   .groupBy(users.name);

 console.log("GROUP BY name:", groupByName);   

 /** HAVING */

 const havingData = await db
   .select({
     name: users.name,
     totalUsers: count(),
   })
   .from(users)
   .groupBy(users.name)
   .having(gt(count(), 1));

 console.log("HAVING:", havingData);

 /** FINAL COMBINED */

const finalQuery = await db
   .select({
     name: users.name,
     avgUserId: avg(users.id),
  })
   .from(users)
   .where(gt(users.id, 18))
   .groupBy(users.name)
   .having(gt(avg(users.id), 25));

 console.log("FINAL QUERY:", finalQuery);

}

main();