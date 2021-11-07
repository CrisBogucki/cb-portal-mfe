export interface MicroAppConfig {
  name: string;
  description: string;
  version: string;
  routePath: string;
  remote: MicroAppRouteConfig
}

export interface MicroAppRouteConfig {
  name: string;
  exposedModule: string;
  entryUrl: string;
}


