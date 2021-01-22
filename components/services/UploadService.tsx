import mediaService from "../../common/mediaService";


class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return mediaService.post("/api/v1/send_file/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFile(file_id) {
    return mediaService.get(`/api/v1/get_file/${file_id}`);
  }
}

export default new UploadFilesService();
