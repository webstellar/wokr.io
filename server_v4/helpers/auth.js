let authorized = true;

export function authCheck(req, res, next = (f) => f) {
  if (!req.headers.authtoken) throw new Error("Unauthorized");

  //token validity check

  const valid = req.headers.authtoken === "secret";

  if (!valid) {
    throw new Error("Unauthorized");
  } else {
    next();
  }
}
