declare module 'custom-card-helpers' {
  export interface HomeAssistant {
    // Home Assistant interface
    states: any;
    callService: (domain: string, service: string, data?: any) => Promise<any>;
    // Add other Home Assistant methods as needed
  }

  export interface LovelaceCardConfig {
    type: string;
    [key: string]: any;
  }

  export interface LovelaceCardEditor {
    setConfig: (config: any) => void;
  }

  export interface LovelaceCard {
    setConfig: (config: any) => void;
  }
}

export interface LovelaceCard {
  setConfig: (config: any) => void;
}

export interface LovelaceCardEditor {
  setConfig: (config: any) => void;
}
