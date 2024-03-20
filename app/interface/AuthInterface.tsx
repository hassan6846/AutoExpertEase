// Define RootState interface
export interface RootState {
    auth: {
      loading: boolean;
      isAlreadyRegisted: boolean;
      userToken: string | null;
      userinfo: any; // Adjust this type as needed
      AlreadyVisitedApp: boolean;
      Progress: number;
      RefreshTokenTime: number;
      LoginEnded:false, //state for color to use
    };

  }
  