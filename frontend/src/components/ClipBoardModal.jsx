import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ClipBoardModal() {
  const [contentType, setContentType] = useState("text");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); 

  const handleContentTypeChange = (e) => {
    setContentType(e.target.value);
    setValue("type", e.target.value); // Update form data when content type changes
  };

  const handleClose = () => {
    handleSubmit(onSubmit)();
    const modal = document.getElementById("my_modal_2");
    modal.close();
    console.log("I am here...");
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/clipboard",
        data
      );
      console.log("Response:", response.data);
      navigate(0);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <form
          id="clipboardForm"
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {contentType === "text" || contentType === "code" ? (
            <textarea
              {...register("clipBoardContent", { required: true })}
              className="textarea textarea-bordered"
              rows={6}
              placeholder="Text / Code"
            ></textarea>
          ) : contentType === "file" ? (
            <input
              {...register("clipBoardContent", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          ) : null}

          {errors.clipBoardContent && (
            <p className="text-red-500">ClipBoard content is required</p>
          )}

          <select
            {...register("type", { required: true })}
            className="select select-bordered w-full max-w-xs"
            value={contentType}
            onChange={handleContentTypeChange}
          >
            <option value="text">Text</option>
            <option value="code">Code</option>
            <option value="file">File</option>
          </select>

          <button type="submit" className="hidden">
            Submit
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" form="clipboardForm" onClick={handleClose}>
          Close
        </button>
      </form>
    </dialog>
  );
}
