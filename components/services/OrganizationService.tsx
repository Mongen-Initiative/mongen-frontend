import coreService from "../../common/coreService";


class OrganizationService {
  create(data) {

    return coreService.post("/api/v1/organization/", data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }

  update(data) {

    return coreService.patch(`/api/v1/organization/1`, data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }

  setVerifiedStatus(data: {verified: boolean}, org_id: number) {

    return coreService.patch(`/api/v1/set_organization_verified/${org_id}`, data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }
}

export default new OrganizationService();
