import coreService from "../../common/coreService";


class OrganizationService {
  upload(data) {

    return coreService.post("/api/v1/send_file/", data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }
}

export default new OrganizationService();
