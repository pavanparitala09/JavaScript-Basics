import axios from "axios";
import { create } from "zustand";

export const useAuth = create((set) => ({
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  error: null,
  login: async (userCredObj) => {
    try {
      //set loading true
      set({ loading: true, error: null });
      //male api call

      const res = await axios.post(
        "http://localhost:3000/common-api/login",
        userCredObj,
        { withCredentials: true },
      );
      console.log(userCredObj);

      console.log("res is:", res);

      //update state
      set({
        loading: false,
        isAuthenticated: true,
        currentUser: res.data.payload,
      });
    } catch (err) {
      console.log("err is");
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data.err,
      });
    }
  },
}));

export const useLogout = create((set) => ({
  logout: async () => {
    try { 
        await axios.post(
          "http://localhost:3000/common-api/logout",
          { withCredentials: true }
        );
        set({
          currentUser: null,
          isAuthenticated: false,
        });
      } catch (err) {
        console.log("err is", err);
      }
    }
  }
));

// restore login
  checkAuth: async (set) => {
    try {
      set({ loading: true });
      const res = await axios.get("http://localhost:4000/common-api/check-auth", { withCredentials: true });

      set({
        currentUser: res.data.payload,
        isAuthenticated: true,
        loading: false,
      });
    } catch (err) {
      // If user is not logged in → do nothing
      if (err.response?.status === 401) {
        set({
          currentUser: null,
          isAuthenticated: false,
          loading: false,
        });
        return;
      }

      // other errors
      console.error("Auth check failed:", err);
      set({ loading: false });
    }
  }

