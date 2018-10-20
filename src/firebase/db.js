import { db } from "./firebase";

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email
  });

export const onceGetUsers = () => db.ref("users").once("value");

export const onceGetCourses = () =>
  db
    .collection("courses")
    .doc("INFO212")
    .collection("books")
    .get();

// Other Entity APIs ...
