// import jwt from "jsonwebtoken";
// import { createError } from "../utils/error.js";

// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) {
//     return next(createError(401, "You are not authenticated!"));
//   }

//   jwt.verify(token, process.env.JWT, (err, user) => {
//     if (err) return next(createError(403, "Token is not valid!"));
//     req.user = user;
//     next();
//   });
// };

// //export const verifyToken = (req, res, next) => {
// //   const authHeader = req.headers.authorization;
// //   const token = authHeader?.split(" ")[1] || req.cookies.access_token;

// //     console.log("Auth Header:", authHeader);
// //   console.log("Extracted Token:", token);


// //   if (!token) {
// //     return next(createError(401, "You are not authenticated!"));
// //   }

// //   jwt.verify(token, process.env.JWT, (err, user) => {
// //     if (err) return next(createError(403, "Token is not valid!"));
// //     req.user = user;
// //     next();
// //   });
// // };

// export const verifyUser = (req, res, next) => {
//   verifyToken(req, res, next, () => {
//     if (req.user.id === req.params.id || req.user.isAdmin) {
//       next();
//     } else {
//       return next(createError(403, "You are not authorized!"));
//     }
//   });
// };

// export const verifyAdmin = (req, res, next) => {
//   verifyToken(req, res, next, () => {
//     if (req.user.isAdmin) {
//       next();
//     } else {
//       return next(createError(403, "You are not authorized!"));
//     }
//   });
// };

// // import jwt from "jsonwebtoken";
// // import { createError } from "../utils/error.js";

// // export const verifyToken = (req, res, next) => {
// //   const authHeader = req.headers.authorization;
// //   let token = authHeader?.split(" ")[1] || req.cookies.access_token;

// //   token = token?.trim().replace(/;$/, "");

// //   console.log("Auth Header:", authHeader);
// //   console.log("Cleaned Token:", token);

// //   if (!token) {
// //     return next(createError(401, "You are not authenticated!"));
// //   }

// //   jwt.verify(token, process.env.JWT, (err, user) => {
// //     if (err) {
// //       console.log("JWT Verification Error:", err.message);
// //       return next(createError(403, "Token is not valid!"));
// //     }
// //     req.user = user;
// //     next();
// //   });
// // };

// // export const verifyUser = (req, res, next) => {
// //   verifyToken(req, res, () => {
// //     if (req.user.id === req.params.id || req.user.isAdmin) {
// //       next();
// //     } else {
// //       return next(createError(403, "You are not authorized!"));
// //     }
// //   });
// // };

// // export const verifyAdmin = (req, res, next) => {
// //   verifyToken(req, res, () => {
// //     if (req.user.isAdmin) {
// //       next();
// //     } else {
// //       return next(createError(403, "You are not authorized!"));
// //     }
// //   });
// // };


import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

// Verify Token Middleware
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

// Verify User Middleware
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

// Verify Admin Middleware
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
