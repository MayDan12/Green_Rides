import ridesData from "@/data/ride.json";
import type { Ride } from "@/types/index";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RideState {
  rides: Ride[];
  bookedRide: Ride | null;
  totalRides: number;
  totalCO2: number;
  ecoPoints: number;
  bookRide: (ride: Ride) => void;
  completeRide: () => void;
}

export const useRideStore = create<RideState>()(
  persist(
    (set) => ({
      rides: ridesData,
      bookedRide: null,
      totalRides: 0,
      totalCO2: 0,
      ecoPoints: 0,
      bookRide: (ride) => set({ bookedRide: ride }),
      completeRide: () =>
        set((s) => {
          if (!s.bookedRide) return s;
          const points = Math.round(s.bookedRide.co2Saved * 10);
          return {
            bookedRide: null,
            totalRides: s.totalRides + 1,
            totalCO2: s.totalCO2 + s.bookedRide.co2Saved,
            ecoPoints: s.ecoPoints + points,
          };
        }),
    }),
    { name: "greenride-storage" }
  )
);
