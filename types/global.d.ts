declare module 'vue' {
  export interface GlobalComponents {
    LBasicComponent: typeof import('leon-ui')['_BasicComponentComponent']
    LButton: typeof import('leon-ui')['_ButtonComponent']
  }
}

export {}
