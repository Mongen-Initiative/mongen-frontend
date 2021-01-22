import coreService from "../../common/coreService";


class OrganizationService {
  create(data) {

    return coreService.post("/api/v1/organization/", data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }
}

export default new OrganizationService();
