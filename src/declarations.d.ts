declare module 'install-packages' {
  export interface Options {
    packages?: string[];
    cwd?: string[];
    installPeers?: boolean;
    peerFilter?: (name: string, version: string) => boolean;
    saveDev?: boolean;
    packageManager?: 'npm' | 'yarn';
  }

  interface Install {
    (options?: Options): Promise<void>;
    determinePackageManager(cwd: string): string;
  }

  const install: Install;

  export default install;
}
