import http from "../../common/http";


class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/api/v1/send_file/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFile(file_id) {
    return http.get(`/api/v1/get_file/${file_id}`);
  }
}

export default new UploadFilesService();
