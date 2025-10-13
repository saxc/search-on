export interface Platform {
  label: string;
  url: string;
}

export interface PlatformsWiteSetting extends Platform {
    setting: string;
}