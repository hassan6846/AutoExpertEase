// Define RootState interface
export interface RootState {
    auth: {
      Auth:boolean,
      loading: boolean;
      isAlreadyRegisted: boolean;
      userToken: string | null;
      userinfo: any; // Adjust this type as needed
      AlreadyVisitedApp: boolean;
      Progress: number;
      RefreshTokenTime: number;
      HeaderColor:string, //state for color to use
    };

  }
  