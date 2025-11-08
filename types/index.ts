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

export interface CompletedRide {
  id: number;
  date: string;
  time: string;
  vehicleType: string;
  from: string;
  to: string;
  price: number;
  co2Saved: number;
  status: string;
}

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Confirmation: { rideId: number };
  Profile: undefined;
};
