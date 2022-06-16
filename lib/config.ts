const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  sgApiKey: getEnvironmentVariable('SENDGRID_API_KEY'),
  emailTo: getEnvironmentVariable('EMAIL_TO'),
  emailFrom: getEnvironmentVariable('EMAIL_FROM'),
  demoSGKey: getEnvironmentVariable('DEMO_SENDGRID_API_KEY'),
};
