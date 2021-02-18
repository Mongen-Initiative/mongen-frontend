import coreService from "../../common/coreService";


class CollaboratorsService {
  create(data) {
    return coreService.post("/api/v1/collaborators", data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }

  update(data) {
    return coreService.patch(`/api/v1/collaborators/1`, data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }

  delete(data) {
    return coreService.delete("/api/v1/collaborators/1", data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }
}

export default new CollaboratorsService();
