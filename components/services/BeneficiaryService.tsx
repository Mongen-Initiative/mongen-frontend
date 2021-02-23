import coreService from "../../common/coreService";


class BeneficiaryService {
  create(data) {
    return coreService.post("/api/v1/beneficiary/", data, {
      headers: {
        "Content-type": "application/json",
      }
    });
  }
}

export default new BeneficiaryService();
