import coreService from "../../common/coreService";


class MainContactService {
  create(data) {

    return coreService.post("/api/v1/main_contact/", data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }
}

export default new MainContactService();
