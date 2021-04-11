import coreService from "../../common/coreService";


class DonorService {
  create(data) {

    return coreService.post("/api/v1/donor/", data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }

  update(id, data) {

    return coreService.patch(`/api/v1/donor/${id}`, data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }
}

export default new DonorService();
