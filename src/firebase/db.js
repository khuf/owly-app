import { db, auth } from "./firebase";

// User API

export const doCreateUser = (id, username, email) =>
  db
    .collection("users")
    .doc(id)
    .set({
      username,
      email,
      courses: []
    });

export const onceGetUsers = () => db.ref("users").once("value");

export const onceGetMyCourses = uid => db.collection("users").doc(uid);

export const onceGetCourses = () => db.collection("courses").get();

// Other Entity APIs ...
