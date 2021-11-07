import {loadRemoteModule} from "./federation-utils";
import {Routes} from "@angular/router";
import {MicroAppConfig} from "../@config/microapp.config";

export function buildRoutes(routes: Routes, microAppConfigJson: any): Routes {

  const microAppConfig: MicroAppConfig[] = microAppConfigJson;
  const microAppRoutes: Routes = microAppConfig.map((app:any) => ({
    path: app.routePath,
    loadChildren: () => loadRemoteModule({
      remoteEntryUrl: app.remote.entryUrl,
      remoteName: app.remote.name,
      exposedModule: app.remote.exposedModule
    }).then((m) => m[app.remote.exposedModule])
  }));

  return [...routes, ...microAppRoutes];
}
