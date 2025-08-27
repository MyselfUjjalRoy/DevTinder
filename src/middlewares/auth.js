const adminAuth = (req, res, next) => {
  console.log("Admin Auth is getting checked");
  const token = 'xyz';
  const isAdminAuthorized = token === 'xyz';
  if (!isAdminAuthorized) {
    res.status(403).send("Unauthorized");
  } else {
    next();
  }
};


const userAuth = (req, res, next) => {
  console.log("User Auth is getting checked");
  const token = 'xyzabc';
  const isUserAuthorized = token === 'xyz';
  if (!isUserAuthorized) {
    res.status(403).send("Unauthorized");
  } else {
    next();
  }
};

module.exports = { adminAuth , userAuth };
