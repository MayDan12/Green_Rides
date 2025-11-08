export type Ride = {
  id: number;
  vehicleType: string;
  subtitle: string;
  eta: string;
  price: number;
  co2Saved: number;
  isRecommended: boolean;
  distance?: string;
  time?: string;
  capacity?: string;
};

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Confirmation: { rideId: number };
  Profile: undefined;
};
