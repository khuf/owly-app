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

export const onceGetMyCourses = uid =>
  db
    .collection("users")
    .doc(uid)
    .get()
    .then(snapshot => {
      snapshot.data().courses.forEach(element => {
        console.log(element.get().then(p => console.log(p.data().courseName)));
      });
      console.log(
        Array.isArray(snapshot.data().courses) +
          " \nObject: " +
          snapshot.data().courses
      );
    });

export const getMyCourses = uid =>
  db
    .collection("users")
    .doc(uid)
    .get();

export const onceGetCourses = () => db.collection("courses").get();

// Other Entity APIs ...
