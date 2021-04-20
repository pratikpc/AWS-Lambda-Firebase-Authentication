exports.lambdaHandler = async (event) => {
  try {
    // If an authenticated request is made to JWT
    // Which we expect is what will happen
    // So we simply return the claims
    const { jwt } = event.requestContext.authorizer;

    // Let us get the email from the claims
    // Note the email will not be available if Sign in via phone
    const { email } = jwt.claims;

    return {
      statusCode: 200,
      body: JSON.stringify({ jwt: jwt, email: email }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Please check logs" }),
    };
  }
};
