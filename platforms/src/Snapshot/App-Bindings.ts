/* eslint-disable */
import { AppContext, Platform, PlatformOptions, ProviderPayload } from "../types";

export class SnapshotPlatform implements Platform {
  platformId = "Snapshot";
  path = "Snapshot";
  isEVM = true;

  async getProviderPayload(appContext: AppContext): Promise<ProviderPayload> {
    const result = await Promise.resolve({});
    return result;
  }
}
