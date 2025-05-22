// components/ProofUploadForm.tsx
import { useState } from "react";

export default function ProofUploadForm() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [allowVerification, setAllowVerification] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log({ title, tags, body, allowVerification });
  };

  const handleCancel = () => {
    //TODO add redirect to community page
  }

  return (
    <div className="w-full p-5 space-y-5">
      <h1 className="text-3xl font-bold text-gray-800">Upload Proof of Practice</h1>
      <div className="mt-7"></div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="add title here..."
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Tags</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="add tags here..."
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Body</label>
        <textarea
          rows={5}
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write about what you practiced today..."
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Proof Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-2 max-h-60 object-contain rounded-xl border border-gray-200"
          />
        )}
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="allowVerification"
          type="checkbox"
          checked={allowVerification}
          onChange={() => setAllowVerification(!allowVerification)}
          className="h-4 w-4 text-black border-gray-300 rounded focus:black"
        />
        <label htmlFor="allowVerification" className="text-sm text-gray-700">
          Let other users verify your proof
        </label>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-black text-white rounded-xl font-semibold focus:ring-white-500"
        >
          Confirm
        </button>
        <button
          onClick={handleCancel}
          className="w-full py-3 bg-white text-black rounded-xl border"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
