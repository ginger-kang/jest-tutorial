const user = require("./async");

test("fetch a user", done => {
  user.fetchUser(1, user => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
    done();
  });
});
