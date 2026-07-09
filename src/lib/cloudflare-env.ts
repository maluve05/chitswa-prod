let globalEnv: any = null;

export function setCloudflareEnv(env: any) {
  globalEnv = env;
}

export function getCloudflareEnv(): any {
  return globalEnv;
}
