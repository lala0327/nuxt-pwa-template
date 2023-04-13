// import { Place } from "@/server/dbModels";

// interface IRequestBody {
//     name: string;
//     type: string;
//     text: string;
//     detail: string;
//     day: number;
//     index: number;
// }
// export default defineEventHandler(async (event) => {
//   console.log("POST /api/users");
//   const { name, type, text, detail, day, index } = await useBody<IRequestBody>(event);
//   try {
//     const userData = await Place.findOne({
//       email,
//     });
//     if (userData) {
//       console.log(`User with email ${email} already exists`);
//       event.res.statusCode = 409;
//       return {
//         code: "USER_EXISTS",
//         message: "User with given email already exists.",
//       };
//     } else {
//       console.log("Create user");
//       const newUserData = await users.create({
//           name,
//           type,
//           text,
//           detail,
//           day,
//           index
//       });
//       return {
//         id: newUserData._id,
//         name: newUserData.name,
//       };
//     }
//   } catch (err) {
//     console.dir(err);
//     event.res.statusCode = 500;
//     return {
//       code: "ERROR",
//       message: "Something wrong.",
//     };
//   }
// });