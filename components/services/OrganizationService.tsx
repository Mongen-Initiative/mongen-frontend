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

  setOrganizationStatus(data: {status: string}, org_id: number) {

    return coreService.patch(`/api/v1/set_organization_status/${org_id}`, data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }
}

export default new OrganizationService();
