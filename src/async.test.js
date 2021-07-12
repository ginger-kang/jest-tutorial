const asyncTest = require("./async");

test("fetch a user", done => {
  asyncTest.fetchUser(1, user => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
    done();
  });
});

test("fetch a user using promise", () => {
  return asyncTest.usePromise(1).then(user => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });
});

test("fetch a user async/await", async () => {
  const user = await asyncTest.usePromise(2);
  expect(user).toEqual({
    id: 2,
    name: "User2",
    email: "2@test.com",
  });
});
