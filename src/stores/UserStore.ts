import { defineStore } from "pinia";
import { Response, User } from "@/types";
export const useUserStore = defineStore("UserStore", {
  state: () => ({
    response: [] as Response[],
    loading: false,
    modal: false,
    filter: "",
    favUsers: [] as [],
    pagination: {
      sortBy: "last_name",
      descending: false,
      page: 0,
      rowsPerPage: 0,
      rowsNumber: 0,
    },
    user: [] as User[],
  }),
  actions: {
    async fetchUsers(page: number) {
      this.resposne = [];
      this.loading = true;
      try {
        this.response = await fetch(
          "https://reqres.in/api/users?page=" + page
        ).then((response) => response.json());
      } catch (error) {
        console.error("There was an error!", error);
      } finally {
        this.pagination.page = this.response.page;
        this.pagination.rowsPerPage = this.response.per_page;
        this.pagination.rowsNumber = this.response.total;
        this.loading = false;
      }
    },
    async fetchUser(id: number) {
      this.user = [];
      this.loading = true;
      try {
        this.user = await fetch("https://reqres.in/api/users/" + id).then(
          (response) => response.json()
        );
        this.user = this.user.data;
      } catch (error) {
        console.error("There was an error!", error);
      } finally {
        this.loading = false;
      }
    },
    getFavUsers() {
      let arr = this.favUsers;
      if (!window.localStorage.getItem("favUsers") === null) {
        arr = window.localStorage.getItem("favUsers");
        this.favUsers = JSON.parse(arr);
      }

    },
    favUser(id: number) {
      let arr = this.favUsers;
      if (!arr) {
        arr = [];
      }
      if (!arr.includes(id)) {
        arr.push(id);
      } else {
        arr.splice(arr.indexOf(id), 1);
      }
      window.localStorage.setItem("favUsers", JSON.stringify(arr));
    },
  },
  getters: {
    filteredClients(state) {
      const result = state.response.data.filter((user) => {
        return (
          user.last_name.toLowerCase().indexOf(state.filter.toLowerCase()) > -1
        );
      });
      return result;
    },
  },
});
