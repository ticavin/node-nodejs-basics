export const parseEnv = () => {
  const rVar = Object.entries(process.env).reduce((acc, [key, value]) => {
    if (key.startsWith('RSS_')) acc.push(`${key}=${value}`);
    return acc;
  }, []);
  console.log(rVar.join('; '));
};
parseEnv();